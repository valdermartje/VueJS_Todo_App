<template>
    <!-- TEMPLATE FOR THE TODOS -->
    <div v-for="(todo) in todos" :key="todo.id">
      <Todo 
        :deleteTodo="deleteTodo" 
        :todo="todo.text" 
        :index="todo.id" 
        :check="check" 
        v-on:click="check(todo.id)" 
      />
    </div>

</template>

<script>

import Todo from './Todo'

export default {
    name: 'Todolist',
    props: {
        todos: Array,
    },
    components: {
        Todo
    }
}
</script>

<style scoped>

</style>