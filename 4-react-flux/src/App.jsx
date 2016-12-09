import React, { Component, PropTypes } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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
                <Layout>
                    {this.props.children}
                </Layout>
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