<template>
    <!-- TEMPLATE FOR THE IMAGE -->
    <img :src="src" :alt="alt" draggable="false">
    <!-- <span>{{src}}</span> -->
</template>

<script>
export default {
    name: 'Image',
    props: {
        src: String,
        alt: String
    }
}
</script>
