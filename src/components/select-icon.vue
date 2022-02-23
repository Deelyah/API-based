<template>
  <div>
    <img
      class="mt-2"
      v-if="iconId == 1"
      src="../assets/Black-star.svg"
      alt=""
    />
    <img
      class="mt-2"
      v-if="iconId == 2"
      src="../assets/Black-circle.svg"
      alt=""
    />
    <img
      class="mt-2"
      v-if="iconId == 3"
      src="../assets/Black-triangle.svg"
      alt=""
    />
    <img
      class="mt-2"
      v-if="iconId == 4"
      src="../assets/Black-square.svg"
      alt=""
    />
    <img
      class="mt-2" width="25.27" height="25.27"
      v-if="iconId == 5"
      src="../assets/love-eyes.png"
      alt=""
    />
  </div>
</template>

<script>
export default {
  props: ['iconId']
}
</script>
