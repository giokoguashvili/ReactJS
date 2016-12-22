import { connect } from 'react-redux'
import { deleteTodo, toggleTodo } from '../actions'

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

const visibleTodoListContainer = connect(
    mapStateToProps,
    mapDispatchToPros
);

export default visibleTodoListContainer;
