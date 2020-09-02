---
title: Angular Map | Data Visualization Tools | Binding CSV Data | Infragistics
_description: Learn how to use Infragistics' Angular map to display data that contains geographic locations from view models or geographic locations loaded from CSV files. View Ignite UI for Angular map demos!
_keywords: Angular map, plot data, Ignite UI for Angular, Infragistics, data binding
mentionedTypes: ['XamGeographicMap']
---

# Angular Binding CSV Files with Geographic Locations

With the Ignite UI for Angular map component, you can plot geographic data loaded from various file types. For example, you can load geographic locations from a comma separated values (CSV) file.

## Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="geo-map-binding-data-csv-iframe" src='{environment:dvDemosBaseUrl}/maps/geo-map-binding-data-csv' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-binding-data-csv-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>


<div class="divider--half"></div>

## Data Example

Here is an example of data from CSV file:

```ts
City,Lat,Lon,State,Code,County,Density,Population
New York,40.7856,-74.0093,New Jersey,NJ,Hudson,21057,54227
Dundee,42.5236,-76.9775,New York,NY,Yates,579,1650
```

## Code Snippet

The following code loads and binds [`IgxGeographicHighDensityScatterSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographichighdensityscatterseriescomponent.html) in the map component to an array of objects created from loaded CSV file with geographic locations.

```html
<div className="sampleRoot" >
<igx-geographic-map #map
    width="700px"
    height="500px"
    zoomable="true" >
</igx-geographic-map>
</div>

<ng-template let-series="series" let-item="item" #template>
    <div>
        <span>
            County: {{item.county}}
        </span>
    <br/>
        <span>
            Population: {{item.density}} K
        </span>
    </div>
</ng-template>
```

```ts
import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { IgxGeographicHighDensityScatterSeriesComponent } from "igniteui-angular-maps";
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';

@Component({
  selector: "app-map-binding-geographic-csv_files",
  styleUrls: ["./map-binding-geographic-csv_files.component.scss"],
  templateUrl: "./map-binding-geographic-csv_files.component.html"
})

export class MapBindingDataCsvComponent implements AfterViewInit {

    @ViewChild ("map")
    public map: IgxGeographicMapComponent;
    @ViewChild("template")
    public tooltip: TemplateRef<object>;
    constructor() {
    }

    public ngAfterViewInit(): void {
        this.componentDidMount();
    }

    public componentDidMount() {
        // fetching JSON data with geographic locations from public folder
        fetch("assets/Data/UsaCities.csv")
            .then((response) => response.text())
            .then((data) => this.onDataLoaded(data));
    }

    public onDataLoaded(csvData: string) {
        const csvLines = csvData.split("\n");

        // parsing CSV data and creating geographic locations
        const geoLocations: any[] = [];
        for (let i = 1; i < csvLines.length; i++) {
            const columns = csvLines[i].split(",");
            const location = {
                code: columns[4],
                county: columns[5],
                density: Number(columns[6]),
                latitude:  Number(columns[1]),
                longitude: Number(columns[2]),
                name:  columns[0],
                population: Number(columns[7]),
                state: columns[3]
            };
            geoLocations.push(location);
        }

        // creating HD series with loaded data
        const geoSeries = new IgxGeographicHighDensityScatterSeriesComponent();
        geoSeries.dataSource = geoLocations;
        geoSeries.latitudeMemberPath  = "latitude";
        geoSeries.longitudeMemberPath = "longitude";
        geoSeries.heatMaximumColor = "Red";
        geoSeries.heatMinimumColor = "Black";
        geoSeries.heatMinimum = 0;
        geoSeries.heatMaximum = 5;
        geoSeries.pointExtent = 1;
        geoSeries.tooltipTemplate = this.tooltip;
        geoSeries.mouseOverEnabled = true;

        // adding symbol series to the geographic amp
        this.map.series.add(geoSeries);
    }
}
```
