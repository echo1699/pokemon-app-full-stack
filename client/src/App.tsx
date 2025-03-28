import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios"
import Loader from './components/Loader'
import Pokemon from './components/Pokemon'

function App() {
  const [pokemon, setArray] = useState([])
  const [error, setError] = useState({})
  const currentPkm: number = 150;

  interface Pokemon {
    abilities?: string;
    genus: string;
    height: number;
    id: number;
    katakana: string;
    name: string;
    types?: string;
    weight: number;
  }

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
      <div className='pokedex'>
        {pokemon.length > 0 ? pokemon.map((pkm:Pokemon) => 
        <Pokemon pkm={pkm} crrtPkm={currentPkm}/>) 
        : 
        (<Loader />)}
      </div>
    </>
  )
}

export default App
