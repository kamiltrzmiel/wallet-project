import { configureStore } from '@reduxjs/toolkit';
import { currencyReducer } from './currency/currencySlice';

export const store = configureStore({
  reducer: {
    currency: currencyReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});
