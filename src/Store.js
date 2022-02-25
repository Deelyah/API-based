/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state() {
    return {
      notification: {
        message: "Successful",
        type: "success"
      },
      listOfTodos: [],
      currentTodo: null,
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
    },

    updateCurrentTodo(state, payload) {
      state.currentTodo.todolist = state.currentTodo.todolist.concat(payload);
    },

    setNotification(state, payload) {
      state.notification = payload;
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
      console.log(payload);
      try {
        await axios.post("https://printful-api.herokuapp.com/todos", payload);
      } catch (error) {
        console.log(error);
      }
    },

    async updateTodoItems(_, { payload, todoId, id }) {
      console.log(payload);
      try {
        const res = await axios.patch(
          `https://printful-api.herokuapp.com/todos/${todoId}/todolists/${id}/title`,
          payload
        );
        return res;
      } catch (error) {
        console.log(error);
      }
    },

    async deleteTodoItems(_, { payload, todoId, id }) {
      console.log(payload);
      try {
        const res = await axios.delete(
          `https://printful-api.herokuapp.com/todos/${todoId}/todolists/${id}`,
          payload
        );
        return res;
      } catch (error) {
        console.log(error);
      }
    },

    async createNewTodoListItem(_, { payload, id }) {
      console.log(payload);
      try {
        const res = await axios.post(
          `https://printful-api.herokuapp.com/todos/${id}/todolists`,
          payload
        );
        return res;
      } catch (error) {
        console.log(error);
      }
    },

    async toggleStatus(_, { payload, id, todoId }) {
      try {
        const res = await axios.patch(
          `https://printful-api.herokuapp.com/todos/${id}/todolists/${todoId.toString()}`,
          payload
        );
        return res;
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
    },

    getNotification(state) {
      return state.notification;
    }
  }
});

export default store;
