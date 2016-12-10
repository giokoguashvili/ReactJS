import React, { Component, PropTypes } from 'react';

const propTypes = {
}

class Todo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>
                {this.props.text}
            </li>
        );
    }
}

Todo.propTypes = propTypes;

export default Todo;