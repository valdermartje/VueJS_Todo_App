<template>
    <footer>
        <span>Made with love by <b>{{author}}</b></span>    
    </footer>    
</template>

<script>
export default {
    name: 'Footer',
    props: {
        author: String,
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