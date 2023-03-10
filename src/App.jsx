import react, { useState, useEffect } from 'react'
import './App.scss'
import PokemonData from './services/pokemonAPI'

function App() {

  const [pokemons, setPokemons] = useState([])

  useEffect(()=>{
    setPokemons(PokemonData)
  },[])

  console.log(pokemons)

 



  return (
    <div className="App">
      
    </div>
  )
}

export default App
