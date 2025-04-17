import { useState, useEffect } from 'react'
import './App.css'
import './styles/Container.css'
import './styles/Pokedex.css'
import axios from "axios"
import Loader from './components/Loader'
import Pokemon from './components/Pokemon'
import UseLocalStorage from './components/UseLocalStorage'
import { PokemonType } from './types/Pokemon.types'
import { Capitalize } from './components/Capitalize'

const pkmId = () => Number(localStorage.getItem('id')) || 1

function App() {
  const [pokemon, setArray] = useState([])
  const [error, setError] = useState({})
  //const currentPkm: number = 27;

  const [currentPkm, setCurrentPkm] = UseLocalStorage<number>('id', pkmId())
  const [PP, setPP] = useState(currentPkm)

  if(PP !== currentPkm) {
    setPP(currentPkm)
    setCurrentPkm(pkmId)
  }

  const prevPkm: any = (pokemon.map((pkm:PokemonType) => {
    if (pkm.id ===(currentPkm - 1))
      return Capitalize(pkm.name)
  }))

  const nextPkm: any = (pokemon.map((pkm:PokemonType) => {
    if (pkm.id ===(currentPkm + 1))
      return Capitalize(pkm.name)
  }))

  const fetchAPI = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/pokemon`)
      setArray(response.data)
      //console.log(response.data)
    } catch (err: any) {
      setError(err)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchAPI()
  }, [])

  return (
    <>
      <div className="pokedex">
        {pokemon.length > 0 ? pokemon.map((pkm:PokemonType) => 
        <Pokemon pkm={pkm} crrtPkm={currentPkm} nextPkm={nextPkm} prevPkm={prevPkm} />) 
        : 
        (<Loader />)}
      </div>
    </>
  )
}

export default App
