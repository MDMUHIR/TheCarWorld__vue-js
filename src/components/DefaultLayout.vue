<template>
  <div>
    <navbar
      class="fixed-top"
      @searchItem="search"
      @cartBtn="toggleCart">
    </navbar>

    <div class="container">
      <div class="row">
        <div class="col">
          <router-view></router-view>
        </div>

        <div
          v-if="showCart"
          class="col-sm-2 position-fixed top-10 end-0 bg-info bg-gradient bg-opacity-25 p-1 rounded-bottom">
          <cart></cart>
        </div>
      </div>
    </div>
    <a
      class="creator position-fixed bottom-0 end-0 btn btn-light p-0 ps-1 pe-1 rounded-start-2 rounded-end-0 fw-light text-decoration-none fst-italic text-dark"
      href="https://github.com/MDMUHIR"
      >© MDMUHIR</a
    >
  </div>
</template>

<script>
  import Navbar from "./Navbar.vue";
  import Cart from "./Cart.vue";

  export default {
    components: {
      Navbar,

      Cart,
    },
    data() {
      return {
        showCart: false,
      };
    },

    methods: {
      toggleCart() {
        this.showCart = !this.showCart;
      },

      search(keyword) {
        this.items = data.filter((item) => {
          return item.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
        });
      },
    },
  };
</script>

<style scoped>
  .container {
    margin-top: 70px;
    max-width: 90%;
  }
</style>
