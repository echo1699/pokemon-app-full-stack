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
import { BrowserRouter as Router, Route, Routes, useParams, useNavigate } from 'react-router-dom'

function App() {
  const [pokemon, setArray] = useState<PokemonType[]>([])
  const [error, setError] = useState({})

  const [currentPkm, setCurrentPkm] = useState<number>(1)

  const prevPkm: any = (pokemon.map((pkm:PokemonType) => {
    if (pkm.id ===(currentPkm - 1))
      return Capitalize(pkm.name)
  }))

  const nextPkm: any = (pokemon.map((pkm:PokemonType) => {
    if (pkm.id ===(currentPkm + 1))
      return Capitalize(pkm.name)
  }))

  const prevPkmImg = pokemon.find((pkm) => pkm.id === currentPkm - 1)?.sprites.front
  const nextPkmImg = pokemon.find((pkm) => pkm.id === currentPkm + 1)?.sprites.front

  const fetchAPI = async () => {
    try {
      const response = await axios.get(`https://pokemon-app-full-stack-831381062774.us-central1.run.app/pokemon`)
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

  const PokedexPage = () => {
    const { id } = useParams<{ id: string }>()
    const selectedId = parseInt(id || '1', 10)
    const navigate = useNavigate()

    useEffect(() => {
      setCurrentPkm(selectedId)
    }, [selectedId]);

    const selectedPkm = pokemon.find((pkm) => pkm.id === selectedId)

    const handleHomeClick = () => {
      console.log(`Going back to home`)
      navigate('/')
    }

    if (!selectedPkm) {
      return (
        <>
          <div>Pokémon not found</div>
          <button 
            className="home-button-error"
            onClick={handleHomeClick}
            >Home
          </button>
        </>
      )
    }

    return (
      <Pokemon
        pkm={selectedPkm}
        crrtPkm={currentPkm}
        nextPkm={nextPkm || ''}
        prevPkm={prevPkm || ''}
        nextPkmImg={nextPkmImg || ''}
        prevPkmImg={prevPkmImg || ''}
        setCurrentPkm={setCurrentPkm}
      />
    )
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainScreen setCurrentPkm={setCurrentPkm} />} />
        <Route path="/pokedex/:id" element={
          <div className="pokedex">
            {pokemon.length > 0 ? 
            <PokedexPage /> 
            : 
            (<Loader />)}
          </div>
        } />
      </Routes>
    </Router>
  )
}

export default App
