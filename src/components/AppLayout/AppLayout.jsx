import React from "react";
import { Outlet } from "react-router-dom";
import Map from "../Map/Map";
import { useHotel } from "../../context/HotelProvider";

function AppLayout() {
  const { hotels } = useHotel();
  return (
    <div className="appLayout">
      <div className="sidebar">
        <Outlet />
      </div>
      <Map markerLocations={hotels} />
    </div>
  );
}

export default AppLayout;
