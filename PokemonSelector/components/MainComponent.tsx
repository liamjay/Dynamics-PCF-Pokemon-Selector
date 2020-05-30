import * as React from "react";
import { RegionComponent } from "./RegionComponent";
import { IDropdownOption } from "office-ui-fabric-react/lib/Dropdown";
import { MainProps } from "../main/types/MainProps";
import { PokedexComponent } from "./PokedexComponent";
import { MainState } from "../main/types/MainState";
import { IGetRegionByUrl } from "../regions/interfaces/IGetRegionByUrl";
import { GetRegionByUrlFactory } from "../regions/factory/GetRegionByUrlFactory";
import { Region } from "../regions/types/Region";
import { PokemonComponent } from "./PokemonComponent";
import { IGetPokedexByUrl } from "../pokedex/interfaces/IGetPokedexByUrl";
import { GetPokedexByUrlFactory } from "../pokedex/factory/GetPokedexByUrlFactory";
import { Pokedex } from "../pokedex/types/Pokedex";

export class MainComponent extends React.Component<MainProps, MainState>
{
    public constructor(props: MainProps)
    {
        super(props);

        this.state = { pokedexes: [], pokemon: [] };
    }

    public render()
    {
        return (
            <div>
                <div>
                    <RegionComponent regions={this.props.regions} onRegionChanged={this.onRegionChange.bind(this)} />
                </div>
                <div>
                    <PokedexComponent pokedexes={this.state.pokedexes} onPokedexChange={this.onPokedexChange.bind(this)} />
                </div>
                <div>
                    <PokemonComponent pokemon={this.state.pokemon} onPokemonChange={this.onPokemonChange.bind(this)} />
                </div>
            </div>
        );
    }

    private async onRegionChange(event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption, index?: number | undefined): Promise<void>
    {
        console.log(JSON.stringify(option));

        const regionUrl: string = option?.key as string;

        const getRegionByUrl: IGetRegionByUrl = GetRegionByUrlFactory.create();

        const region: Region = await getRegionByUrl.get(regionUrl);

        this.setState({
            pokedexes: region.pokedexes
        });
    }

    private async onPokedexChange(event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption, index?: number | undefined): Promise<void>
    {
        const pokedexUrl: string = option?.key as string;

        const getPokedexByUrl: IGetPokedexByUrl = GetPokedexByUrlFactory.create();

        const pokedex: Pokedex = await getPokedexByUrl.get(pokedexUrl);

        this.setState({
            pokemon: pokedex.pokemon_entries
        });
    }

    private onPokemonChange(event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption, index?: number | undefined): void
    {
        console.log("POKEMON: " + JSON.stringify(option));
    }
}