<template>
  <div class="row">
    <div class="user-card-wrapper d-inline-flex overflow-y-hidden">
      <div class="col" v-for="user in users" :key="user.id">
        <div class="card m-2">
          <div class="img-top profile-image"></div>
          <div class="card-body">
            <RouterLink :to="'/user/' + user.id" class="text-decoration-none">
              <div class="h5-lg fw-bolder">{{ user.name }}</div>
            </RouterLink>
            <div class="text-muted text-truncate">{{ user.email }}</div>
            <div class="btn-group mt-2 d-flex w-10">
              <button type="button" class="btn btn-primary">Accept</button>
              <button type="button" class="btn btn-danger">Reject</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { RouterLink } from "vue-router";

defineProps(["users"]);
</script>

<style scoped>
.card {
  height: 340px;
  width: 220px;
}
.profile-image {
  width: auto;
  height: 233.188px;
  margin-right: 0px;
  background-color: grey;
}

.user-card-wrapper {
  width: fit-content;
}

.user-card-wrapper:hover {
  overflow-x: visible;
}
</style>
