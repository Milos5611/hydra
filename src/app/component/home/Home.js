import Cards from "../card/Cards";
import Header from "../header/Header";
import Paper from "material-ui/Paper";
import React from "react";

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
        <Paper
            style={style.header}
            zDepth={1}
        />
        <Paper
            style={style.bottom}
            zDepth={2}
        >
            <Cards />
        </Paper>
    </div>
);

export default PaperExampleSimple;
