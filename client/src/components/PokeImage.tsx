import React from 'react'

interface Props {
  crrtPkm: number;
}

const PokeImage:React.FC<Props> = ({crrtPkm}) => {
  return (
    <>
      <img 
        className='pokemon-image'
        src={`../../public/png/official-artwork/${crrtPkm}.png`}
        alt={`Image ${crrtPkm}`}
      />
    </>
  )
}

export default PokeImage;