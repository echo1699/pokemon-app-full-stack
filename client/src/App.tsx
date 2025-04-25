import { useState, useEffect } from 'react'
import './App.css'
import './styles/Container.css'
import './styles/Pokedex.css'
import axios from "axios"
import Loader from './components/Loader'
import Pokemon from './components/Pokemon'
import { PokemonType } from './types/Pokemon.types'
import { Capitalize } from './components/Capitalize'
import MainScreen from './components/MainScreen'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  const [pokemon, setArray] = useState([])
  const [error, setError] = useState({})

  //const { id } = useParams();

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
      const response = await axios.get(`https://pokedex-api-831381062774.us-central1.run.app/pokemon`)
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
        <Route path="/" element={<MainScreen setCurrentPkm={setCurrentPkm} />} />
        <Route path={`/pokedex`} element={
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
