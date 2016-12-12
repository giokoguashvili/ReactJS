import React, { Component, PropTypes } from 'react';
import Todo from './Todo';
import CustomInput from '../CustomInput/CustomInput';
import { List } from 'material-ui/List';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import styles from './css/styles';
import todoStore from '../stores/todoStore';
import * as TodoActions from '../actions/TodoActions';




const propTypes = {
}

class Featured extends Component {
    constructor(props) {
        super(props);
        this.state = { dialogIsOpen: false, todoItemId: null };
        this.handeClickOnDeleteUnCompleteTodo = this.handeClickOnDeleteUnCompleteTodo.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.onDialogBtnClick = this.onDialogBtnClick.bind(this);
    }

    createTodo(inputData){
        TodoActions.createTodo(inputData);
    }
    
    componentWillMount(){
        todoStore.addListener('change', () => {
            this.forceUpdate();
        });
    }

    handeClickOnDeleteUnCompleteTodo(todoItemId) {
        this.setState({ dialogIsOpen: true, todoItemId });
    }

    handleClose(ok, todoItemId) {
        this.setState({ dialogIsOpen: false });
        if (ok) {
            TodoActions.removeTodo(todoItemId)
        }
    }

    onDialogBtnClick(ok) {
        return (todoItemId) => {
            this.handleClose(ok, this.state.todoItemId);
        };
    }

    render() {
        const dialogActions = [
                <FlatButton
                    label="Cancel"
                    primary={true}
                    onTouchTap={this.onDialogBtnClick(false)}
                />,
                <FlatButton
                    label="OK"
                    primary={true}
                    keyboardFocused={true}
                    onTouchTap={this.onDialogBtnClick(true)}
                />,
            ];
        const style = {
            margin: 15,
        };
        var TodoComponents = todoStore.getAllTodos()
                .map((item) =>{
                    return <Todo key={item.id} {...item} onDelete={this.handeClickOnDeleteUnCompleteTodo}/>
                });
        return (
            <div class={styles.center}>
                <h1>Todos</h1>
                <CustomInput onAddBtnClick={this.createTodo.bind(this)}/>
                <List>
                   {TodoComponents}
                </List>
                <Dialog
                    title="Confirmation Modal"
                    actions={dialogActions}
                    modal={false}
                    open={this.state.dialogIsOpen}
                    onRequestClose={this.handleClose}
                >
                    Do you want delete uncompleted todo?
                </Dialog>
            </div>
        );
    }
}

Featured.propTypes = propTypes;

export default Featured;