import { expect, assert } from "chai";
import * as nock from "nock";
import { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { InvalidRequestException } from "../../../PokemonSelector/request/exceptions/InvalidRequestException";
import { IHttpRequestSender } from "../../../PokemonSelector/request/interfaces/IHttpRequestSender";
import { HttpRequestSender } from "../../../PokemonSelector/request/HttpRequestSender";

describe("HttpRequestSender Unit Tests", () =>
{
    let instance: IHttpRequestSender;

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
                        return await instance.send(<any>invalidRequest);
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

        describe("Given a valid request configuration is provided", () =>
        {
            let request: AxiosRequestConfig;

            beforeEach(() =>
            {
                request = {
                    method: "GET",
                    url: "https://pokeapi.co/api/v2/region/"
                };
            });

            describe("And the request is successful", () =>
            {
                let actual: AxiosResponse;

                beforeEach(() =>
                {
                    nock("https://pokeapi.co")
                        .get("/api/v2/region/")
                        .reply(200, {
                            results: [
                                {
                                    name: "Kanto"
                                }
                            ]
                        });
                });

                beforeEach(async () =>
                {
                    try
                    {
                        return actual = await instance.send(request);
                    }
                    catch (ex)
                    {
                        assert.fail(ex);
                    }
                });

                describe("The method", () =>
                {
                    it("Should return a response with a 200 status code", () =>
                    {
                        expect(actual.status).to.equal(200);
                    });

                    it("Should return a response with valid data", () =>
                    {
                        expect(actual.data.results[0].name).to.equal("Kanto");
                    });
                });
            });

            describe("And the request fails because the endpoint cannot be found", () =>
            {
                let actual: AxiosError;

                beforeEach(() =>
                {
                    nock("https://pokeapi.co")
                        .get("/api/v2/region/")
                        .reply(404, {
                            message: "The following endpoint cannot be found"
                        });
                });

                beforeEach(async () =>
                {
                    try
                    {
                        return await instance.send(request);
                    }
                    catch (ex)
                    {
                        actual = ex;
                    }
                });

                describe("The method", () =>
                {
                    it("Should return a response with a 404 status code", () =>
                    {
                        expect(actual.response?.status).to.equal(404);
                    });

                    it("Should return a response with valid data", () =>
                    {
                        expect(actual.response?.data.message).to.equal("The following endpoint cannot be found");
                    });
                });
            });
        });
    });
});
