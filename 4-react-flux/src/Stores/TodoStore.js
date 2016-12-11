import React from 'react';
import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

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

    addTodo(text) {
        this.todos.push({
            id: new Date(),
            text,
            complete: false
        })

        this.emit('change');
    }
    asLiElements(Todo) {
        return this.todos
                .map((item) =>{
                    return <Todo key={item.id} text={item.text}/>
                });
    }

    handleActions(action) {
        switch(action.type){
            case 'CREATE_TODO': {
                this.addTodo(action.text);
            } 
        }
    }
}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));

window.todoStore = todoStore;
export default todoStore;