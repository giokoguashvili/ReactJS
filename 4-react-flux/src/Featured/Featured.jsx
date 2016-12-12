import React, { Component, PropTypes } from 'react';
import Todo from './Todo';
import CustomInput from '../CustomInput/CustomInput';
import { List } from 'material-ui/List';

import styles from './css/styles';
import todoStore from '../stores/todoStore';
import * as TodoActions from '../actions/TodoActions';




const propTypes = {
}

class Featured extends Component {
    constructor(props) {
        super(props);
    }

    createTodo(inputData){
        TodoActions.createTodo(inputData);
    }
    
    componentWillMount(){
        todoStore.addListener('change', () => {
            this.forceUpdate();
        });
    }

    render() {
        const style = {
            margin: 15,
        };
        var TodoComponents = todoStore
            .asLiElements(Todo);
        return (
            <div class={styles.center}>
                <h1>Todoss</h1>
                <CustomInput onAddBtnClick={this.createTodo.bind(this)}/>

                <List>
                   {TodoComponents}
                </List>
            </div>
        );
    }
}

Featured.propTypes = propTypes;

export default Featured;