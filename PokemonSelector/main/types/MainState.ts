import { PokedexName } from "../../pokedex/types/PokedexName";
import { Pokemon } from "../../pokemon/types/Pokemon";

export type MainState = {
    pokedexes: PokedexName[];

    pokemon: Pokemon[];
}