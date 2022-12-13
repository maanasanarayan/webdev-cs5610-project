import { createSlice } from "@reduxjs/toolkit";
import { getNewsThunk } from "../../services/news-thunks";

const initialState = {
  news: [],
  loading: false,
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  extraReducers: {
    [getNewsThunk.pending]: (state) => {
      state.loading = true;
      state.news = [];
    },
    [getNewsThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.news = payload;
    },
    [getNewsThunk.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export default newsSlice.reducer;
