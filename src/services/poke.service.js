const { default: ApiService } = require("./api.service");

const PokemonService = {
  Get() {
    return ApiService.get(`https://pokeapi.co/api/v2/pokemon`);
  },
};
export default PokemonService;
