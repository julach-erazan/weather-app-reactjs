import {SEARCH_LOCATION_BUTTON_CLICKED} from "../actions/types";

export default function (state=null, action){
    switch(action.type){
        case SEARCH_LOCATION_BUTTON_CLICKED:
            return action.payload;
            break;
    }
    return state
}