import { AxiosResponse } from "axios";
import { GetAllRegionsResponse } from "../../../../PokemonSelector/regions/types/GetAllRegionsResponse";

export const GetAllRegionsReponseMock: AxiosResponse<GetAllRegionsResponse> = {
    status: 200,
    statusText: "ok",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    },
    config: {},
    data: {
        results: [
            {
                "name": "kanto",
                "url": "https://pokeapi.co/api/v2/region/1/"
            },
            {
                "name": "johto",
                "url": "https://pokeapi.co/api/v2/region/2/"
            },
            {
                "name": "hoenn",
                "url": "https://pokeapi.co/api/v2/region/3/"
            },
        ]
    }
};