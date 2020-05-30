import { expect } from "chai";
import { IGetPokedexByUrl } from "../../../../PokemonSelector/pokedex/interfaces/IGetPokedexByUrl";
import { GetPokedexByUrlFactory } from "../../../../PokemonSelector/pokedex/factory/GetPokedexByUrlFactory";
import { GetPokedexByUrl } from "../../../../PokemonSelector/pokedex/GetPokedexByUrl";

describe("GetPokedexByUrlFactory Unit Tests", () =>
{
    describe("create()", () =>
    {
        describe("Given the method is called", () =>
        {
            let actual: IGetPokedexByUrl;

            beforeEach(() =>
            {
                actual = GetPokedexByUrlFactory.create();
            });

            it("Should have returned a valid instance of IGetPokedexByUrl", () =>
            {
                expect(actual).to.be.an.instanceOf(GetPokedexByUrl);
            });
        });
    });
});