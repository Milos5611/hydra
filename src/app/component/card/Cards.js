import { Avatar, Divider, Paper, TextField } from "material-ui";
import { Card, CardActions, CardHeader, CardText, CardTitle } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import Header from "../header/Header";
import PropTypes from "prop-types";
import { PureComponent } from "react";
import React from "react";
import { deepPurple800 } from "material-ui/styles/colors";

const style = {
    card: {
        width: "43%",
        float: "left",
        margin: "20px",

        header: {
            backgroundColor: "#E20030"
        },
        specialWithImage: {
            width: "260px",
            display: "inline-block",
            verticalAlign: "top"
        }
    },
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

export default class Cards extends PureComponent {

    static propTypes = {
        /*"getLocationData": PropTypes.func,*/
        "getSafeLocation": PropTypes.func,
        "data_safe": PropTypes.array
    };

    constructor( props ) {
        super(props);
    }

    componentDidMount() {
        const { getSafeLocation } = this.props;
        getSafeLocation();
    }

    render() {
        const { data_safe } = this.props;
        return (
            <div>
                <Header/>
                <Paper
                    style={style.header}
                    zDepth={1}
                />
                <Paper
                    style={style.bottom}
                    zDepth={2}
                    className="cg--going"
                >
                    <Card style={style.card} className="sg--last-trip">
                        <CardHeader
                            titleColor="#FFF"
                            subtitleColor="#FFF"
                            style={style.card.header}
                            title="Milos Nikolic"
                            subtitle="Ponuda kredita"
                            avatar={
                                <Avatar
                                    color={deepPurple800}
                                    backgroundColor={"#FFF"}
                                    size={30}
                                    style={style}
                                >
                                    {"M"}
                                </Avatar>}
                        />
                        <CardTitle
                            title="Great opportunity for you Milos"
                            subtitle="Flexible cache credit to fit your needs"
                        />
                        <CardText>
                            {" Your last trip was over 1 year ago."}
                            <br/>
                            {"Are you interested in cache loan."}
                        </CardText>
                        <CardActions>
                            <FlatButton label="Interested"/>
                            <FlatButton label="Not Interested"/>
                        </CardActions>
                    </Card>
                    <Card style={style.card} className="sg--mobile-phone">
                        <CardHeader
                            titleColor="#FFF"
                            subtitleColor="#FFF"
                            style={style.card.header}
                            title="Milos Nikolic"
                            subtitle="Ponuda kredita"
                            avatar={
                                <Avatar
                                    color={deepPurple800}
                                    backgroundColor={"#FFF"}
                                    size={30}
                                    style={style}
                                >
                                    {"M"}
                                </Avatar>}
                        />
                        <CardTitle
                            title="Great opportunity for you Milos"
                            subtitle="Flexible cache credit to fit your needs"
                        />
                        <span className="cg--image"/>
                        <CardText style={style.card.specialWithImage}>
                            {"Your NEXUS 5X is 3 years old..."}
                            <br/>
                            {"In conjunction with our partner company VIP, you can have brand new phone..."}
                        </CardText>
                        <CardActions>
                            <FlatButton label="Interested"/>
                            <FlatButton label="Not Interested"/>
                        </CardActions>
                    </Card>
                    {data_safe && data_safe[ 0 ] ?
                        <Card style={style.card} className="cg--location-wrapper">
                            <CardHeader
                                titleColor="#FFF"
                                subtitleColor="#FFF"
                                style={style.card.header}
                                title="Safe locations"
                                avatar={
                                    <Avatar
                                        color={deepPurple800}
                                        backgroundColor={"#FFF"}
                                        size={30}
                                        style={style}
                                    >
                                        {"M"}
                                    </Avatar>}
                            />
                            <div className="cg--location"/>
                            <div className="cg--information">
                                <TextField
                                    disabled
                                    value={data_safe[ 0 ].latitude}
                                    hintText="Latitude"
                                    style={{ marginLeft: 20 }}
                                    underlineShow={false}
                                />
                                <Divider />
                                <TextField
                                    disabled
                                    value={data_safe[ 0 ].longitude}
                                    hintText="Longitude"
                                    style={{ marginLeft: 20 }}
                                    underlineShow={false}
                                />
                                <Divider />
                                <TextField
                                    disabled
                                    value={"Kosovke Devojke 2"}
                                    hintText="Address"
                                    style={{ marginLeft: 20 }}
                                    underlineShow={false}
                                />
                                <Divider />
                            </div>

                        </Card> : null}
                    <Card style={style.card} className="sg--personal-info">
                        <CardHeader
                            titleColor="#FFF"
                            subtitleColor="#FFF"
                            style={style.card.header}
                            title="Licni podaci"
                            avatar={
                                <Avatar
                                    color={deepPurple800}
                                    backgroundColor={"#FFF"}
                                    size={30}
                                    style={style}
                                >
                                    {"M"}
                                </Avatar>}
                        />
                        <TextField
                            value={"Milos"}
                            hintText="First name"
                            style={{ marginLeft: 20 }}
                            underlineShow={false}
                        />
                        <Divider />
                        <TextField
                            value={"Nikolic"}
                            hintText="Last name"
                            style={{ marginLeft: 20 }}
                            underlineShow={false}
                        />
                        <Divider />
                        <TextField
                            value={"Bulevar Oslobodjenja 102"}
                            hintText="Address"
                            style={{ marginLeft: 20 }}
                            underlineShow={false}
                        />
                        <Divider />
                        <TextField
                            value={"milos.nikolic@prodyna.com"}
                            hintText="Email address"
                            style={{ marginLeft: 20 }}
                            underlineShow={false}
                        />
                        <Divider />
                    </Card>
                </Paper>
            </div>
        );
    }
}
