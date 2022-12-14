import axios from "axios";
const API_BASE =
  "https://yh-finance.p.rapidapi.com/market/get-trending-tickers";
const API_KEY = "de03b42ceamshc94ba59e5156c12p1b43ecjsn78467f3a72b7";
//const STOCK_API = `${API_BASE}?function=TIME_SERIES_DAILY_ADJUSTED&apikey=${API_KEY}`;
const options = {
  method: "GET",
  url: API_BASE,
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": "yh-finance.p.rapidapi.com",
  },
};
export const getStockData = async () => {
  const response = await axios.request(options);
  return response.data.finance.result[0].quotes;
};
