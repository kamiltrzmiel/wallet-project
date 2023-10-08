import { configureStore } from '@reduxjs/toolkit';
import { currencyReducer } from './currency/currencySlice';

const store = configureStore({
  reducer: {
    currency: currencyReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
