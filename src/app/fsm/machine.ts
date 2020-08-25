import { Machine } from 'xstate';

import Todo from '../model/todo';
import Todos from '../model/todos';


export const  todoMachine = Machine({
    id: 'todos',
    initial: 'todos',
    context: {
        todos: [
            {
                id: 1001,
                title: 'make breakfast',
                completed: false
            },
            {
                id: 1002,
                title: 'clean bed room',
                completed: false
            }
        ]
    },
    states: {
        todos: {
            on: {
            ADD_TODO: "addTodo",
            EDIT_TODO: "updateTodo",
            DELETE_TOTO: "confirm"
            }
        },
        addTodo: {
            on: {
            SAVE: {
                target: "todos",
                actions: ["add_todo"]
            },
            CANCEL: "todos"
            }
        },
        updateTodo: {
            on: {
            SAVE: {
                target: "todos",
                actions: ["update_todo"]
            },
            CANCEL: "todos"
            }
        },
        confirm: {
            on: {
            SUBMIT: {
                target: "todos",
                actions: ["delete_todo"]
            },
            CANCEL: "todos"
            }
        }
        }
    },
    {
        actions: {
            add_todo: (context, event) => {
                console.log('adding todo !');
            },
            update_todo: (context, event) => {
                console.log('editing todo !');
            },
            delete_todo: (context, event) => {
                console.log(`deleting todo !`);
            },  
            get_todos: (context, event) => {
                console.log(`getting todos list`);
            },
            get_Todo: (context, event) => {
                console.log(`getting todo for id`);
            }
        }
    }
);