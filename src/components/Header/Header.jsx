import React, { Children, useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { HiCalendar, HiMinus, HiPlus, HiSearch } from "react-icons/hi";
import "../../App.css";

function Header() {
  const [destination, setDestination] = useState("");
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setoptions] = useState({
    adult: 1,
    children: 2,
    room: 2,
  });
  return (
    <div className="header">
      <div className="headerSearch">
        <div className="headerSearchItem">
          <MdLocationOn className="headerIcon locationIcon" />
          <input
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            type="text"
            placeholder="where to go?"
            className="headerSearchInput"
            name="destination"
            id="destination"
          />
          <span className="seperator"></span>
        </div>

        <div className="headerSearchItem">
          <HiCalendar className="headerIcon dateIcon" />
          <div className="dateDropDown">2024/06/12</div>
          <span className="seperator"></span>
        </div>

        <div className="headerSearchItem">
          <div
            id="optionDropDown"
            onClick={() => {
              setOpenOptions(!openOptions);
            }}
          >
            1 adult &bull; 2 children &bull; 1 room
          </div>
          <span className="seperator"></span>
        </div>

        <div className="headerSearchItem">
          <button className="headerSearchBtn">
            <HiSearch className="headerIcon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;

function GuestOptionsList({ options }) {
  return (
    <div className="guestOptions">
      <OptionItem options={options} />
      <OptionItem options={options} />
      <OptionItem options={options} />
    </div>
  );
}

function OptionItem({ options }) {
  return (
    <div className="guestOptionItem">
      <span className="optionText">Adult</span>
      <div className="optionCounter">
        <button className="optionCounterBtn">
          <HiMinus />
        </button>
        <span className="optionCounterNumber">2</span>
        <button className="optionCounterBtn">
          <HiPlus />
        </button>
      </div>
    </div>
  );
}
