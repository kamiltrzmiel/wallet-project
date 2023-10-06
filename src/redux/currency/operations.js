import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCurrency = createAsyncThunk(
  'currency/fetchAll',
  async (_, thunkAPI) => {
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

      return rates;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
