<template>
    <div>
        <h1> {{ header }} </h1>
    </div>    
</template>

<script>

import { mapState, mapGetters } from 'vuex';

export default {
    name: 'Header',
    computed: {
        ...mapState([
            'header',
            'todos'
        ]),
        ...mapGetters([
            'reverseHeader'
        ])
    }
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