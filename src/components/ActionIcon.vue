<template>
    <div 
        :class="'icon '+title"
        v-on:click="functionTodo"
    >
        <Image 
            :icon="icon" 
            :title="title" 
            :alt="alt" 
        />
    </div>    
</template>

<script>
import { mapState } from 'vuex'

import Image from './Image'

export default {
    components: {
        Image
    },
    computed: {
        ...mapState([
            ''
        ])
    },
    props: {
        icon: String,
        title: String,
        alt: String,
        functionTodo: Function
    }
}
</script>