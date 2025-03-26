import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios"

function App() {
  const [array, setArray] = useState([])

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:3000/pokemon")
    setArray(response.data)
    console.log(response.data)
  }

  useEffect(() => {
    fetchAPI()
  }, [])

  return (
    <>
      <div>
        <ul>
        {
          array.map((pokemon, index) => (
            <li key={index}>
              <p>Name: {pokemon.name}</p>
              <p>Id: {pokemon.id}</p>
            </li>
          ))
        }
        </ul>
      </div>
    </>
  )
}

export default App
