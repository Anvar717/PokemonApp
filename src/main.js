import Vue from "vue";
import App from "./App.vue";
import ApiService from "@/services/api.service";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import axios from "axios";

Vue.config.productionTip = false;
// axios.defaults.baseURL = "https://pokeapi.co/api/v2/";
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
ApiService.mount401Interceptor();
new Vue({
  render: (h) => h(App),
}).$mount("#app");
