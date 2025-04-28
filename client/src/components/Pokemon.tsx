import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { PokemonType } from '../types/Pokemon.types'
import { TypesType } from '../types/Types.types'
import PokeImage from './PokeImage'
import PNButton from './PreviousNextButtons'
import { Capitalize } from './Capitalize'
import Slider from './Slider'
import random from '../assets/random-icon.png'

interface Props {
  pkm: PokemonType;
  crrtPkm: number;
  nextPkm: string;
  prevPkm: string;
  nextPkmImg: string;
  prevPkmImg: string;
  setCurrentPkm: (value: number) => void;
}

interface Types {
  slot: number;
  type: TypesType;
}

interface Abilities {
  ability: TypesType;
  is_hidden: boolean;
  slot: number;
}

const Pokemon:React.FC<Props> = ({pkm, crrtPkm, nextPkm, prevPkm, nextPkmImg, prevPkmImg, setCurrentPkm}) => {
  const navigate = useNavigate()
  const [isShiny, setShiny] = useState(false)

  const handleHomeClick = () => {
    console.log(`Going back to home`)
    navigate('/')
  }

  const handleRandomClick = () => {
    let randomValue = Math.floor(Math.random() * 151) + 1;
    setCurrentPkm(randomValue)
    console.log(`Generated a random Pokémon ID: ${randomValue}`)
    navigate('/pokedex?id=' + randomValue)
  }

  const type: string = pkm.types[0].type.name
  if (pkm.id === crrtPkm)
    return (
      <>

        <div className={`pokedexContainer ${type}-body`}>
          <div className="upper-part">
            <div className={`upper-id ${type}`}>{pkm.id}</div>
            <div className={`upper-name ${type}`}>{Capitalize(pkm.name)}</div>
          </div>
          <div className="middle-part">
            <div className={`pokemon-characteristics-container ${type}`}>
              <div className="category-container">
                <div className="category">JAPANESE</div>
                <div className="category-katakana">{pkm.katakana}</div>
                <div className="category-objects">{Capitalize(pkm.name)}</div>
              </div>
              <div className="category-container">
                <div className="category">TYPE</div>
                {
                  pkm.types.map((ty:Types) => 
                    <div className={`category-objects types`}>{Capitalize(ty.type.name)}</div>)
                }
              </div>
              <div className="category-container">
                <div className="category">SPECIES</div>
                <div className="category-objects">{pkm.genus}</div>
              </div>
              <div className="category-container">
                <div className="category">ABILITY</div>
                {
                  pkm.abilities.map((ab:Abilities) =>
                  <div className="category-objects">{Capitalize(ab.ability.name)}</div>)
                }
              </div>
            </div>
            <div className="pokemon-image-container">
              <Slider onCheck={setShiny} type={type}/>
              <PokeImage crrtPkm={crrtPkm} frontImg={pkm.sprites.front} shinyImg={pkm.sprites.shiny} shiny={isShiny}/>
            </div>
            <div className={`pokemon-stats-container ${type}`}>
              <div className="category-container">
                <div className="category">HEIGHT</div>
                <div className="category-objects">{pkm.height / 10} m</div>
              </div>
              <div className="category-container">
                <div className="category">Weight</div>
                <div className="category-objects">{pkm.weight/10} kg</div>
                <div className="category-objects">{((pkm.weight / 10) * 2.2).toFixed(2)} lb</div>
              </div>
              <div className="category-container">
                <div className="category">GENDERS</div>
                <div className="category-objects">Both equally</div>
              </div>
            </div>
          </div>
          <button 
            className={`home-button ${type}`}
            onClick={handleHomeClick}
            >Home
          </button>
          <button
            className={`pokedex-random-button ${type}`} 
            onClick={handleRandomClick}>
              <img 
                className={`random-icon-img`}
                src={random}
              />
            </button>
          <PNButton 
            pkm={pkm} 
            crrtPkm={crrtPkm} 
            nextPkm={nextPkm} 
            prevPkm={prevPkm}
            nextPkmImg={nextPkmImg}
            prevPkmImg={prevPkmImg} 
            setCurrentPkm={setCurrentPkm} />
        </div>
      </>
    )
}

export default Pokemon