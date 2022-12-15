import axios from "axios";

const URL_BACKEND = "https://pokeapi.co/api/v2/pokemon/"

const PokemonData = async () => {
const response = await axios.get(URL_BACKEND)
const data = await response.data.results
console.log(data)
return data
} 

export default PokemonData;