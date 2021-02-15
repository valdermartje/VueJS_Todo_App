<template>
<!-- TEMPLATE FOR THE WHOLE APP -->
  <div class="container">
    <Header 
      :title="title" 
    />
    <Menu 
      :checkedTodos="checkedTodos"
      :addTodo="addTodo" 
      :amountTodos="amountTodos"
    />
      <!-- :newTodoName="this.newTodoName" -->
    <Todolist 
      :todos="todos" 

      :checkTodo="checkTodo" 
      :updateTodo="updateTodo"
      :deleteTodo="deleteTodo" 
    />
    <Footer 
      :author="author" 
    />

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
        // APPLICATION TEXT
        author: "Valdemar Vreeman",
        title: "Todo's",

        // VALUES 
        // newTodoName: 'asdasd',

        todos: [
          {
            id: 1,
            text: 'Making a cup of coffee',
            checked: false,
            update: false,
          }, 
          {
            id: 2,
            text: 'Making an VueJS todo app',
            checked: false,
            update: false,
          }, 
          {
            id: 3,
            text: 'Pusblishing graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final',
            checked: false,
            update: false,
          },
          {
            id: 4,
            text: 'Walk a couple miles',
            checked: false,
            update: false,
          } 
        ],

        amountTodos: this.todos,
      }
    },
    methods: {
      // WORKING!!
      addTodo: function() {
        const array = this.todos;
        
        const element = document.getElementById('newTodoNameInputElement').value; 

        array.push({
          text: element,
          checked: false,
          update: false,
        })
      },

      // TODO: WORKING ON!!
      updateTodo: function(index) {
        const array = this.todos;

        const updatedName = document.querySelector('.updateInputElement').value; 

        array[index].text = updatedName;

        alert(updatedName);

        return array[index].update = !array[index].update;
      },

      // WORKING!!
      deleteTodo: function(element) {
  	    alert("clicked: " + element);
        const id = element;
        const array = this.todos;
        

        if(id === Number || id !== isNaN) {
          // alert('clicked' + id);
          return (array.splice(id, 1));
        } else {
          return null;
        }
      }
    },

    // WORKING!!
      checkTodo: function(element) {
        const id = element;
        const array = this.todos;

        if(id === Number || id !== isNaN) {
          // alert('clicked' + id);
          return (array[id].checked = !array[id].checked);
        } else {
          return null;
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
