import ActionTypes from '../constants/ActionTypes'

let todoId = 0;

const todos = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.ADD_TODO:
            return [
                ...state,
                {  
                    id: todoId++,
                    text: action.text,
                    completed: false
                }
            ];
        case ActionTypes.DELETE_TODO:
            return state.filter((item) => item.id !== action.todoId);
        case ActionTypes.TOGGLE_TODO:
            return state.map((item) => {
                if (item.id === action.todoId) {
                    return { ...item, completed: !item.completed }
                }
                return item;
            });
        default:
            return state;
    }
} 

export default todos;
