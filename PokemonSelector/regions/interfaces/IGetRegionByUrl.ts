import { Region } from "../types/Region";

/**
 * @interface IGetRegionByUrl
 *
 * @description An interface that represents the available methods when using an instance of IGetRegionByUrl
 */
export interface IGetRegionByUrl
{
    /**
     * @method get
     *
     * @description Get information about a specific region using a url
     *
     * @param {string} url A URL assigned to a specific region
     *
     * @returns Promise<Region>
     */
    get(url: string): Promise<Region>;
}