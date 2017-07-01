import React from "react";
import { Redirect } from "react-router-dom";
import Progress from "../progress/Progress";

const style = {
    color: "#E20030"
};

const Header = () => (
    <div className="sg--menu">
        <Progress />
    </div>
);

export default Header;
