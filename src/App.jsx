import React from "react";
import Header from "./components/Header/Header";
import { Toaster } from "react-hot-toast";
import LocationList from "./components/LocationList/LocationList";

function App() {
  return (
    <div>
      <Header />
      <Toaster />
      <LocationList />
    </div>
  );
}

export default App;
