import React from 'react'

interface Props {
  crrtPkm: number;
  pkmImg: string;
}

const PokeImageNext:React.FC<Props> = ({crrtPkm, pkmImg}) => {
  if (crrtPkm < 151) {
    return (
      <>
        <img 
          className='next-pokemon-image'
          src={`${pkmImg}`}
          alt={`Image ${crrtPkm + 1}`}
        />
      </>
    )
  } else {
    return (
      <></>
    )
  }
}

export default PokeImageNext;