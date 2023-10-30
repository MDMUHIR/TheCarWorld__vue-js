import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../components/DefaultLayout.vue"),
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("../router/views/Home.vue"),
      },

      {
        path: "/details/:id",
        name: "details",
        component: () => import("../router/views/ItemDetails.vue"),
      },

      {
        path: "/cars",
        name: "cars",
        component: () => import("../router/views/Inventory.vue"),
      },
    ],
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
