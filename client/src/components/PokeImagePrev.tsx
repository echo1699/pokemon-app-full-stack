import React from 'react'

interface Props {
  crrtPkm: number;
  pkmImg: string;
}

const PokeImagePrev:React.FC<Props> = ({crrtPkm, pkmImg}) => {
  if (crrtPkm >= 2) {
    return (
      <>
        <img 
          className='previous-pokemon-image'
          src={`${pkmImg}`}
          alt={`Image ${crrtPkm - 1}`}
        />
      </>
    )
  } else {
    return (
      <></>
    )
  }
}

export default PokeImagePrev;