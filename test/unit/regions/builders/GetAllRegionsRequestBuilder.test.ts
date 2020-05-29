import { expect } from "chai";
import { AxiosRequestConfig } from "axios";
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
            it("It should return a valid instance", () =>
            {
                expect(instance).to.be.an.instanceOf(GetAllRegionsRequestBuilder)
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
                request = instance.build();
            });

            describe("The method should return", () =>
            {
                it("Should return a valid request config with a url set", () =>
                {
                    expect(request.url).to.equal("https://pokeapi.co/api/v2/region/");
                });

                it("Should return a valid request config with the Http method set to GET", () =>
                {
                    expect(request.method).to.equal("GET");
                });
            });
        });
    });
});
