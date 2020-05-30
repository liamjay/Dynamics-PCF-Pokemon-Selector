import { RegionName } from "../types/RegionName";

/**
 * @interface IGetAllRegions
 *
 * @description An interface that represents all the available methods when using an instance of IGetAllRegions
 */
export interface IGetAllRegions
{
    /**
     * @method get
     *
     * @description Get a list of all the regions
     *
     * @returns Region[]
     */
    get(): Promise<RegionName[]>;
}