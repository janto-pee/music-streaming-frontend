import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import validation from "./includes/validation";
import { auth } from "./includes/firebase";
import router from "./router";

import "./assets/main.css";
let app;

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);

    app.use(store);
    app.use(validation);
    app.use(router);

    app.mount("#app");
  }
});
