import ActionTypes from '../Constants'

let todoId = 0;

const todos = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.ADD_TODO:
            return [
                ...state,
                {  
                    id: todoId++,
                    text: action.text,
                    complete: false
                }
            ];
        case 'DEC':
            return state - 1;
        default:
            return state;
    }
} 

export default todos;
