import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from './actions'
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

const mapStateToProps = (state, { params }) => {
    const filter = params.filter || 'all';
    return {
        todos: getVisibleTodos(state.todos.todoItems, filter),
        filter
    }
}

// const mapDispatchToPros = (dispatch) => ({
//     handleDeleteBtnClick(todoId) {
//         dispatch(deleteTodo(todoId));
//     },
//     handleTodoClick(todoId) {
//         dispatch(toggleTodo(todoId));
//     }
// });

const visibleTodoListContainer = (component) =>
    withRouter(connect(
        mapStateToProps,
        // mapDispatchToPros,
        actions
    )(component));

export default visibleTodoListContainer;
