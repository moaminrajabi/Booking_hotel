import React, { createContext, useContext, useState } from "react";
import useFetch from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const HotelContext = createContext();
const BASE_URL = "http://localhost:5000/hotels";

function HotelProvider({ children }) {
  const [currentHotle, setCurrentHotle] = useState(null);
  const [isLoadingCurrentHotle, setIsLoadingCurrentHotle] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const destination = searchParams.get("destination");
  const room = JSON.parse(searchParams.get("options"))?.room;

  const { isLoading, data: hotels } = useFetch(
    BASE_URL,
    `q=${destination || ""}&accommodates_gte=${room || 1}`
  );

  async function getHotel(id) {
    setIsLoadingCurrentHotle(true);
    try {
      const { data } = await axios.get(`${BASE_URL}/${id}`);
      setCurrentHotle(data);
      setIsLoadingCurrentHotle(false);
    } catch (error) {
      toast.error(error.message);
      setIsLoadingCurrentHotle(false);
    }
  }

  return (
    <HotelContext.Provider
      value={{ isLoading, hotels, getHotel, isLoadingCurrentHotle, currentHotle }}
    >
      {children}
    </HotelContext.Provider>
  );
}

export default HotelProvider;

export function useHotel() {
  return useContext(HotelContext);
}
