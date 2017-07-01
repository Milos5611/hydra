import { TYPE_KEY } from "../common/constant";
import rest from "../common/rest";
import { showNotification } from "./notification";

const DATA_COLLECTED__SUCCESSFUL_ACTION = "DATA_COLLECTED__SUCCESSFUL_ACTION";

export const DATA = "data";

const initialState = {
    [DATA]: []
};

export default function reducer( state = initialState, action ) {

    let newState;

    switch ( action[ TYPE_KEY ] ) {

        case DATA_COLLECTED__SUCCESSFUL_ACTION:
            newState = {
                ...state,
                [DATA]: action[ DATA ],
            };
            break;

        default:
            newState = {
                ...state
            };
            break;
    }

    return newState;
}

export function getDataFromServer() {
    return ( dispatch ) => {
        rest.doGet("http://api.4example.rs/hackaton/dev/v1/getLocationData?user_id=123").then(json => {
            if ( json.length ) {
                dispatch(dataRetrievedSuccessful());
                dispatch(showNotification("Collecting data succeeded", "X"));
            } else {
                dispatch(showNotification("Collecting data failed", "X"));
            }
        }, reason => {
            dispatch(showNotification(reason));
            dispatch(showNotification("Collecting data failed", "X"));
        });
    };
}

export function dataRetrievedSuccessful() {
    return {
        [TYPE_KEY]: DATA_COLLECTED__SUCCESSFUL_ACTION
    };
}

