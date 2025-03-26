import { fetchPokemonData } from "./data-all-pokemon.js";
/*
export async function fetchOnePokemonData(num) {
  const all = await fetchPokemonData();
  let pokemon;

  Promise.all(
    all.map((pkm) => {
      let pkmId = pkm.id;
      if (pkmId === num) {
        pokemon = pkm;
      }
    })
  );

  return pokemon;
}
*/

export async function fetchOnePokemonData(param) {
  const all = await fetchPokemonData();
  let pokemon;

  Promise.all(
    all.map((pkm) => {
      if ((typeof param) === 'number'){
        let pkmId = pkm.id;
        if (pkmId === param) {
          pokemon = pkm;
        }
      } else if ((typeof param) === 'string'){
        let pkmName = pkm.name;
        if (pkmName === param) {
          pokemon = pkm;
        }
      }
    })
  );

  return pokemon;
}