import React from "react";
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import { Avatar } from "material-ui";

const style = {
    card: {
        width: "43%",
        float: "left",
        margin: "20px"
    }
};

const CardExampleWithAvatar = () => (
    <Card style={style.card}>
        <CardHeader
            title="Milos Nikolic"
            subtitle="Ponuda kredita"
            avatar={ <Avatar src="../../images/app/YES_3580.jpg" />}
        />
        <CardMedia
            overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle"/>}
        >
            <img src="www/images/app/SOG_logo.jpg" alt=""/>
        </CardMedia>
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
);

export default CardExampleWithAvatar;
