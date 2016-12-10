
import React, { Component, PropTypes } from 'react';
import Menu from './Menu';
import styles from './css/styles.css'

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
                <div style="">
                    {this.props.children}             
                </div>     
            </div>
        );
    }
}

Layout.propTypes = propTypes;

export default Layout;