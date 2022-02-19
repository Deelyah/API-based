<template>
  <section>
    <div
      class="main__container s:mt-4 s:flex-col s:justify-center s:items-center"
    >
      <section>
        <h1 class="w-full text-xl font-semibold s:w-full">TodoLists</h1>
        <section class="w-full my-4 sort__section">
          <label for="sort_todolists" class="mr-6 s:text-base">Sort By</label>
          <select
            name="sort"
            id="sort_todolists"
            class="cursor-pointer outline focus:outline-none"
          >
            <option v-for="(el, i) in sortOptions" :key="i" value="el">{{
              el
            }}</option>
          </select>
          <button @click="renderCreateTodoListPage" class="px-2 ml-8 text-xl font-extrabold border border-black rounded-full cursor-pointer hover:shadow-2xl">+</button>
        </section>
      </section>

      <section class="w-full mt-2 todolist__container">
        <ul class="p-2 mx-2 bg-gray-200 rounded-md list__container">
          <li
            v-for="(i, index) in 10"
            :key="index"
            class="py-2 mx-1 mb-4 bg-gray-100 border-2 cursor-pointer hover:shadow-2xl rounded-xl"
          >
            <router-link :to="`/todolist/${index}/todos`">
              <div class="flex items-center justify-between p-2 todolist">

                <div>
                  <p class="pl-2 text-lg font-medium text-gray-500">
                    Be what you want
                  </p>
                  <p class="pl-0 text-sm text-gray-400">
                    20th December, 2021
                  </p>
                </div>

                <div>
                  <p class="pb-6 text-xs text-blue-500 uppercase">view todos</p>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
      </section>
    </div>
  </section>
</template>

<script>
/* eslint-disable */
export default {
  name: "TodoList",
  data() {
    return {
      sortOptions: ["Creation Date ⇑", "Creation Date ⇓"]
    };
  },

  methods: {
    renderCreateTodoListPage() {
      this.$router.push('/todolist/create')
    }
  }
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;800;900&display=swap);

main__container {
  padding: auto;
}

h1 {
  font-family: "Montserrat", sans-serif;
}

</style>
