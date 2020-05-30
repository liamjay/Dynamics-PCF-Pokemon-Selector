import { IHttpRequestSender } from "./interfaces/IHttpRequestSender";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { It } from "../common/It";
import { InvalidRequestException } from "./exceptions/InvalidRequestException";

/**
 * @class HttpRequestSender
 *
 * @description A service to send HttpRequests to external sources
 */
export class HttpRequestSender implements IHttpRequestSender
{
    /**
     * @method send
     *
     * @description Send a HttpRequest to an external source
     *
     * @param {AxiosRequestConfig} request A request to send
     *
     * @returns Promise<AxiosResponse<T>>
     */
    public async send<T>(request: AxiosRequestConfig): Promise<AxiosResponse<T>>
    {
        try
        {
            if (It.isNullOrUndefined(request) || It.isAnEmptyObject(request))
            {
                throw new InvalidRequestException("The request provided is invalid");
            }

            return await axios(request);
        }
        catch (ex)
        {
            throw ex;
        }
    }
}