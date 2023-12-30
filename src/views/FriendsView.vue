<template>
  <div class="row">
    <div class="col-md-3 d-none d-sm-block">
      <SocialBar :users="friends" />
    </div>
    <div class="col-sm-12 col-md-9">
      <div class="row my-2">
        <div class="d-inline-flex">
          <font-awesome-icon class="m-2 d-md-none" icon="chevron-left" />
          <div class="h2 fw-bold">FRIEND REQUEST</div>
        </div>
        <div class="col">
          <div v-if="friend_request.length > 0">
            <UserCard :users="friend_request" />
          </div>
          <div
            v-else
            class="d-flex align-items-center justify-content-center"
            style="height: 250px; width: 100%"
          >
            <div class="spinner-grow" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
      <div class="row my-2">
        <div class="h2 fw-bold">PEOPLE YOU MAY KNOW</div>
        <div class="col">
          <div v-if="users.length > 0">
            <UserCard :users="users" />
          </div>
          <div
            v-else
            class="d-flex align-items-center justify-content-center"
            style="height: 250px; width: 100%"
          >
            <div class="spinner-grow" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SocialBar from "@/components/NavBars/SocialBar.vue";
import UserCard from "@/components/UserCard.vue";
import { ref, onMounted } from "vue";
import axios from "@/plugins/axios";
import Cookie from "cookie-universal";

const users = ref([]);
const friends = ref([]);
const friend_request = ref([]);
const cookie = Cookie();

const cookieRes = cookie.get("data");
const userId = ref(cookieRes.id);

const getFriendRequest = async () => {
  const response = await axios.get(`friends/request/${cookieRes.id}`, {
    headers: {
      Authorization: "Bearer " + cookie.get("authToken"),
    },
  });

  friend_request.value = response.data;
};

const getUsers = async () => {
  const response = await axios.get("/users", {
    headers: {
      Authorization: "Bearer " + cookie.get("authToken"),
    },
  });

  const friendIds = friends.value.map((friend) => friend.id);

  const requestedIds = friend_request.value.map((request) => request.id);

  const filterFriends = response.data.filter(
    (user) => !friendIds.includes(user.id)
  );

  const filterRequested = filterFriends.filter(
    (user) => !requestedIds.includes(user.id)
  );

  const filteredList = filterRequested.filter(
    (user) => user.id !== userId.value
  );

  users.value = filteredList;
};

const getFriends = async () => {
  const cookieRes = cookie.get("data");
  const response = await axios.get(`/friends/${cookieRes.id}`, {
    headers: {
      Authorization: "Bearer " + cookie.get("authToken"),
    },
  });

  friends.value = response.data;
};

onMounted(() => {
  getFriends();
  getFriendRequest();
  getUsers();
});
</script>

<style scoped>
.profile-image {
  width: auto;
  height: 233.188px;
  margin-right: 0px;
  background-color: grey;
}

.friend-request,
.known-people {
  width: fit-content;
  padding-bottom: 20px;
}

.friend-request:hover,
.known-people:hover {
  overflow-x: visible;
}
</style>
