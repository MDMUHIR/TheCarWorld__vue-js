<template>
  <div
    v-if="item"
    class="card mb-3"
    style="max-width: 740px">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          :src="item.image"
          class="img-fluid rounded-start"
          alt="image" />
      </div>
      <div class="col-md-8 position-relative">
        <div class="card-body">
          <h4 class="card-title">{{ item.title }}</h4>
          <p class="card-text">
            {{ item.description }}
          </p>
          <div class="card-footer lh-lg position-absolute bottom-0 end-0 wi">
            <span class="item-price fw-semibold">Price: ${{ item.price }}</span>
            <span>
              <button
                @click="addToCart(item)"
                class="btn btn-secondary float-end">
                Add to cart
              </button>
            </span>
          </div>
          <!-- <p class="card-text">
            <small class="text-body-secondary">Last updated 3 mins ago</small>
          </p> -->
        </div>
      </div>
    </div>
  </div>

  <h3
    v-else
    class="text-danger mt-5 text-center">
    LOADING....
  </h3>
</template>

<script>
  import axios from "axios";
  export default {
    data() {
      return {
        item: null,
      };
    },
    mounted() {
      this.fetchItem();
    },
    methods: {
      fetchItem() {
        let self = this;
        axios
          .get("http://localhost:3000/item/" + this.$route.params.id)
          .then((response) => {
            self.item = response.data;
          });
      },

      addToCart(item) {
        this.$store.dispatch("addToCart", item);
      },
    },
  };
</script>

<style scoped>
.card-footer{
  width: 100%;
}
</style>
