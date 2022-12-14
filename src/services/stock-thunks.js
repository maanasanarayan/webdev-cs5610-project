import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./stock-service";

export const getStockDataThunk = createAsyncThunk(
  "stock/getStockData",
  async () => {
    let data = await service.getStockData();
    return data;
  }
);
