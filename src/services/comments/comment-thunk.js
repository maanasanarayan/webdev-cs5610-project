import {createAsyncThunk} from "@reduxjs/toolkit";
import {addComment, findComments, deleteComment, updateComment} from "./comment-service";

//Thunk to find all comments for a particular stock
export const findCommentsThunk = createAsyncThunk(
    'findComments', async (sid) => {
        return await findComments(sid);
    })

//Thunk to create a new comment
export const createCommentThunk = createAsyncThunk(
    'addComment', async(newCommentBody) => {
        return await addComment(newCommentBody);
    }
)

//Thunk to delete a comment
export const deleteCommentThunk = createAsyncThunk(
    'deleteComment', async (deleteObject) => {
        return await deleteComment(deleteObject.userID, deleteObject.commentID)
    })

//Thunk to update a comment
export const updateCommentThunk = createAsyncThunk(
    'updateComment', async (updateObject) =>
        await updateComment(updateObject.userID, updateObject.commentID, updateObject.commentObject)
    )