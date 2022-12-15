//Thunk to find all comments for a particular stock
import { createAsyncThunk } from "@reduxjs/toolkit";
import { findComments } from "../comments/comment-service";
import {
  countHowManyLikes,
  findUserLikesStock,
  toggleLike,
} from "./like-service";

//Thunk to get number of likes for a song
export const countHowManyLikesThunk = createAsyncThunk(
  "countHowManyLikes",
  async (sid) => {
    return await countHowManyLikes(sid);
  }
);

//Thunk to create a new like
export const toggleLikeThunk = createAsyncThunk(
  "toggleLike",
  async (LikeObject) => {
    return await toggleLike(LikeObject.userId, LikeObject.stockID);
  }
);

//Thunk to check if a song is liked by user
export const findUserLikesStockThunk = createAsyncThunk(
  "findUserLikesStock",
  async (LikeObject) => {
    console.log("Inside findUserLikesStock");
    return await findUserLikesStock(LikeObject.userId, LikeObject.stockID);
  }
);

export const resetLikesThunk = createAsyncThunk(
  "findUserLikesStock",
  async () => {
    return 0;
  }
);
