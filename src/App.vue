<!-- eslint disable -->
<template>
  <div id="app">
    <nav-bar class="mb-8"></nav-bar>

    <section v-if="$route.path == '/Todos'" class="w-full px-4">
      <div class="pt-4 pr-3 flex justify-end sm:items-end">
        <h4 class="font-semibold text-lg text-black mr-auto hover:border-b-3">
          <router-link class="todo" to="/Todos">Todo Lists</router-link>
        </h4>

        <div class="flex sm:hidden">
          <router-link to="/edit/4">
            <img
              class="hover:cursor-pointer mr-3.5"
              src="./assets/sort.svg"
              title="Sort"
              alt="Sort"
            />
          </router-link>
          <router-link to="/Create">
            <img
              class="hover:cursor-pointer mr-3.5"
              src="./assets/add.svg"
              title="Add"
              alt="Add"
            />
          </router-link>
          <router-link to="/">
            <img
              class="hover:cursor-pointer"
              src="./assets/kebab.svg"
              title="Menu"
              alt="Menu"
            />
          </router-link>
        </div>

        <div class="hidden sm:flex">
          <div class="mr-6 flex flex-col">
            <p class="mb-3 font-bold text-sm">Sort by</p>
            <select class="text-sm px-4 py-2" name="" id="">
              <option class="text-sm" value="">Creation date</option>
              <option class="text-sm" value="">Alphabetical order</option>
            </select>
          </div>
          <div>
            <p class="mb-3 font-bold text-sm">Order</p>
            <select class="px-4 py-2 text-sm" name="" id="">
              <option class="text-sm" value="">Ascending</option>
              <option class="text-sm" value="">Descending</option>
            </select>
          </div>
        </div>
      </div>
    </section>
    <router-view class="router-here p-4 pt-0">Hey</router-view>
    <!-- <todos/> -->
  </div>
</template>

<script>
/* eslint-disable */
import navBar from "./components/nav-bar.vue";
// import Todos from "./components/Todos.vue"
export default {
  name: "App",
  components: {
    navBar
    //  Todos
  },

  computed: {
    confirmDisplay() {
      const todoItemsLink = `edit/${this.$route.params.any}`;
      const linkToEdit = `/edit/${this.$route.params.id}`;
      if (
        this.$route.path !== "/Create" &&
        this.$route.path !== linkToEdit &&
        this.$route.path !== todoItemsLink
      ) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;800;900&display=swap);

body {
  font-family: "Montserrat", sans-serif;
}
@media screen and (min-width: 0) {
  .list__container {
    background-color: #f9f9f9;
  }

  select {
    background: #f9f9f9;
  }
}
</style>
