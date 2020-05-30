import { IGetPokedexByUrlRequestBuilder } from "../interfaces/IGetPokedexByUrlRequestBuilder";
import { AxiosRequestConfig } from "axios";
import { It } from "../../common/It";
import { InvalidUrlException } from "../../common/exceptions/InvalidUrlException";

/**
 * @class GetPokedexByUrlRequestBuilder
 *
 * @description A builder to build a request to get information of a specific pokedex
 */
export class GetPokedexByUrlRequestBuilder implements IGetPokedexByUrlRequestBuilder
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
    public build(url: string): AxiosRequestConfig
    {
        if (It.isNotAPopulatedString(url))
        {
            throw new InvalidUrlException("The URL provided is invalid");
        }

        return {
            method: "GET",
            url: url
        };
    }
}