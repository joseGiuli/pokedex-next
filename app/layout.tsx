import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/darkmode/providers";
import localFont from "@next/font/local";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-poppins",
});

const pokemon = localFont({
  src: "../public/fonts/pokefont/PokemonHollow.ttf",
  display: "swap",
  variable: "--font-pokemon",
});

export const metadata: Metadata = {
  title: "PokéApi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${poppins.variable} ${pokemon.variable} flex flex-col items-center p-8 font-poppins dark:transition dark:bg-grayDarkMode`}
      >
        <div className="z-10 w-full max-w-6xl items-center justify-center">
          <h1 className="text-3xl text-center font-pokemon mb-8">
            Pokédex com pokeAPI
          </h1>
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
