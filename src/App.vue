<template>
  <!-- TEMPLATE FOR THE WHOLE APP -->
  <div class="container">
    <Header />
    <Menu />
    <Todolist />
    <Footer />
  </div>
</template>

<script>
  // COMPONENT IMPORTS
  import Header from './components/Header';
  import Menu from './components/Menu';
  import Todolist from './components/Todolist';
  import Footer from './components/Footer';

  export default {
    name: 'Todo App',
    components: {
      Header,
      Menu,
      Todolist,
      Footer,
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }

/* when user select piece of text */
  ::selection {
    background: #2c3e50;
    color: #ffffff;
  }

/* container webapplication */
  .container {
    width: 80%;
    margin: 0 auto;
    transition: 300ms ease;
  }

/* style img */
  img {
        width: inherit;
        height: inherit;
        transform: scale(0.6);
        z-index: 99;
        position: relative;
        cursor: pointer;
        transition: 300ms ease-in-out;
        user-select: none;
    }

    img:hover {
        transform: scale(0.8);
    }

  @media (max-width: 550px) {
    .container {
      width: 90% !important;
    }
  }
</style>