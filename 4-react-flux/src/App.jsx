import React, { Component, PropTypes } from 'react';
import NavLink from './NavLink';
import Home from './Home';
import Layout from './Layout';

const propTypes = {
}

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MuiThemeProvider>
                <Layout />
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

App.propTypes = propTypes;

export default App;


            // <div>
            //     App
            //     <h1>React Router</h1>
            //     <ul role="nav">
            //         <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
            //         <li>
            //             <NavLink to="/About">About</NavLink>
            //         </li>
            //         <li>
            //             <NavLink to="/Repos/kogoia/react-samples">Repos</NavLink>
            //         </li>
            //         <li>
            //             <NavLink to="/Other/kogoia/react-samples">Other</NavLink>
            //         </li>
            //     </ul>
            //     {this.props.children}
            // </div>