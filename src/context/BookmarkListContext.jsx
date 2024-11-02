import React, { createContext, useContext, useState } from "react";
import useFetch from "../hooks/useFetch";
import axios from "axios";
import toast from "react-hot-toast";

const BookmarkContext = createContext();
const BASE_URL = "http://localhost:5000";

function BookmarkListProvider({ children }) {
  const [currentBokkmark, setCurrentBokkmark] = useState(null);
  const [isLoadingCurrentBookmark, setIsLoadingCurrentBookmark] =
    useState(false);

  const { isLoading, data: bookmarks } = useFetch(`${BASE_URL}/bookmarks`);

  async function getBookmark(id) {
    isLoadingCurrentBookmark(true);
    try {
      const { data } = await axios.get(`${BASE_URL}/bookmarks/${id}`);
      setCurrentBokkmark(data);
      isLoadingCurrentBookmark(false);
    } catch (error) {
      toast.error(error.message);
      isLoadingCurrentBookmark(false);
    }
  }

  return (
    <BookmarkContext.Provider
      value={{
        isLoading,
        bookmarks,
        getBookmark,
        isLoadingCurrentBookmark,
        currentBokkmark,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}

export default BookmarkListProvider;

export function useBookmark() {
  return useContext(BookmarkContext);
}
