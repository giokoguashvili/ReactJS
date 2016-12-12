import React from 'react';
import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class TodoStore extends EventEmitter {
    constructor(){
        super();
        this.todos = [
                {
                    id: 15,
                    text: 'use Babel',
                    complete: true,
                },
                {
                    id: 17,
                    text: 'use ESlint',
                    complete: false,
                },
                {
                    id: 19,
                    text: 'use React',
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

    completeTodo({ id, complete }) {
        this.todos = this.todos
                        .map((item) => {
                            if (item.id === id) {
                                return {
                                    id: item.id,
                                    text: item.text,
                                    complete
                                }
                            }
                            return item;
                        });
        this.emit('change');
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
            case 'COMPLETE_TODO': {
                this.completeTodo(action);
                break;
            }
        }
    }


    asLiElements(Todo) {
        return this.todos
                .map((item) =>{
                    return <Todo key={item.id} {...item}/>
                });
    }
}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));

window.todoStore = todoStore;
export default todoStore;