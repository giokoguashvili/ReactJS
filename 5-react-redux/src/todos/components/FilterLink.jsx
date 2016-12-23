import React, { Component, PropTypes } from 'react';
import filterLinkContainer from '../containers/filterLinkContainer'
import FlatButton from 'material-ui/FlatButton'

class FilterLink extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.active) {
            return (
                <FlatButton
                    label={this.props.children}
                    secondary={true}
                />
            );
        }
        return (
            <FlatButton
                label={this.props.children}
                onClick={(e) => {
                     e.preventDefault();
                     this.props.handleOnClick();
                }}
                primary={true}
            />
        );
    }
}

export default filterLinkContainer(FilterLink);