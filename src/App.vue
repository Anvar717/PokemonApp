<template>
  <b-overlay>
    <div>
      <div class="mycards">
        <b-row>
          <b-col lg="2" md="3" sm="6" v-for="(item, index) in items" :key="index" @click="OpenModal">
            <b-card class="main-cards">
              <h4 class="text-center title">{{ item.name }}</h4>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </div>
    <b-modal size="lg" v-model="ModalShow" no-close-on-backdrop hide-footer>
      <template #modal-title >
        <div class="d-flex justify-content-between">
          <p style="background-color: brown; width: 60px; height: 60px; border-radius: 50%; display: flex; justify-content: center; align-items: center; color: white;">#1</p>
          <p class="text-center" style="margin-left: 330px;">Name</p>
        </div>
      </template>
      <div class="d-flex justify-content-center mainTabs">
        <b-tabs pills card class=" w-100">
          <b-tab title="Tab 1" active><b-card-text>
            <b-table hover :items="tableOne" :fields="fields" class="w-100"></b-table>
          </b-card-text></b-tab>
          <b-tab title="Tab 2">
            <b-card-text>
              <b-table hover :items="tableThree" :fields="fields" class="w-100"></b-table>
            </b-card-text>
          </b-tab>
        </b-tabs>
      </div>
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
      fields: [
          {
            key: 'last_name',
            variant: 'danger',
          },
          {
            key: 'size',
            variant: 'danger'
          }
        ],
      tableOne: [
        { last_name: 'Macdonald', size: 79 },
        { last_name: 'Shaw', size: 34 },
        { last_name: 'Wilson', size: 65 },
        { last_name: 'Carney', size: 100 }
      ],
      tableThree: [
        { last_name: 'Shaw', size: 86 },
        { last_name: 'Wilson', size: 23 },
        { last_name: 'Carney', size: 43 },
        { age: 40, last_name: 'Macdonald', size: 76 }
      ]
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
  width: 95%;
  height: 100%;
  margin: 40px auto;
  /* background: #ffebee;
  display: flex;
  justify-content: center;
  align-items: center; */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}




.go-arrow {
  margin-top: -4px;
  margin-right: -4px;
  color: white;
  font-family: courier, sans;
}

.main-cards {
  display: block;
  position: relative;
  max-width: 262px;
  background-color: #f2f8f9;
  border-radius: 4px;
  padding: 32px 24px;
  margin: 12px 0;
  text-decoration: none;
  z-index: 0;
  overflow: hidden;
}
.main-cards:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: -16px;
  left: -16px;
  background: #00838d;
  height: 55px;
  width: 55px;
  border-radius: 45px;
  transform: scale(1);
  transform-origin: 50% 50%;
  transition: transform 0.25s ease-out;
}
.main-cards:hover:before {
  transform: scale(21);
}

.main-cards:hover {
  cursor: pointer;
}

.main-cards:hover p {
  transition: all 0.3s ease-out;
  color: rgba(255, 255, 255, 0.8);
}
.main-cards:hover .title {
  transition: all 0.3s ease-out;
  color: #ffffff;
}
.mainTabs {
  padding: 20px;
  background-color: brown;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
}
.table > :not(caption) > * > *{
  background-color: brown !important;
}
</style>
