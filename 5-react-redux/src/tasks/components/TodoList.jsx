import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Todo from '../components/Todo'
import { List, ListItem } from 'material-ui/List'

class TodoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <List>
                {this.props.children.map((item) =>
                    <ListItem >
                        {item}
                    </ListItem>
                )}   
            </List>
        );
    }
}

        //   {this.props.todos.map((item) => 
        //             <Todo 
        //                 key={item.id} 
        //                 id={item.id} 
        //                 text={item.text} 
        //                 onDeleteBtnClick={this.props.handleDeleteBtnClick}
        //                 onTodoClick={this.props.handleTodoClick}
        //             />
        //         )}    

export default TodoList;
