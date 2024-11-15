import Vue from "vue";
import { createPinia, PiniaVuePlugin } from "pinia";

import App from "./App.vue";
import "./assets/main.css";

import VueI18n from "vue-i18n";
import { createI18n } from "vue-i18n-composable";
import en from "./locales/en.json";
import ar from "./locales/ar.json";

Vue.use(PiniaVuePlugin);
Vue.use(VueI18n);

export const i18n = createI18n({
  locale: localStorage.getItem("language") || "en",
  fallbackLocale: "en",
  messages: {
    en,
    ar,
  },
});

new Vue({
  pinia: createPinia(),
  i18n,
  render: (h) => h(App),
}).$mount("#app");
