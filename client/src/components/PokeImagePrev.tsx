import React from 'react'

interface Props {
  crrtPkm: number;
}

const PokeImagePrev:React.FC<Props> = ({crrtPkm}) => {
  if (crrtPkm > 2) {
    return (
      <>
        <img 
          className='previous-pokemon-image'
          src={`../../public/png/official-artwork/${crrtPkm - 1}.png`}
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