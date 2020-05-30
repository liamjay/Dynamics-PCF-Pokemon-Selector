import { PokedexName } from "./PokedexName";
import { FormEvent } from "react";
import { IDropdownOption } from "office-ui-fabric-react/lib/Dropdown";

export type PokedexProps = {
    pokedexes: PokedexName[];

    onPokedexChange: (event: FormEvent<HTMLDivElement>, option?: IDropdownOption | undefined, index?: number | undefined) => void;
};