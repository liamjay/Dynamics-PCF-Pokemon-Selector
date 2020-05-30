import { AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * @name IHttpRequestSender
 *
 * @description An interface that represents the available methods when using an insance of IHttpRequestSender
 */
export interface IHttpRequestSender
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
    send<T>(request: AxiosRequestConfig): Promise<AxiosResponse<T>>;
}