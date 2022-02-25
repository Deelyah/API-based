<template>
  <li
    class="flex flex-col items-start sm:flex-row sm:items-center w-full bg-transparent"
  >
    <input
      class="px-4 py-3 w-full sm:w-1/2 mb-2 sm:mb-0 sm:mr-auto rounded-md"
      type="text"
      v-model="todoListItem.title"
      :disabled="queueState"
    />
    <button
      :class="[
        queueState
          ? 'bg-green-50 text-green-800 border-green'
          : 'bg-red-50 text-red-800 border-red',
        'px-4 py-2 rounded-md'
      ]"
      @click="toggleQueue"
    >
      {{ queueState ? "Undo" : "Delete" }}
    </button>
  </li>
</template>

<script>
/* eslint-disable */
export default {
  name: "editFieled",
  props: ["todoListItem"],
  data() {
    return {
      queueState: false
    };
  },
  methods: {
    toggleQueue() {
      this.queueState = !this.queueState;
      this.$emit("change", this.todoListItem.id);
    }
  },
  computed: {
    returnQueueState() {
      return this.queue.has(this.todoListItem.id);
    }
  }
};
</script>

<style scoped>
  input:disabled {
    background: #ffc1c144;
    color: #830c0c67;
    border: 1px solid #830c0c67;
  }
</style>
