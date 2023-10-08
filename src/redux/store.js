import { configureStore } from '@reduxjs/toolkit';
import currencyReducer from './currency/currencySlice';
import globalReducer from './slices/globalSlice';
import sessionReducer from './slices/sessionSlice';
import financeReducer from './slices/financeSlice';

const store = configureStore({
  reducer: {
    currency: currencyReducer,
    global: globalReducer,
    session: sessionReducer,
    finance: financeReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
