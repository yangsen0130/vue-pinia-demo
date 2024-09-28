<template>
  <div id="app">
    <h1>Vue 3 + Pinia Todo App</h1>
    <TodoList />
    <TodoStats />
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue'
import TodoStats from './components/TodoStats.vue'

export default {
  name: 'App',
  components: {
    TodoList,
    TodoStats
  }
}
</script>