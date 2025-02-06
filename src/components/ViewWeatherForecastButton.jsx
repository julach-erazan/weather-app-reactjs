import React from 'react';
import { connect } from 'react-redux';
import { viewForecast } from "../actions/weatherAction";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const ViewWeatherForecastButton = (props) => {
    const handleWeatherForcastView = () => {
        props.viewForecast()
      }

  return (
    <button className="text-blue-400 cursor-pointer flex justify-center items-center" 
    onClick={handleWeatherForcastView}
    >7-Day Forecasts<MdOutlineArrowForwardIos/></button>
  );
}

const mapDispatchToProps = (dispatch) => ({
    viewForecast: () => dispatch(viewForecast()),
  });
  
  export default connect(null, mapDispatchToProps)(ViewWeatherForecastButton);