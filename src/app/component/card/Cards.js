import { Card, CardActions, CardHeader, CardText, CardTitle } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import PropTypes from "prop-types";
import { PureComponent } from "react";
import React from "react";

const style = {
    card: {
        width: "43%",
        float: "left",
        margin: "20px",

        header: {
            backgroundColor: "#E20030"
        }
    }
};

export default class Cards extends PureComponent {

    static propTypes = {
        "getDataFromServer": PropTypes.func
    };

    constructor( props ) {
        super(props);
    }

    componentDidMount() {
        const { getDataFromServer } = this.props;
        getDataFromServer();
    }

    render() {
        /*const { data } = this.props;*/
        return (
            <div>
                <Card style={style.card}>
                    <CardHeader
                        titleColor="#FFF"
                        subtitleColor="#FFF"
                        style={style.card.header}
                        title="Milos Nikolic"
                        subtitle="Ponuda kredita"
                    />
                    <CardTitle
                        title="Great opportunity from you Milos"
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
                <Card style={style.card}>
                    <CardHeader
                        titleColor="#FFF"
                        subtitleColor="#FFF"
                        style={style.card.header}
                        title="Milos Nikolic"
                        subtitle="Ponuda kredita"
                    />
                    <CardTitle
                        title="Great opportunity from you Milos"
                        subtitle="Flexible cache credit to fit your needs"
                    />
                    <CardText>
                        {"Your last trip was over 1 year ago."}
                        <br/>
                        {"Are you interested in cache loan."}
                    </CardText>
                    <CardActions>
                        <FlatButton label="Interested"/>
                        <FlatButton label="Not Interested"/>
                    </CardActions>
                </Card>
                <Card style={style.card}>
                    <CardHeader
                        titleColor="#FFF"
                        subtitleColor="#FFF"
                        style={style.card.header}
                        title="Milos Nikolic"
                        subtitle="Ponuda kredita"
                    />
                    <CardTitle
                        title="Great opportunity from you Milos"
                        subtitle="Flexible cache credit to fit your needs"
                    />
                    <CardText>
                        {"Your last trip was over 1 year ago."}
                        <br/>
                        {"Are you interested in cache loan."}
                    </CardText>
                    <CardActions>
                        <FlatButton label="Interested"/>
                        <FlatButton label="Not Interested"/>
                    </CardActions>
                </Card>
            </div>
        );
    }
}
