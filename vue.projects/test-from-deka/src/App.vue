<template>
  <div id="app">
    <TodoList :todos='todos' />
     
    
  </div>
</template>

<script>
import TodoList from'./components/TodoList.vue'


export default {
  name: 'app',
  data(){
      return{
        todos['Ремонт']
      }
  },
  components:{
    TodoList
  }
}
</script>

<style>

</style>

