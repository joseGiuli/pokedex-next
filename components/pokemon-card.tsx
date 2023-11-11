import Link from "next/link";

interface PokemonCardProps {
  name: string;
}

export function PokemonCard({ name }: PokemonCardProps) {
  return (
    <Link href={name} key={name + "card"}>
      <h2 className="p-4 text-center m-auto border-solid border-2 border-black rounded dark:border-yellow-50 font-bold hover:scale-110  hover:bg-emerald-800 transform transition duration-150">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </h2>
    </Link>
  );
}
