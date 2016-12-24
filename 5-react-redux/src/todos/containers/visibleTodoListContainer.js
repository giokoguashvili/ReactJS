import { connect } from 'react-redux'
import { deleteTodo, toggleTodo } from '../actions'

const getVisibleTodos = (todoItems, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return todoItems
        case 'SHOW_COMPLETED':
            return todoItems.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todoItems.filter(t => !t.completed)
    }
}

const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos.todoItems, state.todos.visibilityFilter),
    }
}

const mapDispatchToPros = (dispatch) => ({
    handleDeleteBtnClick(todoId) {
        dispatch(deleteTodo(todoId));
    },
    handleTodoClick(todoId) {
        dispatch(toggleTodo(todoId));
    }
})

const visibleTodoListContainer = connect(
    mapStateToProps,
    mapDispatchToPros
);

export default visibleTodoListContainer;
