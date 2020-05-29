import { expect } from "chai";
import { Regions } from "../../../PokemonSelector/regions/types/Regions";

describe("GetAllRegions Unit Test", () =>
{
    let instance: GetAllRegions;

    beforeEach(() =>
    {
        instance = new GetAllRegions;
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
});

export interface IGetAllRegions
{
    get(): Regions;
}

export class GetAllRegions implements IGetAllRegions
{
    public constructor()
    {
    }

    public get(): Regions
    {
        throw new Error("Method not implemented.");
    }
}
