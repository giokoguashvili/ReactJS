
import React, { Component, PropTypes } from 'react';

const propTypes = {
}

class Welcome extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1>Welcome!</h1>
        );
    }
}

Welcome.propTypes = propTypes;

export default Welcome;