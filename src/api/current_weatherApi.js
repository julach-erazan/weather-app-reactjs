import axios from "axios";

// const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = "http://api.weatherapi.com/v1";
export const getWeatherByLocation = async (location) => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast.json`, {
      params: {
        q: location,
        key: "70f174cd7b3e4cfcb6f180917252701",
        days: "8",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};
