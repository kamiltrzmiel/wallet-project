import { configureStore } from '@reduxjs/toolkit';
import currencyReducer from './currency/currencySlice';
import globalReducer from './slices/globalSlice';
import sessionReducer from './slices/sessionSlice';
import transactionsReducer from './slices/financeSlice';

export const store = configureStore({
  reducer: {
    currency: currencyReducer,
    global: globalReducer,
    session: sessionReducer,
    transactions: transactionsReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});
