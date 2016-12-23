import React, { Component, PropTypes } from 'react'
import { ListItem } from 'material-ui/List'
import FlatBotton from 'material-ui/FlatButton'
import FontIcon from 'material-ui/FontIcon';
import Checkbox from 'material-ui/Checkbox'
import { blue500, red500, greenA200 } from 'material-ui/styles/colors';

class Todo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ListItem
                leftCheckbox={
                    <Checkbox
                        checked={this.props.completed}
                        onCheck={() => this.props.onTodoClick(this.props.id)}
                    />
                }
                rightIconButton={
                    <FlatBotton
                        onClick={() => this.props.onDeleteBtnClick(this.props.id)}
                        icon={
                            <FontIcon 
                                className="material-icons"
                                color={red500}
                            >
                                delete
                            </FontIcon>
                        }
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