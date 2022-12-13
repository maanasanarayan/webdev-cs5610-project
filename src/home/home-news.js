import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsItem from "../news/news-item";
import {
  getNewsThunk,
  getRecommendedNewsThunk,
} from "./../services/news-thunks";

const HomePageNews = () => {
  const { news, recommendedNews, loadingNews, loadingRecs } = useSelector(
    (state) => state.news
  );
  const { user, loggedIn } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewsThunk());

    if (loggedIn && user.role === "stocktrader") {
      dispatch(getRecommendedNewsThunk("AAPL"));
    }
  }, []);

  return (
    <>
      {loggedIn && user.role === "stocktrader" && (
        <>
          <h2 className="mt-2">Recommended For You: </h2>
          <div className="list-group m-4">
            {loadingRecs && <div className="list-group-item">Loading...</div>}
            {recommendedNews.map((n) => {
              if (n.banner_image) return <NewsItem news={n} />;
            })}
          </div>
        </>
      )}
      <h2 className="mt-2">Trending Today: </h2>
      <div className="list-group m-4">
        {loadingNews && <div className="list-group-item">Loading...</div>}
        {news.map((n) => {
          if (n.banner_image) return <NewsItem news={n} />;
        })}
      </div>
    </>
  );
};

export default HomePageNews;
