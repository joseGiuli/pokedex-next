const POKEMON_API_URL = 'https://pokeapi.co/api/v2/';


export async function getPokemonList(){

   const response = await fetch (POKEMON_API_URL + "pokemon?limit=151&offset=0");
   const data = await response.json();
   return data.results;

}

export async function getPokemon( name : string){
   const response = await fetch (POKEMON_API_URL + "pokemon/" + name);
   const data = await response.json();
   return data;
}

