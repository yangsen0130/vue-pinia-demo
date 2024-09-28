import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: []
  }),
  getters: {
    totalTodos: (state) => state.todos.length,
    completedTodos: (state) => state.todos.filter(todo => todo.completed).length,
    uncompletedTodos: (state) => state.todos.filter(todo => !todo.completed).length
  },
  actions: {
    addTodo(text) {
      this.todos.push({ id: Date.now(), text, completed: false })
    },
    toggleTodo(id) {
      const todo = this.todos.find(todo => todo.id === id)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    }
  }
})