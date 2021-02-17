<template>
    <nav class="submenu">
        <div class="total">
            <span>{{getTodosCount}} {{ getTodosCount !== 1 ? " todo's" : "todo"}}</span>
        </div>
        <div class="add">
            <input type="text" id="newTodoNameInputElement" v-model="addTodoName" />
            
            <div v-on:click="addTodo">
                <Image icon="add" alt="Add todo icon" />
            </div>
        </div>
    </nav>
</template>

<script>

import Image from './Image';
import { mapGetters, mapState } from 'vuex';

export default {
    name: 'Menu',
    components: {
        Image
    },
    methods: {
        // addTodo: function() {
        //     this.$store.commit('addTodo')
        // },
    },
    computed: {
        ...mapState([
            'addTodoName'
        ]),
        ...mapGetters([
            'getTodosCount',
            'getNewTodoName'
        ]),

        addTodo: {
            get () {
                console.log(this.addTodoName);
                return this.addTodoName
            },
            set (value) {
                console.log(value);
                this.$store.commit('addTodo', value)
            }
        },
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