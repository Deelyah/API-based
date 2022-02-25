<template>
  <div class="w-full">
    <li :class="[`todo${todo.id}`]">
      <a class="flex p-6 pr-3">
        <input
          :class="['mt-2', 'todoListCheck']"
          :id="`todoListCheck${todo.id}`"
          type="checkbox"
          @click="toggleStatus($event, todo.id)"
          :checked="todo.status === 'COMPLETED'"
        />
        <div class="ml-6 w-full flex flex-col justify-start">
          <div class="flex-col justify-center items-center w-full">
            <p class="font-semibold text-gray-600 text-base mb-2">
              {{ todo.title }}
            </p>
            <p class="font-base text-sm text-gray-400 mr-auto">
              {{ todo.createdAt }}
            </p>
          </div>
        </div>
      </a>
    </li>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "listItem",
  computed: {
    isChecked() {
      return this.todo.status === "COMPLETED";
    }
  },
  props: ["todo"],
  methods: {
    toggleStatus(e, id) {
      e.preventDefault();
      this.$emit("send-id", { id, isChecked: this.isChecked });
    }, 
    routeAway() {
      this.$router.push(`/edit/${this.todo.id}`)
    }
  },
  mounted() {}
};
</script>

<style scoped>
@media screen and (min-width: 0) {
  li {
    border-bottom: 1px solid #e7e7e7;
  }
  input {
    width: 24px;
    height: 24px;
  }
}
</style>
