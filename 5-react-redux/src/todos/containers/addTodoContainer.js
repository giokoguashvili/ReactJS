import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const dispatchToProps = (dispatch) => {
    return {
        handleTodoAddSubmit: (inputTextValue) => {
            dispatch(addTodo(inputTextValue));
        }
    };
};
export default connect(null, dispatchToProps);