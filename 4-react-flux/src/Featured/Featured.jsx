import React, { Component, PropTypes } from 'react';
import Todo from './Todo';
import styles from './css/styles';
import todoStore from '../stores/todoStore';
import * as TodoActions from '../actions/TodoActions';

const propTypes = {
}

class Featured extends Component {
    constructor(props) {
        super(props);
    }

    createTodo(){
        TodoActions.createTodo();
    }
    
    componentWillMount(){
        todoStore.addListener('change', () => {
            this.forceUpdate();
        });
    }

    render() {
        var TodoComponents = todoStore
            .asLiElements(Todo);
        return (
            <div class={styles.center}>
                <h1>Todos</h1>
                <button onClick={this.createTodo.bind(this)}>Create TODO</button>
                <ul>
                    {TodoComponents}
                </ul>
            </div>
        );
    }
}

Featured.propTypes = propTypes;

export default Featured;