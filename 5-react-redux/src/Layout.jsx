import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';

const propTypes = {
}

class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <AppBar
                    title="Title"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
                <div class="center">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

Layout.propTypes = propTypes;

export default Layout;