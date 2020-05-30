import { IGetRegionByUrlRequestBuilder } from "../interfaces/IGetRegionByUrlRequestBuilder";
import { AxiosRequestConfig } from "axios";
import { It } from "../../common/It";
import { InvalidUrlException } from "../../common/exceptions/InvalidUrlException";

/**
 * @class GetRegionByUrlRequestBuilder
 *
 * @description A builder to build a request to get information about a specific region
 */
export class GetRegionByUrlRequestBuilder implements IGetRegionByUrlRequestBuilder
{
    /**
     * @method build
     *
     * @description Build a request to get information about a specific region
     *
     * @param {string} url A URL assigned to a specific region
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