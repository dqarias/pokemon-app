import PokeApiService from "./services/PokeApiService";
import renderPokemons from "./showPokemon";

import "./style.css";

const pokeApiService = new PokeApiService();
const searchInput = document.querySelector('.data__search')
let search_pokemon = ""

const displayPokemon = async () => {
    const pokemons = await pokeApiService.getPokemon()
    console.log(pokemons.results)
    const dataFiltered = pokemons.results.filter((pokemon)=>{
        return(
            pokemon.name.toLowerCase().includes(search_pokemon)
        )
    })
    console.log(dataFiltered)
    renderPokemons(dataFiltered)
}

displayPokemon();

searchInput.addEventListener('input', e =>{
    search_pokemon = e.target.value.toLowerCase();
    console.log(search_pokemon)
    displayPokemon();
})
