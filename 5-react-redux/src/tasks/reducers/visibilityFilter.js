import ActionTypes from '../../Constants'

const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SHOW_ALL':
            return 'SHOW_ALL'
        default:
            return state;
    }
}

export default visibilityFilter;