import React from "react";
import { Link } from "react-router-dom";
import Loader from "../Laader/Loader";
import { useHotel } from "../../context/HotelProvider";

function Hotels() {
  const { isLoading, hotels, currentHotle } = useHotel();
  if (isLoading) <Loader />;
  return (
    <div className="searchList">
      <h2>Search Resulte : {hotels.length} </h2>
      {hotels.map((item) => {
        return (
          <Link
            key={item.id}
            to={`/hotels/${item.id}?lat=${item.latitude}&lng=${item.longitude}`}
          >
            <div
              className={`searchItem ${
                item.id == currentHotle?.id
              } ? "current-hotel" :  ""`}
            >
              <img src={item.xl_picture_url} alt={item.name} />
              <div className="searchItemDesc">
                <p className="location"> {item.smart_location} </p>
                <p className="name">{item.name}</p>
                €&nbsp;{item.price}&nbsp;
                <span>night</span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Hotels;
