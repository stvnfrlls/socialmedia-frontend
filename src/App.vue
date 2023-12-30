<template>
  <div>
    <HeaderComponent />
    <div class="app p-3">
      <RouterView />
    </div>
    <!-- <FooterComponent class="d-none d-lg-block" /> -->
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import HeaderComponent from "@/components/NavBars/HeaderComponent.vue";
import FooterComponent from "@/components/NavBars/FooterComponent.vue";
</script>

<style scoped>
.app {
  margin-top: 72px;
}
</style>
