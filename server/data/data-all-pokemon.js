import { fetchData } from './data-fetch-data.js';

export async function fetchPokemonData() {
  const data = await fetchData('https://pokeapi.co/api/v2/pokemon?limit=151');

  const all = await Promise.all(
    data.results.map( async (pkm) => {
      const { abilities, height, weight, id, name, species, types } = await fetchData(pkm.url);
      const { genera, names } = await fetchData(species.url);
      
      const genusEntry = genera.find((entry) => entry.language.name === "en");
      const nameEntry = names.find((entry) => entry.language.name === "ja");

      return {
        abilities,
        height,
        weight,
        id,
        name,
        types,
        genus: genusEntry?.genus || "",
        katakana: nameEntry?.name || ""
      };
    })
  );

  return all;
}