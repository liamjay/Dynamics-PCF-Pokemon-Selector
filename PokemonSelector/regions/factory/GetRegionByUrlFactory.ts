import { IGetRegionByUrl } from "../interfaces/IGetRegionByUrl";
import { IGetRegionByUrlRequestBuilder } from "../interfaces/IGetRegionByUrlRequestBuilder";
import { GetRegionByUrlRequestBuilder } from "../builders/GetRegionByUrlRequestBuilder";
import { IHttpRequestSender } from "../../request/interfaces/IHttpRequestSender";
import { HttpRequestSender } from "../../request/HttpRequestSender";
import { GetRegionByUrl } from "../GetRegionByUrl";

/**
 * @class GetRegionByUrlFactory
 *
 * @description A factory to create an instance of IGetRegionByUrl
 */
export class GetRegionByUrlFactory
{
    /**
     * @method create
     *
     * @description Create an instance of IGetRegionByUrl
     *
     * @returns IGetRegionByUrl
     */
    public static create(): IGetRegionByUrl
    {
        const requestBuilder: IGetRegionByUrlRequestBuilder = new GetRegionByUrlRequestBuilder();
        const httpRequestSender: IHttpRequestSender = new HttpRequestSender();

        return new GetRegionByUrl(requestBuilder, httpRequestSender);
    }
}