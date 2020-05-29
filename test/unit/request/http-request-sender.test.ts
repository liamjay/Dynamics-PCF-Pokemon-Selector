import { expect } from "chai";
import { AxiosRequestConfig } from "axios";
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
                let actualError: InvalidRequestException;

                beforeEach(() =>
                {
                    try
                    {
                        instance.send(invalidRequest);
                    }
                    catch (ex)
                    {
                        actualError = ex;
                    }
                });

                test("It should throw an exception", () =>
                {
                    expect(actualError.name).to.equal("InvalidRequestException");
                    expect(actualError.message).to.equal("The request provided is invalid");
                });
            });
        });
    });
});

export interface IHttpRequestSender
{
    send(request: AxiosRequestConfig): any;
}

export class HttpRequestSender implements IHttpRequestSender
{
    public send(request: AxiosRequestConfig)
    {
        if (It.isAnEmptyObject(request))
        {
            throw new InvalidRequestException("The request provided is invalid");
        }

        return null;
    }
}
