<template>
    <nav class="submenu">
        <!-- ({{ checkedTodos.toString() }}) -->
        <div class="total">
            <span>{{amountTodos}} todos</span>
        </div>
        <div class="add">
            <input type="text" id="newTodoNameInputElement" value="" />
            
            <div v-on:click="addTodo()">
                <!-- <Image src="./../assets/add.svg" alt="Add todo button" /> -->
                <img src="./../assets/add.svg" alt="Delete your todo icon" draggable="false">
            </div>
        </div>
    </nav>
</template>

<script>

// import Image from './Image';

export default {
    name: 'Menu',
    // components: {
    //     Image
    // },
    data: () => {
        return {
            todoName: '',
        }
    },

    props: {
        // newTodoName: String,
        
        addTodo: Function,
        checkedTodos: Function
    },

    // methods: {
    //     giveTodoName: function(event) {
    //         this.todoName = event.target.value;
    //         this.$emit('newTodoName', this.message);
    //     }
    // }
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