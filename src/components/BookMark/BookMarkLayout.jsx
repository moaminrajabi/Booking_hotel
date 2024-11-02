import React, { useState } from "react";
import Map from "../Map/Map";
import { Outlet } from "react-router-dom";

function BookMarkLayout() {
  // const  = useState()
  return (
    <div className="appLayout">
      <div className="sidebar">
        <Outlet />
      </div>
      <Map markerLocations={[]} />
    </div>
  );
}

export default BookMarkLayout;
