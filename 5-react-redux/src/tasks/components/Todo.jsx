import React, { Component, PropTypes } from 'react'
import { ListItem } from 'material-ui/List'

class Todo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ListItem
                onClick={() => this.props.onTodoClick(this.props.id)}
            >
                <span
                    style={{
                        textDecoration: this.props.completed ? 'line-through' : 'none'
                    }} 
                >
                    {this.props.text}
                </span> 
                <button
                    onClick={() => this.props.onDeleteBtnClick(this.props.id)}
                >
                    X
                </button>
            </ListItem>
        );
    }
}

export default Todo;