import React from 'react'
import { PokemonType } from '../types/Pokemon.types'
import { TypesType } from '../types/Types.types'
import PokeImage from './PokeImage'
import PokeImagePrev from './PokeImagePrev'
import PokeImageNext from './PokeImageNext'
import { Capitalize } from './Capitalize'

interface Props {
  pkm: PokemonType;
  crrtPkm: number;
  nextPkm: string;
  prevPkm: string;
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

const Pokemon:React.FC<Props> = ({pkm, crrtPkm, nextPkm, prevPkm}) => {
  if (pkm.id === crrtPkm)
    return (
      <>
        <div className="upper-part">
          <div className="upper-id">{pkm.id}</div>
          <div className="upper-name">{Capitalize(pkm.name)}</div>
        </div>
        <div className="middle-part">
          <div className="pokemon-characteristics-container">
            <div className="category-container">
              <div className="category">JAPANESE</div>
              <div className="category-katakana">{pkm.katakana}</div>
              <div className="category-objects">{Capitalize(pkm.name)}</div>
            </div>
            <div className="category-container">
              <div className="category">TYPE</div>
              {
                pkm.types.map((ty:Types) => 
                <div className="category-objects">{Capitalize(ty.type.name)}</div>)
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
            <PokeImage crrtPkm={pkm.id}/>
          </div>
          <div className="pokemon-stats-container">
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
        <div className="bottom-part">
          <div className="previous-evolution">
            <div className="previous-pokemon-image-container">
              <PokeImagePrev crrtPkm={pkm.id}/>
            </div>
            <div>
              <div className="previous-evolution-text">PREVIOUS</div>
              <div className="previous-evolution-pokemon">{prevPkm}</div>
            </div>
          </div>
          <div className="next-evolution">
            <div>
              <div className="next-evolution-text">NEXT</div>
              <div className='next-evolution-pokemon'>{nextPkm}</div>
            </div>
            <div className="next-pokemon-image-container">
              <PokeImageNext crrtPkm={pkm.id}/>
            </div>
          </div>
        </div>
      </>
    )
}

export default Pokemon