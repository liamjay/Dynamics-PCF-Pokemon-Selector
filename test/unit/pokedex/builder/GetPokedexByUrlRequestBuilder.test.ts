import { expect, assert } from "chai";
import { AxiosRequestConfig } from "axios";
import { InvalidUrlException } from "../../../../PokemonSelector/common/exceptions/InvalidUrlException";
import { IGetPokedexByUrlRequestBuilder } from "../../../../PokemonSelector/pokedex/interfaces/IGetPokedexByUrlRequestBuilder";
import { GetPokedexByUrlRequestBuilder } from "../../../../PokemonSelector/pokedex/builder/GetPokedexByUrlRequestBuilder";

describe("GetPokedexByUrlRequestBuilder Unit Tests", () =>
{
    let builder: IGetPokedexByUrlRequestBuilder;

    beforeEach(() => builder = new GetPokedexByUrlRequestBuilder());

    describe("constructor()", () =>
    {
        describe("Given a new instance is created", () =>
        {
            it("Should return a valid instance", () =>
            {
                expect(builder).to.be.an.instanceOf(GetPokedexByUrlRequestBuilder);
            });
        });
    });

    describe("build()", () =>
    {
        describe("Given an invalid url is provided", () =>
        {
            const invalidUrls = [undefined, null, ""];

            invalidUrls.forEach((invalidUrl) =>
            {
                describe(`And the URL provided is equal to ${invalidUrl}`, () =>
                {
                    let actualError: InvalidUrlException;

                    beforeEach(() =>
                    {
                        try
                        {
                            return builder.build(<any>invalidUrl);
                        }
                        catch (ex)
                        {
                            actualError = ex;
                        }
                    });

                    it("Should have thrown an InvalidUrlException", () =>
                    {
                        expect(actualError.name).to.equal("InvalidUrlException");
                        expect(actualError.message).to.equal("The URL provided is invalid");
                    });
                });
            });
        });

        describe("Given a valid URL is provided", () =>
        {
            describe("And the method is called", () =>
            {
                let request: AxiosRequestConfig;

                beforeEach(() =>
                {
                    try
                    {
                        return request = builder.build("https://pokeapi.co/api/v2/pokedex/1/");
                    }
                    catch (ex)
                    {
                        assert.fail(ex);
                    }
                });

                describe("The method", () =>
                {
                    it("Should return a valid request config with a url set", () =>
                    {
                        expect(request.url).to.equal("https://pokeapi.co/api/v2/pokedex/1/");
                    });

                    it("Should return a valid request config with the Http method set to GET", () =>
                    {
                        expect(request.method).to.equal("GET");
                    });
                });
            });
        });
    });
});
