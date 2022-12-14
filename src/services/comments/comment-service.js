import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const SONGS_API = `${BASE_URL}/api/comments`;

const api = axios.create({
    withCredentials: true
});

export const findComments = (sid) => {
    return api.get(`${SONGS_API}/${sid}`)
        .then(response => response.data);
}

export const addComment = async (newCommentBody) => {
    const response = await api.post(`${SONGS_API}/${newCommentBody.postedBy}/song/${newCommentBody.songID}`,
        {comment : newCommentBody.comment})
    return response.data;
}

export const deleteComment = async (uid, cid) => {
    await api.delete(`${SONGS_API}/${uid}/comment/${cid}`);
    return cid
}

export const updateComment = async (uid, cid, comment) => {
    await api.put(`${SONGS_API}/${uid}/comment/${cid}`, comment);
    return comment
}
