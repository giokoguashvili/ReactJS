import React, { Component, PropTypes } from 'react';
import filterLinkContainer from '../containers/filterLinkContainer'

class FilterLink extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.active) {
            return (
                <span>{this.props.children}</span>
            );
        }
        return (
            <a 
                href="#"
                onClick={(e) => {
                     e.preventDefault();
                     this.props.handleOnClick();
                }}
            >
                {this.props.children}
            </a>
        );
    }
}

export default filterLinkContainer(FilterLink);