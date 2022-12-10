import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsItem from "../news/news-item";
import { getNewsThunk } from "./../services/news-thunks";

const HomePageNews = () => {
  const { news, loading } = useSelector((state) => state.news);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewsThunk());
  }, []);

  return (
    <>
      <h2 className="mt-2">Trending Today: </h2>
      <div className="list-group m-4">
        {loading && <div className="list-group-item">Loading...</div>}
        {news.map((n) => {
          if (n.banner_image) return <NewsItem news={n} />;
        })}
      </div>
    </>
  );
};

export default HomePageNews;
