<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="img-top cover-photo rounded-top-2"></div>
          <div class="card-body user-header position-relative">
            <div class="profile-photo position-absolute translate-middle"></div>
            <div class="user-detail">
              <div class="d-flex justify-content-between align-items-center">
                <div class="h5 fw-bolder mb-0">{{ username }}</div>
                <div class="">
                  <button class="btn btn-secondary">ADD FRIEND</button>
                </div>
              </div>
              <div class="text-muted">200 FRIENDS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-3 profile-content">
      <div class="col-lg-4 d-none d-lg-block">
        <div class="row mb-2">
          <div class="col">
            <div class="card">
              <div class="card-body">
                <div class="h5 fw-bolder">INTRO</div>
                <div class="d-flex mb-2">
                  <font-awesome-icon class="m-1" icon="school" />
                  <div class="ms-2">STUDIES AT SCHOOLNAME</div>
                </div>
                <div class="d-flex mb-2">
                  <font-awesome-icon class="m-1" icon="school" />
                  <div class="ms-2">WENT TO SCHOOLNAME</div>
                </div>
                <div class="d-flex mb-2">
                  <font-awesome-icon class="m-1" icon="rss" />
                  <div class="ms-3">FOLLOWED BY 200</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col">
                    <div class="h5 fw-bolder">PHOTOS</div>
                  </div>
                </div>
                <div class="row row-cols-3 g-1">
                  <div class="col user-images-container">
                    <div class="user-images"></div>
                  </div>
                  <div class="col user-images-container">
                    <div class="user-images"></div>
                  </div>
                  <div class="col user-images-container">
                    <div class="user-images"></div>
                  </div>
                  <div class="col user-images-container">
                    <div class="user-images"></div>
                  </div>
                  <div class="col user-images-container">
                    <div class="user-images"></div>
                  </div>
                  <div class="col user-images-container">
                    <div class="user-images"></div>
                  </div>
                  <div class="col user-images-container">
                    <div class="user-images"></div>
                  </div>
                  <div class="col user-images-container">
                    <div class="user-images"></div>
                  </div>
                  <div class="col user-images-container">
                    <div class="user-images"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-lg-8">
        <Post :posts="posts" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Post from "@/components/PostComponent.vue";
import { ref, onMounted } from "vue";
import axios from "@/plugins/axios";
import Cookie from "cookie-universal";
import { useRoute } from "vue-router";

const route = useRoute();
const cookie = Cookie();

const routeId = ref(route.params.id);
const username = ref("");
const posts = ref([]);

const getUserData = async () => {
  const response = await axios.get(`/users/${routeId.value}`, {
    headers: {
      Authorization: "Bearer " + cookie.get("authToken"),
    },
  });
  const userdata = response.data;
  username.value = userdata.name;
};

const getUserPost = async () => {
  const response = await axios.get("/posts", {
    headers: {
      Authorization: "Bearer " + cookie.get("authToken"),
    },
  });

  const filteredPosts = response.data.filter(
    (post) => post["user_id"] == route.params.id
  );
  console.log(filteredPosts);
  posts.value = filteredPosts;
};
onMounted(() => {
  getUserData();
  getUserPost();
});
</script>

<style scoped>
.cover-photo {
  width: auto;
  height: 300px;
  background-color: grey;
}

.user-header {
  height: 110px;
}
.profile-photo {
  top: -5%;
  left: 13%;
  width: 200px;
  height: 200px;
  background-color: #3498db;
  border-radius: 50%;
  border: 2px solid #2c3e50;
}
.user-detail {
  margin-left: 225px;
}
.profile-content {
  height: fit-content;
}
.user-images-container {
  display: flex;
  align-content: center;
  justify-content: center;
}
.user-images {
  width: 90px;
  height: 90px;
  background-color: grey;
}

/* Extra small devices (phones) */
@media only screen and (max-width: 575.98px) {
  .user-header {
    height: 150px;
  }
  .profile-photo {
    top: -5%;
    left: 50%;
    width: 150px;
    height: 150px;
    background-color: #3498db;
    border-radius: 50%;
    border: 2px solid #2c3e50;
  }
  .user-detail {
    margin-top: 50px;
    margin-left: auto;
  }
}

/* Small devices (tablets) */
@media only screen and (min-width: 576px) and (max-width: 768px) {
  .user-header {
    height: 150px;
  }
  .profile-photo {
    top: -5%;
    left: 50%;
    width: 150px;
    height: 150px;
    background-color: #3498db;
    border-radius: 50%;
    border: 2px solid #2c3e50;
  }
  .user-detail {
    margin-top: 50px;
    margin-left: auto;
  }
}

/* Extra large devices (large desktops) */
@media only screen and (min-width: 1200px) {
  .user-header {
    height: 120px;
  }
  .profile-photo {
    top: -5%;
    left: 10%;
    width: 190px;
    height: 190px;
    background-color: #3498db;
    border-radius: 50%;
    border: 2px solid #2c3e50;
  }
  .user-detail {
    margin-top: 10px;
    margin-left: 240px;
  }
}
</style>
