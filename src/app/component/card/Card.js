import React from "react";
import { Card, CardActions, CardHeader, CardTitle, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

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

const CardExampleWithAvatar = () => (
    <div>
        <Card style={style.card}>
            <CardHeader
                titleColor="#FFF"
                subtitleColor="#FFF"
                style={style.card.header}
                title="Milos Nikolic"
                subtitle="Ponuda kredita"
            />
            <CardTitle title="Great opportunity from you Milos" subtitle="Flexible cache credit to fit your needs"/>
            <CardText>
                Your last trip was over 1 year ago.
                <br/>
                Are you interested in cache loan.
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
            <CardTitle title="Great opportunity from you Milos" subtitle="Flexible cache credit to fit your needs"/>
            <CardText>
                Your last trip was over 1 year ago.
                <br/>
                Are you interested in cache loan.
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
            <CardTitle title="Great opportunity from you Milos" subtitle="Flexible cache credit to fit your needs"/>
            <CardText>
                Your last trip was over 1 year ago.
                <br/>
                Are you interested in cache loan.
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
            <CardTitle title="Great opportunity from you Milos" subtitle="Flexible cache credit to fit your needs"/>
            <CardText>
                Your last trip was over 1 year ago.
                <br/>
                Are you interested in cache loan.
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
            <CardTitle title="Great opportunity from you Milos" subtitle="Flexible cache credit to fit your needs"/>
            <CardText>
                Your last trip was over 1 year ago.
                <br/>
                Are you interested in cache loan.
            </CardText>
            <CardActions>
                <FlatButton label="Interested"/>
                <FlatButton label="Not Interested"/>
            </CardActions>
        </Card>
    </div>
);

export default CardExampleWithAvatar;
