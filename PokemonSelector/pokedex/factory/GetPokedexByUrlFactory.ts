import { IGetPokedexByUrl } from "../interfaces/IGetPokedexByUrl";
import { IGetPokedexByUrlRequestBuilder } from "../interfaces/IGetPokedexByUrlRequestBuilder";
import { GetPokedexByUrlRequestBuilder } from "../builder/GetPokedexByUrlRequestBuilder";
import { IHttpRequestSender } from "../../request/interfaces/IHttpRequestSender";
import { HttpRequestSender } from "../../request/HttpRequestSender";
import { GetPokedexByUrl } from "../GetPokedexByUrl";

/**
 * @class GetPokedexByUrlFactory
 *
 * @description A factory to create an instance of IGetPokedexByUrl
 */
export class GetPokedexByUrlFactory
{
    /**
     * @method create
     *
     * @description Create an instance of IGetPokedexByUrl
     *
     * @returns IGetPokedexByUrl
     */
    public static create(): IGetPokedexByUrl
    {
        const requestBuilder: IGetPokedexByUrlRequestBuilder = new GetPokedexByUrlRequestBuilder();
        const httpRequestSender: IHttpRequestSender = new HttpRequestSender();

        return new GetPokedexByUrl(requestBuilder, httpRequestSender);
    }
}