import React, { Component, PropTypes } from 'react';
import Todo from './Todo';
import styles from './css/styles';
import todoStore from '../Stores/todoStore';

const propTypes = {
}

class Featured extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var TodoComponents = todoStore
            .asLiElements(Todo);
        return (
            <div class={styles.center}>
                <h1>Todos</h1>
                <ul>
                    {TodoComponents}
                </ul>
            </div>
        );
    }
}

Featured.propTypes = propTypes;

export default Featured;