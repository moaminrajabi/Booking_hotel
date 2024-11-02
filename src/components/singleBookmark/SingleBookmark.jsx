import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useBookmark } from "../../context/BookmarkListContext";
import Loader from "../Laader/Loader";
import ReactCountryFlag from "react-country-flag";

export default function SingleBookmark() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getBookmark, isLoadingCurrentBookmark, currentBokkmark } =
    useBookmark();

  useEffect(() => {
    getBookmark(id);
  }, [id]);

  const handleBack = () => {
    navigate(-1);
  };

  if (isLoadingCurrentBookmark || !currentBokkmark) return <Loader />;

  return (
    <div>
      <h1>
        <ReactCountryFlag svg countryCode={currentBokkmark.countryCode} />
      </h1>

      <h2> {currentBokkmark.cityName} </h2>
      <h4>{currentBokkmark.country}</h4>
      <br />
      <button className="btn btn--back" onClick={handleBack}>
        &larr; Back
      </button>
    </div>
  );
}
