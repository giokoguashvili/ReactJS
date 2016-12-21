import React, { Component, PropTypes } from 'react';

const propTypes = {
}

class Todo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props)
        return (
            <div>
                {this.props.text}
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