import React, { Component } from 'react'
import VisibleTodoList from './VisibleTodoList'
import TodoAdd from './TodoAdd'
import TodosFooter from './TodosFooter'
import main from './css/main.css'

class Tasks extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div  class={main.center} style={{width: 460}}>
                <TodoAdd />
                <TodosFooter />
                <VisibleTodoList />
            </div>
        );
    }
}

export default Tasks;