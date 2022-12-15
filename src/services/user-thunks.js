import { createAsyncThunk } from "@reduxjs/toolkit";
import {getAllUsers, deleteUser} from "./user-service";

export const getAllUsersThunk = createAsyncThunk(
  "allUsers/getAllUsers",
  async () => {
    let users = await getAllUsers();
    return users;
  }
);

export const deleteUserThunk = createAsyncThunk(
    "users/deleteUser",
    async (userId) => {
        await deleteUser(userId);
        return userId;
    }
);
