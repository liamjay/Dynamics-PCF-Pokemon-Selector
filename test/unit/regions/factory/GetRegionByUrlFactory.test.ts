import { expect } from "chai";
import { IGetRegionByUrl } from "../../../../PokemonSelector/regions/interfaces/IGetRegionByUrl";
import { GetRegionByUrl } from "../../../../PokemonSelector/regions/GetRegionByUrl";
import { GetRegionByUrlFactory } from "../../../../PokemonSelector/regions/factory/GetRegionByUrlFactory";

describe("GetRegionByUrlFactory Unit Tests", () =>
{
    describe("create()", () =>
    {
        describe("Given the method is called", () =>
        {
            let actual: IGetRegionByUrl;

            beforeEach(() =>
            {
                actual = GetRegionByUrlFactory.create();
            });

            it("Should return a valid instance of IGetRegionByUrl", () =>
            {
                expect(actual).to.be.an.instanceOf(GetRegionByUrl);
            });
        });
    });
});
