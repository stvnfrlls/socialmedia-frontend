<template>
  <div class="row">
    <div class="col-md-3 d-none d-lg-block">
      <SideBar />
    </div>
    <div class="col-lg-6 col-md-12">
      <div class="row">
        <div class="col">
          <StatusComponent />
        </div>
      </div>
      <div class="row mt-2">
        <div class="col">
          <PostComponent :posts="posts" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "@/plugins/axios";
import Cookie from "cookie-universal";

import SideBar from "@/components/NavBars/SideBar.vue";
import StatusComponent from "@/components/StatusComponent.vue";
import PostComponent from "@/components/PostComponent.vue";

const posts = ref([]);
const cookie = Cookie();

const getPosts = async () => {
  const cookieRes = cookie.get("data");
  const response = await axios.get(`posts/author/${cookieRes.id}`, {
    headers: {
      Authorization: "Bearer " + cookie.get("authToken"),
    },
  });

  posts.value = response.data;
};

onMounted(() => {
  getPosts();
});
</script>

<style scoped></style>
