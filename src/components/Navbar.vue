<template>
  <nav
    class="navbar bg-black bg-gradient text-white"
    data-bs-theme="dark">
    <div class="container-fluid">
      <router-link
        :to="{ name: 'home' }"
        class="text-decoration-none">
        <img
          src="/public/car-logo.png"
          class="logo-img"
          alt="" />
        <a
          cla
          class="navbar-brand fw-bold ms-3"
          >Car World</a
        >
      </router-link>
      <router-link
        :to="{ name: 'cars' }"
        class="text-decoration-none text-light fs-5">
        <img
          src="/public/car-logo2.png"
          class="logo-img"
          alt="" />
        Car for Sale
      </router-link>

      <RouterLink
        :to="{ name: 'cars' }"
        class="btn btn-outline-success fw-bold text-decoration-none">
        <i class="bi bi-search-heart fw-bold"></i>
      </RouterLink>

      <div class="location-selection">
        <div class="btn-group">
          <button
            class="btn btn-secondary btn-sm dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            Your closest shop
          </button>
          <ul class="dropdown-menu">
            <li>
              <a
                class="dropdown-item"
                href="#"
                >one</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                >two</a
              >
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                >three</a
              >
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a
                class="dropdown-item"
                href="#"
                >Separated link</a
              >
            </li>
          </ul>
        </div>
      </div>

      <!-- Cart item counter-->
      <button
        @click="emitBtn"
        type="button"
        class="btn btn-sm btn-primary position-relative p-0 pe-2 ps-2">
        <i class="bi bi-cart-fill fs-3"></i>
        <span
          class="position-absolute top-50 start-50 translate-middle rounded-pill fw-bold text-dark"
          >{{ $store.state.cart.length
          }}<span class="visually-hidden">unread messages</span></span
        >
      </button>
      <!-- present problem -->
    </div>
  </nav>
</template>

<script>
  import axios from "axios";
  export default {
    data() {
      return {};
    },

    methods: {
      emitBtn() {
        this.$emit("cartBtn");
      },
    },
  };
</script>

<style scoped>
  .logo-img {
    width: 50px;
  }

  .form-select {
    width: 200px !important;
  }
</style>
