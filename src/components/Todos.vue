<template>
  <section>
    <div
      class="main__container s:mt-4 s:flex-col s:justify-center s:items-center"
    >
    <section>
      <h1 class="w-full text-xl font-semibold s:w-full">Be What You want</h1>

      <section class="w-full my-4 sort__section">
          <label for="sort_todolists" class="mr-6 s:text-base">Sort By</label>
          <select
            name="sort"
            id="sort_todolists"
            class="cursor-pointer outline focus:outline-none"
          >
          </select>
          <button class="px-2 ml-8 text-xl font-extrabold border border-black rounded-full cursor-pointer hover:shadow-2xl">Edit</button>
          <button class="px-2 ml-8 text-xl font-extrabold border border-black rounded-full cursor-pointer hover:shadow-2xl">Delete</button>
        </section>
    </section>
    </div>
  </section>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Todos',
  data() {
    return {
      
    }
  }
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;800;900&display=swap);

h1 {
  font-family: "Montserrat", sans-serif;
}
</style>