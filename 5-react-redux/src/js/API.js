import { v4 } from 'node-uuid'

const fakeDatabase = {
    todos: [
            {
                id: 'f54c9475-7bd5-40f1-ac9a-c7fa285c385a',
                text: 'React',
                completed: true
            },
            {
                id: 'db72b4e7-a476-4fd4-a16f-fb3e67566139',
                text: 'Redux',
                completed: false
            },
            {
                id: 'df5590ad-0e54-4e8c-80f5-d84941e1e0da',
                text: '.Net Core',
                completed: false
            }
    ]
}

const deley = (ms) =>
    new Promise((res) => setTimeout(() => { res(fakeDatabase); }, ms));

export const fetchTodos = (filter) => 
    deley(1000)
        .then((response) => {
            switch (filter) {
                case "all":
                    return response.todos;
                case "active":
                    return response.todos.filter(t => !t.completed);
                case "completed":
                    return response.todos.filter(t => t.completed);
                default:
                    throw new Error(`Unknown filter: ${filter}`);
            }
        });