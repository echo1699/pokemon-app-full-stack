import React, {useState} from 'react'
import { PokemonType } from '../types/Pokemon.types'
import PokeImagePrev from './PokeImagePrev'
import PokeImageNext from './PokeImageNext'
import { useNavigate } from 'react-router'
import Pokemon from './Pokemon'

interface Props {
  pkm: PokemonType;
  crrtPkm: number;
  nextPkm: string;
  prevPkm: string;
  setCurrentPkm: (value: number) => void;
}

const PNButton:React.FC<Props> = ({pkm, crrtPkm, nextPkm, prevPkm, setCurrentPkm}) => {
  const navigate = useNavigate();
  const handlePClick = () => {
    const realValue = crrtPkm - 1;
    if (realValue > 0) { // Ensure the ID doesn't go below 1
      setCurrentPkm(realValue);
      console.log(`Navigating to Pokémon with ID: ${realValue}`);
      navigate('/pokedex?id=' + realValue);
    }
  };

  const handleNClick = () => {
    const realValue = crrtPkm + 1;
    setCurrentPkm(realValue);
    navigate('/pokedex?id=' + realValue);
  };

  const type: string = pkm.types[0].type.name
    return (
      <>
        <div className="bottom-part">
          <button className={`previous-evolution ${type}`} onClick={handlePClick}>
            <div className="previous-pokemon-image-container">
              <PokeImagePrev crrtPkm={pkm.id}/>
            </div>
            <div>
              <div className="previous-evolution-text">PREVIOUS</div>
              <div className="previous-evolution-pokemon">{prevPkm}</div>
            </div>
          </button>
          <button className={`next-evolution ${type}`} onClick={handleNClick}>
            <div>
              <div className="next-evolution-text">NEXT</div>
              <div className='next-evolution-pokemon'>{nextPkm}</div>
            </div>
            <div className="next-pokemon-image-container">
              <PokeImageNext crrtPkm={pkm.id}/>
            </div>
          </button>
        </div>
      </>
    )
}

export default PNButton