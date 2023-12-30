// store.js
import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("userStore", () => {
  const id = ref(null);
  const name = ref("");
  const email = ref("");

  function setUserId(valueId) {
    this.id = valueId;
  }

  function setUserName(valueName) {
    this.name = valueName;
  }

  function setUserEmail(valueEmail) {
    this.email = valueEmail;
  }
  return {
    id,
    name,
    email,
    setUserId,
    setUserName,
    setUserEmail,
  };
});
