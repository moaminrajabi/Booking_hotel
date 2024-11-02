import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useBookmark } from "../../context/BookmarkListContext";
import Loader from "../Laader/Loader";

export default function SingleBookmark() {
  const { id } = useParams();
  const { getBookmark, isLoadingCurrentBookmark, currentBokkmark } =
    useBookmark();

  useEffect(() => {
    getBookmark(id);
  }, [id]);

  if (isLoadingCurrentBookmark || !currentBokkmark) return <Loader />;

  return (
    <div>
      <h2> {currentBokkmark.cityName} </h2>
    </div>
  );
}
