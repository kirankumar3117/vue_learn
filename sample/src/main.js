import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
/* eslint-disable */
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
// Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin);

createApp(App).use(BootstrapVue).use(IconsPlugin).use(store).use(router).mount("#app");
