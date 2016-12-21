import React, { Component } from 'react'
import VisibleTodoList from './containers/VisibleTodoList'

class Tasks extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render(){
        return (
            <div>
                <VisibleTodoList />
            </div>
        );
    }
}

export default Tasks;