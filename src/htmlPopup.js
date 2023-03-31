const pokemonModal = document.querySelector('.pokemon__modal');

const htmlModalPokemon = (pokemon) => {
    const modal = document.createElement('article')
    const modalContainer = document.createElement('div');

    modal.classList.add('modal');
    modalContainer.setAttribute('class', 'modal-container')

    pokemonName.textContent = `${pokemon.name}`

    modalContainer.appendChild(pokemonName)
    modal.appendChild(modalContainer)
    pokemonModal.appendChild(modal)
}

export default htmlModalPokemon;