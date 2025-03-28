import React from 'react'
import { PokemonType } from '../types/Pokemon.types'
import PokeImage from './PokeImage'

interface Props {
  pkm: PokemonType;
  crrtPkm: number;
}

const Pokemon:React.FC<Props> = ({pkm, crrtPkm}) => {
  if (pkm.id === crrtPkm)
    return (
      <>
        <div className="upper-part">
          <div className="upper-id">{pkm.id}</div>
          <div className="upper-name">{pkm.name}</div>
        </div>
        <div className="middle-part">
          <div className="pokemon-characteristics-container">
            <div className="category-container">
              <div className="category">JAPANESE</div>
              <div className="category-katakana">{pkm.katakana}</div>
              <div className="category-objects">{pkm.name}</div>
            </div>
            <div className="category-container">
              <div className="category">TYPE</div>
              <div className="category-objects">Psychic</div>
            </div>
            <div className="category-container">
              <div className="category">SPECIES</div>
              <div className="category-objects">{pkm.genus}</div>
            </div>
            <div className="category-container">
              <div className="category">ABILITY</div>
              <div className="category-objects">Shadow Ball</div>
            </div>
          </div>
          <div className="pokemon-image-container">
            <PokeImage crrtPkm={pkm.id}/>
          </div>
          <div className="pokemon-stats-container">
            <div className="category-container">
              <div className="category">HEIGHT</div>
              <div className="category-objects">{pkm.height / 10} m</div>
              <div className="category-objects">{((pkm.height / 10) * 3.28).toFixed(2)}</div>
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
        <div className="bottom-part">
          <div className="previous-evolution">
            <div className="previous-pokemon-image-container">
            </div>
            <div>
              <div className="previous-evolution-text">PREVIOUS</div>
              <div className="previous-evolution-pokemon">Pichu</div>
            </div>
          </div>
          <div className="next-evolution">
            <div>
              <div className="next-evolution-text">NEXT</div>
              <div className="next-evolution-pokemon">Raichu</div>
            </div>
            <div className="next-pokemon-image-container">
            </div>
          </div>
        </div>
      </>
      //<div className='pokemon'>{pkm.name}</div>
    )
}

export default Pokemon