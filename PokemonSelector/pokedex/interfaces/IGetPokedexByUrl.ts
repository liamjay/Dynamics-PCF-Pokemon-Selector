import { Pokedex } from "../types/Pokedex";

/**
 * @interface IGetPokedexByUrl
 *
 * @description An interface that represents all available methods when using an instance of IGetPokedexByUrl
 */
export interface IGetPokedexByUrl
{
    /**
     * @method get
     *
     * @description Get information about a specific pokedex using a URL
     *
     * @param {string} url A URL assigned to a specific pokedex
     *
     * @returns Promise<Pokedex>
     */
    get(url: string): Promise<Pokedex>;
}