/* eslint-disable */
import Vue from "vue";
import VueRouter from "vue-router";
import Todos from "./components/Todos.vue";
import createTodo from "./components/create-todo.vue"
import todoItems from "./components/todo-items.vue"
import editList from "./components/edit-list.vue";

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: "/", redirect: "/Todos"},
    { path: "/Todos", component: Todos },
    {path: "/Create", component:createTodo},
    {path: "/edit/:id", component: editList},
    {path: "/Todos/:any", component: todoItems}

  ]
});

export default router;
