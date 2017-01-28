import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'

const mapStateToProps = (state, ownProps) => ({
    active: state.todos.visibilityFilter === ownProps.filter
});

const dispatchToProps =
    (dispatch, ownProps) => ({
        handleOnClick() {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    });

const filterLinkContainer = connect(
    mapStateToProps,
    dispatchToProps
);

export default filterLinkContainer; 