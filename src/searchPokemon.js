
const searchPokemon = () => {
    const searchInput = document.querySelector('.data__search')

    searchInput.addEventListener('input', e =>{
        console.log(e.target.value)
    })
}

export default searchPokemon