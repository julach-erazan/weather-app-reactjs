import React from "react";
import { Link } from "react-router-dom";
import weatherIcon from "../assets/weatherIcon.png";

const GetStart = () => {
  return (
    <div className="w-full h-screen bg-blue-600 flex flex-col justify-center items-center px-4">
      <img
        src={weatherIcon}
        alt="Weather Icon"
        className="w-3/5 max-w-[300px] mb-12"
      />
      <h1 className="text-[50px] sm:text-5xl text-white leading-none text-center">
        <span className="font-bold">Weather</span>
        <br />
        <span className="text-yellow-400">Forecasts</span>
      </h1>
      <p className="text-center text-blue-200 mt-4 max-w-xs">
        Get accurate weather updates anytime, anywhere with our reliable
        forecast service.
      </p>
      <Link to="/enable-location" className="w-[70%] max-w-[300px] bg-yellow-400 text-[17px] text-blue-900 mt-8 px-8 py-2 rounded-3xl font-bold hover:bg-yellow-300 transition cursor-pointer text-center">  
          Get Start
      </Link>
    </div>
  );
};

export default GetStart;
