import {createAsyncThunk} from "@reduxjs/toolkit";
import {findAllStocks, createStock, deleteStock} from "./stock-service";

export const createStocksThunk = createAsyncThunk(
    'createStock',
    async (newStock) => {
        console.log("Reached Cretae stock thunk")
        const stock = await createStock(newStock)
        console.log("Reached Cretae stock thunk, created :", stock)
        return stock
    }
)

export const findAllStocksThunk = createAsyncThunk(
    'findAllStocks',
    () => findAllStocks()
)

export const updateStockThunk = {}
export const deleteStockThunk = createAsyncThunk(
    'deleteStock',
    (sid) => deleteStock(sid)
)