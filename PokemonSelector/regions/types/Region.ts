import { PokedexName } from "../../pokedex/types/PokedexName";

export type Region = {
    id: number;

    name: string;

    pokedexes: PokedexName[];
};