<template>
<!-- THIS IS A TEMPLATE FOR THE TODO CARD -->
    <div class="card" :key="index">
        <div class="card-container">
            <div class="content">
                <div v-on:click="checkTodo(index)">
                    <input type="checkbox" class="check-todo" :checked="checked" />
                </div>
                    <span 
                        class="description" 
                        :style="[
                            checked === true ? 'text-decoration: line-through': 'none',
                            update === true ? 'display: none' : 'display: block'
                        ]"    
                        v-on:click="checkTodo(index)"
                    > 
                        {{ todo }} 
                    </span>

                <input 
                    class="updateInputElement"
                    type="text" 
                    :value="todo" 
                    :style="update === true ? 'display: block' : 'display: none'"  
                />
            </div>
            <div class="options">
                <div class="edit-save">
                    <div class="edit" :style="update === true ? 'display: none' : 'display: block'" v-on:click="updateTodo(index)">
                        <img src="./../assets/edit.svg" alt="Edit your todo icon" draggable="false">
                    </div>
                    <div class="save" :style="update === true ? 'display: block' : 'display: none'" v-on:click="updateTodo(index)">
                        <img src="./../assets/save.svg" alt="Save your todo icon" draggable="false">
                    </div>
                </div>
                <div class="delete" v-on:click="deleteTodo(index)">
                    <!-- <Image src="./../assets/delete.svg" alt="Delete your todo icon" v-on:click="greet(index)" /> -->
                    <img 
                        src="./../assets/delete.svg" 
                        alt="Delete your todo icon" 
                        draggable="false" 
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>

// import Image from './Image';

export default {
    name: 'Todo',
    components: {
        // Image
    },
    props: {
        todo: String,
        index: Number,

        update: Boolean,
        checked: Boolean,

        checkTodo: Function,
        updateTodo: Function,
        deleteTodo: Function
    }
}

</script>

<style scoped>
    /* style for the todo card */
    .card {
        position: relative;
        width: initial;
        height: inherit;
        display: block;
        margin: 0 auto 20px;
        padding: 20px;

        background: #fff;
        border-radius: 2px;
        box-shadow: -5px -5px 5px 0 #f8f8f8,
                    10px 10px 10px 0 #f0f0f0;    
    }

    .card span {
        text-align: left;
    }

    .card-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .card div {
        position: relative;
        z-index: 1;
    }

    .card .content {
        display: flex;
        align-items: center;
    }

    .card .content input[type="checkbox"],
    .card .content .description {
        cursor: pointer;
    }

    .card .content span {
        max-width: 80%;
    }

    .card .content input {
        margin-right: 40px;
    }

    .card .options {
        display: flex;
    }

    @media (max-width: 400px) {
        .card .card-container {
            display: block !important;
        }
        .card .options {
            display: flex;
            justify-content: flex-end;
        }
    }
</style>