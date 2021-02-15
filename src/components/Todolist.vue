<template>
    <!-- TEMPLATE FOR THE TODOS -->
    <div v-for="(todo, index) in todos" :key="index">
      <Todo 
        :todo="todo.text" 
        :index="index" 
        :checked="todo.checked"
      
        :update="todo.update"
        
        :checkTodo="checkTodo"
        :updateTodo="updateTodo"
        :deleteTodo="deleteTodo"
      />
    </div>
    <span>{{ todos.length === 0 ? "+ Add a Todo" : "" }}</span>

</template>

<script>

import Todo from './Todo'

export default {
    name: 'Todolist',
    props: {
        todos: Array,

        // update: Boolean,
        checkTodo: Function,

        updateTodo: Function,
        deleteTodo: Function
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