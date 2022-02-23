<!-- eslint-disable -->
<template>
  <div class="px-4">
    <div class="nav_container flex sm:items-center pt-6 pb-6">
      <h1 class="mr-auto">Sopuluchukwu</h1>
      <div class="hidden sm:flex border overflow:hidden p-3 rounded-lg">
        <img src="../assets/search.svg" width="20" height="20" alt="Search" />
        <input placeholder="Search" class="focus:outline-none ml-3" type="search" name="" id="" />
      </div>
      <div class=" ml-auto sm:hidden">
        <img
          class="m-0"
          src="../assets/search.svg"
          width="20"
          height="20"
          alt="Search"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* eslint-disable */
@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;800;900&display=swap);

@media screen and (min-width: 0) {
  .nav_container {
    border-bottom: 1px solid #d6e0ef;
  }

  h1 {
    font-family: "Montserrat", sans-serif;
    line-height: 19.5px;
    font-size: 18px;
    font-weight: 900;
    color: #222222;
  }
}

@media screen and (min-width: 640px) {
  h1 {
    font-size: 28px;
  }
}
</style>
