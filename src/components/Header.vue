<template>
    <div>
        <h1> {{ title }} </h1>
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
}
</script>

<style>

@font-face{
  font-family: TruculentaBold;
  src: url('../Fonts/Truculenta/static/Truculenta_12pt-Bold.ttf');
}

h1, h2,
h3, h4,
h5, h6 {
    font-family: TruculentaBold;
}

</style>