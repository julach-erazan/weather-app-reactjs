import {combineReducers} from 'redux';
import AllWeather from './reducer-AllWeather';
import AllForecastButton from './reducer-AllForecastButton';

const rootReducer = combineReducers(
    {
        allWeather: AllWeather,
        allForecastButton: AllForecastButton,
    }
)

export default rootReducer;