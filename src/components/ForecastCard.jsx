import { React, useState, useEffect } from "react";
import CloseWeatherForecastButton from "./CloseWeatherForecastButton";
import { RiWindyLine } from "react-icons/ri";
import { IoWater } from "react-icons/io5";
import { IoIosUmbrella } from "react-icons/io";
import { connect } from "react-redux";

const ForecastPage = (props) => {
  const [tomorrowWeather, setTomorrowWeather] = useState(null);
  const [tomorrowDate, setTomorrowDate] = useState("");
  const [tomorrowIcon, setTomorrowIcon] = useState("");
  const [tomorrowText, setTomorrowText] = useState("");

  const [forecastWeather, setForecastWeather] = useState([]);

  useEffect(() => {
    if (props.AllWeather?.forecast?.forecastday?.[1]) {
      setTomorrowWeather(props.AllWeather.forecast.forecastday[1]);
    }

    if (props.AllWeather?.forecast?.forecastday) {

      const filterForecastWeather = (array, count) => {
        return array.filter((_, index) => index >= count);
      };

      setForecastWeather(filterForecastWeather(props.AllWeather.forecast.forecastday, 2));
    }
  }, [props.AllWeather]);

  useEffect(() => {
    if (tomorrowWeather) {
      const date = new Date(tomorrowWeather.date).toLocaleDateString("en-US", {
        month: "short",
        day: "2-digit",
      });

      setTomorrowDate(date);
      setTomorrowIcon(tomorrowWeather.day.condition.icon);
      setTomorrowText(tomorrowWeather.day.condition.text);
    }
  }, [tomorrowWeather]);


  return (
    <div className="w-full min-w-[400px] flex flex-col items-center">
      <div
        className="w-full max-w-[400px] h-[200px] bg-blue-600 rounded-br-[50px] rounded-bl-[60px]
          flex items-start justify-center px-4 text-white text-[16px] font-semibold shadow-md
        "
      >
        <div className="w-full max-w-[400px] flex items-center justify-between pt-2">
          <CloseWeatherForecastButton />
          <h1 className="text-center">7-Day Forecasts</h1>
          <div />
        </div>
      </div>

      <div
        className="w-[320px] bg-white rounded-2xl shadow-lg mt-6 px-6 py-4 text-blue-500 
        transform -translate-y-38
        "
      >
        <div className="flex items-center justify-between">
          <img
            src={tomorrowIcon}
            alt="Weather Icon"
            className="w-[130px] h-[130px] object-contain"
          />
          <div className="flex flex-col">
            <h1 className="text-[30px] font-semibold tracking-wide">
              Tomorrow
            </h1>
            <h3 className="text-md font-medium text-blue-300">
              {tomorrowDate}
            </h3>
            <h2 className="text-[42px] font-bold leading-none mt-2 ml-3">
              {Math.round(tomorrowWeather?.day?.maxtemp_c)}°C <br />
              <span className="text-[20px] font-semibold  ml-20">/{Math.round(tomorrowWeather?.day?.mintemp_c)}°C</span>
            </h2>
            <h3 className="text-md font-light mt-1">{tomorrowText}</h3>
          </div>
        </div>

        <div className="w-[100%] max-w-[400px] text-[18px] text-[#2C67F2] flex items-center justify-evenly mt-4">
          <div className="flex flex-col justify-center items-center">
            <RiWindyLine />
            <h1 className="text-[15px] font-bold">{Math.round(tomorrowWeather?.day?.maxwind_kph)}Km/h</h1>
            <p className="text-[12px] text-blue-400">Wind Speed</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <IoWater />
            <h1 className="text-[15px] font-bold">{tomorrowWeather?.day?.avghumidity}%</h1>
            <p className="text-[12px] text-blue-400">Humidity</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <IoIosUmbrella />
            <h1 className="text-[15px] font-bold">{tomorrowWeather?.day?.daily_chance_of_rain}%</h1>
            <p className="text-[12px] text-blue-400">Chance of rain</p>
          </div>
        </div>
      </div>

      <ul className="w-[100%] max-w-[400px]">
        {
          forecastWeather.map((data, index) => (
            <li key={index}>
              <div className="w-[100%] max-w-[400px] transform -translate-y-34 flex flex-row items-center justify-between px-8 py-2 text-gray-400 font-semibold">
                <h1>
                  {new Date(data.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "2-digit",
                  })}
                </h1>
                <div className="flex items-center justify-center gap-2">
                  <img
                    src={data.day.condition.icon}
                    alt="Weather Icon"
                    className="w-[50px] h-[50px] object-contain"
                  />
                  <h1 className="w-[100px] text-wrap text-center">{data.day.condition.text}</h1>
                </div>
                <h1>22°C</h1>
              </div>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    AllWeather: state.allWeather,
  };
};

export default connect(mapStateToProps)(ForecastPage);
