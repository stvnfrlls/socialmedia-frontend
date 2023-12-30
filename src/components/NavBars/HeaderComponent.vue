<template>
  <nav class="navbar navbar-expand-sm fixed-top bg-primary p-3">
    <button
      class="navbar-toggler d-lg-none"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapsibleNavId"
      aria-controls="collapsibleNavId"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <font-awesome-icon icon="bars" />
    </button>
    <RouterLink
      to="/"
      role="button"
      class="navbar-brand fw-bolder text-center mx-auto me-md-2"
    >
      SM
    </RouterLink>
    <div class="collapse navbar-collapse" id="collapsibleNavId">
      <form class="d-flex">
        <input class="form-control" type="text" placeholder="Search" />
      </form>
      <ul
        class="navbar-nav d-flex justify-content-end"
        style="margin-left: auto"
      >
        <li class="nav-item mx-md-2 d-flex align-items-center">
          <RouterLink
            to="/"
            class="nav-link d-flex align-items-center justify-content-center"
            aria-current="page"
          >
            <font-awesome-icon icon="house" class="me-2" />
            <div class="mx-2 d-sm-block d-md-none">Home</div>
          </RouterLink>
        </li>
        <li class="nav-item mx-md-2 d-flex align-items-center">
          <RouterLink
            to="/profile"
            class="nav-link d-flex align-items-center justify-content-center"
            aria-current="page"
          >
            <font-awesome-icon icon="user" class="me-2" />
            <div class="mx-2 d-sm-block d-md-none">Profile</div>
          </RouterLink>
        </li>
        <li class="nav-item mx-md-2 d-flex align-items-center">
          <RouterLink
            to="/messages"
            class="nav-link d-flex align-items-center justify-content-center"
            aria-current="page"
          >
            <font-awesome-icon icon="message" class="me-2" />
            <div class="mx-2 d-sm-block d-md-none">Messages</div>
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped></style>
