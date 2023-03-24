const pokemonsMain = document.querySelector('.pokemons__container')

const renderPokemons = (pokemons) => {
    pokemons.forEach(pokemon => {
        const pokemonsContainer = document.createElement('section');
        const pokemonCard = document.createElement('article');
        const pokemonCardHead = document.createElement('div');
        const pokemonCardBody = document.createElement('div');
        const pokemonImg = document.createElement('img')
        const pokemonName = document.createElement('h2')

        pokemonName.textContent = `${pokemon.name}`

        
        pokemonCardBody.append(pokemonName)
        pokemonCard.appendChild(pokemonCardBody)
        pokemonsContainer.appendChild(pokemonCard)
        pokemonsMain.appendChild(pokemonsContainer)
    });
}

const renderPokemon = () => {

}

export default renderPokemons;