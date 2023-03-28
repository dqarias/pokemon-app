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
        
        const pokemonName = document.createElement('h2')

        pokemonName.textContent = `${pokemon.name}`
        const renderPokemon = displayPokemon(pokemonIdUrl)
        pokemonCardBody.append(pokemonName)
   
        pokemonCardBody.append(renderPokemon)
        pokemonCard.appendChild(pokemonCardBody)
        pokemonsContainer.appendChild(pokemonCard)
        pokemonsMain.appendChild(pokemonsContainer)
    });
}

const renderPokemon = async (pokemonById) => {
    console.log(pokemonById)
    const pokemonImg = document.createElement('img')
    pokemonImg.setAttribute('src', pokemonById.sprites.other.dream_world
    .front_default)
    
}

const displayPokemon = async (pokemonIdUrl) =>{
    const pokemon = await pokeApiService.getPokemonUrl(pokemonIdUrl)
    renderPokemon(pokemon)
}

export default renderPokemons;