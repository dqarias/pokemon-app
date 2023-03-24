import PokeApiService from "./services/PokeApiService";
import renderPokemons from "./showPokemon";

const pokeApiService = new PokeApiService();

const displayPokemon = async () => {
    const pokemons = await pokeApiService.getPokemon()
    console.log(pokemons.results)
    renderPokemons(pokemons.results)
}

displayPokemon();