import ActionTypes from '../../ActionTypes'

export const setVisibilityFilter = (filter) => {
    return { type: ActionTypes.SET_VISIBILITY_FILTER, filter }
}