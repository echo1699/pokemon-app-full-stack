import { fetchData } from './data-fetch-data.js';

export async function fetchPokemonData() {
  const data = await fetchData('https://pokeapi.co/api/v2/pokemon?limit=151');

  const all = await Promise.all(
    data.results.map( async (pkm) => {
      const { abilities, height, weight, id, name, species, types } = await fetchData(pkm.url);
      const { genera, names } = await fetchData(species.url);

      let genus, katakana;
      Promise.all(
        genera.map((version) => {
          const language = version.language;
          if (language.name === "en") {
            genus = version.genus;
          }
        })
      );

      Promise.all(
        names.map((version) => {
          const language = version.language;
          if (language.name === "ja") {
            katakana = version.name;
          }
        })
      )

      return {
        abilities,
        height,
        weight,
        id,
        name,
        types,
        genus,
        katakana
      };
    })
  );

  return all;
}