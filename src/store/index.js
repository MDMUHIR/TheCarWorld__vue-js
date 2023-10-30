import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      inventory: [],
      cart: [],
     
    };
  },
  getters: {
    getInventory(state) {
      return state.inventory;
    },
    getCart(state) {
      return state.cart;
    },
   
  },
  mutations: {
    setInventory(state, payload) {
      state.inventory = payload;
    },
    addToCart(state, payload) {
      state.cart.push(payload);
    },
    removeItem(state, payload) {
      state.cart.splice(payload, 1);
    },
    clearCart(state) {
      state.cart = [];
    },
    
  },
  actions: {
    setInventory(context, payload) {
      context.commit("setInventory", payload);
    },
    addToCart(context, payload) {
      context.commit("addToCart", payload);
    },
    removeItem(context, payload) {
      context.commit("removeItem", payload);
    },
    clearCart(context, payload) {
      context.commit("clearCart", payload);
    },
// 
    increment: (context, payload) => {
      setTimeout(() => {
        context.commit("increment", payload)
      }, 3000)
    }

  },
});

export default store;
