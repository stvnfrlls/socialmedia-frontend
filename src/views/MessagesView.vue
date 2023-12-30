<template>
  <div class="row">
    <div
      class="col-md-2 col-lg-3"
      :class="{ 'd-md-block': !isActive, 'd-none d-md-block': isActive }"
    >
      <div class="row p-2">
        <div class="col-12 d-flex align-items-center">
          <div class="h5 mb-0 fw-bold">CHATS</div>
          <font-awesome-icon
            icon="ellipsis"
            class="d-none d-lg-block ms-auto me-2"
          />
        </div>
      </div>
      <div class="row conversation p-2 overflow-y-scroll">
        <div class="col-12">
          <ul class="list-group">
            <li
              class="d-flex list-group-item text-truncate"
              :class="{ active: isActive === user.id }"
              v-for="user in conversationList"
              :key="user.id"
              role="button"
              @click="setActive(user.id, user.name)"
            >
              <div class="me-2">
                <div class="profile-image"></div>
              </div>
              <div class="flex-column text-truncate">
                <div class="fw-bold">{{ user.name }}</div>
                <div class="text-muted">
                  {{ user.text }}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="col-md-10 col-lg-9">
      <div v-if="isActive" class="card">
        <div class="card-header d-inline-flex">
          <font-awesome-icon
            class="m-2 d-sm-block d-lg-none"
            icon="chevron-left"
            @click="setActive(null)"
          />
          <div class="username fw-bold my-1">{{ isActiveUser }}</div>
        </div>
        <div class="card-body overflow-y-scroll">
          <div class="chat-box">
            <div
              v-for="(message, index) in chatMessages"
              :key="index"
              class="message"
            >
              <div
                class="d-flex"
                :class="{
                  'justify-content-end': message.sender_id === userId,
                  'justify-content-start': message.sender_id != userId,
                }"
              >
                <div
                  :class="{
                    'sender-right': message.sender_id === userId,
                    'sender-left': message.sender_id != userId,
                  }"
                >
                  {{ message.text }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              aria-describedby="button-addon2"
            />
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              Send
            </button>
          </div>
        </div>
      </div>
      <div
        v-else
        class="card-body d-flex align-items-center justify-content-center"
      >
        <div class="h5 fw-bold">No conversion selected</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "@/plugins/axios";
import Cookie from "cookie-universal";

const cookie = Cookie();

const cookieData = cookie.get("data");
const userId = ref(cookieData.id);

const isActive = ref();
const isActiveUser = ref();

const conversationList = ref([]);

const chatMessages = ref([]);

const getconversationList = async () => {
  const cookieRes = cookie.get("data");
  const response = await axios.get(`/conversation/${cookieRes.id}`, {
    headers: {
      Authorization: "Bearer " + cookie.get("authToken"),
    },
  });

  conversationList.value = response.data;
};

const getchatMessages = async () => {
  const cookieRes = cookie.get("data");
  const response = await axios.get(
    `/conversation/${cookieRes.id}/${isActive.value}`,
    {
      headers: {
        Authorization: "Bearer " + cookie.get("authToken"),
      },
    }
  );

  chatMessages.value = response.data;
};

const setActive = (index, name) => {
  if (isActive.value === index) {
    isActive.value = null;
    isActiveUser.value = null;
  } else {
    isActive.value = index;
    isActiveUser.value = name;

    getchatMessages();
  }
};

onMounted(() => {
  getconversationList();
});
</script>

<style scoped>
.profile-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #343a40;
}

.conversation {
  height: 610px;
}

.card-body {
  height: 540px;
}
.message {
  margin-bottom: 5px;
  width: 100%;
}

.sender-left {
  background-color: rgba(0, 0, 0, 0.268);
  max-width: 70%;
  word-wrap: break-word;
  padding: 8px;
  border-radius: 10px;
}

.sender-right {
  background-color: rgba(67, 67, 255, 0.426);
  max-width: 70%;
  word-wrap: break-word;
  padding: 8px;
  border-radius: 10px;
}
</style>
