import React from "react";
import Paper from "material-ui/Paper";
import Header from "../header/Header";
import CardExampleWithAvatar from "../card/Card";

const style = {
    header: {
        height: 380,
        width: "100%",
        background: "url('/images/app/bg_exchange.jpg') no-repeat center center",
        margin: 0,
        textAlign: "center",
        display: "inline-block",
        backgroundSize: "cover"
    },
    bottom: {
        width: 980,
        margin: "0 auto",
        marginTop: -50
    }
};

const PaperExampleSimple = () => (
    <div>
        <Header/>
        <Paper style={style.header} zDepth={1}/>
        <Paper style={style.bottom} zDepth={2}>
            <CardExampleWithAvatar />
        </Paper>
    </div>
);

export default PaperExampleSimple;
