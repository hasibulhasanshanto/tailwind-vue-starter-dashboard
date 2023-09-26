import { createRouter, createWebHistory, createWebHashHistory  } from "vue-router";

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
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
    {
      path: "/vip-service",
      name: "vipService",
      component: () => import("../views/VipService.vue"),
    },
    {
      path: "/activities",
      name: "activities",
      component: () => import("../views/activities/index.vue"),
      children: [
        {
          path: "interests",
          name: "interests",
          component: () => import("../views/activities/Interests.vue"),
        },
        {
          path: "photo-requests",
          name: "photoRequests",
          component: () => import("../views/activities/PhotoRequests.vue"),
        },
        {
          path: "shortlists",
          name: "shortlists",
          component: () => import("../views/activities/ShortLists.vue"),
        },
        {
          path: "profile-viewers",
          name: "profileViewers",
          component: () => import("../views/activities/ProfileViewers.vue"),
        },
        {
          path: "profile-visited",
          name: "profileVisited",
          component: () => import("../views/activities/ProfileVisited.vue"),
        },
        {
          path: "block-lists",
          name: "blockLists",
          component: () => import("../views/activities/BlockLists.vue"),
        },
        {
          path: "rejection-lists",
          name: "rejectionLists",
          component: () => import("../views/activities/RejectionLists.vue"),
        },
      ],
    },
  ],
});

export default router;
