import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/darkmode/providers";

import localFont from "@next/font/local";
import { Poppins } from "@next/font/google";
import { PokemonGrid } from "@/components/pokemon-grid";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-poppins",
});

const pokemon = localFont({
  src: "../public/fonts/pokefont/PokemonSolid.ttf",
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
      <head>
        <link rel="icon" href="./favicon.ico" sizes="42x42" />
      </head>
      <body
        className={`${poppins.variable} ${pokemon.variable} flex flex-col items-center p-8 font-poppins`}
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
