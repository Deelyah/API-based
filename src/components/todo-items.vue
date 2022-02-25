<template>
  <div>
    <section class="w-full px-4">
      <!-- <div class="pt-4 pr-3 flex justify-end sm:items-end">
        <h4
          class="font-semibold text-lg text-black mr-auto hover:border-b-3 flex flex-col items-start"
        >
          <router-link to="/Todos" class="underline text-blue-500">
            <span class="todo">Todo Lists</span>
          </router-link>
          <span class="text-md text-gray-400">/{{ matchingTitle }}</span>
        </h4>

        <div class="flex items-center sm:hidden">
          <router-link :to="`edit/${this.$route.params.any}`">
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
      </div> -->
    </section>

    <section class="mt-4">
      <div class="rounded-lg mt-3 list__container border overflow-hidden ">
        <ul>
          <list-item
            v-for="(items, index) in currentTodoListItems"
            :todo="items"
            :key="index"
            @send-id="handleCheck($event, index)"
            ref="list"
          />
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
/* eslint-disable */
import listItem from "./single-item.vue";

export default {
  components: {
    listItem
  },
  data() {
    return {
      currentTodo: null,
      currentTodoListItems: [],
      interval: 0
    };
  },

  computed: {
    matchingTitle() {
      if (this.currentTodo && this.currentTodo.title) {
        let title = this.currentTodo.title;
        if (title.length > 22) {
          return title
            .split("")
            .splice(0, 22)
            .join("")
            .concat("...");
        } else {
          return title;
        }
      } else {
        return "";
      }
    }
  },

  methods: {
    async handleCheck({ id, isChecked }) {
      try {
        if (isChecked) {
          await this.$store.dispatch("toggleStatus", {
            payload: { status: "PENDING" },
            id: this.$route.params.any,
            todoId: id
          });
        } else {
          await this.$store.dispatch("toggleStatus", {
            payload: { status: "COMPLETED" },
            id: this.$route.params.any,
            todoId: id
          });
        }
        await this.getListItems();
      } catch (error) {
        console.log(error);
      }
    },
    async getListItems() {
      await this.$store.dispatch("getCurrentTodo", this.$route.params.any);
      this.currentTodoListItems = this.$store.getters.returnCurrentTodo.todolist;
      this.currentTodo = this.$store.getters.returnCurrentTodo;
    }
  },

  async created() {
    await this.getListItems();
  },
  mounted() {
  }
};
</script>

<style scoped>
@media screen and (min-width: 0) {
  .todo:hover {
    border-bottom: 1px solid black;
  }

  .list__container {
    background-color: white;
  }

  button {
    background-color: #e7e7e7;
    font-size: 12px;
  }
}
</style>
