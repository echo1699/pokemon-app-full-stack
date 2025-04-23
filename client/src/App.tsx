import { useState, useEffect } from 'react'
import './App.css'
import './styles/Container.css'
import './styles/Pokedex.css'
import axios from "axios"
import Loader from './components/Loader'
import Pokemon from './components/Pokemon'
//import UseLocalStorage from './components/UseLocalStorage'
import { PokemonType } from './types/Pokemon.types'
import { Capitalize } from './components/Capitalize'
import MainScreen from './components/MainScreen'
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom'

//const pkmId = () => Number(localStorage.getItem('id')) || 1

function App() {
  const [pokemon, setArray] = useState([])
  const [error, setError] = useState({})
  //const currentPkm: number = 27;

  const [currentPkm, setCurrentPkm] = useState<number>(1)

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

  /*
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
  
  return (
    <>
      <MainScreen currentPkm={currentPkm} setCurrentPkm={setCurrentPkm}/>
    </>
  )

  */

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainScreen currentPkm={currentPkm} setCurrentPkm={setCurrentPkm} />} />
        <Route path="/pokedex" element={
          <div className="pokedex">
            {pokemon.length > 0 ? pokemon.map((pkm:PokemonType) => 
            <Pokemon pkm={pkm} crrtPkm={currentPkm} nextPkm={nextPkm} prevPkm={prevPkm} setCurrentPkm={setCurrentPkm}/>) 
            : 
            (<Loader />)}
          </div>
        } />
      </Routes>
    </Router>
  )
}

export default App
