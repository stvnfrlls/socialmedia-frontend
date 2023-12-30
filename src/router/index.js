import { createRouter, createWebHistory } from "vue-router";
import Cookie from "cookie-universal";

import AuthView from "@/views/AuthView.vue";
import HomeView from "@/views/HomeView.vue";
import ProfileView from "@/views/ProfileView.vue";
import FriendsView from "@/views/FriendsView.vue";
import MessagesView from "@/views/MessagesView.vue";
import UserView from "@/views/UserView.vue";

const routes = [
  {
    path: "/auth",
    name: "authenticate",
    component: AuthView,
    meta: {
      title: "Login",
      requiresAuth: false,
    },
  },
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "Socials",
      requiresAuth: true,
    },
  },
  {
    path: "/profile",
    name: "viewProfile",
    component: ProfileView,
    meta: {
      title: "Profile",
      requiresAuth: true,
    },
  },
  {
    path: "/friends",
    name: "viewFriends",
    component: FriendsView,
    meta: {
      title: "Friends",
      requiresAuth: true,
    },
  },
  {
    path: "/messages",
    name: "viewMessages",
    component: MessagesView,
    meta: {
      title: "Messages",
      requiresAuth: true,
    },
  },
  {
    path: "/user/:id",
    name: "viewUser",
    component: UserView,
    props: true,
    meta: {
      title: "Profile",
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const cookie = Cookie();

  if (to.meta.requiresAuth) {
    if (cookie.get("authToken")) {
      next();
    } else {
      next("/auth");
    }
  } else {
    next();
  }
  document.title = to.meta.title || "Socials";
});

export default router;
