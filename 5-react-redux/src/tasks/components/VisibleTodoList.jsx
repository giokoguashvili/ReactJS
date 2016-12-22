import React, { Component, PropTypes } from 'react';
import visibleTodoListContainer from '../containers/visibleTodoListContainer'
import TodoList from './TodoList'
import Todo from './Todo'

class VisibleTodoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TodoList>
                {this.props.todos.map((item) => 
                    <Todo 
                        key={item.id}
                        id={item.id} 
                        text={item.text} 
                        onDeleteBtnClick={this.props.handleDeleteBtnClick}
                        onTodoClick={this.props.handleTodoClick}
                    />
                )}      
            </TodoList>
        );
    }
}

export default visibleTodoListContainer(VisibleTodoList);
