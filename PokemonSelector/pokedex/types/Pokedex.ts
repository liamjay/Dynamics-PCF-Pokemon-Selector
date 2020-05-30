import { Pokemon } from "../../pokemon/types/Pokemon";

export type Pokedex = {
    id: number;

    name: string;

    pokemon_entries: Pokemon[];
};