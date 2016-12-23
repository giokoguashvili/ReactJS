import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'

const mapStateToProps = (state, ownProps) => {
    return {
        active: state.todos.visibilityFilter === ownProps.filter
    }
};

const dispatchToProps = (dispatch, ownProps) => {
    return {
        handleOnClick: () =>
            dispatch(setVisibilityFilter(ownProps.filter))
    }
}

const filterLinkContainer = connect(
    mapStateToProps,
    dispatchToProps
); 

export default filterLinkContainer; 