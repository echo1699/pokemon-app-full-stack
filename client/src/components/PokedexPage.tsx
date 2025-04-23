import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Loader from './Loader';
import Pokemon from './Pokemon';
import { PokemonType } from '../types/Pokemon.types';

interface PokedexPageProps {
  pokemon: PokemonType[];
  setCurrentPkm: (value: number) => void;
}

const PokedexPage: React.FC<PokedexPageProps> = ({ pokemon, setCurrentPkm }) => {
  const [searchParams] = useSearchParams();
  const id = parseInt(searchParams.get('id') || '1', 10);

  useEffect(() => {
    setCurrentPkm(id); // Update the current Pokémon ID based on the URL parameter
  }, [id, setCurrentPkm]);

  const currentPokemon = pokemon.find((pkm) => pkm.id === id);

  if (!currentPokemon) {
    return <Loader />;
  }

  const prevPkm = pokemon.find((pkm) => pkm.id === id - 1)?.name || '';
  const nextPkm = pokemon.find((pkm) => pkm.id === id + 1)?.name || '';

  return (
    <Pokemon
      pkm={currentPokemon}
      crrtPkm={id}
      nextPkm={nextPkm}
      prevPkm={prevPkm}
      setCurrentPkm={setCurrentPkm}
    />
  );
};

export default PokedexPage;