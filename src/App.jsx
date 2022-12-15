import react, { useEffect } from 'react'
import './App.scss'
import PokemonData from './services/pokemonAPI'

function App() {
  useEffect(()=>{
    console.log(PokemonData())
  },[])

  return (
    <div className="App">
      
    </div>
  )
}

export default App
