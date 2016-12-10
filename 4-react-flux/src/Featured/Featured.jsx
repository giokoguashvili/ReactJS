
import React, { Component, PropTypes } from 'react';
import Todo from './Todo';
import styles from './css/styles';

const propTypes = {
}

class Featured extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    id: 15,
                    text: 'user Babel',
                    complete: true,
                },
                {
                    id: 17,
                    text: 'user ESlint',
                    complete: false,
                },
                {
                    id: 19,
                    text: 'user React',
                    complete: true,
                },
            ]
        };
    }

    render() {
        var TodoComponents = this.state
            .todos.map((item) =>{
                return <Todo key={item.id} {...item}/>
            });
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