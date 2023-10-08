import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrency } from './operations';

const initialState = {
  currency: [],
  isLoading: false,
  error: null,
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    reset: () => initialState,
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

export const { reset: resetCurrency } = currencySlice.actions;
export default currencySlice.reducer;
