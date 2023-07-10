<template>
  <b-overlay>
    <div class="mycards">
      <div>
        <b-card style="border: 1px solid red;" v-for="(item, index) in items" :key="index">
          <p>{{ item.name }}</p>
        </b-card>
      </div>
    </div>
  </b-overlay>
  <!-- <div>
    <ul>
      <li v-for="(item, index) in items" :key="index">{{ item.name }}</li>
    </ul>
  </div> -->
</template>

<script>
import PokemonService from "@/services/poke.service";
// import {
//   BOverlay,
//   BCard,
//   BRow,
//   BCol,
// } from "bootstrap-vue";
export default {
  name: "App",
  components: {
    // BOverlay,
    // BCard,
    // BRow,
    // BCol
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
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: baseline;
  align-content: space-evenly;
  width: 100%;

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
