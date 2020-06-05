import * as React from "react";
import { RegionName } from "../regions/types/RegionName";
import { Dropdown, IDropdownOption } from "office-ui-fabric-react/lib/Dropdown";
import { RegionProps } from "../regions/types/RegionProps";

export class RegionComponent extends React.Component<RegionProps>
{
    public constructor(props: RegionProps)
    {
        super(props);
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

    private createDropdownItemsList(regions: RegionName[]): IDropdownOption[]
    {
        return regions.map((region: RegionName) =>
        {
            return {
                key: region.url,
                text: this.transformToUpperCase(region.name)
            };
        });
    }

    private transformToUpperCase(name: string): string
    {
        return `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
    }
}
