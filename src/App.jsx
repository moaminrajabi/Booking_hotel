import React from "react";
import Header from "./components/Header/Header";
import { Toaster } from "react-hot-toast";
import LocationList from "./components/LocationList/LocationList";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout/AppLayout";
import Hotels from "./components/hotels/Hotels";
import HotelProvider from "./context/HotelProvider";
import SingleHotel from "./components/SingleHotel/SingleHotel";
import BookMarkLayout from "./components/BookMarkLayout/BookMarkLayout";
import BookmarkListProvider from "./context/BookmarkListContext";

function App() {
  return (
    <BookmarkListProvider>
      <HotelProvider>
        <Header />
        <Toaster />
        <Routes>
          <Route path="/" element={<LocationList />} />
          <Route path="/hotels" element={<AppLayout />}>
            <Route index element={<Hotels />} />
            <Route path=":id" element={<SingleHotel />} />
          </Route>
          <Route path="/bookmark" element={<BookMarkLayout />}>
            <Route index element={<div> Bookmark list </div>} />
            <Route path="add" element={<h1> add new bookmark </h1>} />
          </Route>
        </Routes>
      </HotelProvider>
    </BookmarkListProvider>
  );
}

export default App;
