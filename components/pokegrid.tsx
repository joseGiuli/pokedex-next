"use client";

import { useState } from "react";

import { Label } from "./ui/label";
import { Input } from "./ui/input";

export function PokemonGrid() {
  const [searchTxt, setSearchTxt] = useState("");

  return (
    <>
      <div>
        <h3 className="text-2xl py-6 text-center">Encontre seu Pokémon!</h3>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="pokemonName">Nome do Pokemon</Label>
          <Input
            type="text"
            value={searchTxt}
            autoComplete="off"
            id="pokemonName"
            placeholder="Pikachu"
            onChange={(e) => setSearchTxt(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}
