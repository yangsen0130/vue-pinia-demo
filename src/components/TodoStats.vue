<template>
    <div>
      <p>Total Todos: {{ totalTodos }}</p>
      <p>Completed Todos: {{ completedTodos }}</p>
      <p>Uncompleted Todos: {{ uncompletedTodos }}</p>
    </div>
  </template>
  
  <script>
  import { useTodoStore } from '../stores/todo'
  import { storeToRefs } from 'pinia'
  
  export default {
    setup() {
      const todoStore = useTodoStore()
      const { totalTodos, completedTodos, uncompletedTodos } = storeToRefs(todoStore)
  
      return {
        totalTodos,
        completedTodos,
        uncompletedTodos
      }
    }
  }
  </script>