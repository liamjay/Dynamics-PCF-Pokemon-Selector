import { expect, assert, use } from "chai";
import { createSandbox, SinonSandbox, SinonStub, SinonSpy } from "sinon";
import * as sinonChai from "sinon-chai";
import { IGetAllRegionsRequestBuilder } from "../../../PokemonSelector/regions/interfaces/IGetAllRegionsRequestBuilder";
import { GetAllRegionsRequestBuilder } from "../../../PokemonSelector/regions/builders/GetAllRegionsRequestBuilder";
import { IHttpRequestSender } from "../../../PokemonSelector/request/interfaces/IHttpRequestSender";
import { HttpRequestSender } from "../../../PokemonSelector/request/HttpRequestSender";
import { AxiosRequestConfig } from "axios";
import { GetAllRegionsReponseMock } from "./mocks/GetAllRegionsResponseMock";
import { IGetAllRegions } from "../../../PokemonSelector/regions/interfaces/IGetAllRegions";
import { GetAllRegions } from "../../../PokemonSelector/regions/GetAllRegions";

use(sinonChai);

describe("GetAllRegions Unit Test", () =>
{
    let sandbox: SinonSandbox;

    beforeEach(() =>
    {
        sandbox = createSandbox();
    });

    afterEach(() =>
    {
        sandbox.restore();
    });

    let requestBuilder: IGetAllRegionsRequestBuilder;

    beforeEach(() =>
    {
        requestBuilder = new GetAllRegionsRequestBuilder();
    });

    let httpRequestSender: IHttpRequestSender;

    beforeEach(() =>
    {
        httpRequestSender = new HttpRequestSender();
    });

    let instance: IGetAllRegions;

    beforeEach(() =>
    {
        instance = new GetAllRegions(requestBuilder, httpRequestSender);
    });

    describe("constructor()", () =>
    {
        describe("Given a new instance is created", () =>
        {
            it("It should return a valid instance", () =>
            {
                expect(instance).to.be.an.instanceOf(GetAllRegions);
            });
        });
    });

    describe("get()", () =>
    {
        describe("Given the method is called", () =>
        {
            let requestBuilderSpy: SinonSpy;
            let httpRequestSenderStub: SinonStub;

            beforeEach(() =>
            {
                requestBuilderSpy = sandbox.spy(requestBuilder, "build");
                httpRequestSenderStub = sandbox.stub(httpRequestSender, "send")
                    .returns(Promise.resolve(GetAllRegionsReponseMock));
            });

            beforeEach(async () =>
            {
                try
                {
                    return await instance.get();
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
                    expect(expectedArgs.url).to.equal("https://pokeapi.co/api/v2/region/");
                });
            });
        });
    });
});
