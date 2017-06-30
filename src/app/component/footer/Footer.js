/* eslint-disable react/prefer-stateless-function,no-magic-numbers,react/jsx-no-bind,react/sort-comp,react/no-set-state */
import {BottomNavigation, BottomNavigationItem} from "material-ui/BottomNavigation";
import React, {Component} from "react";
import EuroSymbol from "material-ui/svg-icons/action/euro-symbol";
import IconLocationOn from "material-ui/svg-icons/communication/location-on";
import Paper from "material-ui/Paper";
import ThumbUp from "material-ui/svg-icons/action/thumb-up";

export default class Footer extends Component {
    state = {
        selectedIndex: 0,
    };
    select = (index) => this.setState({selectedIndex: index});
    
    render() {
        return (
            <Paper
                zDepth={1}
                className="footer"
            >
                <BottomNavigation selectedIndex={this.state.selectedIndex}>
                    <BottomNavigationItem
                        label="Thumbs Up Nico"
                        icon={<ThumbUp />}
                        onTouchTap={() => this.select(0)}
                    />
                    <BottomNavigationItem
                        label="Second Link"
                        icon={<EuroSymbol />}
                        onTouchTap={() => this.select(1)}
                    />
                    <BottomNavigationItem
                        label="Third Link"
                        icon={<IconLocationOn />}
                        onTouchTap={() => this.select(2)}
                    />
                </BottomNavigation>
            </Paper>
        );
    }
}
