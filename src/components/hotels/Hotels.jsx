import React from "react";
import { useSearchParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Loader from "../Laader/Loader";

function Hotels() {
  const [searchParams, setSearchParams] = useSearchParams();
  const destination = searchParams.get("destination");
  const room = JSON.parse(searchParams.get("options"))?.room;

  const { isLoading, data } = useFetch(
    "http://localhost:5000/hotels",
    `host_location_like=${destination || ""} name_like=${
      destination || ""
    }&accommodates_get=${room || 1}`
  );
  if (isLoading) <Loader />;
  return <div>Hotels</div>;
}

export default Hotels;
