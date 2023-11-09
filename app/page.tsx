import DarkModeButton from "@/components/darkmode/DarkMode";
import { PokemonGrid } from "@/components/pokemon-grid";

import { getPokemonList } from "@/lib/pokemonApi";

export default async function Home() {
  const pokemonList = await getPokemonList();

  return (
    <>
      <PokemonGrid pokemonList={pokemonList} />

      <DarkModeButton />
    </>
  );
}
