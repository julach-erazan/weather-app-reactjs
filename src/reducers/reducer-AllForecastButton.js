import {
  VIEW_WEATHER_FORECAST,
  CLOSE_WEATHER_FORECAST,
} from "../actions/types";

export default function (state = null, action) {
  switch (action.type) {
    case VIEW_WEATHER_FORECAST:
      return action.payload;
      break;

    case CLOSE_WEATHER_FORECAST:
      return action.payload;
      break;
  }
  return state;
}
