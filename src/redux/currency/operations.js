import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCurrency = createAsyncThunk(
  'currency/fetchAll',
  async (_, thunkAPI) => {
    const savedRates = localStorage.getItem('savedRates');

    if (savedRates) {
      try {
        const savedRatesJSON = JSON.parse(savedRates);

        if (savedRatesJSON) {
          const savedTimestamp = new Date(savedRatesJSON.timestamp);
          const currentTimestamp = new Date();

          const timeDifference =
            currentTimestamp.getTime() - savedTimestamp.getTime();
          const oneHour = 3600000;

          if (timeDifference < oneHour) {
            return savedRatesJSON.rates;
          }
        }
      } catch (error) {
        console.error('There is something wrong with saved data');
      }
    } else {
      try {
        const response = await axios.get(
          'https://v6.exchangerate-api.com/v6/8278746a42b16c9d29c494c9/latest/USD'
        );
        const { USD, EUR, GBP, PLN } = response.data.conversion_rates;
        const actualRates = { USD, EUR, GBP, PLN };
        const baseCurrency = actualRates.USD;

        const rates = Object.entries(actualRates).map(([currency, rate]) => ({
          currency,
          purchase: rate.toFixed(2),
          sale: (baseCurrency / rate).toFixed(2),
        }));

        const ratesWithTimestamp = {
          rates: rates,
          timestamp: new Date().toISOString(),
        };

        localStorage.setItem('savedRates', JSON.stringify(ratesWithTimestamp));

        return rates;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);
