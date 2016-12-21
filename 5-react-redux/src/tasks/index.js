import { connect } from 'react-redux'
import Tasks from './Tasks'

const mapStateToProps = (state) => {
    return {
        todos: state.tasks.todos
    }
}

export default connect(mapStateToProps)(Tasks);