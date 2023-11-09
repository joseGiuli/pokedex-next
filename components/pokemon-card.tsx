import Link from "next/link";

interface PokemonCardProps {
  name: string;
}

export function PokemonCard({ name }: PokemonCardProps) {
  return (
    <Link
      href={name}
      key={name + "card"}
      className="hover:bg-emerald-600 hover:text-slate-300"
    >
      <h2 className="p-4 text-center m-auto border-solid border-2 border-white rounded">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </h2>
    </Link>
  );
}
