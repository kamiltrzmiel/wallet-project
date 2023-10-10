import { combineReducers, configureStore } from '@reduxjs/toolkit';
import currencyReducer from './currency/currencySlice';
import globalReducer from './slices/globalSlice';
import sessionReducer from './slices/sessionSlice';
import transactionsReducer from './slices/financeSlice';
import { persistReducer, persistStore } from 'redux-persist';
import { setDispatch } from 'utilities/authUtils';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  session: sessionReducer,
  global: globalReducer,
  finance: transactionsReducer,
  currency: currencyReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['session'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

setDispatch(store.dispatch);
export const persistor = persistStore(store);

export default store;
