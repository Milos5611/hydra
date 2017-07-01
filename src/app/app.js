import "./index.scss";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Cards from "./container/Cards";
import Home from "./component/home/Home";
import Listener from "../listener/listener";
import Login from "./container/Login";
import Notification from "./container/Notification";
import { Provider } from "react-redux";
import React from "react";
import domready from "domready";
import injectTapEventPlugin from "react-tap-event-plugin";
import { render } from "react-dom";
import store from "./common/store";

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const MainApplication = () => {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            component={Login}
                        />
                        <Route
                            exact
                            path="/home"
                            component={Home}
                        />
                    </Switch>
                    <Route component={Notification}/>
                    <Route component={Cards}/>
                </div>
            </Router>
        </Provider>
    );
};

domready(() => {
    render(
        <Listener>
            <MainApplication/>
        </Listener>, document.getElementById("app"));
});
