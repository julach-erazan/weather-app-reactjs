import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { fetchWeather } from "../actions/weatherAction";

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
    <>
      <div className="flex items-center justify-center gap-4 mb-6 w-full max-w-lg">
        <input
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border rounded-md p-2 w-full"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Search
        </button>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchWeather: (location) => dispatch(fetchWeather(location)),
});

export default connect(null, mapDispatchToProps)(SearchButton);
