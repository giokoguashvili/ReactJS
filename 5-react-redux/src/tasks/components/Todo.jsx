import React, { Component, PropTypes } from 'react'
import { ListItem } from 'material-ui/List'
import FlatBotton from 'material-ui/FlatButton'
import FontIcon from 'material-ui/FontIcon';

class Todo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ListItem
                onClick={() => this.props.onTodoClick(this.props.id)}
                rightIconButton={
                    <FlatBotton
                        onClick={() => this.props.onDeleteBtnClick(this.props.id)}
                        icon={<FontIcon className="material-icons">delete</FontIcon>}
                        style={{marginTop: 5}}
                    />
                }
            >
                <span
                    style={{
                        textDecoration: this.props.completed ? 'line-through' : 'none'
                    }} 
                >
                    {this.props.text}
                </span> 

            </ListItem>
        );
    }
}

export default Todo;