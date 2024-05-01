import DarkModeButton from "@/components/darkmode/DarkMode";
import { getPokemon } from "@/lib/pokemonApi";
import Image from "next/image";
import { PokemonImage } from "@/components/pokemon-image";
import Link from "next/link";

export default async function PokemonPage({
  params,
}: {
  params: { pokemonName: string };
}) {
  const { pokemonName } = params;

  const pokemonObject = await getPokemon(pokemonName);

  const pokemonWeight = pokemonObject.weight * 0.453592;

  return (
    <>
      <Link href="/">
        <p className="font-poppins text-[24px] hover:opacity-80">Voltar</p>
      </Link>

      <div className="flex flex-col align-center justify-center mb-8 w-full border border-white p-8">
        <h1 className="text-center font-pokemon text-6xl mb-[80px]">
          {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
        </h1>

        <PokemonImage
          image={pokemonObject.sprites.other["official-artwork"].front_default}
          name={pokemonName}
        />
        <div className="text-center">
          <h3>{pokemonWeight.toFixed(0)} Kg</h3>
        </div>
        <div className="text-center mb-8">
          {pokemonObject.types.map((item: any) => {
            const typePokemon = item.type.name;

            return (
              <div className="w-full">
                <h1 className={`bg-${typePokemon}`}>{typePokemon}</h1>
              </div>
            );
          })}
        </div>
        <div className="w-full text-center">
          {pokemonObject.stats.map((status: any) => {
            const statusName = status.stat.name;
            const statusValue = status.base_stat;

            return (
              <div
                className="m-auto lg:w-2/4 lg:items-center flex flex-col w-full"
                key={statusName}
              >
                <h3 className="text-left">
                  {statusName} : {statusValue}
                </h3>
              </div>
            );
          })}
        </div>

        <DarkModeButton />
      </div>
    </>
  );
}
