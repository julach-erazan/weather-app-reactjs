import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { fetchWeather } from "../actions/weatherAction";
import { IoSearchSharp } from "react-icons/io5";

const SearchButton = (props) => {
  const locationState = useLocation();
  const [location, setLocation] = useState(locationState.state?.location || "");

  useEffect(() => {
    if (location) {
      props.fetchWeather(location);
    }
  }, []);

  const handleSearch = () => {
    if (location) {
      props.fetchWeather(location);
    }
  };

  return (
    <div className="w-[100%] max-w-[400px] flex items-center justify-center gap-2 my-4">
      <div className="w-[100%] flex items-center justify-center gap-4
        border-2 border-gray-300 rounded-[22px] p-1
      ">
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full h-full pl-4 outline-none"
        />
        <button
          onClick={handleSearch}
          className="bg-gray-300 text-white p-2 rounded-[100%] cursor-pointer"
        >
          <IoSearchSharp/>
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchWeather: (location) => dispatch(fetchWeather(location)),
});

export default connect(null, mapDispatchToProps)(SearchButton);
