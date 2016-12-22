import React, { Component, PropTypes } from 'react'
import { ListItem } from 'material-ui/List'

class Todo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
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

export default Todo;