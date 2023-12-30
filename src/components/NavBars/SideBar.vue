<template>
  <div class="sidebar-wrapper">
    <div class="d-flex align-items-center p-2">
      <div class="profile-image"></div>
      <div class="ms-2">
        <div class="fw-bolder">{{ username }}</div>
        <div class="fs-6">{{ email }}</div>
      </div>
    </div>
    <nav class="navigation">
      <ul class="nav nav-pills flex-column">
        <li class="nav-item">
          <RouterLink class="nav-link" to="/">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/profile">Profile</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/friends">Friends</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/messages">Messages</RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";
import Cookie from "cookie-universal";

const cookies = Cookie();
const cookieRes = cookies.get("data");

const username = ref(cookieRes.name);
const email = ref(cookieRes.email);
</script>

<style scoped>
.sidebar-wrapper {
  height: 640px;
}
.profile-image {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #343a40;
}
.nav-link:hover {
  border-radius: 8px;
  background-color: #343a40;
  color: white;
}
</style>
