<template>
<!-- THIS IS A TEMPLATE FOR THE TODO CARD -->
    <div class="card"  draggable="false">
        <div class="card-container">
            <div class="content">
                
                <div class="tag">
                    {{ '#' + data.id }}
                </div>

                <div v-on:click="checkTodo">
                    <input type="checkbox" class="check-todo" :checked="data.checked" />
                </div>

                <span  
                    v-on:click="checkTodo"
                    class="description" 
                    v-if="!update"
                    :style="[
                        data.checked === true ? 'text-decoration: line-through': 'none',
                    ]"    
                > 
                    {{ data.todo }} 
                </span>

                <input
                    v-else 
                    :id="'updateInputElement'+ data.index"
                    type="text" 
                    v-model="updateTodo"
                />
            </div>
            <div class="options">
                <div class="edit" 
                    v-if="!update">
                    <ActionIcon
                        icon="edit" 
                        title="edit" 
                        alt="edit icon" 
                        v-on:click="toggleUpdate"
                    />
                </div>
                <div class="save" 
                    v-else>
                    <ActionIcon 
                        icon="save"
                        title="save" 
                        alt="Save your todo icon"                          
                        v-on:click="toggleUpdate"
                    />
                </div>
                <ActionIcon 
                    icon="delete"
                    title="delete" 
                    alt="Save your todo icon" 
                    v-on:click="deleteTodo"
                />
            </div>
        </div>
    </div>
</template>

<script>

import ActionIcon from './ActionIcon.vue';

export default {
    name: 'Todo',
    data: function () {
        return {
            update: false
        }
    },
    props: {
        data: Object
    },
    components: {
        ActionIcon
    },
    computed: {
        updateTodo: {
            get () {
                return this.data.todo
            },
            set (value) {
                this.$store.commit('updateTodo', {
                    updatedAt: this.data.id - 1,
                    updatedTodoName: value
                })
            }
        }
    },
    methods: {
        checkTodo: function() {
            this.$store.commit('checkTodo', this.data.id)
        },
        deleteTodo: function() {
            this.$store.commit('deleteTodo', this.data.id)
        },
        toggleUpdate: function () {
            this.update = !this.update
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

    .card .tag {
        color: #cecece;
        font-weight: light;
        margin-right: 40px;
        user-select: none;
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