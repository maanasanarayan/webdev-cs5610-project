import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./news-service";

export const getNewsThunk = createAsyncThunk("news/getAllNews", async () => {
  let news = await service.getAllNews();
  return news;
});
