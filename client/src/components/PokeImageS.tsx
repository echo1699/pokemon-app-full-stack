import React from 'react'

interface Props {
  crrtPkm: number;
}

const PokeImageS:React.FC<Props> = ({crrtPkm}) => {
  return (
    <>
      <img 
        className='pokemon-image'
        src={`../../public/png/official-artwork/shiny/${crrtPkm}.png`}
        alt={`Image of shiny ${crrtPkm}`}
      />
    </>
  )
}

export default PokeImageS