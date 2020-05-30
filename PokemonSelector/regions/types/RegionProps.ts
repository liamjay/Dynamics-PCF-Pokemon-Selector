import { RegionName } from "./RegionName";
import { IDropdownOption } from "office-ui-fabric-react/lib/Dropdown";
import { FormEvent } from "react";

export type RegionProps = {
    regions: RegionName[];

    onRegionChanged: (event: FormEvent<HTMLDivElement>, option?: IDropdownOption | undefined, index?: number | undefined) => void;
};