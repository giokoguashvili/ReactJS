import React, { Component } from 'react'
import VisibleTodoList from './components/VisibleTodoList'
import TodoAdd from './components/TodoAdd'

class Tasks extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render(){
        return (
            <div>
                <TodoAdd />
                <VisibleTodoList />
            </div>
        );
    }
}

export default Tasks;