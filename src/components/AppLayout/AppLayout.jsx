import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Map from "../Map/Map";
import { useHotel } from "../../context/HotelProvider";
import "../../App.css";

function AppLayout() {
  const { hotels } = useHotel();
  const navigate = useNavigate(-1);
  return (
    <div className="appLayout">
      <div className="sidebar">
        <button onClick={() => navigate("/bookmark")} className="bttn">
          Bookmark
        </button>
        <Outlet />
      </div>

      <Map markerLocations={hotels} />
    </div>
  );
}

export default AppLayout;
