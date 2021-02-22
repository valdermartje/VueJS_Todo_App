import { createStore } from "vuex";
import { v1 } from 'uuid'

const store = createStore({
    state: {

        author: "Valdemar Vreeman",
        header: "To Do list",
        todos: [],
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

            let todo = todos.filter(todo => todo.id === id);
            todo[0].checked = !todo[0].checked;
        },

        // * WORKING MUTATION METHOD - in VueX
        addTodo: (state, newTodoName) => {
            const todos = state.todos;

            todos.push({
                id: v1(),
                todo: newTodoName,
                checked: false,
            });
        },

        // * WORKING MUTATION METHOD - in VueX
        updateTodo: (state, payload) => {
            const todos = state.todos;

            console.log(payload);

            let todo = todos.filter(element => element.id === payload.updatedAt);
            console.log(todo);
            todo[0].todo = payload.updatedTodoName;
        },

        // * DELETE MUTATION METHOD - in VueX
        deleteTodo: (state, id) => {
            const todos = state.todos;

            state.todos = todos.filter(todo => todo.id !== id);
        },
    },
    actions: {},
    modules: {},
});

export default store;