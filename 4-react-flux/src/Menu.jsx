
import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const propTypes = {
}

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    render() {
        return (
            <div>
                <AppBar
                    title="App"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={this.handleAppBarIconClick}
                />
                <Drawer open={this.state.open}>
                    <AppBar
                        title="Menu"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        onLeftIconButtonTouchTap={this.handleAppBarIconClick}
                    />
                    <MenuItem>Menu Item</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                </Drawer>  
            </div>
        );
    }
}

Menu.propTypes = propTypes;

export default Menu;