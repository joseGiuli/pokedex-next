import { getPokemon } from "@/lib/pokemonApi";

export default async function PokemonPage({
  params,
}: {
  params: { pokemonName: string };
}) {
  const { pokemonName } = params;

  const pokemonObject = await getPokemon(pokemonName);

  return (
    <>
      <div className="flex align-center justify-center mb-8">
        <h1 className="text-center font-pokemon text-6xl">
          {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
        </h1>
      </div>
    </>
  );
}
