"use client";

import { useState } from "react";

import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { PokemonCard } from "./pokemon-card";

interface PokemonGridProps {
  pokemonList: any;
}

export function PokemonGrid({ pokemonList }: PokemonGridProps) {
  const [searchTxt, setSearchTxt] = useState("");

  // Filtro de busca
  const searchFilter = (pokemonList: any) => {
    return pokemonList.filter((pokemon: any) =>
      pokemon.name.toLowerCase().includes(searchTxt.toLowerCase())
    );
  };

  //Salvar pokemon filtrado
  const filteredPokemonList = searchFilter(pokemonList);

  return (
    <>
      <div className="flex items-center flex-col mb-8">
        <h3 className="text-2xl py-6 text-center">Encontre seu Pokémon!</h3>
        <div className="flex flex-col w-full max-w-sm items-center jusif gap-1.5 mb-12">
          <Label htmlFor="pokemonName">Nome do Pokemon</Label>
          <Input
            type="text"
            value={searchTxt}
            autoComplete="off"
            id="pokemonName"
            placeholder="Pikachu"
            onChange={(e) => setSearchTxt(e.target.value)}
            className="rounded"
          />
        </div>
        <div className=" grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left gap-4">
          {filteredPokemonList.map((pokemon: any) => {
            return <PokemonCard name={pokemon.name} />;
          })}
        </div>
      </div>
    </>
  );
}
