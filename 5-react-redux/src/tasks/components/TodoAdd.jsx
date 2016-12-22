import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import addTodoContainer from '../containers/addTodoContainer'

const TodoAdd = ({ handleTodoAddSubmit }) => {
    let textFieldRef;
    return (
        <form
            onSubmit={(e) =>{
                e.preventDefault();
                handleTodoAddSubmit(textFieldRef.input.value)
                textFieldRef.input.value = '';
            }} 
        >
            <TextField ref={(node) => textFieldRef = node} hintText="Hint Text"/>
            <RaisedButton
                type="submit"
                label="ADD" 
                primary={true} 
            />
        </form>
    );
}

export default addTodoContainer(TodoAdd);