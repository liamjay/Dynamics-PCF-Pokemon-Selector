import { expect, assert } from "chai";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { It } from "../../../PokemonSelector/common/It";
import { InvalidRequestException } from "../../../PokemonSelector/request/exceptions/InvalidRequestException";

describe("HttpRequestSender Unit Tests", () =>
{
    let instance: any;

    beforeEach(() =>
    {
        instance = new HttpRequestSender();
    });

    describe("constructor()", () =>
    {
        describe("Given a new instance is created", () =>
        {
            it("It should create a valid new instance", () =>
            {
                expect(instance).to.be.an.instanceOf(HttpRequestSender);
            });
        });
    });

    describe("send()", () =>
    {
        const invalidRequests = [null, undefined, {}];

        invalidRequests.forEach((invalidRequest) =>
        {
            describe(`Given ${invalidRequest} is provided`, () =>
            {
                let error: InvalidRequestException;

                beforeEach(async () =>
                {
                    try
                    {
                        return await instance.send(invalidRequest);
                    }
                    catch (ex)
                    {
                        error = ex;
                    }
                });

                describe("The method", () =>
                {
                    it("Should throw an exception with the appropriate exception name", () =>
                    {
                        expect(error.name).to.equal("InvalidRequestException");
                    });

                    it("Should throw an exception with the appropriate message", () =>
                    {
                        expect(error.message).to.equal("The request provided is invalid");
                    });
                });
            });
        });
    });
});

/**
 * @name IHttpRequestSender
 *
 * @description An interface that represents the available methods when using an insance of IHttpRequestSender
 */
export interface IHttpRequestSender
{
    send<T>(request: AxiosRequestConfig): Promise<AxiosResponse<T>>;
}

/**
 * @class HttpRequestSender
 *
 * @description A service to send HttpRequests to external services
 */
export class HttpRequestSender implements IHttpRequestSender
{
    public async send<T>(request: AxiosRequestConfig): Promise<AxiosResponse<T>>
    {
        if (It.isNullOrUndefined(request) || It.isAnEmptyObject(request))
        {
            throw new InvalidRequestException("The request provided is invalid");
        }

        return await axios(request);
    }
}
