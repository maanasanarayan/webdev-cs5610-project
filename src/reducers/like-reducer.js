import { createSlice } from "@reduxjs/toolkit";
import {
  countHowManyLikesThunk,
  findAllStocksLikedByUserThunk,
  findUserLikesStockThunk,
  toggleLikeThunk,
  resetLikesThunk,
} from "../services/likes/like-thunk";

const initialState = {
  likes: {
    count: 0,
    userLiked: false,
    likedStocks: [],
  },
  loading: true,
};

const likeReducer = createSlice({
  name: "likes",
  initialState: initialState,
  extraReducers: {
    [countHowManyLikesThunk.fulfilled]: (state, action) => {
      console.log("countHowManyLikesThunk: ", action, state);
      state.likes.count = action.payload;
    },
    [findUserLikesStockThunk.fulfilled]: (state, action) => {
      state.likes.userLiked = action.payload;
    },
    [toggleLikeThunk.fulfilled]: (state, action) => {
      state.likes.count = action.payload.count;
      state.likes.userLiked = action.payload.userLiked;
    },
    [resetLikesThunk.fulfilled]: (state, action) => {
      state.likes.count = 0;
      state.likes.userLiked = false;
    },
  },
});

export default likeReducer.reducer;
