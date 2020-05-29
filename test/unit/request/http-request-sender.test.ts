import { expect } from "chai";
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
            test("It should create a valid new instance", () =>
            {
                expect(instance).to.be.an.instanceOf(HttpRequestSender);
            });
        });
    });

    describe("send()", () =>
    {
        const invalidRequests= [null, undefined, {}];

        invalidRequests.forEach((invalidRequest) =>
        {
            describe(`Given ${invalidRequest} is provided`, () =>
            {
                test("It should throw an exception", async () =>
                {
                    try
                    {
                        await instance.send(invalidRequest);

                        return;
                    }
                    catch (ex)
                    {
                        expect(ex.name).to.equal("InvalidRequestException");
                        expect(ex.message).to.equal("The request provided is invalid");
                    }
                });
            });
        });
    });
});

export interface IHttpRequestSender
{
    send<T>(request: AxiosRequestConfig): Promise<AxiosResponse<T>>;
}

export class HttpRequestSender implements IHttpRequestSender
{
    public async send<T>(request: AxiosRequestConfig): Promise<AxiosResponse<T>>
    {
        if (It.isAnEmptyObject(request))
        {
            throw new InvalidRequestException("The request provided is invalid");
        }

        return await axios(request);
    }
}
