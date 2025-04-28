import React from 'react'

interface Props {
  crrtPkm: number;
  frontImg: string;
  shinyImg: string;
  shiny: boolean;
}

const PokeImage:React.FC<Props> = ({crrtPkm, frontImg, shinyImg, shiny}) => {

  return (
    <>
      <img 
        className='pokemon-image'
        src={`${shiny ? shinyImg : frontImg}`}
        alt={`Image of ${crrtPkm}`}
      />
    </>
  )
}

export default PokeImage