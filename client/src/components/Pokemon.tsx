import React from 'react'
import { PokemonType } from '../types/Pokemon.types'

interface Props {
  pkm: PokemonType;
}

const Pokemon:React.FC<Props> = ({pkm}) => {
  return (
    <div className='pokemon'>{pkm.name}</div>
  )
}

export default Pokemon