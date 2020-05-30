import { expect, assert, use } from "chai";
import { createSandbox, SinonSandbox, SinonSpy, SinonStub } from "sinon";
import * as sinonChai from "sinon-chai";
import { IGetPokedexByUrl } from "../../../PokemonSelector/pokedex/interfaces/IGetPokedexByUrl";
import { GetPokedexByUrl } from "../../../PokemonSelector/pokedex/GetPokedexByUrl";
import { IGetPokedexByUrlRequestBuilder } from "../../../PokemonSelector/pokedex/interfaces/IGetPokedexByUrlRequestBuilder";
import { GetPokedexByUrlRequestBuilder } from "../../../PokemonSelector/pokedex/builder/GetPokedexByUrlRequestBuilder";
import { IHttpRequestSender } from "../../../PokemonSelector/request/interfaces/IHttpRequestSender";
import { HttpRequestSender } from "../../../PokemonSelector/request/HttpRequestSender";
import { InvalidUrlException } from "../../../PokemonSelector/common/exceptions/InvalidUrlException";
import { GetRegionByUrlResponseMock } from "../regions/mocks/GetRegionByUrlResponseMock";
import { AxiosRequestConfig } from "axios";

use(sinonChai);

describe("GetPokedexByUrl Unit Tests", () =>
{
    let sandbox: SinonSandbox;

    beforeEach(() => sandbox = createSandbox());

    afterEach(() => sandbox.restore());

    let requestBuilder: IGetPokedexByUrlRequestBuilder;

    beforeEach(() =>
    {
        requestBuilder = new GetPokedexByUrlRequestBuilder();
    });

    let httpRequestSender: IHttpRequestSender;

    beforeEach(() =>
    {
        httpRequestSender = new HttpRequestSender();
    });

    let instance: IGetPokedexByUrl;

    beforeEach(() => instance = new GetPokedexByUrl(requestBuilder, httpRequestSender));

    describe("constructor()", () =>
    {
        describe("Given a new instance is created", () =>
        {
            it("Should return a valid instance", () =>
            {
                expect(instance).to.be.an.instanceOf(GetPokedexByUrl);
            });
        });
    });

    describe("Given an invalid url is provided", () =>
    {
        const invalidUrls = [undefined, null, ""];

        invalidUrls.forEach((invalidUrl) =>
        {
            describe(`And the url provided is equal to "${invalidUrl}"`, () =>
            {
                let actualError: InvalidUrlException;

                beforeEach(async () =>
                {
                    try
                    {
                        return await instance.get(<any>invalidUrl);
                    }
                    catch (ex)
                    {
                        actualError = ex;
                    }
                });

                it("Should have thrown an InvalidUrlException", () =>
                {
                    expect(actualError.name).to.equal("InvalidUrlException");
                    expect(actualError.message).to.equal("The url provided is invalid");
                });
            });
        });
    });

    describe("Given a valid url is provided", () =>
    {
        describe("And the method is called", () =>
        {
            let requestBuilderSpy: SinonSpy;
            let httpRequestSenderStub: SinonStub;

            beforeEach(() =>
            {
                requestBuilderSpy = sandbox.spy(requestBuilder, "build");
                httpRequestSenderStub = sandbox.stub(httpRequestSender, "send")
                    .returns(Promise.resolve(GetRegionByUrlResponseMock));
            });

            beforeEach(async () =>
            {
                try
                {
                    return await instance.get("https://pokeapi.co/api/v2/pokedex/1/");
                }
                catch (ex)
                {
                    assert.fail(ex);
                }
            });

            describe("The method", () =>
            {
                it("Should have made a call to create the request", () =>
                {
                    expect(requestBuilderSpy).to.have.been.called;
                });

                it("Should have made a call to send the request", () =>
                {
                    expect(httpRequestSenderStub).to.have.been.called;

                    const expectedArgs: AxiosRequestConfig = httpRequestSenderStub.args[0][0];

                    expect(expectedArgs.method).to.equal("GET");
                    expect(expectedArgs.url).to.equal("https://pokeapi.co/api/v2/pokedex/1/");
                });
            });
        });
    });
});



