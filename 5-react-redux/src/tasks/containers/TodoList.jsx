import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Todo from '../components/Todo'
import { deleteTodo } from '../actions'

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
                    <li key={item.id}>
                        <Todo id={item.id} text={item.text} onDeleteBtnClick={this.props.handleDeleteBtnClick}/>
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
        todos: getVisibleTodos(state.tasks.todos, state.tasks.visibilityFilter)
    }
}

const mapDispatchToPros = (dispatch) => {
    return {
        handleDeleteBtnClick: (todoId) => {
            dispatch(deleteTodo(todoId));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToPros
)(TodoList);
