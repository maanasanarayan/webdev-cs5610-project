import { createSlice } from "@reduxjs/toolkit";
import profile from '../profile/profile.json';

const profileSlice = createSlice({
    name: 'profile',
    initialState: profile,
    reducers: {
        changeFirstName(state, action) {
            state.firstName = action.payload.firstName
        },
        changeLastName(state, action) {
            state.lastName = action.payload.lastName
        },
        changeGender(state, action) {
            state.gender = action.payload.gender
        },
        changeNickName(state, action) {
            state.nickName = action.payload.nickName
        },

        changeDateOfBirth(state, action) {
            state.dateOfBirth = action.payload.dateOfBirth
        },
        changeLocation(state, action) {
            state.location = action.payload.location
        }
    }
});

export const {changeFirstName, changeLastName, changeGender, changeNickName, changeDateOfBirth,changeLocation} = profileSlice.actions;
export default profileSlice.reducer;