import React from 'react';
import { connect } from 'react-redux';
import { viewForecast } from "../actions/weatherAction";

const ViewWeatherForecastButton = (props) => {
    const handleWeatherForcastView = () => {
        props.viewForecast()
      }

  return (
    <button className="text-blue-400 cursor-pointer" 
    onClick={handleWeatherForcastView}
    >7-Day Forecasts&gt;</button>
  );
}

const mapDispatchToProps = (dispatch) => ({
    viewForecast: () => dispatch(viewForecast()),
  });
  
  export default connect(null, mapDispatchToProps)(ViewWeatherForecastButton);