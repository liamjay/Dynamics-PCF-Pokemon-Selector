import { IGetPokedexByUrl } from "./interfaces/IGetPokedexByUrl";
import { IGetPokedexByUrlRequestBuilder } from "./interfaces/IGetPokedexByUrlRequestBuilder";
import { IHttpRequestSender } from "../request/interfaces/IHttpRequestSender";
import { Pokedex } from "./types/Pokedex";
import { It } from "../common/It";
import { InvalidUrlException } from "../common/exceptions/InvalidUrlException";
import { AxiosRequestConfig, AxiosResponse } from "axios";

export class GetPokedexByUrl implements IGetPokedexByUrl
{
    public constructor(private readonly requestBuilder: IGetPokedexByUrlRequestBuilder,
                       private readonly httpRequestSender: IHttpRequestSender)
    {
    }

    /**
     * @method get
     *
     * @description Get information about a specific pokedex using a URL
     *
     * @param {string} url A URL assigned to a specific pokedex
     *
     * @returns Promise<Pokedex>
     */
    public async get(url: string): Promise<Pokedex>
    {
        try
        {
            if (It.isNotAPopulatedString(url))
            {
                throw new InvalidUrlException("The url provided is invalid");
            }

            const request: AxiosRequestConfig = this.requestBuilder.build(url);

            const response: AxiosResponse<Pokedex> = await this.httpRequestSender.send(request);

            return response.data;
        }
        catch (ex)
        {
            throw ex;
        }
    }
}