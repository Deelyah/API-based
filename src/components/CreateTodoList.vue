<template>
  <section>
    <div
      class=" main__container s:mt-4 s:justify-center s:items-center"
    >
      <section>
        <h1 class="w-full text-xl font-semibold s:w-full">
          Create New TodoLists
        </h1>
      </section>

      <section class="w-full p-2 form__container">
        <form class="mt-4" @submit="handleSubmit">
          <label for="create_todolist" class="w-full">
            <!-- {{ title}} -->
            <input
              v-model="title"
              type="text"
              name="todolist"
              id="create_todolist"
              placeholder="Title"
              class="w-full p-2 mb-4 border border-gray-800 rounded-md focus:outline-none"
              /> <br>
          </label>
          <button type="submit" class="w-full p-2 mb-4 text-gray-100 bg-gray-700 border border-gray-500 rounded-lg shadow-2xl ">Create</button><br>
          <button @click="redirectBack" type="button" class="w-full p-2 text-gray-700 border border-gray-600 rounded-lg shadow-2xl ">Back</button>

        </form>
      </section>
    </div>
  </section>
</template>

<script>
/* eslint-disable */
export default {
  name: "CreateTodoList",
  data() {
    return {
      title: ''
    }
  },
  methods: {
    redirectBack() {
      this.$router.push('/')
    },
    handleSubmit(e) {
      e.preventDefault()
      console.log(e)
    }
  }
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;800;900&display=swap);

h1 {
  font-family: "Montserrat", sans-serif;
}
</style>
