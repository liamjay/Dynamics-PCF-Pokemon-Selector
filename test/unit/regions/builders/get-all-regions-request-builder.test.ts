import { AxiosRequestConfig, Method } from "axios";
import { expect, assert } from "chai";
import { IGetAllRegionsRequestBuilder } from "../../../../PokemonSelector/regions/interfaces/IGetAllRegionsRequestBuilder";
import { GetAllRegionsRequestBuilder } from "../../../../PokemonSelector/regions/builders/GetAllRegionsRequestBuilder";

describe("GetAllRegionsRequestBuilder Unit Tests", () =>
{
    let instance: IGetAllRegionsRequestBuilder;

    beforeEach(() =>
    {
        instance = new GetAllRegionsRequestBuilder();
    });

    describe("constructor()", () =>
    {
        describe("Given a new instance is created", () =>
        {
            test("It should return a valid instance", () =>
            {
                expect(instance).to.be.an.instanceOf(GetAllRegionsRequestBuilder);
            });
        });
    });

    describe("build()", () =>
    {
        describe("Given the method is called", () =>
        {
            let request: AxiosRequestConfig;

            beforeEach(() =>
            {
                try
                {
                    request = instance.build();
                }
                catch (ex)
                {
                    assert.fail(ex);
                }
            });

            describe("The method should return", () =>
            {
                test("A valid request config with a url set", () =>
                {
                    expect(request.url).to.equal("https://pokeapi.co/api/v2/region/");
                });

                test("A valid request config with the Http method set to GET", () =>
                {
                    expect(request.method).to.equal("GET");
                });
            });
        });
    });
});
