<template>
  <router-link
    :to="`edit/${model.to}`"
    class="flex justify-start items-center px-4 py-4 bg-gray-100 hover:bg-gray-200 border"
  >
    <img
      :class="[model.classes, 'mr-2 sm:mr-3']"
      :src="(`./assets/${model.src}`)"
      :title="model.title"
      :alt="model.alt"
    />
    <p>{{ model.label }}</p>
  </router-link>
</template>

<script>
export default {
  name: "printful-icon",
  props: [ "model"]
};
</script>

<style scoped>
@media screen and (min-width: 0) {
  img {
    height: 24px;
    width: 24px;
  }
}

@media screen and (min-width: 640px) {
  img {
    height: 32px;
    width: 32px;
  }
}
</style>






          // <printful-icon
          //   v-for="(icon, index) in iconModel"
          //   :key="index"
          // ></printful-icon>



          
  data() {
    return {
      iconModel: [
        {
          classes: "",
          to: "",
          src: "",
          alt: "",
          title: ""
        }
      ]
    };
  },




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
