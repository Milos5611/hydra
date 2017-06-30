import {Toolbar, ToolbarGroup, ToolbarTitle} from "material-ui/Toolbar";
import ChartIcon from "material-ui/svg-icons/editor/insert-chart";
import DescriptionIcon from "material-ui/svg-icons/action/description";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import NavigationExpandMoreIcon from "material-ui/svg-icons/navigation/expand-more";
import React from "react";
/*import { Redirect } from "react-router-dom";*/
import SubjectIcon from "material-ui/svg-icons/action/subject";
import {grey500} from "material-ui/styles/colors";

const Header = () => (
    <Toolbar>

        <ToolbarGroup>
            <ToolbarTitle text="PISA MainLevel" />
        </ToolbarGroup>

        <ToolbarGroup firstChild>
            <IconMenu iconButtonElement={
                <IconButton touch>
                    <SubjectIcon color={grey500}/>
                </IconButton>
            }
            >
                <MenuItem primaryText="View Templates" />
                <MenuItem primaryText="View Indicators"/>
            </IconMenu>

            <IconMenu iconButtonElement={
                <IconButton touch>
                    <DescriptionIcon color={grey500}/>
                </IconButton>
                }
            >
                <MenuItem primaryText="Data Collection"/>
            </IconMenu>

            <IconMenu iconButtonElement={
                <IconButton touch>
                    <ChartIcon color={grey500}/>
                </IconButton>
            }
            >
                <MenuItem primaryText="Indicator Reports"/>
                <MenuItem primaryText="Template Reports"/>
                <MenuItem primaryText="Program Reports"/>
            </IconMenu>
        </ToolbarGroup>

        <IconMenu
            iconButtonElement={
                <IconButton touch>
                    <NavigationExpandMoreIcon color={grey500}/>
                </IconButton>
            }
        >
            <MenuItem primaryText="About" />
            <MenuItem primaryText="Logout" />
        </IconMenu>

    </Toolbar>
);

export default Header;
