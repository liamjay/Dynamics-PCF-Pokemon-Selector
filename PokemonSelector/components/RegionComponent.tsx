import * as React from "react";
import { Region } from "../regions/types/Region";
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { RegionProps } from "../regions/types/RegionProps";

export class RegionComponent extends React.Component<RegionProps>
{
    public constructor(props: RegionProps)
    {
        super(props)
    }

    public render()
    {
        return (
            <div>
                <Dropdown
                    label="Region:"
                    placeholder="Please select a region"
                    options={this.createDropdownItemsList(this.props.regions)}
                    onChange={this.props.onRegionChanged} />
            </div>
        );
    }

    private createDropdownItemsList(regions: Region[]): IDropdownOption[]
    {
        return regions.map((region: Region) =>
        {
            return {
                key: region.url,
                text: region.name
            }
        });
    }
}