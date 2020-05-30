import { IGetAllRegions } from "../interfaces/IGetAllRegions";
import { IGetAllRegionsRequestBuilder } from "../interfaces/IGetAllRegionsRequestBuilder";
import { GetAllRegionsRequestBuilder } from "../builders/GetAllRegionsRequestBuilder";
import { IHttpRequestSender } from "../../request/interfaces/IHttpRequestSender";
import { HttpRequestSender } from "../../request/HttpRequestSender";
import { GetAllRegions } from "../GetAllRegions";

/**
 * @class GetAllRegionsFactory
 *
 * @description Factory to create an instance of IGetAllRegions
 */
export class GetAllRegionsFactory
{
    /**
     * @method create
     *
     * @description Create an instance of IGetAllRegions
     *
     * @returns IGetAllRegions
     */
    public static create(): IGetAllRegions
    {
        const requestBuilder: IGetAllRegionsRequestBuilder = new GetAllRegionsRequestBuilder();
        const httpRequestSender: IHttpRequestSender = new HttpRequestSender();

        return new GetAllRegions(requestBuilder, httpRequestSender);
    }
}
