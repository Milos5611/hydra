import React from "react";
import Paper from "material-ui/Paper";
import Header from "../header/Header";

const style = {
    height: 380,
    width: "100%",
    background: "url('/images/app/bg_exchange.jpg') no-repeat center center",
    margin: 0,
    textAlign: "center",
    display: "inline-block",
    backgroundSize: "cover"
};

const PaperExampleSimple = () => (
    <div>
        <Header/>
        <Paper style={style} zDepth={1}/>
    </div>
);

export default PaperExampleSimple;
