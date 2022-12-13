import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./user-service";

export const getAllUsersThunk = createAsyncThunk(
  "allUsers/getAllUsers",
  async () => {
    let users = await service.getAllUsers();
    return users;
  }
);
