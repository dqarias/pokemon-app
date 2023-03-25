import PokeApiService from "./services/PokeApiService";

const pokeApiService = new PokeApiService();

const pokemonsMain = document.querySelector('.pokemons__container')

const renderPokemons = (pokemons) => {
    pokemons.forEach(pokemon => {
        const pokemonIdUrl = pokemon.url.slice(34, -1)
        const pokemonsContainer = document.createElement('section');
        const pokemonCard = document.createElement('article');
        const pokemonCardHead = document.createElement('div');
        const pokemonCardBody = document.createElement('div');
        const pokemonImg = document.createElement('img')
        const pokemonName = document.createElement('h2')
        const pokemonUrl = document.createElement('h2')

        pokemonName.textContent = `${pokemon.name}`
        displayPokemon(pokemonIdUrl)
        
        pokemonCardBody.append(pokemonName)
        pokemonCardBody.append(pokemonUrl)
        pokemonCard.appendChild(pokemonCardBody)
        pokemonsContainer.appendChild(pokemonCard)
        pokemonsMain.appendChild(pokemonsContainer)
    });
}

const displayPokemon = async (pokemonIdUrl) =>{
    const pokemon = await pokeApiService.getPokemonUrl(pokemonIdUrl)
    console.log(pokemon)
}

export default renderPokemons;