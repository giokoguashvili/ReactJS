import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Todo from '../components/Todo'

const propTypes = {
}

class TodoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                {this.props.todos.map((item) => 
                    <li 
                        key={item.id} 
                        style={{
                            textDecoration: item.completed ? 'line-through' : 'none'
                        }}
                    >
                        <Todo 
                            id={item.id} 
                            text={item.text} 
                            onDeleteBtnClick={this.props.handleDeleteBtnClick}
                            onTodoClick={this.props.handleTodoClick}
                        />
                    </li>
                )}                    
            </ul>
        );
    }
}

TodoList.propTypes = propTypes;

export default TodoList;
