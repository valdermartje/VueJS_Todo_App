<template>
    <nav class="submenu">
        <div class="total">
            <span>{{todos.length}} {{ todos.length !== 1 ? " todo's" : "todo"}}</span>
        </div>
        <div class="add">
            <input type="text" id="newTodoNameInputElement" value="" />
            
            <div v-on:click="addTodo()">
                <Image icon="add" alt="Add todo icon" />
            </div>
        </div>
    </nav>
</template>

<script>

import Image from './Image';

export default {
    name: 'Menu',
    components: {
        Image
    },
    data: () => {
        return {
            todoName: '',
        }
    },

    props: {
        todos: Object,
        addTodo: Function,
    },
}
</script>

<style scoped>
    nav.submenu {
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: space-between;
        /* margin: 20px 0; */
        padding: 20px;
    }

    nav.submenu .add {
        display: flex;
        align-items: center;
    }

    nav.submenu .add input {
        height: fit-content;
    }
</style>