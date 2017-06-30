import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import PropTypes from "prop-types";
import React from "react";

const Listener = ( props ) => (
    <MuiThemeProvider >
        <div className="container">
            {props.children}
        </div>
    </MuiThemeProvider>
);

Listener.propTypes = {
    "children": PropTypes.element
};

export default Listener;
