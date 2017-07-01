import React from "react";
import { Component } from "react";
import IconMenu from "material-ui/IconMenu";
import IconButton from "material-ui/IconButton";
import NavigationExpandMoreIcon from "material-ui/svg-icons/navigation/expand-more";
import MenuItem from "material-ui/MenuItem";
import RaisedButton from "material-ui/RaisedButton";
import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from "material-ui/Toolbar";

const style = {
    paper: {
        backgroundColor: "#E20030"
    }
};

export default class Home extends Component {

    constructor( props ) {
        super(props);
    }

    render() {
        return (
            <Toolbar style={style.paper}>
                <ToolbarGroup firstChild/>
                <ToolbarGroup>
                    <ToolbarTitle text="Options"/>
                    <ToolbarSeparator />
                    <RaisedButton
                        label="Create Broadcast"
                        primary
                    />
                    <IconMenu
                        iconButtonElement={
                            <IconButton touch>
                                <NavigationExpandMoreIcon />
                            </IconButton>
                        }
                    >
                        <MenuItem primaryText="Download"/>
                        <MenuItem primaryText="More Info"/>
                    </IconMenu>
                </ToolbarGroup>
            </Toolbar>
        );
    }
}
