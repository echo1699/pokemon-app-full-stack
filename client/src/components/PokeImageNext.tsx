import React from 'react'

interface Props {
  crrtPkm: number;
}

const PokeImageNext:React.FC<Props> = ({crrtPkm}) => {
  if (crrtPkm < 151) {
    return (
      <>
        <img 
          className='next-pokemon-image'
          src={`../../public/png/official-artwork/${crrtPkm + 1}.png`}
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