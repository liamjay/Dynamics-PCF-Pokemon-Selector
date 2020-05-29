import { Regions } from "../../../PokemonSelector/regions/types/Regions";

describe("GetAllRegions Unit Test", () =>
{
    describe("constructor()", () =>
    {
        describe("Given a new instance is created", () =>
        {
            let instance: GetAllRegions;

            beforeEach(() =>
            {
                instance = new GetAllRegions;
            });

            test("It should return a valid instance", () =>
            {
                expect(instance).toBeInstanceOf(GetAllRegions);
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
