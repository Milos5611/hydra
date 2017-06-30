import { applyMiddleware, combineReducers, createStore } from "redux";
import login from "../services/login";
import message from "../services/message";
import notification from "../services/notification";
import surveyList from "../services/surveylist";
import templateList from "../services/templatelist";
import thunk from "redux-thunk";
import unitList from "../services/unitlist";

const reducers = {
    login,
    message,
    notification,
    surveyList,
    templateList,
    unitList
};

const logger = store => next => action => {

    let result = next(action);

    if ( process.env.NODE_ENV !== "production" ) {
        /* eslint-disable */
        console.group(action.type);
        console.info("Dispatching:", action);
        console.log("Next state:", store.getState());
        console.groupEnd(action.type);
        /* eslint-enable */
    }

    return result;
};

export default createStore(combineReducers(reducers), applyMiddleware(thunk, logger));
