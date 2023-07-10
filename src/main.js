import Vue from "vue";
import App from "./App.vue";
import ApiService from "@/services/api.service";
// import axios from "axios";

Vue.config.productionTip = false;
// axios.defaults.baseURL = "https://pokeapi.co/api/v2/";

ApiService.mount401Interceptor();
new Vue({
  render: (h) => h(App),
}).$mount("#app");
