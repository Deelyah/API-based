/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);

const store = new Vuex.Store({
  state() {
    return {
      listOfTodos: [],
      currentTodo: [],
      currentTodoListItems: []
    };
  },

  mutations: {
    setTodoList(state, payload) {
      state.listOfTodos = payload;
    },

    setCurrentTodo(state, payload) {
      state.currentTodo = payload;
    },

    setCurrentTodoListItems(state, payload) {
      state.currentTodoListItems = payload;
    }
  },

  actions: {
    async getTodoList(context) {
      await fetch("https://printful-api.herokuapp.com/todos")
        .then(response => response.json())
        .then(result => {
          context.commit("setTodoList", result);
        });
    },

    async getCurrentTodoListItems(context, id) {
      await fetch(`https://printful-api.herokuapp.com/todos/${id}/todolists`)
        .then(response => response.json())
        .then(result => {
          context.commit("setCurrentTodoListItems", result);
        });
    },

    async getCurrentTodo(context, id) {
      await fetch(`https://printful-api.herokuapp.com/todos/${id}`)
        .then(response => response.json())
        .then(result => {
          context.commit("setCurrentTodo", result);
        });
    },

    async createNewTodo(_, payload) {
      console.log(payload)
      try {
        await axios.post("https://printful-api.herokuapp.com/todos", payload)
      } catch (error) {
        console.log(error);
      }
    }
  },

  getters: {
    returnTodoList(state) {
      return state.listOfTodos;
    },

    returnCurrentTodo(state) {
      return state.currentTodo;
    },

    returnCurrentTodoListItems(state) {
      return state.currentTodoListItems;
    }
  }
});

export default store;
