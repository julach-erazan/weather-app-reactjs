import React from "react";
import CloseWeatherForecastButton from "./CloseWeatherForecastButton";
import { RiWindyLine } from "react-icons/ri";
import { IoWater } from "react-icons/io5";
import { IoIosUmbrella } from "react-icons/io";
import { connect } from 'react-redux';

const ForecastPage = (props) => {

  console.log(props.AllWeather.forecast.forecastday);

  return (
    <div className="w-full flex flex-col items-center">
      <div
        className="w-full max-w-[400px] h-[200px] bg-blue-600 rounded-br-[50px] rounded-bl-[60px]
          flex items-start justify-center px-4 text-white text-[16px] font-semibold shadow-md
        "
      >
        <div className="w-full max-w-[400px] flex items-center justify-between pt-2">
          <CloseWeatherForecastButton />
          <h1 className="text-center">7-Day Forecasts</h1>
          <div/>
        </div>
      </div>

      <div
        className="w-[340px] bg-white rounded-2xl shadow-lg mt-6 px-6 py-4 text-blue-500 
        transform -translate-y-38
        "
      >
        <div className="flex items-center justify-between mt-4">
        <img
            src=""
            alt="Weather Icon"
            className="w-[100px] h-[100px] object-contain"
          />
          <div className="flex flex-col">
          <h1 className="text-[36px] font-semibold tracking-wide">Tomorrow</h1>
            <h3 className="text-sm font-medium text-blue-300">Jan 25</h3>
            <h2 className="text-[42px] font-extrabold leading-none mt-2">
              22°C <br/><span className="text-[30px]">/17°C</span>
            </h2>
            <h3 className="text-md font-light mt-1">Cloudy</h3>
          </div>
          
        </div>

        <div className="w-[100%] max-w-[400px] text-[18px] text-[#2C67F2] flex items-center justify-evenly mt-3">
        <div className="flex flex-col justify-center items-center">
          <RiWindyLine />
          <h1 className="text-[15px] font-bold">
            18Km/h
          </h1>
          <p className="text-[12px] text-blue-400">Wind Speed</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <IoWater />
          <h1 className="text-[15px] font-bold">75%</h1>
          <p className="text-[12px] text-blue-400">Humidity</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <IoIosUmbrella />
          <h1 className="text-[15px] font-bold">
            45%
          </h1>
          <p className="text-[12px] text-blue-400">Chance of rain</p>
        </div>
      </div>
      </div>

      <div className="w-[100%] max-w-[400px] transform -translate-y-34 flex flex-row items-center justify-between p-2">
        <h1>Jan 5</h1>
        <img
            src=""
            alt="Weather Icon"
            className="w-[50px] h-[50px] object-contain"
          />
        <h1>Cloudy</h1>
        <h1>22°C</h1>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    AllWeather: state.allWeather,
  };
};

export default connect(mapStateToProps)(ForecastPage);