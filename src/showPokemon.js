import PokeApiService from "./services/PokeApiService";

const pokeApiService = new PokeApiService();

const pokemonsMain = document.querySelector('.pokemons__container')

const renderPokemons = (pokemons) => {
    pokemonsMain.innerHTML = ""
    pokemons.forEach(pokemon => {
        const pokemonIdUrl = pokemon.url.slice(34, -1)
        const pokemonsContainer = document.createElement('section');
        const pokemonCard = document.createElement('article');
        const pokemonCardHead = document.createElement('div');
        const pokemonCardBody = document.createElement('div');
        const pokemonName = document.createElement('h2')

        pokemonName.textContent = `${pokemon.name}`
        displayPokemon(pokemonIdUrl, pokemonCardBody)
        pokemonCardBody.append(pokemonName)
        pokemonCard.appendChild(pokemonCardBody)
        pokemonsContainer.appendChild(pokemonCard)
        pokemonsMain.appendChild(pokemonsContainer)
    });
}

const renderPokemon = async (pokemonById, pokemonCardBody) => {
    console.log(pokemonById)
    const pokemonImg = document.createElement('img')
    pokemonImg.setAttribute('src', pokemonById.sprites.other["official-artwork"].front_default)
    pokemonCardBody.appendChild(pokemonImg)
}

const displayPokemon = async (pokemonIdUrl, pokemonCardBody) =>{
    const pokemon = await pokeApiService.getPokemonUrl(pokemonIdUrl)
    renderPokemon(pokemon, pokemonCardBody)
}

export default renderPokemons;