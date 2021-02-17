import { createStore } from "vuex";

const store = createStore({
    state: {
        author: "Valdemar Vreeman",
        header: "To Do list",
        addTodoName: '',
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
                id: 4,
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
            id = id - 1;
            const object = state.todos;

            if (id === Number || id !== isNaN) {
                return (object[id].checked = !object[id].checked);
            } else {
                return null;
            }
        },

        // * WORKING, BUT WITH HARDCODED ELEMENT
        // TODO: make this in Vuex principles
        addTodo: (state, newTodo) => {
            let todos = state.todos;

            console.log(newTodo);

            // if (newTodo !== "" || newTodo.length !== 0) {
            todos.push({
                id: state.todos.length + 1,
                todo: this.addTodoName,
                checked: false,
                update: false,
            });
            // } else {
            //     return null;
            // }
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

            // console.log(result);

            // return todos.splice(id, 1);
        },
    },
    actions: {},
    modules: {},
});

export default store;