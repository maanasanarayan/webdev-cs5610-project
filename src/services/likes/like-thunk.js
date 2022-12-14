//Thunk to find all comments for a particular song
import {createAsyncThunk} from "@reduxjs/toolkit";
import {findComments} from "../comments/comment-service";
import {countHowManyLikes, findAllSongsLikedByUser, findUserLikesSong, toggleLike} from "./like-service";

export const findLikedSongsThunk = createAsyncThunk(
    'findLikedSongs', async (uid) => {
        console.log("Inside thunk, the uid is :",uid);
        //const [arr] = await findAllSongsLikedByUser(uid);
        console.log("I'm here")
       // console.log("Inside thunk, the returned value is:", arr)
        return await findAllSongsLikedByUser(uid);
    })

//Thunk to get number of likes for a song
export const countHowManyLikesThunk = createAsyncThunk(
    'countHowManyLikes', async (sid) => {
        return await countHowManyLikes(sid);
    }
)

//Thunk to create a new like
export const toggleLikeThunk = createAsyncThunk(
    'toggleLike', async(LikeObject) => {
        return await toggleLike(LikeObject.userId, LikeObject.songID);
    }
)

//Thunk to check if a song is liked by user
export const findUserLikesSongThunk = createAsyncThunk(
    'findUserLikesSong', async(LikeObject) => {
        console.log("Inside findUserLikesSong")
        return await findUserLikesSong(LikeObject.userId, LikeObject.songID)
    }
)

export const findAllSongsLikedByUserThunk = createAsyncThunk(
    'findAllSongsLikedByUser', async (uid) => {
        console.log("Inside the thunk. The uid passed is :", uid);
        return await findAllSongsLikedByUser(uid);
    }
)

// export function findAllSongsLikedByUserAction(uid) {
//     return async (dispatch) => {
//         try {
//             dispatch({
//                 type: 'findAllSongsLikedByUserThunk.pending',
//                 payload: {}
//             })
//             const r = await findAllSongsLikedByUser(uid);
//             dispatch({
//                 type: 'findAllSongsLikedByUserThunk.fulfilled',
//                 payload: r
//             })
//         } catch (e) {
//             console.log("Error ---- ", e);
//             dispatch({
//                 type: 'findAllSongsLikedByUserThunk.rejected',
//                 payload: e
//             })
//         }
//     }
// }