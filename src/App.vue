<template>
  <b-overlay>
    <div>
      <div class="mycards">
        <b-card class="cards" v-for="(item, index) in items" :key="index" @click="OpenModal">
          <h4 class="text-center">{{ item.name }}</h4>
        </b-card>
      </div>
    </div>
    <b-modal size="lg" v-model="ModalShow" no-close-on-backdrop hide-footer>

    </b-modal>
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
      ModalShow: false,
    };
  },
  created() {
    PokemonService.Get().then((res) => {
      console.log(res);
      this.items = res.data.results;
    });
  },
  methods: {
    OpenModal() {
      this.ModalShow = true;
    }
  }
};
</script>

<style scoped>
.mycards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  /* background: #ffebee;
  display: flex;
  justify-content: center;
  align-items: center; */
}

.cards {
  width: 24%;
  margin-top: 10px;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 10px;
  height: 200px;
  /* cursor: pointer;
  position: relative;
  padding: 10px 20px;
  background: white;
  font-size: 28px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  transition: all 1s;

  &:after,
  &:before {
    content: " ";
    width: 10px;
    height: 10px;
    position: absolute;
    border: 0px solid #fff;
    transition: all 1s;
  }

  &:after {
    top: -1px;
    left: -1px;
    border-top: 5px solid black;
    border-left: 5px solid black;
  }

  &:before {
    bottom: -1px;
    right: -1px;
    border-bottom: 5px solid black;
    border-right: 5px solid black;
  }

  &:hover {
    border-top-right-radius: 0px;
    border-bottom-left-radius: 0px;

    &:before,
    &:after {
      width: 100%;
      height: 100%;
    }
  } */
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
