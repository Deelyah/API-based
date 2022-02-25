<!-- eslint disable -->
<template>
  <div id="app" class="main_app" @pop-info="toggleModal">
    <nav-bar class="mb-8"></nav-bar>

    <section class="w-full px-4">
      <div class="pt-4 pr-3 flex justify-end sm:items-end">
        <h4
          v-if="$route.path == '/Todos'"
          class="font-bold text-2xl text-gray-700 text-black mr-auto hover:border-b-3"
        >
          <router-link class="todo" to="/Todos">Todo List</router-link>
        </h4>

        <h4
          class="flex flex-col w-full items-start xs:flex-row xs:items-center  mr-auto"
          v-if="!!$route.params.any && !this.$route.path.includes('edit')"
        >
          <router-link
            class="font-medium text-blue-700 text-lg underline mb-0.5 xs:mb-0"
            to="/Todos"
            >Todo List</router-link
          >
          <span class="font-bold text-xl text-gray-700"
            >/{{ currentListTitle }}</span
          >
        </h4>

        <div
          class="relative"
          v-if="!!$route.params.any && !this.$route.path.includes('edit')"
        >
          <img
            class="options_icon border rounded-md p-2 cursor-pointer"
            src="./assets/kebab.svg"
            @click="toggleDropdown"
            alt=""
          />
          <div
            :class="[
              'absolute bg-gray-200 rounded-lg overflow-hidden border',
              'list_dropDown',
              isVisible ? 'block' : 'hidden'
            ]"
          >
            <div class="w-full" v-if="true">
              <printfulIcon
                v-for="(items, index) in todoViewModel"
                :model="items"
                :key="index"
              />
            </div>
          </div>
        </div>

        <div class="hidden sm:flex">
          <div class="mr-6 flex flex-col">
            <p class="mb-3 font-bold text-sm">Sort by</p>
            <select class="text-sm px-4 py-2" name="" id="">
              <option class="text-sm" value="">Creation date</option>
              <option class="text-sm" value="">Alphabetical order</option>
            </select>
          </div>
          <div>
            <p class="mb-3 font-bold text-sm">Order</p>
            <select class="px-4 py-2 text-sm" name="" id="">
              <option class="text-sm" value="">Ascending</option>
              <option class="text-sm" value="">Descending</option>
            </select>
          </div>
        </div>
      </div>
    </section>
    <router-view class="router-here p-4 pt-0"></router-view>
    <!-- <todos/> -->

    <section class="w-full fixed">
      <div :class="['w-full py-4 px-8 md:w-1/2 rounded-md']">
        {{ getMessage }}
      </div>
    </section>
  </div>
</template>

<script>
/* eslint-disable */
import navBar from "./components/nav-bar.vue";
import printfulIcon from "./components/printful-icon.vue";
// import Todos from "./components/Todos.vue"
export default {
  name: "App",
  components: {
    navBar,
    printfulIcon
    //  Todos
  },

  data() {
    return {
      message: { message: "Test", type: "" }
    };
  },

  created() {
    // alert(this.$route.path.includes("edit"))
  },

  methods: {
    toggleDropdown() {
      // alert("clickedddd");
      this.visible = !this.visible;
    },
    toggleModal() {
      alert("modal working!!!!");
    }
  },

  computed: {
    getMessage() {
      return this.message;
    },
    confirmDisplay() {
      const todoItemsLink = `edit/${this.$route.params.any}`;
      const linkToEdit = `/edit/${this.$route.params.id}`;
      if (
        this.$route.path !== "/Create" &&
        this.$route.path !== linkToEdit &&
        this.$route.path !== todoItemsLink
      ) {
        return true;
      } else {
        return false;
      }
    },
    isVisible() {
      return this.visible;
    },
    currentListTitle() {
      const currentTodoList = this.$store.getters.returnCurrentTodo;
      return currentTodoList && currentTodoList.title
        ? currentTodoList.title.length > 22
          ? currentTodoList.title
              .split("")
              .splice(0, 22)
              .join("")
              .concat("...")
          : currentTodoList.title
        : "";
    }
  },

  data() {
    return {
      visible: false,
      todoViewModel: [
        {
          class: "hover:cursor-pointer mr-3.5",
          src: "sort.svg",
          title: "Sort",
          alt: "Sort",
          label: "Sort Ascending"
        },
        {
          class: "hover:cursor-pointer mr-3.5",
          src: "./assets/add.svg",
          title: "Add",
          alt: "Add",
          label: "Sort Descending"
        },
        {
          class: "hover:cursor-pointer",
          src: "./assets/delete.png",
          title: "Menu",
          alt: "Menu",
          label: "New Todo"
        }
      ],
      todoViewModel: [
        {
          class: "hover:cursor-pointer mr-3.5",
          src: "sort.svg",
          title: "Sort",
          alt: "Sort",
          label: "Edit List"
        },
        {
          class: "hover:cursor-pointer mr-3.5",
          src: "./assets/add.svg",
          title: "Add",
          alt: "Add",
          label: "Delete List"
        },
        {
          class: "hover:cursor-pointer",
          src: "./assets/delete.png",
          title: "Menu",
          alt: "Menu",
          label: "New Todo"
        }
      ]
    };
  }
};
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;800;900&display=swap);

body {
  font-family: "Montserrat", sans-serif;
}
@media screen and (min-width: 0) {
  .main_app {
    min-height: 100vh;
  }

  .options_icon {
    width: 32px;
    height: 32px;
  }

  .list__container {
    background-color: #f9f9f9;
  }

  select {
    background: #f9f9f9;
  }

  .list_dropDown {
    top: 40px;
    right: 0px;
    min-width: 250px;
  }
}
</style>
