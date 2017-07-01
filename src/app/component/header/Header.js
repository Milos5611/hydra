import React from "react";
import Progress from "../progress/Progress";
import { List, ListItem } from "material-ui";

const style = {
    color: "#E20030",
    list: {
        display: "flex",
        backgroundColor: "transparent !important",
        justifyContent: "center",
        position: "absolute",
        width: "100%",
        color: "#FFF",
        marginTop: 50
    },
    listItem: {
        color: "#FFF"
    }
};

const Header = () => (
    <div className="sg--menu">
        <Progress />
        <List className="sg--wrapper" style={style.list}>
            <span className="sg--logo"/>
            <ListItem className="first" style={style.listItem} primaryText="Moji Racuni"/>
            <ListItem className="second" style={style.listItem} primaryText="Placanja"/>
            <ListItem className="third" style={style.listItem} primaryText="Menjacnica"/>
            <ListItem className="forth" style={style.listItem} primaryText="Kartice"/>
            <ListItem className="fifth" style={style.listItem} primaryText="Ponuda Kredita"/>
            <div className="sg--bottom">
                <span className="sg--hr"/>
                <h1 className="sg--loan">{"Specijalna ponuda"}</h1>
            </div>
        </List>
    </div>
);

export default Header;
