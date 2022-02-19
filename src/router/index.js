import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '@/components/TodoList.vue'
import CreateTodoList from '@/components/CreateTodoList.vue'
import Todos from '@/components/Todos.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TodoList',
      component: TodoList
    },
    {
      path: '/todolist/:id/todos',
      name: 'Todos',
      component: Todos
    },
    {
      path: '/todolist/create',
      name: 'CreateTodoList',
      component: CreateTodoList
    }
  ]
})
