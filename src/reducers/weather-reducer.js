import * as actions from "../actions/action-types";

const initialState = {
    weatherData: [],
    error: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case actions.FETCH_WEATHER:
            return {
                ...state,
                weatherData: [
                    ...state.weatherData,
                    action.payload
                ],
                error: null
            };
        case actions.FETCH_WEATHER_ERROR:
            return {
                ...state,
                error: action.payload
            };
        case actions.CLEAR_WEATHER:
            return {
                ...state,
                weatherData: [],
                error: null
            }

        default:
            return state;
    }
}