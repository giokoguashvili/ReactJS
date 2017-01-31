import React, { Component, PropTypes } from 'react';
import container from './container'
import Todo from './Todo'
import { List } from 'material-ui/List'
import TodoDeleteModal from './TodoDeleteModal'

class VisibleTodoList extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.fetchData(this.props.filter);
    }

    componentDidUpdate(prevProps) {
        if (this.props.filter !== prevProps.filter) {
            this.fetchData(this.props.filter);
        }
    }

    fetchData(filter) {
        console.log(this.props);
         this.props.fetchTodos(filter);
    }

    render() {
        const { deleteTodo, toggleTodo } = this.props;
        return (
            <div>
                <List>
                    {this.props.todos.map((item) =>
                        <Todo
                            key={item.id}
                            {...item}
                            onDeleteBtnClick={deleteTodo}
                            onTodoClick={toggleTodo}
                            />
                    )}
                </List>
            </div>
        );
    }
}

export default container(VisibleTodoList);
