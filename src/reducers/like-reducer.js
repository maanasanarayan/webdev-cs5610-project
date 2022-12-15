import {createSlice} from "@reduxjs/toolkit";
import {
    countHowManyLikesThunk, findAllStocksLikedByUserThunk,
    findUserLikesStockThunk,
    toggleLikeThunk
} from "../services/likes/like-thunk";

const initialState = {
    likes: {
        count: 0,
        userLiked: false,
        likedSongs: []
    },
    loading: true,
}

const likeReducer = createSlice({
    name: 'likes',
    initialState: initialState,
    extraReducers: {
        [countHowManyLikesThunk.fulfilled]: (state, action) => {
            console.log("countHowManyLikesThunk: ", action, state)
            console.log("countHowManyLikesThunk: ", state.likes.likedSongs)
            state.likes.count = action.payload
        },
        [findUserLikesStockThunk.fulfilled]: (state, action) => {
            state.likes.userLiked = action.payload
        },
        [toggleLikeThunk.fulfilled]: (state, action) => {
            state.likes.count = action.payload.count
            state.likes.userLiked = action.payload.userLiked
        }
    }
})

export default likeReducer.reducer;