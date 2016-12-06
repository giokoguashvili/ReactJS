import React, { Component, PropTypes } from 'react';
import NavLink from './NavLink';
import Home from './Home';

const propTypes = {
}

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                App
                <h1>React Router</h1>
                <ul role="nav">
                    <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
                    <li>
                        <NavLink to="/About">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Repos/kogoia/react-samples">Repos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Other/kogoia/react-samples">Other</NavLink>
                    </li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = propTypes;

export default App;