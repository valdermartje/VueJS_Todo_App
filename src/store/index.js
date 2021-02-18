import { createStore } from "vuex";
import { v1 } from 'uuid'

const store = createStore({
    state: {
        author: "Valdemar Vreeman",
        header: "To Do list",
        todos: [{
                id: 1,
                todo: "Making a cup of coffee",
                checked: false,
            },
            {
                id: 2,
                todo: "Making an VueJS todo app",
                checked: false,
            },
            {
                id: 3,
                todo: "Walk a couple miles",
                checked: false,
            },
        ],
    },
    getters: {
        reverseHeader: (state) => {
            // REVERSE HEADER
            return state.header
                .split("")
                .reverse()
                .join("");
        },
        getAuthor: (state) => {
            return state.author;
        },
        getTodos: (state) => {
            // GET ALL THE TODOS
            return state.todos;
        },
        getTodosCount: (state) => {
            // GET THE TODOS IN A NUMBER FOR OUTPUT
            return state.todos.length;
        },
        getNewTodoName: (state) => {
            return state.addTodoName;
        }
    },
    mutations: {

        // * CHECKTODO MUTATION METHOD - in VueX
        checkTodo: (state, id) => {
            const todos = state.todos;

            // todo.checked = !todo.checked;

            // todos[id].checked = !todos[id].checked;

            let todo = todos.filter(todo => todo.id === id);
            todo.checked = !todo.checked;
        },

        // * WORKING MUTATION METHOD - in VueX
        addTodo: (state, newTodoName) => {
            let todos = state.todos;

            todos.push({
                id: v1(),
                todo: newTodoName,
                checked: false,
                update: false,
            });
        },

        // * WORKING MUTATION METHOD - in VueX
        updateTodo: (state, payload) => {
            let todos = state.todos;

            todos[payload.updatedAt].todo = payload.updatedTodoName;
        },

        // * DELETE MUTATION METHOD - in VueX
        deleteTodo: (state, id) => {
            const todos = state.todos;

            state.todos = todos.filter((todo) => todo.id !== id);
        },
    },
    actions: {},
    modules: {},
});

export default store;