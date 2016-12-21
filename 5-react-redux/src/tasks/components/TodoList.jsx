import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Todo from '../components/Todo'
import { deleteTodo, toggleTodo } from '../actions'

const propTypes = {
}

class TodoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                {this.props.todos.map((item) => 
                    <li 
                        key={item.id} 
                        style={{
                            textDecoration: item.completed ? 'line-through' : 'none'
                        }}
                    >
                        <Todo 
                            id={item.id} 
                            text={item.text} 
                            onDeleteBtnClick={this.props.handleDeleteBtnClick}
                            onTodoClick={this.props.handleTodoClick}
                        />
                    </li>
                )}                    
            </ul>
        );
    }
}

TodoList.propTypes = propTypes;

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
        return todos
        case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed)
    }
}

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.tasks.todos, state.tasks.visibilityFilter),
    }
}

const mapDispatchToPros = (dispatch) => {
    return {
        handleDeleteBtnClick: (todoId) => {
            dispatch(deleteTodo(todoId));
        },
        handleTodoClick: (todoId) => {
            dispatch(toggleTodo(todoId));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToPros
)(TodoList);
