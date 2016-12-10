
import React, { Component, PropTypes } from 'react';
import Menu from './Menu';
import style from './css/styles.css';

const propTypes = {
}

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    render() {
        console.log(style);
        return (
            <div>
                <Menu/>
                <div class={style.center}>
                    {this.props.children}             
                </div>     
            </div>
        );
    }
}

Layout.propTypes = propTypes;

export default Layout;