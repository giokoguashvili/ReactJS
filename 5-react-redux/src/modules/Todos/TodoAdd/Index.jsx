import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import container from './container'

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
                style={{marginLeft: 50}}
            />
        </form>
    );
}

export default container(TodoAdd);