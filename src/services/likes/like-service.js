import axios from "axios";
import * as songService from "../songs/song-service";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const SONGS_API = `${BASE_URL}/api`;

const api = axios.create({
    withCredentials: true
});

export const findAllSongsLikedByUser = async (userId) => {
    console.log("Inside findAllSongsLikedByUser");
    const response = await api.get(`${SONGS_API}/users/${userId}/likes`)
       /* .then(response => response.data)
        .catch(e => {
            console.log("Error in like-service, findAllSongsLikedByUser", e);
            throw e;*/
      /*  });*/
    console.log("Service-Likes :", response)
    const ans = await songService.searchForTitle(response.data);
    console.log("Answer :+>", ans)
    return ans;
}


export const toggleLike = async (uid, sid) => {
    const response = await api.put(`${SONGS_API}/users/${uid}/likes/${sid}`)
    return response.data;
}

export const countHowManyLikes = async (sid) => {
    const response = await api.get(`${SONGS_API}/songs/${sid}/likesCount`)
    return response.data;
}

export const findUserLikesSong = async (uid, sid) => {
    const response = await api.get(`${SONGS_API}/users/${uid}/likes/${sid}`)
    return !!response.data;
}
