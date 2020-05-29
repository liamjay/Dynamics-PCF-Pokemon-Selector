import { AxiosRequestConfig } from "axios";

/**
 * @name IGetAllRegionsRequestBuilder
 *
 * @description An interface that represents all the available methods when using an instance of IGetAllRegionsRequestBuilder
 */
export interface IGetAllRegionsRequestBuilder
{
    /**
     * @method build
     *
     * @description Build a request that will get all the regions
     *
     * @returns AxiosRequestConfig
     */
    build(): AxiosRequestConfig;
}
