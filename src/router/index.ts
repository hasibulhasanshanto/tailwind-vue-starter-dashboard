import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: () => import("../views/Dashboard.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../views/Profile.vue"),
    },
    {
      path: "/chat",
      name: "chat",
      component: () => import("../views/Chat.vue"),
    },
    {
      path: "/settings",
      name: "settings",
      component: () => import("../views/Settings.vue"),
    },
  ],
});

export default router;
