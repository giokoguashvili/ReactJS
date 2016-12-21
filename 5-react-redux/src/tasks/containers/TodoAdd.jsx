import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const TodoAdd = ({ dispatch }) => {
    let inputRef;
    return (
        <form
            onSubmit={(e) =>{
                e.preventDefault();
                dispatch(addTodo(inputRef.value))
                inputRef.value = '';
            }} 
        >
            <input 
                ref={(node) => inputRef = node}
            />
            <button type="">ADD</button>
        </form>
    );
}

export default connect()(TodoAdd);