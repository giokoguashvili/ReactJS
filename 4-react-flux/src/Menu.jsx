
import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import NavLink from './NavLink';

const propTypes = {
}

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
        this.handleAppBarIconClick = this.handleAppBarIconClick.bind(this);
    }

    handleAppBarIconClick() {
        this.setState({ open: !this.state.open });
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
                    <MenuItem
                        containerElement={<NavLink to="/react-samples/Welcome"/>}
                        onTouchTap={this.handleAppBarIconClick}
                    >
                        Welcome
                    </MenuItem>
                    <MenuItem
                        containerElement={<NavLink to="/react-samples/Home"/>}
                        onTouchTap={this.handleAppBarIconClick}
                    >
                        Home
                    </MenuItem>
                    <MenuItem
                        containerElement={<NavLink to="/react-samples/Featured"/>}
                        onTouchTap={this.handleAppBarIconClick}
                    >
                        Featured
                    </MenuItem>
                </Drawer>  
            </div>
        );
    }
}

Menu.propTypes = propTypes;

export default Menu;