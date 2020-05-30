import { AxiosRequestConfig } from "axios";

/**
 * @interface IGetRegionByUrlRequestBuilder
 *
 * @description An interface that represents available methods using an instance of IGetRegionByUrlRequestBuilder
 */
export interface IGetRegionByUrlRequestBuilder
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
    build(url: string): AxiosRequestConfig;
}