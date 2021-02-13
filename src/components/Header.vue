<template>
    <div>
        <h1 v-on:click="changeTitle"> {{ title }} </h1>
    </div>    
</template>

<script>
export default {
    name: 'Header',
    props: {
        title: {
            type: String
        }
    },
    methods: {
        changeTitle: () => {
            this.$emit('changeTitle', 'Todo App')
        }
    }
}
</script>

<style scoped>

</style>