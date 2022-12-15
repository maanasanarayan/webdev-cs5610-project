import axios from "axios";
const API_BASE =
  "https://yh-finance.p.rapidapi.com/market/get-trending-tickers";
const API_KEY = "647d2802a9msh97fe2ab26f3ecbcp1a165cjsnb227259c30f0";

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
