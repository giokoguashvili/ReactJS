import React, { Component, PropTypes } from 'react';
import * as TodoActions from '../actions/TodoActions';

const propTypes = {
}

class Todo extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    removeTodo(){
        console.log(this.props.id);
        TodoActions.removeTodo(this.props.id);
    }

    render() {
        return (
            <li>
                {this.props.text}
                <button onClick={this.removeTodo.bind(this)}>X</button>
            </li>
        );
    }
}

Todo.propTypes = propTypes;

export default Todo;