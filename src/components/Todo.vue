<template>
<!-- THIS IS A TEMPLATE FOR THE TODO CARD -->
    <div class="card" :key="index" v-on:click="checked()">
        <div class="card-container">
            <div class="content">
                <input type="checkbox" class="check-todo" :check="check" />
                <span class="todo-description" :style="checked === true ? 'text-decoration: line-through': 'none'">{{todo}}</span> <!-- style="text-decoration: line-through;" -->
            </div>
            <div class="options">
                <div class="edit-save">
                    <div class="edit" style="display: block">
                        <img src="./../assets/edit.svg" alt="Edit your todo icon" draggable="false">
                    </div>
                    <div class="save" style="display: none">
                        <img src="./../assets/save.svg" alt="Save your todo icon" draggable="false">
                    </div>
                </div>
                <div class="delete">
                    <!-- <Image src="./../assets/delete.svg" alt="Delete your todo icon" v-on:click="greet(index)" /> -->
                    <img 
                        src="./../assets/delete.svg" 
                        alt="Delete your todo icon" 
                        draggable="false" 
                        v-on:click="greet(index)" 
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
        checked: Boolean,

        deleteTodo: {
            type: Function
        }
    },
    methods: {
        greet: (content) => {
            alert(content);
        }
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