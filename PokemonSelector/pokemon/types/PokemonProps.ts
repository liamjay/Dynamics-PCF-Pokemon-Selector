import { Pokemon } from "./Pokemon";
import { FormEvent } from "react";
import { IDropdownOption } from "office-ui-fabric-react/lib/Dropdown";

export type PokemonProps = {
    pokemon: Pokemon[],

    onPokemonChange: (event: FormEvent<HTMLDivElement>, option?: IDropdownOption | undefined, index?: number | undefined) => void;
};