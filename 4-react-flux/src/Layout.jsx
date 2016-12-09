
import React, { Component, PropTypes } from 'react';
import Menu from './Menu';

const propTypes = {
}

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    render() {
        return (
            <div>
                <Menu/> 
                {this.props.children}                 
            </div>
        );
    }
}

Layout.propTypes = propTypes;

export default Layout;