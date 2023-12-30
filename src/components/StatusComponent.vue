<template>
  <div class="card">
    <div class="card-body">
      <div class="form-floating">
        <textarea
          class="form-control mb-2"
          placeholder="Leave a comment here"
          id="textarea"
          v-model="post"
        ></textarea>
        <label for="textarea">Whats on your mind</label>
      </div>
      <button
        type="button"
        class="float-end btn btn-primary"
        @click="createPost"
      >
        Post
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, ref } from "vue";
import axios from "@/plugins/axios";
import Cookie from "cookie-universal";

const post = ref("");
const emit = defineEmits();

const createPost = async () => {
  const cookie = Cookie();
  const userData = cookie.get("data");

  const response = await axios.post("/posts/create", {
    post: post.value,
    user_id: userData.id,
    headers: {
      Authorization: "Bearer " + cookie.get("authToken"),
    },
  });

  if (response) {
    post.value = "";
    emit("createdPost");
  }
};
</script>

<style scoped></style>
