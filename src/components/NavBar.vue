<template>
  <section>
    <div
      class="flex items-center justify-between p-8 border-b-2 shadow-md bg-gray-50 main__container s:p-2"
    >
      <section>
        <h1 class="text-4xl font-bold text-black s:mr-20 s:text-xl s:font-bold">Sopuluchukwu</h1>
      </section>

      <section>
        <input
          class="w-full px-8 py-2 border-2 border-gray-400 rounded-full bg-gray-50 s:py-0 s:px-4 s:border-2 s:border-gray-400"
          type="text"
          name="search"
          id="search"
          placeholder="Search..."
        />
      </section>
    </div>
  </section>
</template>

<script>
/* eslint-disable */
export default {
  name: "NavBar"
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css2?family=Courgette&display=swap);

h1 {
  font-family: "Courgette", handwriting;
}

@media (min-width: 0) {
  /* main__container {
    padding: 0.5rem !important;
  } */
}

@media (min-width: 460px) {

}
@media (min-width: 640px) {
}

@media (min-width: 1024px) {
}

@media (min-width: 1280px) {
}
</style>
