import React from "react";

const NewsItem = ({ news }) => {
  return (
    <div className="list-group-item mt-2">
      <div className="row">
        <div className="col-md-4 col-sm-12">
          <img
            src={news.banner_image}
            alt={news.title}
            className="w-100 rounded"
          />
        </div>
        <div className="col-md-8 col-sm-12">
          <div className="text-secondary">{news.source}</div>
          <div className="wd-text-bold wd-overflow-ellipsis">{news.title}</div>
          <p>{news.summary}</p>
          <a
            href={news.url}
            target="_blank"
            rel="noreferrer"
            className="float-end"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
