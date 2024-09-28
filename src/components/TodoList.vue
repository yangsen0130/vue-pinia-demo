<template>
    <div>
      <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Add a new todo">
      <ul>
        <li v-for="todo in todos" :key="todo.id">
          <input type="checkbox" :checked="todo.completed" @change="toggleTodo(todo.id)">
          <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
          <button @click="deleteTodo(todo.id)">Delete</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue'
  import { useTodoStore } from '../stores/todo'
  
  export default {
    setup() {
      const todoStore = useTodoStore()
      const newTodo = ref('')
  
      const addTodo = () => {
        if (newTodo.value.trim()) {
          todoStore.addTodo(newTodo.value.trim())
          newTodo.value = ''
        }
      }
  
      return {
        todos: todoStore.todos,
        newTodo,
        addTodo,
        toggleTodo: todoStore.toggleTodo,
        deleteTodo: todoStore.deleteTodo
      }
    }
  }
  </script>
  
  <style scoped>
  .completed {
    text-decoration: line-through;
  }
  </style>