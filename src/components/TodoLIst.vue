<template>
  <router-link :to="routeLink">
    <li>
    <a class="flex p-3 pr-3">
      <select-icon :iconId="iconId"></select-icon>
      <div class="ml-2.5 w-full flex flex-col justify-start">
        <div class="flex-col justify-center items-center w-full">
          <p class="font-medium">{{ title }}</p>
          <p class="font-base mr-auto">{{ createdAt }}</p>
        </div>

        <button class="rounded-lg pt-1.5 pb-2 pl-1.5 ml-auto pr-4">
          80% Done
        </button>
      </div>
    </a>
  </li>
  </router-link>
</template>

<script>
/* eslint-disable */
import selectIcon from "./select-icon.vue";

export default {
  name: 'todolist',
  
  components: { selectIcon },

  props: ["id", "title", "iconId", "createdAt"],

  computed: {
    routeLink() {
      return `/${this.id}`
    }
  }


  
}
</script>

<style scoped>
@media screen and (min-width: 0) {

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