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

    deleteTodo(id) {
        this.todos = this.todos.filter((item) => item.id !== id);
        this.emit('change');
    }

    addTodo(text) {
        console.log(this.todos);
        this.todos.push({
            id: Date.now(),
            text,
            complete: false
        })

        this.emit('change');
    }
    asLiElements(Todo) {
        return this.todos
                .map((item) =>{
                    return <Todo key={item.id} {...item}/>
                });
    }

    handleActions(action) {
        switch(action.type){
            case 'CREATE_TODO': {
                this.addTodo(action.text);
                break;
            }
            case 'DELETE_TODO': {
                this.deleteTodo(action.id);
                break;
            }
        }
    }
}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));

window.todoStore = todoStore;
export default todoStore;