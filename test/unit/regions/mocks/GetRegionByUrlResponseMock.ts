import { AxiosResponse } from "axios";
import { Region } from "../../../../PokemonSelector/regions/types/Region";

export const GetRegionByUrlResponseMock: AxiosResponse<Region> = {
    status: 200,
    statusText: "ok",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    "config": {},
    "data": {
        id: 1,
        name: "kanto",
        pokedexes: [
            {
                name: "kanto",
                url: "https://pokeapi.co/api/v2/pokedex/2/"
            }
        ]
    }
};