<template>
  <div class="mt-4 px-4">

    <section class="rounded-lg mt-3 list__container border overflow-hidden">
      <div>
        <ul>
          <todolist
            v-for="Todo in Todos"
            :key="Todo.id"
            :id="Todo.id"
            :title="Todo.title"
            :iconId="Todo.iconId"
            :createdAt="Todo.createdAt"
          ></todolist>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
/* eslint-disable */
import todolist from "./todolist.vue";
export default {
  name: "Todo",

  components: { todolist },

  computed: {
    Todos() {
      return this.$store.getters.returnTodoList;
    }
  },
  async created() {
    await this.$store.dispatch("getTodoList");
  }
};
</script>

