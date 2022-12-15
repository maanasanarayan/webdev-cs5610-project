import { createSlice } from "@reduxjs/toolkit";
import { getAllUsersThunk, deleteUserThunk } from "./../services/user-thunks";

const initialState = {
  loading: false,
  allUsers: [],
  loggedIn: false,
  user: {
    role: "ANONYMOUS",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoggedInUser(state, action) {
      state = { loggedIn: true, user: action.payload };
      console.log("INSIDE USER REDUCER ====> ", state.user)
      return state;
    },
    logout(state, action) {
      state = { loggedIn: false, user: null };
      console.log("State: ", state);
    },
    changeFirstName(state, action) {
      state.user.fname = action.payload.fname;
    },
    changeLastName(state, action) {
      state.user.lname = action.payload.lname;
    },
    changeGender(state, action) {
      state.user.gender = action.payload.gender;
    },
    changePhoneNumber(state, action) {
      state.user.phonenumber = action.payload.phonenumber;
    },

    changeDateOfBirth(state, action) {
      state.user.dob = action.payload.dob;
    },
    changeAddress(state, action) {
      state.user.address = action.payload.address;
    },
  },
  extraReducers: {
    [getAllUsersThunk.pending]: (state) => {
      state.loading = true;
      state.allUsers = [];
    },
    [getAllUsersThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.allUsers = payload;
    },
    [getAllUsersThunk.rejected]: (state) => {
      state.loading = false;
    },
    [deleteUserThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.allUsers = state.allUsers.filter((u) => u._id !== payload);
    },
  },
});

export const {
  setLoggedInUser,
  logout,
  changeAddress,
  changeGender,
  changeFirstName,
  changeLastName,
  changeDateOfBirth,
  changePhoneNumber,
} = userSlice.actions;
export default userSlice.reducer;
