<template>
  <div
    v-if="!loading"
    class="row d-flex justify-content-center bg-dark-subtle rounded">
    <form
      @submit.prevent="search"
      class="d-flex m-2"
      role="search">
      <input
        class="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        v-model="keyword" />
      <button
        class="btn btn-outline-success"
        type="submit">
        Search
      </button>
    </form>
    <div
      v-for="(item, index) in items"
      :key="index"
      class="card m-1 pt-2 "
      style="width: 15rem">
      <router-link
        class="text-decoration-none text-primary-emphasis"
        :to="{ path: '/details/' + item.id }">
        <img
          :src="item.image"
          class="card-img-top"
          alt="..." />
        <div class="card-body bg-body-secondary">
          <h5 class="card-title text-center">{{ item.title }}</h5>
        </div>
      </router-link>
      <div class="card-body">
        <p class="card-text float-start mt-1">${{ item.price }}</p>
        <a
          @click="addToCart(item)"
          class="btn btn-primary float-end"
          >Buy</a
        >
      </div>
    </div>
  </div>
  <h1
    v-else
    class="text-danger mt-5 text-center">
    Loading...Please Wait...
  </h1>
</template>

<script>
  import axios from "axios";
  import { toast } from "vue3-toastify";
  import "vue3-toastify/dist/index.css";
  export default {
    data() {
      return {
        loading: true,
        keyword: "",
      };
    },

    mounted() {
      this.fetchInventory();
    },
    computed: {
      items() {
        return this.$store.getters.getInventory;
      },
    },
    methods: {
      search() {
        let self = this;
        axios
          .get("http://localhost:3000/search/" + this.keyword)
          .then((response) => {
            self.$store.commit("setInventory", response.data);
          });
      },
      addToCart(item) {
        this.$store.dispatch("addToCart", item);
        toast.success("Added to cart", {
          autoClose: 1000,
        });
      },

      fetchInventory() {
        let self = this;
        axios.get("http://localhost:3000/items").then((response) => {
          self.$store.dispatch("setInventory", response.data);
          self.loading = false;
        });
      },
    },
  };
</script>

<style scoped></style>
