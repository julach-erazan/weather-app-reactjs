import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { getUserLocation } from "../components/getUserLocation";

const EnableLocation = () => {
  const navigate = useNavigate();

  const handleAllowLocation = async () => {
    try {
      const coords = await getUserLocation();
      const formattedLocation = `${coords.latitude},${coords.longitude}`;
      navigate("/home", { state: { location: formattedLocation } });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div className="w-full h-screen bg-white flex flex-col justify-center items-center px-4">
      <div className="w-48 h-48 bg-gray-200 border-2 border-gray-300 rounded-full flex justify-center items-center text-7xl text-gray-400">
        <CiLocationOn />
      </div>

      <h1 className="text-3xl text-blue-600 mt-6 text-center font-semibold">
        Enable Location
      </h1>

      <p className="text-center text-gray-500 mt-4 max-w-xs">
        Please enable your location to get accurate weather updates and better
        services tailored to your current location.
      </p>

      <button
        onClick={handleAllowLocation}
        className="w-4/5 max-w-[300px] bg-blue-900 text-white mt-8 px-8 py-2 rounded-3xl font-bold hover:bg-blue-800 transition cursor-pointer"
      >
        Allow Location
      </button>
    </div>
  );
};

export default EnableLocation;
