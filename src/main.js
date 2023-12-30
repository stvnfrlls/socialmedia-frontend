import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

const pinia = createPinia();

const app = createApp(App);

app.component("FontAwesomeIcon", FontAwesomeIcon);

app.use(pinia).use(router).mount("#app");
