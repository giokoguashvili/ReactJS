
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
}

class NavLink extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
             <Link {...this.props} activeStyle={{ color: 'red' }}>{this.props.children}</Link>
        );
    }
}

NavLink.propTypes = propTypes;

export default NavLink;