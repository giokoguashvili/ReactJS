
import React, { Component, PropTypes } from 'react';

const propTypes = {
}

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1>
                Home
            </h1>
        );
    }
}

Home.propTypes = propTypes;

export default Home;