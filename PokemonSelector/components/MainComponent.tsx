import * as React from "react";
import { IGetAllRegions } from "../regions/interfaces/IGetAllRegions";
import { GetAllRegionsFactory } from "../regions/factory/GetAllRegionsFactory";
import { Region } from "../regions/types/Region";
import { RegionComponent } from "./RegionComponent";
import { RegionProps } from "../regions/types/RegionProps";
import { IDropdownOption } from "office-ui-fabric-react/lib/Dropdown";

export class MainComponent extends React.Component<RegionProps>
{
    public constructor(props: RegionProps)
    {
        super(props);
    }

    public render()
    {
        return (
            <div>
                <RegionComponent regions={this.props.regions} onRegionChanged={this.onRegionChange} />
            </div>
        );
    }

    private onRegionChange(event: React.FormEvent<HTMLDivElement>, option?: IDropdownOption, index?: number | undefined): void
    {
        console.log("SELECTED OPTION: " + JSON.stringify(option));
    }
}