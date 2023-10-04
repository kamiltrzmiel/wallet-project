import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrency } from './operations';

const currencySlice = createSlice({
  name: 'currency',
  initialState: {
    currency: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchCurrency.pending](state, _) {
      state.isLoading = true;
    },
    [fetchCurrency.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.currency = action.payload;
    },
    [fetchCurrency.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const currencyReducer = currencySlice.reducer;
