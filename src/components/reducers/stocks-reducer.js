import { createSlice } from "@reduxjs/toolkit";
import { getStockDataThunk } from "../../services/stock-thunks";

const initialState = {
  stockdata: [],
  loading: false,
};

const stockSlice = createSlice({
  name: "stockdata",
  initialState,
  extraReducers: {
    [getStockDataThunk.pending]: (state) => {
      state.loading = true;
      state.stockdata = [];
    },
    [getStockDataThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.stockdata = payload;
    },
    [getStockDataThunk.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default stockSlice.reducer;
