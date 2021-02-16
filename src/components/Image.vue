<template>
    <!-- TEMPLATE FOR THE IMAGE -->
    <img :src="require('./../assets/' + icon + '.svg')" :alt="alt" draggable="false">

</template>

<script>
export default {
    name: 'Image',
    props: {
        icon: String,
        alt: String
    }
}
</script>
