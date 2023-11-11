import DarkModeButton from "@/components/darkmode/DarkMode";
import { getPokemon } from "@/lib/pokemonApi";
import Image from "next/image";
import { PokemonImage } from "@/components/pokemon-image";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";

export default async function PokemonPage({
  params,
}: {
  params: { pokemonName: string };
}) {
  const { pokemonName } = params;

  const pokemonObject = await getPokemon(pokemonName);

  const pokemonType = pokemonObject.types;
  const pokemonId = pokemonObject.id;

  return (
    <>
      <Link href="/">
        <p className="font-poppins text-[24px] hover:opacity-80">Voltar</p>
      </Link>

      <div className="flex flex-col  align-center justify-center mb-8">
        <h1 className="text-center font-pokemon text-6xl mb-[80px]">
          {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
        </h1>

        <PokemonImage
          image={pokemonObject.sprites.other["official-artwork"].front_default}
          name={pokemonName}
        />
        <div>
          {pokemonType.map((item: any) => {
            const typePokemon = item.type.name;

            return <div>{typePokemon}</div>;
          })}
        </div>
        <div className="flex-col">
          {pokemonObject.stats.map((status: any) => {
            const statusName = status.stat.name;
            const statusValue = status.base_stat;
            return (
              <>
                <div
                  className="flex items-stretch"
                  style={{ width: "500px" }}
                  key={statusName}
                >
                  <h3 className="p-3 w-2/4 ">
                    {statusName} : {statusValue}
                  </h3>
                </div>
                <Progress className="w-2/4 m-auto" value={statusValue} />
              </>
            );
          })}
        </div>

        <DarkModeButton />
      </div>
    </>
  );
}
