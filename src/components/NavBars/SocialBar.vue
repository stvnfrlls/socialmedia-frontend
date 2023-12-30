<template>
  <div>
    <ul class="list-group">
      <div class="active-user-wrapper" v-for="user in users" :key="user.id">
        <li class="list-group-item d-flex align-items-center">
          <div class="profile-image"></div>
          <span class="text-truncate">{{ user.name }}</span>
        </li>
      </div>
    </ul>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps(["users"]);
</script>

<style scoped>
.profile-image {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-left: 3px;
  margin-right: 5px;
  background-color: grey;
}

.profile-name {
  flex: 1;
  min-width: 0;
}
</style>
