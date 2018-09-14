import axios from 'axios';
import * as actions from './action-types';

const API_KEY = "YOUR_API_KEY";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const fetchWeather = (cityName) => (dispatch) => {
    const url = `${ROOT_URL}&q=${cityName}&units=metric`;
    axios
        .get(url)
        .then(weather => {
            console.log(weather);
            dispatch({type: actions.FETCH_WEATHER, payload: weather.data})
        })
        .catch(error => {
            console.log(error);
            dispatch({type: actions.FETCH_WEATHER_ERROR, payload: 'Weather could not be retrieved'})
        });
}

export const clearWeatherSearches = () => (dispatch) => dispatch({type: actions.CLEAR_WEATHER, payload: null})
