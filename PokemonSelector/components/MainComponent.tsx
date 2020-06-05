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
                    <h1>Pokemon Selector</h1>
                </div>
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
        const selectedPokemon: string = option?.text as string;

        return this.copySelectedPokemon(selectedPokemon);
    }

    private copySelectedPokemon(pokemon: string): void
    {
        const dummyElement: HTMLTextAreaElement = document.createElement("textarea");

        document.body.appendChild(dummyElement);
        dummyElement.value = pokemon;
        dummyElement.select();

        document.execCommand("copy");
        document.body.removeChild(dummyElement);

        return;
    }
}
