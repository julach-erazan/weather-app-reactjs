import {React, useState, useEffect} from "react";
import WeatherCard from "../components/WeatherCard";
import SearchButton from "../components/SearchButton"
import { connect } from 'react-redux';
import ForecastCard from "../components/ForecastCard"

const WeatherPage = (props) => {

  const [viewForecast, setViewForecast] = useState(false);

  useEffect(() => {
    if(props.AllForecastButton != null){
      setViewForecast(props.AllForecastButton)
    }
  })

  return (
    <div className="px-4 flex flex-col items-center">
      {viewForecast ? (
        <>
          <ForecastCard/>
        </>
      ): (
        <>
          <SearchButton/>
          <WeatherCard />
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    AllForecastButton: state.allForecastButton,
  };
};

export default connect(mapStateToProps)(WeatherPage);