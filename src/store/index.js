import { createStore } from 'vuex'

export default createStore({
    state: {
        author: "Valdemar Vreeman",
        header: "To Do list",
        todos: [{
                text: 'Making a cup of coffee',
                checked: false,
                update: false,
            },
            {
                text: 'Making an VueJS todo app',
                checked: false,
                update: false,
            },
            {
                text: 'Pusblishing graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final',
                checked: false,
                update: false,
            },
            {
                text: 'Walk a couple miles',
                checked: false,
                update: false,
            },
            {
                text: 'Walk a couple miles',
                checked: false,
                update: false,
            }
        ]
    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {}
})