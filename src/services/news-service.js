import axios from "axios";
const API_BASE = "https://www.alphavantage.co/query";
const API_KEY = "0X6TC9A95IKORTYS";
const NEWS_API = `${API_BASE}?function=NEWS_SENTIMENT&limit=12&topics=finance:technology&apikey=${API_KEY}`;

export const getAllNews = async () => {
  const response = await axios.get(NEWS_API);
  const news = response.data.feed;
  return news.slice(0, 12);
};
