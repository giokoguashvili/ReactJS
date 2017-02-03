import { ADD_FLASH_MESSAGE } from '../actions/types'
import shortid from 'shortid'

export default (state = [], action = {}) => {
    console.log(action)
    switch (action.type) {
        case ADD_FLASH_MESSAGE:
            return [
                ...state,
                {
                    id: shortid(),
                    ...action.message
                }
            ];
        default:
            return state;
    }
}