import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

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
                    <li>
                        <Link to="/About" activeStyle={{ color: 'red' }}>About</Link>
                    </li>
                    <li>
                        <Link to="/Repos/kogoia/react-samples" activeStyle={{ color: 'red' }}>Repos</Link>
                    </li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = propTypes;

export default App;