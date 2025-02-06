import React from 'react';
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { connect } from 'react-redux';
import { closeForecast } from "../actions/weatherAction";

const CloseWeatherForecastButton = (props) => {
    const handleWeatherForcastClose = () => {
        props.closeForecast()
      }

  return (
    <button className="cursor-pointer" 
    onClick={handleWeatherForcastClose}><MdOutlineArrowBackIosNew/></button>
  );
}

const mapDispatchToProps = (dispatch) => ({
    closeForecast: () => dispatch(closeForecast()),
  });
  
  export default connect(null, mapDispatchToProps)(CloseWeatherForecastButton);
