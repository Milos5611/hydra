import { TYPE_KEY } from "../common/constant";
import rest from "../common/rest";
import { showNotification } from "./notification";

const DATA_COLLECTED__SUCCESSFUL_ACTION = "DATA_COLLECTED__SUCCESSFUL_ACTION";
const SAFE_LOCATION__SUCCESSFUL_ACTION = "SAFE_LOCATION__SUCCESSFUL_ACTION";

export const DATA = "data";
export const DATA_SAFE = "data_safe";

const initialState = {
    [DATA]: [],
    [DATA_SAFE]: []
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

        case SAFE_LOCATION__SUCCESSFUL_ACTION:
            newState = {
                ...state,
                [DATA_SAFE]: action[ DATA ],
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

/*
 *
 * @data Get data from location { address, city, state, country }
 *
 * */
export function getLocationData() {
    return ( dispatch ) => {
        rest.doGet("http://api.4example.rs/hackaton/dev/v1/getLocationData?user_id=123").then(json => {
            if ( json.locations.length ) {
                dispatch(dataRetrievedSuccessful(json.locations));
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

/*
 *
 * @data Get data for possible safe location and send to component
 *
 * */
export function getSafeLocation() {
    return ( dispatch ) => {
        rest.doGet("http://api.4example.rs/hackaton/dev/v1/getSafeLocation?user_id=123").then(json => {
            if ( json.safe_locations.length ) {
                dispatch(dataSafeLocationSuccessful(json.safe_locations));
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

export function dataRetrievedSuccessful( data ) {
    return {
        [TYPE_KEY]: DATA_COLLECTED__SUCCESSFUL_ACTION,
        [DATA]: data
    };
}

export function dataSafeLocationSuccessful( data ) {
    return {
        [TYPE_KEY]: SAFE_LOCATION__SUCCESSFUL_ACTION,
        [DATA]: data
    };
}

