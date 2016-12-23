import React, { Component } from 'react'
import VisibleTodoList from './VisibleTodoList'
import TodoAdd from './TodoAdd'
import main from './css/main.css';

class Tasks extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render(){
        return (
            <div  class={main.center} style={{width: 400}}>
                <TodoAdd />
                <VisibleTodoList />
            </div>
        );
    }
}

export default Tasks;