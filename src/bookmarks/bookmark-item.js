import { React } from "react";

const BookmarkItem = ({ bookmarks }) => {
  return (
    <div className="list-group-item mt-2">
      <div className="row">
        <div className="col-md-4 col-sm-12">
          <img
            src={bookmarks.banner_image}
            alt={bookmarks.title}
            className="w-100 rounded"           
          />
        </div>
        <div className="col-md-8 col-sm-12">
          <div className="text-secondary">{bookmarks.source}</div>
          <div className="wd-text-bold wd-overflow-ellipsis">{bookmarks.title}</div>
          <p>{bookmarks.summary}</p>
          <a
            href={bookmarks.url}
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

export default BookmarkItem;