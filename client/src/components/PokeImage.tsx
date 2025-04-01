import React from 'react'

interface Props {
  crrtPkm: number;
  shiny: boolean;
}

const PokeImage:React.FC<Props> = ({crrtPkm, shiny}) => {

  return (
    <>
      <img 
        className='pokemon-image'
        src={`../../public/png/official-artwork${shiny ? '/shiny/' : '/'}${crrtPkm}.png`}
        alt={`Image of ${crrtPkm}`}
      />
    </>
  )
}

export default PokeImage