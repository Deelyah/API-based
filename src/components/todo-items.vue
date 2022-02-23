<template>
<div>

   <section class="w-full px-4">
      <div class="pt-4 pr-3 flex justify-end sm:items-end">
        <h4 class="font-semibold text-lg text-black mr-auto hover:border-b-3">
          <router-link to="/Todos"
            ><span class="todo">Todo Lists</span>/{{ title }}</router-link
          >
        </h4>

        <div class="flex items-center sm:hidden">
          <router-link :to="itemId">
            <img
              class="hover:cursor-pointer mr-3.5"
              src="../assets/sort.svg"
              title="Sort"
              alt="Sort"
            />
          </router-link>
          <router-link to="/Create">
            <img
              class="hover:cursor-pointer mr-3.5"
              src="../assets/add.svg"
              title="Add"
              alt="Add"
            />
          </router-link>
          <router-link to="/">
            <img
              class="hover:cursor-pointer"
              src="../assets/delete.png"
              title="Menu"
              alt="Menu"
            />
          </router-link>
        </div>

      </div>
    </section>
  
  <section class="mt-4 px-4">
    <div class="rounded-lg mt-3 list__container border overflow-hidden ">
      <ul>
        <li v-for="Todo in currentTodo" :key="Todo.id">
          <a class="flex p-3 pr-3">
            <input class="mt-2" type="checkbox"/>
            <div class="ml-6 w-full flex flex-col justify-start">
              <div class="flex-col justify-center items-center w-full">
                <p class="font-medium">{{ Todo.title }}</p>
                <p class="font-base mr-auto">{{ Todo.createdAt }}</p>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </section>
</div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      currentTodo: [],
      itemId: '',
    };
  },

  computed: {

    title() {
      this.$store.dispatch("getCurrentTodo", this.$route.params.any);
      let matchingTodo = this.$store.getters.returnCurrentTodo.title;
      if (matchingTodo.length > 22) {
        return matchingTodo
          .split("")
          .splice(0, 22)
          .join("")
          .concat("...");
      } else {
        return matchingTodo;
      }
    }
  },

  async created() {
    let routeId = this.$route.params.any;
   await this.$store.dispatch(
      "getCurrentTodoListItems",
      routeId
    );
    this.currentTodo = this.$store.getters.returnCurrentTodoListItems;
    this.itemId = `edit/${routeId}`
  }
};
</script>

<style scoped>
@media screen and (min-width: 0) {
  .todo:hover {
    border-bottom: 1px solid black;
  }

  .list__container {
    background-color: #f9f9f9;
  }

  li {
    border-bottom: 1px solid #e7e7e7;
  }

  p {
    font-size: 14px;
  }

  button {
    background-color: #e7e7e7;
    font-size: 12px;
  }
}
</style>
