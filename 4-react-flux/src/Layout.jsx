import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';


const propTypes = {
}

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
        this.handleAppBarIconClick = this.handleAppBarIconClick.bind(this);
    }

    handleAppBarIconClick(){
        console.log(this.state.open);
        this.setState({open: !this.state.open});
    }

    render() {
        return (
            <MuiThemeProvider>
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
            </MuiThemeProvider>
        );
    }
}

Layout.propTypes = propTypes;

export default Layout;