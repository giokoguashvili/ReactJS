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
        case ActionTypes.REMOVE_TODO:
            return state.filter((item) => item.id !== action.todoId);
        default:
            return state;
    }
} 

export default todos;
