import { IGetAllRegionsRequestBuilder } from "../interfaces/IGetAllRegionsRequestBuilder";
import { AxiosRequestConfig } from "axios";

/**
 * @class GetAllRegionsRequestBuilder
 *
 * @description A builder to build a request that will get all the regions
 */
export class GetAllRegionsRequestBuilder implements IGetAllRegionsRequestBuilder
{
    /**
     * @method build
     *
     * @description Build a request that will get all the regions
     *
     * @returns AxiosRequestConfig
     */
    public build(): AxiosRequestConfig
    {
        return {
            method: "GET",
            url: "https://pokeapi.co/api/v2/region/"
        };
    }
}
