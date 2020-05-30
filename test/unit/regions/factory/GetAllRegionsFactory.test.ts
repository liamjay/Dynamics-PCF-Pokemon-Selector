import { expect } from "chai";
import { GetAllRegions } from "../../../../PokemonSelector/regions/GetAllRegions";
import { GetAllRegionsFactory } from "../../../../PokemonSelector/regions/factory/GetAllRegionsFactory";

describe("GetAllRegionsFactory Unit Tests", () =>
{
    describe("create()", () =>
    {
        describe("Given the method is called", () =>
        {
            it("Should create a valid instance of IGetAllRegions", () =>
            {
                expect(GetAllRegionsFactory.create()).to.be.an.instanceOf(GetAllRegions);
            });
        });
    });

    describe
});
