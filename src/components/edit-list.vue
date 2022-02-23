<!--eslint disable -->
<template>
  <div class="mt-4 px-4">
    <div class="pt-4 pr-3 flex justify-end">
      <h4 class="todo text-black mr-auto">Edit Todo</h4>
      <div @click="$router.back()" class="flex justify-center items-center">
        <div>
          <img src="../assets/back.png" alt="back" />
        </div>
        <p>Back</p>
      </div>
    </div>
    <div class="main_container flex p-4  mt-3 flex-col">
      <h3 class="rounded-md mb-4 p-2 border-2"></h3>
      <ul>
        <li></li>
      </ul>
      <button
        @click="storeNewInput"
        class="px-4 py-2 text-base rounded-md text-white font-semibold"
      >
        Create
      </button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  data() {
    return {
      todoTitle: ""
    };
  },

  methods: {
    generateIconId() {
      const iconId = Math.floor(Math.random() * 5) + 1;
      return iconId;
    },

    async storeNewInput() {
      try {
        if (this.todoTitle.trim() == "") {
          alert("You have no input yet");
        } else {
          await this.$store.dispatch("createNewTodo", {
            title: this.todoTitle,
            iconId: this.generateIconId()
          });
          this.$router.push("/Todos");
        }
      } catch (error) {}
    }
  },

  async created() {
    let routeId = this.$route.params.id;
    await this.$store.dispatch("getCurrentTodo", routeId);
    let currentTodo = this.$store.getters.returnCurrentTodo;
    console.log(currentTodo);
  }
};
</script>

<style scoped>
@media screen and (min-width: 0) {
  .main_container {
    background-color: #e7e7e7;
  }

  h4 {
    font-size: 16px;
    font-weight: 600;
    line-height: 17.07px;
  }

  li {
    background: #f9f9f9;
    border-bottom: 0.5px solid #d6e0ef;
  }

  button {
    background-color: #4791ff;
  }
}
</style>
