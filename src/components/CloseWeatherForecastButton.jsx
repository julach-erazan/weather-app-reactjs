import React from 'react';
import { FaLessThan } from "react-icons/fa6";
import { connect } from 'react-redux';
import { closeForecast } from "../actions/weatherAction";

const CloseWeatherForecastButton = (props) => {
    const handleWeatherForcastClose = () => {
        props.closeForecast()
      }

  return (
    <button className="cursor-pointer" 
    onClick={handleWeatherForcastClose}><FaLessThan/></button>
  );
}

const mapDispatchToProps = (dispatch) => ({
    closeForecast: () => dispatch(closeForecast()),
  });
  
  export default connect(null, mapDispatchToProps)(CloseWeatherForecastButton);
