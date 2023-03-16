import PokeApiService from "./services/PokeApiService";

const pokeApiService = new PokeApiService();

const displayPokemon = async () => {
    const pokemons = await pokeApiService.getPokemon()
    console.log(pokemons)
}

displayPokemon();