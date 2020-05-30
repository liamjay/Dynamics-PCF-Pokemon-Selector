import { IGetAllRegions } from "./interfaces/IGetAllRegions";
import { IGetAllRegionsRequestBuilder } from "./interfaces/IGetAllRegionsRequestBuilder";
import { IHttpRequestSender } from "../request/interfaces/IHttpRequestSender";
import { RegionName } from "./types/RegionName";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { GetAllRegionsResponse } from "./types/GetAllRegionsResponse";

/**
 * @class GetAllRegions
 *
 * @description A service to get a list of all the regions
 */
export class GetAllRegions implements IGetAllRegions
{
    public constructor(private readonly requestBuilder: IGetAllRegionsRequestBuilder,
                       private readonly httpRequestSender: IHttpRequestSender)
    {
    }

    /**
     * @method get
     *
     * @description Get a list of all the regions
     *
     * @returns Region[]
     */
    public async get(): Promise<RegionName[]>
    {
        try
        {
            const request: AxiosRequestConfig = this.requestBuilder.build();

            const response: AxiosResponse<GetAllRegionsResponse> = await this.httpRequestSender.send(request);

            return response.data.results;
        }
        catch (ex)
        {
            throw ex;
        }
    }
}