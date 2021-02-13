<template>
    <nav class="submenu">
        <div class="filter">
            <span>Filter</span>
        </div>
        <div class="add">
            <!-- <Image src="./../assets/add.svg" alt="Add todo button" /> -->
            <img src="./../assets/add.svg" alt="Delete your todo icon" draggable="false" v-on:click="greet(index)">
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

    props: {

    }
}
</script>

<style scoped>
    nav.submenu {
        display: flex;
        align-items: center;
        justify-content: space-between;
        /* margin: 20px 0; */
        padding: 20px;
    }
</style>