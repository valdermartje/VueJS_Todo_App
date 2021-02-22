<template>
    <footer>
        <span>Made with love by <b>{{getAuthor}}</b></span>    
    </footer>    
</template>

<script>
import { mapGetters } from 'vuex';


export default {
    name: 'Footer',
    computed: {
        ...mapGetters([
            'getAuthor'
        ])
    }
}
</script>

<style scoped>

    footer {
        margin: 40px 0;
    }

    footer b {
        color: #2c3e50;
    }
</style>