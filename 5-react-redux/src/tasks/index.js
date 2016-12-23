import { connect } from 'react-redux'
import Tasks from './components/Tasks'

const mapStateToProps = (state) => {
    return {
        todos: state.tasks.todos
    }
}

export default connect(mapStateToProps)(Tasks);