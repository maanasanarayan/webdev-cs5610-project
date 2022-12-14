import {createSlice} from "@reduxjs/toolkit";
import {
    createCommentThunk,
    deleteCommentThunk,
    findCommentsThunk,
    updateCommentThunk
} from "../../services/comments/comment-thunk";

const initialState = {
    comments: [],
    loading: true
}

const commentReducer = createSlice({
    name: 'comments',
    initialState: initialState,
    extraReducers: {
        [findCommentsThunk.fulfilled]: (state, action) => {
            state.comments = action.payload
        },
        [createCommentThunk.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.comments.push(payload)
        },
        [updateCommentThunk.fulfilled]: (state, { payload }) => {
            state.loading = false
            const commentIndex = state.comments
                .findIndex((c) => c._id === payload._id)
            state.comments[commentIndex] = {
                ...state.comments[commentIndex],
                ...payload
            }
        },
        [deleteCommentThunk.fulfilled] : (state, { payload }) => {
            state.loading = false
            state.comments = state.comments
                .filter(c => c._id !== payload)
        },
    }
})

export default commentReducer.reducer;