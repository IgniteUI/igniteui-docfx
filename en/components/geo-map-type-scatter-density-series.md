---
title: Map | Data Visualization Tools | Ignite UI for Angular | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.View the demo, dependencies, usage and toolbar for more information.
_keywords: map, Ignite UI for Angular, infragistics
mentionedTypes: ['XamGeographicMap']
---

## Using Scatter High Density Series

Use the map component's [`IgxGeographicHighDensityScatterSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographichighdensityscatterseriescomponent.html) to bind and show scatter data ranging from hundreds to millions of data points requiring exceedingly little loading time.

### Demo

<div class="sample-container loading" style="height: 400px">
    <iframe id="geo-map-type-scatter-density-series-iframe" src='{environment:dvDemosBaseUrl}/maps/geo-map-type-scatter-density-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-type-scatter-density-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

The demo above shows the [`IgxGeographicHighDensityScatterSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographichighdensityscatterseriescomponent.html) series in the map component bound to hundreds or even thousands of data points representing Australia’s population density. The map plot area with more densely populated data points represented as coalescences of red pixels and loosely distributed data points by discrete blue pixels.

Because there are so many data points, the series displays the scatter data as tiny dots as opposed to full size markers, and displays areas with the most data using a higher color density representing a cluster of data points.

### Data Requirements

Similar to other types of scatter series in the map control, the [`IgxGeographicHighDensityScatterSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographichighdensityscatterseriescomponent.html) series has the `ItemsSource` property which can be bound to an array of objects. In addition, each data item in the items source must have two data columns that store geographic longitude and latitude coordinates and uses the [`longitudeMemberPath`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographichighdensityscatterseriescomponent.html#longitudememberpath) and [`latitudeMemberPath`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographichighdensityscatterseriescomponent.html#latitudememberpath) properties to map these data columns.

#### Data Binding

The following table summarizes the GeographicHighDensityScatterSeries series properties used for data binding.

| Property                                                                                                                                                        | Type   | Description                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------- |
| `ItemsSource`                                                                                                                                                   | any    | Gets or sets the items source                                                                         |
| [`longitudeMemberPath`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographichighdensityscatterseriescomponent.html#longitudememberpath) | string | Uses the ItemsSource property to determine the location of the longitude values on the assigned items |
| [`latitudeMemberPath`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographichighdensityscatterseriescomponent.html#latitudememberpath)   | string | Uses the ItemsSource property to determine the location of the latitude values on the assigned items  |

### Heat Color Scale

The Heat Color Scale, an optional feature, determines the color pattern within the series. The following table summarizes the properties used for determining the color scale.

| Property                                                                                                                                                  | Type   | Description                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------- |
| [`heatMinimum`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographichighdensityscatterseriescomponent.html#heatminimum)           | Double | Defines the double value representing the minimum end of the color scale  |
| [`heatMaximum`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographichighdensityscatterseriescomponent.html#heatmaximum)           | Double | Defines the double value representing the maximum end of the color scale  |
| [`heatMinimumColor`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographichighdensityscatterseriescomponent.html#heatminimumcolor) | Color  | Defines the point density color used at the bottom end of the color scale |
| [`heatMaximumColor`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographichighdensityscatterseriescomponent.html#heatmaximumcolor) | Color  | Defines the point density color used at the top end of the color scale    |

### Code Example

The following code demonstrates how set the [`heatMinimumColor`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographichighdensityscatterseriescomponent.html#heatminimumcolor) and [`heatMaximumColor`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographichighdensityscatterseriescomponent.html#heatmaximumcolor) properties of the [`IgxGeographicHighDensityScatterSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographichighdensityscatterseriescomponent.html)

<!-- Angular -->

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
            {{item.n}}
        </span>
    </div>
</ng-template>
```

```ts
import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { ShapeDataSource } from "igniteui-angular-core/ES5/igx-shape-data-source";
import { IgxGeographicHighDensityScatterSeriesComponent
} from "igniteui-angular-maps/ES5/igx-geographic-high-density-scatter-series-component";
import { IgxGeographicMapComponent } from "igniteui-angular-maps/ES5/igx-geographic-map-component";
import { WorldUtils } from "../../utilities/WorldUtils";

@Component({
  selector: "app-map-geographic-scatter-density-series",
  styleUrls: ["./map-geographic-scatter-density-series.component.scss"],
  templateUrl: ".map-geographic-scatter-density-series.component.html"
})

export class MapTypeScatterDensitySeriesComponent implements AfterViewInit {

    @ViewChild ("map")
    public map: IgxGeographicMapComponent;
    @ViewChild("template")
    public tooltip: TemplateRef<object>;

    public geoLocations;
    constructor() {
    }

    public ngAfterViewInit(): void {
         // fetching geographic locations from public JSON folder
         fetch("assets/Data/AusPlaces.json")
         .then((response) => response.json())
         .then((data) => this.onDataLoaded(data, ""));
      }

    public onDataLoaded(sds: ShapeDataSource, e: any) {
        this.geoLocations = sds;
        // creating HD series with loaded data
        const geoSeries = new IgxGeographicHighDensityScatterSeriesComponent();
        geoSeries.dataSource = sds;
        geoSeries.longitudeMemberPath = "x";
        geoSeries.latitudeMemberPath = "y";
        geoSeries.heatMaximumColor = "Red";
        geoSeries.heatMinimumColor = "Black";
        geoSeries.heatMinimum = 0;
        geoSeries.heatMaximum = 5;
        geoSeries.pointExtent = 1;
        geoSeries.tooltipTemplate = this.tooltip;
        geoSeries.mouseOverEnabled = true;

        // adding HD series to the geographic amp
        this.map.series.add(geoSeries);

        // zooming to bound of all geographic locations
        const geoBounds = WorldUtils.getBounds(this.geoLocations);
        geoBounds.top = 0;
        geoBounds.height = -50;
        this.map.zoomToGeographic(geoBounds);
    }

}
```
