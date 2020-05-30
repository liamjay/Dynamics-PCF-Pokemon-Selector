import { AxiosRequestConfig } from "axios";

/**
 * @interface IGetPokedexByUrlRequestBuilder
 *
 * @description An interface that represents all the available instances when using an instance of IGetPokedexByUrlRequestBuilder
 */
export interface IGetPokedexByUrlRequestBuilder
{
    /**
     * @method build
     *
     * @description Build a request to get information of a specific pokedex
     *
     * @param {string} url A specific url to get information of a specific pokedex
     *
     * @returns AxiosRequestConfig
     */
    build(url: string): AxiosRequestConfig;
}
