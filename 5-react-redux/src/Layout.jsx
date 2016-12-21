/* @flow */
import React, { Component, PropTypes } from 'react';

const propTypes = {
}

class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

Layout.propTypes = propTypes;

export default Layout;