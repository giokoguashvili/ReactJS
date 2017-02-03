import { 
    ADD_FLASH_MESSAGE,
    DELETE_FLASH_MESSAGE 
} from '../actions/types'

import shortid from 'shortid'

export default (state = [], action = {}) => {
    switch (action.type) {
        case ADD_FLASH_MESSAGE:
            return [
                ...state,
                {
                    id: shortid(),
                    ...action.message
                }
            ];
        case DELETE_FLASH_MESSAGE:
            return state.filter(m => !m.id === action.id)
        default:
            return state;
    }
}