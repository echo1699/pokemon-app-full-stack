import React from 'react';
import { useNavigate } from 'react-router'

interface MainScreenProps {
  setCurrentPkm: (value: number) => void;
}

const MainScreen: React.FC<MainScreenProps> = ({setCurrentPkm }) => {
  const navigate = useNavigate()
  const [inputValue, setInputValue] = React.useState<string>('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleSearchClick = () => {
    const parsedValue = parseInt(inputValue, 10)
    if (!isNaN(parsedValue)) {
      setCurrentPkm(parsedValue)
      console.log(`Searching for Pokémon with ID: ${parsedValue}`)
      navigate('/pokedex?id=' + parsedValue)
    }
  }

  const handleRandomClick = () => {
    let randomValue = Math.floor(Math.random() * 151) + 1;
    setCurrentPkm(randomValue)
    console.log(`Generated a random Pokémon ID: ${randomValue}`)
    navigate('/pokedex?id=' + randomValue)
  }

  return (
    <div className='main-screen'>
      <h1>Welcome to the Pokédex App</h1>
      <p>Explore and catch your favorite Pokémon!</p>
      <div>
        <input 
          placeholder='Search with Pokemon ID'
          value={inputValue}
          onChange={handleInputChange}
          ></input>
        <button onClick={handleSearchClick}>Search</button>
      </div>
      <button
        className='main-random-button' 
        onClick={handleRandomClick}>{'Feeling lucky? (random pokemon)'}
      </button>
    </div>
  )
};

export default MainScreen