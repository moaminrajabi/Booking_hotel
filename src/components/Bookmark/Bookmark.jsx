import React from "react";
import { useBookmark } from "../../context/BookmarkListContext";
import Loader from "../Laader/Loader";
import ReactCountryFlag from "react-country-flag";
import { Link } from "react-router-dom";

function BookMark() {
  const { isLoading, bookmarks } = useBookmark();

  if (isLoading) return <Loader />;
  console.log(bookmarks);
  return (
    <div>
      <h2>Bookmark List</h2>

      <div className="bookmarkList">
        {bookmarks.map((item) => {
          return (
            <Link to={`${item.id}?lat=${item.latitude}?lan=${item.longitude}`}>
              <div key={item.id} className="bookmarkItem">
                <ReactCountryFlag svg countryCode={item.countryCode} /> &nbsp;
                <strong> {item.cityName} </strong> &nbsp;
                <span> {item.country} </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default BookMark;
