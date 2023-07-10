<template>
  <b-overlay>
    <div>
      <div class="mycards">
        <b-card class="cards" v-for="(item, index) in items" :key="index">
         <h4 class="text-center">{{ item.name }}</h4>
        </b-card>
      </div>
    </div>
  </b-overlay>
</template>

<script>
import PokemonService from "@/services/poke.service";

export default {
  name: "App",
  components: {
  },

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

<style scoped>
.mycards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
}

.cards {
  width: 24%;
  margin-top: 10px;
  margin-left: 8px;
  margin-right: 8px;
  height: 200px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
