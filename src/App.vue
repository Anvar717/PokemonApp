<template>
  <div>
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import PokemonService from "@/services/poke.service";

export default {
  name: "App",
  components: {},
  data() {
    return {
      items: [],
    };
  },
  created() {
    PokemonService.Get().then((res) => {
      console.log(res);
      this.items = res.data.results;
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
