import { useState, useEffect } from 'react'
import axios from "axios"
import { PokemonType } from '../types/Pokemon.types'

function PokemonNext(crrtPkm:number) {
  const [pokemon, setArray] = useState([])
  const [error, setError] = useState({})

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
  
  pokemon.map((pkm:PokemonType) => {
    if (pkm.id === (crrtPkm + 1))
      return (
        <div className='next-evolution-pokemon'>{pkm.name}</div>
      )
  })
}

export default PokemonNext
