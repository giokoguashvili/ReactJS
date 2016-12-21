import React, { Component, PropTypes } from 'react';

const propTypes = {
}

class Todo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div 
                onClick={() => this.props.onTodoClick(this.props.id)}
            >
                <span>{this.props.text}</span> 
                <button
                    onClick={() => this.props.onDeleteBtnClick(this.props.id)}
                >
                    X
                </button>
            </div>
        );
    }
}

Todo.propTypes = propTypes;

export default Todo;