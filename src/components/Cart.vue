<template>

  <ul class="list-group">
    <li class="list-group-item">
      <span class="item-name fw-bold">Name:</span>
      <span class="item-price float-end fw-bold">Price:</span>
    </li>

    <li
      v-for="(item, index) in items"
      :key="index"
      class="list-group-item">
      <button
        class="btn btn-sm btn-danger me-2 rounded-end-circle"
        @click="itemRemove(index)">
        -
      </button>
      <span class="item-name">{{ item.title }}</span>
      <span class="item-price float-end">${{ item.price }}</span>
    </li>
    <br />
    <li class="list-group-item">
      <span class="item-total fw-semibold">Total:</span>
      <span class="item-price float-end fw-semibold">${{ totalPrice }}</span>
    </li>
    <li
      v-if="items.length > 0"
      class="list-group-item d-grid">
      <button
        @click="checkOut"
        class="btn btn-success">
        Checkout
      </button>
    </li>
  </ul>
</template>

<script>
  import { toast } from "vue3-toastify";
  import "vue3-toastify/dist/index.css";
  export default {
    computed: {
      items() {
        return this.$store.getters.getCart;
      },
      totalPrice() {
        let total = 0;
        this.items.forEach((item) => {
          total += parseFloat(item.price);
        });
        return total.toFixed(2);
      },
    },
    methods: {
      itemRemove(index) {
        this.$store.dispatch("removeItem", index);
        toast.warning("Removed from cart", {
          autoClose: 1000,
        });
      },

      checkOut() {
        if (confirm("Are you sure to checkout?")) {
          this.$store.dispatch("clearCart");
        }
      },
    },
  };
</script>

<style></style>
