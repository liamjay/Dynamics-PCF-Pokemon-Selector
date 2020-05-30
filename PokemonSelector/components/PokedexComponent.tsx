import * as React from "react";
import { PokedexProps } from "../pokedex/types/PokedexProps";
import { Dropdown, IDropdownOption } from "office-ui-fabric-react/lib/Dropdown";
import { PokedexName } from "../pokedex/types/PokedexName";

export class PokedexComponent extends React.Component<PokedexProps>
{
    public constructor(props: PokedexProps)
    {
        super(props);
    }

    public render()
    {
        return (
            <div>
                <Dropdown
                    label="Pokedex:"
                    placeholder="Pleas select a pokedex"
                    options={this.createDropdownItemsList(this.props.pokedexes)}
                    onChange={this.props.onPokedexChange} />
            </div>
        );
    }

    private createDropdownItemsList(pokedexes: PokedexName[]): IDropdownOption[]
    {
        return pokedexes.map((pokedex: PokedexName) =>
        {
            return {
                key: pokedex.url,
                text: this.transformToUpperCase(pokedex.name)
            }
        });
    }

    private transformToUpperCase(name: string): string
    {
        return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
    }
}