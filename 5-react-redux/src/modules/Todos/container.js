import { connect } from 'react-redux'

const mapStateToProps =
    (state) => ({
        todos: state.todos.todoItems
    });

export default connect(mapStateToProps);