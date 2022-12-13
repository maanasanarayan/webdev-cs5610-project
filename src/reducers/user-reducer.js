import { createSlice } from "@reduxjs/toolkit";
import { getAllUsersThunk } from "./../services/user-thunks";

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
      return state;
    },
    logout(state, action) {
      state = { loggedIn: false, user: null };
      console.log("State: ", state);
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
  },
});

export const { setLoggedInUser, logout } = userSlice.actions;
export default userSlice.reducer;
