import React, { Component, PropTypes } from 'react';
import visibleTodoListContainer from '../containers/visibleTodoListContainer'
import Todo from './Todo'
import { List } from 'material-ui/List'

class VisibleTodoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <List>
                {this.props.todos.map((item) => 
                    <Todo
                        key={item.id}
                        {...item} 
                        onDeleteBtnClick={this.props.handleDeleteBtnClick}
                        onTodoClick={this.props.handleTodoClick}
                    />
                )}      
            </List>
        );
    }
}

export default visibleTodoListContainer(VisibleTodoList);
