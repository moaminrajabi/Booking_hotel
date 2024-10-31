import React, { useRef, useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { HiCalendar, HiMinus, HiPlus, HiSearch } from "react-icons/hi";
import "../../App.css";
import useOutSideClick from "../../hooks/useOutSideClick";

function Header() {
  const [destination, setDestination] = useState("");
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setoptions] = useState({
    adult: 1,
    children: 2,
    room: 1,
  });
  const handleOption = (name, operation) => {
    setoptions((prev) => {
      return {
        ...prev,
        [name]: operation === "inc" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
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
            {options.adult} adult &bull; {options.children} children &bull;
            {options.room} room
          </div>
          {openOptions && (
            <GuestOptionsList
              setOpenOptions={setOpenOptions}
              handleOption={handleOption}
              options={options}
            />
          )}
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

function GuestOptionsList({ options, handleOption, setOpenOptions }) {
  const optionRef = useRef();
  useOutSideClick(optionRef, "optionDropDown", () => setOpenOptions(false));
  return (
    <div className="guestOptions" ref={optionRef}>
      <OptionItem
        handleOption={handleOption}
        type="adult"
        options={options}
        minLimit={1}
      />
      <OptionItem
        handleOption={handleOption}
        type="children"
        options={options}
        minLimit={0}
      />
      <OptionItem
        handleOption={handleOption}
        type="room"
        options={options}
        minLimit={1}
      />
    </div>
  );
}

function OptionItem({ options, type, minLimit, handleOption }) {
  return (
    <div className="guestOptionItem">
      <span className="optionText">{type}</span>
      <div className="optionCounter">
        <button
          onClick={() => handleOption(type, "dec")}
          className="optionCounterBtn"
          disabled={options[type] <= minLimit}
        >
          <HiMinus className="icon" />
        </button>
        <span className="optionCounterNumber"> {options[type]} </span>
        <button
          className="optionCounterBtn"
          onClick={() => handleOption(type, "inc")}
        >
          <HiPlus className="icon" />
        </button>
      </div>
    </div>
  );
}
