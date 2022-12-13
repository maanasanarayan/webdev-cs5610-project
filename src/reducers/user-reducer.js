import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   loggedIn: false,
//   user: null,
// };

const initialState = {
  loggedIn: true,
  user: {
    role: "stocktrader",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoggedInUser(state, action) {
      state = { loggedIn: true, userId: action.payload };
      return state;
    },
  },
});

export const { setLoggedInUser } = userSlice.actions;
export default userSlice.reducer;
