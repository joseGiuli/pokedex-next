import DarkModeButton from "@/components/darkmode/DarkMode";
import { PokemonGrid } from "@/components/pokegrid";

export default function Home() {
  return (
    <>
      <main className="mb-12 text-center lg:mb-0 lg:flex lg:justify-center">
        <PokemonGrid />
      </main>

      <DarkModeButton />
    </>
  );
}
