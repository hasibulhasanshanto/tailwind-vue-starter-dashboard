import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: import("../views/index.vue"),
    },
    {
      path: "/",
      name: "home",
      component: import("../views/dashboard/index.vue"),
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          component: import("../views/dashboard/Dashboard.vue"),
        },
        {
          path: "/profile",
          name: "profile",
          component: import("../views/dashboard/Profile.vue"),
        },
        {
          path: "/chat",
          name: "chat",
          component: import("../views/dashboard/Chat.vue"),
        },
        {
          path: "/settings",
          name: "settings",
          component: import("../views/dashboard/Settings.vue"),
        },
      ],
    },
  ],
});

export default router;
