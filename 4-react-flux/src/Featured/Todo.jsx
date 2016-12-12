import React, { Component, PropTypes } from 'react';
import * as TodoActions from '../actions/TodoActions';

import { ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

const propTypes = {
}

class Todo extends Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        this.removeTodo = this.removeTodo.bind(this);
    }

    removeTodo(){
        console.log(this.props.id);
        TodoActions.removeTodo(this.props.id);
    }

    render() {
        let style = {
            width: 235
        };
        let flatButtonStyle = {
            top: 5
        };
        return (
            <ListItem 
                style={style}
                primaryText={this.props.text} 
                leftCheckbox={<Checkbox />} 
                rightIconButton={<FlatButton
                                    style={flatButtonStyle}
                                    secondary={true}
                                    icon={<i class="fa fa-trash-o" aria-hidden="true"></i>}
                                    onClick={this.removeTodo}
                                />}        
            />
        );
    }
}

Todo.propTypes = propTypes;

export default Todo;