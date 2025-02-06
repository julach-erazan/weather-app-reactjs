import React, { useState, useEffect } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { RiWindyLine } from "react-icons/ri";
import { IoWater } from "react-icons/io5";
import { IoIosUmbrella } from "react-icons/io";
import { GiSunrise } from "react-icons/gi";
import { GiSunset } from "react-icons/gi";
import { connect } from 'react-redux';
import ViewWeatherForecastButton from "./ViewWeatherForecastButton";

const WeatherCard = (props) => {

  const weather = props.AllWeather;
  if (!weather) return null;

  const [dayName, setDayName] = useState("");
  const [date, setDate] = useState("");
  const [hourlyTodayWeather, setHourlyTodayWeather] = useState([]);

  const filterTodayWeather = (array, time) => {
    return array.filter((_, index) => index >= time);
  };

  useEffect(() => {
    const now = new Date();

    setDate(
      now.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
      })
    );
    setDayName(now.toLocaleString("en-US", { weekday: "long" }));

    const time = parseInt(now.toLocaleTimeString("en-GB", { hour: "2-digit" }));

    const filteredWeatherArray = filterTodayWeather(
      weather.forecast.forecastday[0].hour,
      time
    );

    setHourlyTodayWeather(filteredWeatherArray);
  }, [weather]);

  return (
    <>
      <h1 className="text-lg font-semibold text-blue-600 flex items-center justify-center gap-1">
        <IoLocationSharp />
        {weather?.location?.name}
      </h1>
      <div className="w-[300px] h-[240px] bg-gradient-to-br from-blue-400 to-blue-600 rounded-[25px] border-2 border-blue-700 shadow-xl shadow-blue-300/50 mt-3 p-4 text-white">
        <h1 className="text-[45px] font-semibold text-start tracking-wide leading-none">
          {dayName.toUpperCase()}
        </h1>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h3 className="text-md font-medium text-blue-200 mb-6">
              {date.toUpperCase()}
            </h3>
            <h2 className="text-[45px] font-bold drop-shadow-md">
              {Math.round(weather?.current?.temp_c)}°C
            </h2>
            <h3 className="text-lg font-light">
              {weather?.current?.condition?.text}
            </h3>
          </div>
          <img
            src={weather?.current?.condition?.icon}
            alt="weatherIcon"
            className="w-[120px] h-[120px] object-contain -mr-4"
          />
        </div>
      </div>

      <div className="w-[100%] max-w-[400px] bg-white drop-shadow-md text-[18px] text-[#2C67F2] flex items-center justify-evenly mt-5 rounded-[15px] p-2">
        <div className="flex flex-col justify-center items-center">
          <RiWindyLine />
          <h1 className="text-[15px] font-bold">
            {Math.round(weather?.current?.wind_kph)}Km/h
          </h1>
          <p className="text-[12px] text-blue-400">Wind Speed</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <IoWater />
          <h1 className="text-[15px] font-bold">{weather?.current?.humidity}%</h1>
          <p className="text-[12px] text-blue-400">Humidity</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <IoIosUmbrella />
          <h1 className="text-[15px] font-bold">
            {weather?.forecast?.forecastday?.[0]?.day?.daily_chance_of_rain}%
          </h1>
          <p className="text-[12px] text-blue-400">Chance of rain</p>
        </div>
      </div>

      <div className="w-[100%] max-w-[400px] text-[16px] flex justify-between items-center mt-5 mb-2">
        <h1 className="text-[#2C67F2] font-semibold">Today</h1>
        <ViewWeatherForecastButton/>
      </div>

      <div className="w-full max-w-[400px] overflow-x-auto mb-3 font-semibold text-[16px] text-white">
        <ul className="flex flex-row gap-4">
          {hourlyTodayWeather.map((data, index) => (
            <li
              key={index}
              className="flex-shrink-0 w-[90px] pt-2 pb-2 bg-gradient-to-br from-blue-200 to-blue-300 rounded-[35px] flex flex-col justify-center items-center gap-3 border-2 border-blue-400"
            >
              <h1>{data.time.split(" ")[1]}</h1>
              <img src={data?.condition?.icon} alt="weatherIcon" className="w-[50px]"/>
              <h1>{Math.round(data.temp_c)}°C</h1>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-[100%] max-w-[400px] h-[100px] drop-shadow-md flex bg-white mt-2 rounded-[15px]">
        <div className="w-[50%] flex justify-center items-center">
          <GiSunrise className="text-[60px] text-[#f2b72c] mt-2 mb-2" />
        </div>
        <div className="w-[50%] h-[100%] bg-[#2c67f2] rounded-tr-[15px] rounded-br-[15px] flex flex-col items-center justify-center text-white">
          <h1 className="text-[20px] text-blue-300">Sunrise</h1>
          <h2 className="text-[25px]">
            {weather?.forecast?.forecastday?.[0]?.astro?.sunrise}
          </h2>
        </div>
      </div>

      <div className="w-[100%] max-w-[400px] h-[100px] drop-shadow-md flex bg-white mt-5 mb-5 rounded-[15px]">
        <div className="w-[50%] flex justify-center items-center">
          <GiSunset className="text-[60px] text-[#f2b72c] mt-2 mb-2" />
        </div>
        <div className="w-[50%] h-[100%] bg-[#2c67f2] rounded-tr-[15px] rounded-br-[15px] flex flex-col items-center justify-center text-white">
          <h1 className="text-[20px] text-blue-300">Sunset</h1>
          <h2 className="text-[25px]">
            {weather?.forecast?.forecastday?.[0]?.astro?.sunset}
          </h2>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    AllWeather: state.allWeather,
  };
};

export default connect(mapStateToProps)(WeatherCard);