import { IGetRegionByUrl } from "./interfaces/IGetRegionByUrl";
import { IGetRegionByUrlRequestBuilder } from "./interfaces/IGetRegionByUrlRequestBuilder";
import { IHttpRequestSender } from "../request/interfaces/IHttpRequestSender";
import { Region } from "./types/Region";
import { It } from "../common/It";
import { InvalidUrlException } from "../common/exceptions/InvalidUrlException";
import { AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * @class GetRegionByUrl
 *
 * @description A service to get information about a specific region using a URL
 */
export class GetRegionByUrl implements IGetRegionByUrl
{
    public constructor(private readonly requestBuilder: IGetRegionByUrlRequestBuilder,
                       private readonly httpRequestSender: IHttpRequestSender)
    {
    }

    /**
     * @method get
     *
     * @description Get information about a specific region using a URL
     *
     * @param {string} url A URL assigned to a specific region
     *
     * @returns Promise<Region>
     */
    public async get(url: string): Promise<Region>
    {
        try
        {
            if (It.isNotAPopulatedString(url))
            {
                throw new InvalidUrlException("The url provided is invalid");
            }

            const request: AxiosRequestConfig = this.requestBuilder.build(url);

            const response: AxiosResponse<Region> = await this.httpRequestSender.send(request);

            return response.data;
        }
        catch (ex)
        {
            throw ex;
        }
    }
}