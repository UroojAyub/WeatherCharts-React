import * as actions from "../actions/action-types";

const initialState = {
    data: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case actions.FETCH_WEATHER:
            return state;
        default:
            return state;
    }
}