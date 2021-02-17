<template>
    <!-- TEMPLATE FOR THE TODOS -->
    <div v-for="(todo, index) in todos" :key="index">
      <Todo 
        :data="todo"
      />

    </div>
    <span>{{ getTodosCount === 0 ? "+ Add a Todo" : "" }}</span>

</template>

<script>

import Todo from './Todo'
import { mapGetters, mapState } from 'vuex'


export default {
    name: 'Todolist',
    props: {
        checkTodo: Function,
        updateTodo: Function,
        deleteTodo: Function
    },
    computed: {

        ...mapState([
            'todos'
        ]),

        ...mapGetters([
            'getTodosCount'
        ])
    },
    components: {
        Todo
    }
}
</script>

<style scoped>
    span {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
</style>