import { connect } from 'react-redux'
import { deleteTodo, toggleTodo } from './actions'
import { withRouter } from 'react-router'

const getVisibleTodos = (todoItems, filter) => {
    switch (filter) {
        case 'all':
            return todoItems
        case 'completed':
            return todoItems.filter(t => t.completed)
        case 'active':
            return todoItems.filter(t => !t.completed)
    }
}

const mapStateToProps = (state, { params }) => ({
    todos: getVisibleTodos(state.todos.todoItems, params.filter || 'all')
});

const mapDispatchToPros = (dispatch) => ({
    handleDeleteBtnClick(todoId) {
        dispatch(deleteTodo(todoId));
    },
    handleTodoClick(todoId) {
        dispatch(toggleTodo(todoId));
    }
});

const visibleTodoListContainer = (component) =>
    withRouter(connect(
        mapStateToProps,
        mapDispatchToPros
    )(component));

export default visibleTodoListContainer;
