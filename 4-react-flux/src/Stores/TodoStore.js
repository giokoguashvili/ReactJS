import React from 'react';
import { EventEmitter } from 'events';

class TodoStore extends EventEmitter {
    constructor(){
        super();
        this.todos = [
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
                }
            ];
    }

    asLiElements(Todo) {
        console.log(Todo);
        return this.todos
                .map((item) =>{
                    return <Todo key={item.id} {...item}/>
                });
    }
}

const todoStore = new TodoStore;
export default todoStore;