<template>
  <div class="post-wrapper">
    <div class="overflow-x-hidden">
      <div
        v-show="posts.length >= 1"
        class="mb-2"
        v-for="post in posts"
        :key="post.id"
      >
        <div class="card">
          <div class="card-header">
            <h6 class="mb-0 d-flex align-items-center">
              <div class="profile-image ms-2"></div>
              <span class="ms-3">{{ post.author }}</span>
            </h6>
          </div>
          <div class="card-body">
            <div v-if="!post.post" class="d-flex justify-content-center">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <p v-else class="card-text">
              {{ post.post }}
            </p>
          </div>
          <div class="card-footer">
            <div class="comment-wrappper overflow-y-auto">
              <div
                class="comment-content mb-1"
                v-for="comment in post.comments"
                :key="comment.id"
              >
                <div class="h6 mb-0 d-flex align-items-center">
                  <div class="profile-image ms-2"></div>
                  <span class="comment-author ms-2">{{ comment.name }}</span>
                </div>
                <div class="comment-message">
                  <p class="card-text text-truncate" style="margin-left: 55px">
                    {{ comment.comment }}
                  </p>
                </div>
              </div>
            </div>
            <div class="input-group mt-3">
              <input
                type="text"
                class="form-control"
                v-model="comment[post.id]"
                id="commentBox"
              />
              <button
                class="btn btn-outline-secondary"
                type="button"
                id="commentBox"
                @click="addComment(post.id)"
              >
                Comment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="posts.length === 0">
      <div class="display-4 m-5 text-center">No post yet</div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, defineProps, ref } from "vue";
import axios from "@/plugins/axios";
import Cookie from "cookie-universal";

defineProps(["posts"]);
const cookie = Cookie();
const emit = defineEmits();

const comment = ref([]);

const addComment = async (postId) => {
  const user = cookie.get("data");

  const response = await axios.post("/comments/create", {
    post_id: postId,
    user_id: user.id,
    comment: comment.value[postId],
    headers: {
      Authorization: "Bearer " + cookie.get("authToken"),
    },
  });

  if (response) {
    comment.value = [];
    emit("commented");
  }
};
</script>

<style scoped>
.profile-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #343a40;
}
</style>
