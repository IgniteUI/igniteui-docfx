---
title: Map | Data Visualization Tools | Ignite UI for Angular | Geographic JSON Data | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geographic locations loaded from JSON files. View the demo, dependencies, usage and toolbar for more information.
_keywords: map, Ignite UI for Angular, infragistics
mentionedTypes: ['XamGeographicMap']
---

## Binding JSON Files with Geographic Locations

With the Ignite UI for Angular map, you can plot geographic data loaded from various file types. For example, you can load geographic locations from JavaScript Object Notation (JSON) file.

### Demo

<div class="sample-container loading" style="height: 400px">
    <iframe id="geo-map-binding-data-json-points-iframe" src='{environment:demosBaseUrl}/maps/geo-map-binding-data-json-points' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-binding-data-json-points-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Data Example

Here is an example of data from JSON file:

```ts
[
 { "n": "Sydney Island", "y": -16.68972, "x": 139.45917 },
 { "n": "Sydney Creek", "y": -16.3, "x": 128.95 },
 { "n": "Mount Sydney", "y": -21.39864, "x": 121.193 },
 // ...
]
```

### Code Snippet

The following code loads and binds [`IgxGeographicHighDensityScatterSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographichighdensityscatterseriescomponent.html) in the map component to an array of objects created from loaded JSON file with geographic locations:

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
            <span >
                {{item.city}}
            </span>
        </div>
</ng-template>
```

```ts
import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { MarkerType } from "igniteui-angular-charts/ES5/MarkerType";
import { IgxGeographicMapComponent } from "igniteui-angular-maps/ES5/igx-geographic-map-component";
import { IgxGeographicSymbolSeriesComponent } from "igniteui-angular-maps/ES5/igx-geographic-symbol-series-component";

@Component({
  selector: "app-map-binding-geographic-json-files",
  styleUrls: ["./map-binding-geographic-json-files.component.scss"],
  templateUrl: "./map-binding-geographic-json-files.component.html"
})

export class MapBindingDataJsonPointsComponent implements AfterViewInit {

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
        fetch("assets/Data/WorldCities.json")
            .then((response) => response.json())
            .then((data) => this.onDataLoaded(data));
    }

    public onDataLoaded(jsonData: any[]) {
        const geoLocations: any[] = [];
        // parsing JSON data and using only cities that are capitals
        for (const jsonItem of jsonData) {
            if (jsonItem.cap) {
                const location = {
                    city: jsonItem.name,
                    country: jsonItem.country,
                    latitude: jsonItem.lat,
                    longitude: jsonItem.lon,
                    population: jsonItem.pop
                };
                geoLocations.push(location);
            }
        }

        // creating symbol series with loaded data
        const geoSeries = new IgxGeographicSymbolSeriesComponent();
        geoSeries.dataSource = geoLocations;
        geoSeries.markerType = MarkerType.Circle;
        geoSeries.latitudeMemberPath  = "latitude";
        geoSeries.longitudeMemberPath = "longitude";
        geoSeries.markerBrush = "LightGray";
        geoSeries.markerOutline = "Black";
        geoSeries.tooltipTemplate = this.tooltip;

        // adding symbol series to the geographic amp
        this.map.series.add(geoSeries);
    }
}
```
