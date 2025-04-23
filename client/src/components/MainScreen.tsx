import React from 'react';
import { useNavigate } from 'react-router'

interface MainScreenProps {
  currentPkm: number;
  setCurrentPkm: (value: number) => void;
}

const MainScreen: React.FC<MainScreenProps> = ({ currentPkm, setCurrentPkm }) => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = React.useState<string>('')

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  const handleSearchClick = () => {
    const parsedValue = parseInt(inputValue, 10);
    if (!isNaN(parsedValue)) {
      setCurrentPkm(parsedValue);
      console.log(`Searching for Pokémon with ID: ${parsedValue}`);
      navigate('/pokedex?id=' + parsedValue);
    }
  }

  return (
    <div className='main-screen'>
      <h1>Welcome to the Pokémon App</h1>
      <p>Explore and catch your favorite Pokémon!</p>
      <div>
        <input 
          placeholder='Search with Pokemon ID'
          value={inputValue}
          onChange={handleInputChange}
          ></input>
        <button onClick={handleSearchClick}>Search</button>
      </div>
    </div>
  )
};

export default MainScreen;