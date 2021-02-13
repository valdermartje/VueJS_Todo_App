<template>
<!-- TEMPLATE FOR THE WHOLE APP -->
  <div class="container">

    <Header :title="title" v-on:changeTitle="updateTitle($event)" />
    <Menu />
    <Todolist :todos="todos" @click="check" />
    <Footer :author="author" />

  </div>
</template>

<script>
  import Header from './components/Header';
  import Menu from './components/Menu';
  import Todolist from './components/Todolist';
  import Footer from './components/Footer';

  export default {
    name: 'App',
    components: {
      Header,
      Menu,
      Todolist,
      Footer
    },
    data () {
      return {
        author: "Valdemar Vreeman",
        title: "Todo's",
        todos: [
          {
            id: 1,
            text: 'Making a cup of coffee',
            checked: true
          }, 
          {
            id: 2,
            text: 'Making an VueJS todo app',
            checked: false
          }, 
          {
            id: 3,
            text: 'Pusblishing graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final',
            checked: false
          },
          {
            id: 4,
            text: 'Walk a couple miles',
            checked: false
          } 
        ]
      }
    },
    methods: {

      updateTitle: (newTitle) => {
        this.title = newTitle;
      },

      check: (id) => {
        // alert(id);
        alert('clicked ' + id);
        // const array = this.todos;

        // array.forEach(element => {
        //   if(id === element.id) {
        //     this.todos[id].checked === !this.todos[id].checked;
        //   }          
        // });
      },

      changeTitle: () => {
        this.header = 'Todo app';
      },

      deleteTodo: (id, amount) => {
        amount === '' ? 1 : amount;

        alert('clicked');

        console.log('Delete array object on position ' + id);
        console.log(this.todos);
        console.log(amount);

        return (this.todos.splice(id, amount));
        
        // console.log(this.todos);
      }
    },
    
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
