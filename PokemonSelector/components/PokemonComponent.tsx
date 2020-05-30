import * as React from "react";
import { PokemonProps } from "../pokemon/types/PokemonProps";
import { Dropdown, IDropdownOption } from "office-ui-fabric-react/lib/Dropdown";
import { Pokemon } from "../pokemon/types/Pokemon";

export class PokemonComponent extends React.Component<PokemonProps>
{
    public constructor(props: PokemonProps)
    {
        super(props);
    }

    public render()
    {
        return (
            <div>
                <Dropdown
                    label="Pokemon"

                    placeholder="Please select a pokemon"
                    options={this.createDropdownItemsList(this.props.pokemon)}
                    onChange={this.props.onPokemonChange} />
            </div>
        );
    }

    private createDropdownItemsList(pokemons: Pokemon[]): IDropdownOption[]
    {
        return pokemons.map((pokemon: Pokemon) =>
        {
            return {
                key: pokemon.entry_number,
                text: `${this.transformToUpperCase(pokemon.pokemon_species.name)}`
            };
        });
    }

    private transformToUpperCase(name: string): string
    {
        return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
    }
}