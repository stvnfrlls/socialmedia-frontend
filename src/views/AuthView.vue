<template>
  <div class="wrapper m-auto mt-5">
    <div v-show="isVisible" class="card">
      <div class="card-body">
        <div class="fa-2x fw-bolder mb-3 text-center">Login</div>
        <div class="mb-3">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              v-model="username"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              v-model="password"
            />
            <label for="floatingPassword">Password</label>
          </div>
        </div>
        <div class="btn btn-primary my-2 w-100" @click="login">LOGIN</div>
        <div class="btn btn-secondary w-100" @click="toggleVisibility">
          SIGN UP
        </div>
        <div class="mt-2 text-center" role="button">forget password</div>
      </div>
    </div>
    <div v-show="!isVisible" class="card">
      <div class="card-body">
        <div class="fa-2x fw-bolder mb-3 text-center">Sign Up</div>
        <div class="mb-3">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="floatingNewUser"
              placeholder="name@example.com"
              v-model="newEmail"
            />
            <label for="floatingNewUser">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingFullname"
              placeholder="Fullname"
              v-model="newName"
            />
            <label for="floatingFullname">Fullname</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingNewPassword"
              placeholder="Password"
              v-model="newPassword"
            />
            <label for="floatingNewPassword">Password</label>
          </div>
        </div>
        <div class="btn btn-success my-2 w-100" @click="signup">REGISTER</div>
        <div class="btn btn-secondary w-100" @click="toggleVisibility">
          Go Back
        </div>
      </div>
    </div>
    <div class="card d-none mt-2">
      <div class="card-body">
        <div class="h5 text-center mb-3 p-1 border-bottom">Login with</div>
        <div class="d-flex justify-content-evenly">
          <div class="btn btn-primary w-100 mx-2">
            <font-awesome-icon icon="f" />
          </div>
          <div class="btn btn-success w-100 mx-2">
            <font-awesome-icon icon="g" />
          </div>
          <div class="btn btn-warning w-100 mx-2">
            <font-awesome-icon icon="at" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "@/plugins/axios";
import { ref } from "vue";
import Cookie from "cookie-universal";
import router from "@/router";

const cookie = Cookie();

const isVisible = ref(true);

const username = ref("");
const password = ref("");

const newName = ref("");
const newEmail = ref("");
const newPassword = ref("");

const toggleVisibility = () => {
  isVisible.value = !isVisible.value;
};

const login = async () => {
  try {
    const response = await axios.post("/login", {
      email: username.value,
      password: password.value,
    });
    const data = response.data;

    cookie.set("authToken", data.token, {
      path: "/",
      maxAge: 7 * 24 * 60 * 60,
      secure: true,
      sameSite: "Strict",
    });

    cookie.set("data", data);

    router.push("/");
  } catch (error) {
    console.error("Login failed", error);
  }
};

const signup = async () => {
  try {
    await axios.post("/api/signup", {
      name: newName.value,
      email: newEmail.value,
      password: newPassword.value,
    });
  } catch (error) {
    console.error("Signup failed", error);
  }
};
</script>

<style scoped>
.wrapper {
  height: 420px;
  max-width: 350px;
}
</style>
@/plugins/axios
