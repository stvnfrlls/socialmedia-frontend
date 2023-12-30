<template>
  <div class="row gx-3">
    <div class="col-md-3 d-none d-lg-block">
      <SideBar />
    </div>
    <div class="col-lg-6 col-md-12">
      <div class="row">
        <div class="col">
          <StatusComponent @createdPost="getPosts" />
        </div>
      </div>
      <div class="row post-wrapper mt-2 overflow-x-hidden">
        <div class="col">
          <PostComponent @commented="getPosts" :posts="posts" />
        </div>
      </div>
    </div>
    <div class="col-lg-3 socialbar-wrapper d-none d-lg-block overflow-x-hidden">
      <SocialBar :users="activeUsers" />
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
import SocialBar from "@/components/NavBars/SocialBar.vue";

const posts = ref([]);
const activeUsers = ref([]);
const cookie = Cookie();

const getPosts = async () => {
  const response = await axios.get("/posts", {
    headers: {
      Authorization: "Bearer " + cookie.get("authToken"),
    },
  });
  posts.value = response.data;
};

const getactiveUsers = async () => {
  const cookieRes = cookie.get("data");
  const response = await axios.get(`/friends/${cookieRes.id}`, {
    headers: {
      Authorization: "Bearer " + cookie.get("authToken"),
    },
  });
  activeUsers.value = response.data;
};
onMounted(() => {
  getactiveUsers();
  getPosts();
});
</script>

<style scoped>
.post-wrapper {
  height: 510px;
}
.socialbar-wrapper {
  height: 640px;
}
</style>
