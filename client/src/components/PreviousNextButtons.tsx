import React, {useState} from 'react'
import { PokemonType } from '../types/Pokemon.types'
import PokeImagePrev from './PokeImagePrev'
import PokeImageNext from './PokeImageNext'
import UseLocalStorage from './UseLocalStorage'

interface Props {
  pkm: PokemonType;
  crrtPkm: number;
  nextPkm: string;
  prevPkm: string;
}

const PNButton:React.FC<Props> = ({pkm, crrtPkm, nextPkm, prevPkm}) => {
  const [currentPkm, setCurrentPkm] = UseLocalStorage<number>('id', crrtPkm)

  function prevP(currentPkm:number) {
    setCurrentPkm(currentPkm - 1)
    window.dispatchEvent(new Event('storage'))
  }

  function nextP(currentPkm:number) {
    setCurrentPkm(currentPkm + 1)
    window.dispatchEvent(new Event('storage'))
  }

  const type: string = pkm.types[0].type.name
    return (
      <>
        <div className="bottom-part">
          <button className={`previous-evolution ${type}`} onClick={() => prevP(currentPkm)}>
            <div className="previous-pokemon-image-container">
              <PokeImagePrev crrtPkm={pkm.id}/>
            </div>
            <div>
              <div className="previous-evolution-text">PREVIOUS</div>
              <div className="previous-evolution-pokemon">{prevPkm}</div>
            </div>
          </button>
          <button className={`next-evolution ${type}`} onClick={() => nextP(currentPkm)}>
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