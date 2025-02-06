import { VIEW_WEATHER_FORECAST, CLOSE_WEATHER_FORECAST, SEARCH_LOCATION_BUTTON_CLICKED } from "./types";

import { getWeatherByLocation } from "../api/current_weatherApi";

export const fetchWeather = (location) => async (dispatch) => {
  try {
    const weatherData = await getWeatherByLocation(location);
    dispatch({
      type: SEARCH_LOCATION_BUTTON_CLICKED,
      payload: weatherData,
    });
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
};

export const viewForecast = () => {
  return{
    type: VIEW_WEATHER_FORECAST,
    payload: true,
  }
}

export const closeForecast = () => {
  return{
    type: CLOSE_WEATHER_FORECAST,
    payload: false,
  }
}
