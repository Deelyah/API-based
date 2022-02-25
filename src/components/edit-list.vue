<!--eslint disable -->
<template>
  <div class="mt-4 px-4">
    <div class="pt-4 pr-3 flex justify-end">
      <h4 class="todo text-black mr-auto">Edit Todo</h4>
      <div @click="$router.back()" class="flex justify-center items-center">
        <div>
          <img src="../assets/back.png" alt="back" />
        </div>
        <p>Back</p>
      </div>
    </div>
    <div class="main_container p-4 rounded-md border overflow-hidden mt-3">
      <h3 class="rounded-md mb-4 p-2 border-2"></h3>
      <ul class="py-2" v-if="!!(getCurrentTodo && getCurrentTodo.todolist)">
        <edit-field
          class="mb-4"
          v-for="(items, index) in getCurrentTodo.todolist"
          :key="index"
          :todoListItem="items"
          :queue="getQueue"
          @change="handleChange($event)"
        ></edit-field>

        <!-- newly added items -->
        <div v-if="!!newTodoItems.length">
          <li
            v-for="(item, index) in newTodoItems"
            :key="item.id"
            class="mb-4 flex flex-col items-start sm:flex-row sm:items-center w-full bg-transparent"
          >
            <input
              class="px-4 py-3 w-full sm:w-1/2 mb-2 sm:mb-0 sm:mr-auto rounded-md"
              type="text"
              v-model="item.title"
            />
            <button
              class="px-4 py-2 rounded-md bg-red-50 text-red-800 border-red"
              @click="removeNewTodoItem(index)"
            >
              Remove
            </button>
          </li>
        </div>

        <!-- Add new button -->
        <button
          @click="createNew()"
          class="secondary_button mt-4 w-full px-4 py-2 text-base rounded-md font-semibold"
        >
          Add New Item
        </button>
      </ul>
    </div>

    <!-- Save changes button -->
    <button
      @click="handleSave()"
      class="primary_button mt-12 w-full px-4 py-2 text-base rounded-md text-white font-semibold"
    >
      Save Changes
    </button>
  </div>
</template>

<script>
/* eslint-disable */
import editField from "./edit-field.vue";

export default {
  components: {
    editField
  },
  data() {
    return {
      newTodoItems: [],
      currentTodo: null,
      todoTitle: "",
      recordQueue: new Set()
    };
  },
  computed: {
    getCurrentTodo() {
      return this.currentTodo;
    },
    getQueue() {
      return this.recordQueue;
    }
  },

  methods: {
    generateIconId() {
      const iconId = Math.floor(Math.random() * 5) + 1;
      return iconId;
    },

    async storeNewInput() {
      try {
        if (this.todoTitle.trim() == "") {
          alert("You have no input yet");
        } else {
          await this.$store.dispatch("createNewTodo", {
            title: this.todoTitle,
            iconId: this.generateIconId()
          });
          this.$router.push("/Todos");
        }
      } catch (error) {}
    },
    isQueued(id) {
      return this.recordQueue.has(id);
    },
    async handleChange(id) {
      if (this.recordQueue.has(id)) {
        this.recordQueue.delete(id);
        this.isqueued = false;
      } else {
        this.recordQueue.add(id);
        this.isqueued = true;
      }
      console.log(this.recordQueue.has(id), this.recordQueue);
    },
    createNew() {
      this.newTodoItems.push({
        title: ""
      });
    },
    removeNewTodoItem(index) {
      this.newTodoItems.splice(index, 1);
    },
    async handleSave() {
      // get deleted items by Id
      const spliceDeletedItems = () => {
        let newArr = [];
        for (let i = 0; i < this.recordQueue.size; i++) {
          this.currentTodo.todolist.forEach((todo, index) => {
            if (todo.id === [...this.recordQueue][i]) {
              newArr.push(todo);
              this.currentTodo.todolist.splice(index, 1);
              this.recordQueue.delete([...this.recordQueue][i]);
            }
          });
        }
        return newArr;
      };

      // call delete api endpoint
      try {
        Promise.all(
          spliceDeletedItems().map(async (todo, i) => {
            const res = await this.$store.dispatch("deleteTodoItems", {
              payload: { title: todo.title },
              todoId: this.$route.params.id,
              id: todo.id
            });
            return res;
          })
        )
          .then(val => {
            console.log(val);
            return Promise.all(
              // call update api endpoint to persist data
              this.currentTodo.todolist.map(async (todo, i) => {
                const res = await this.$store.dispatch("updateTodoItems", {
                  payload: { title: todo.title },
                  todoId: this.$route.params.id,
                  id: todo.id
                });
                return res;
              })
            );
          })
          .then(val => {
            console.log(val);
            return Promise.all(
              // call api endpoint to add newly created data
              this.newTodoItems.map(async (item, i) => {
                const res = await this.$store.dispatch(
                  "createNewTodoListItem",
                  {
                    payload: { title: item.title },
                    id: this.$route.params.id
                  }
                );
                return res;
              })
            );
          })
          .then(val => {
            console.log("Passed modal")
            this.$router.push(`/Todos/${this.$route.params.id}`);
          });
      } catch (error) {
        console.log(error);
        reject(error);
      }
    },
  },

  async created() {
    let routeId = this.$route.params.id;
    await this.$store.dispatch("getCurrentTodo", routeId);
    this.currentTodo = this.$store.getters.returnCurrentTodo;
  }
};
</script>

<style scoped>
@media screen and (min-width: 0) {
  .main_container {
    background-color: #e7e7e7;
  }

  h4 {
    font-size: 16px;
    font-weight: 600;
    line-height: 17.07px;
  }

  .secondary_button {
    color: #4791ff;
    border: 1px solid #4791ff;
  }

  .primary_button {
    background-color: #4791ff;
  }
}
</style>
