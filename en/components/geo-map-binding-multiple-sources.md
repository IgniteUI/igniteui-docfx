---
title: Map | Data Visualization Tools | Ignite UI for Angular | Multiple Series | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.View the demo, dependencies, usage and toolbar for more information.
_keywords: map, Ignite UI for Angular, infragistics
mentionedTypes: ['XamGeographicMap']
---

## Binding Multiple Data Sources

In the Ignite UI for Angular map, you can add multiple geographic series objects to overlay custom data sources with geo-spacial data. For example, [`IgxGeographicSymbolSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicsymbolseriescomponent.html) for plotting geographic locations of airports, the [`IgxGeographicPolylineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicpolylineseriescomponent.html) for plotting flights between airports, and 2nd [`IgxGeographicPolylineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicpolylineseriescomponent.html) for plotting gridlines of major geographic coordinates.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="geo-map-binding-multiple-sources-iframe" src='{environment:dvDemosBaseUrl}/maps/geo-map-binding-multiple-sources' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-binding-multiple-sources-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>


<div class="divider--half"></div>

This topic takes you step-by-step towards displaying multiple geographic series that will plot following geo-spatial data:

-   [`IgxGeographicSymbolSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicsymbolseriescomponent.html) – displays locations of major airports
-   [`IgxGeographicPolylineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicpolylineseriescomponent.html) – displays flights between airports
-   [`IgxGeographicPolylineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicpolylineseriescomponent.html) – displays gridlines of major coordinates

You can use geographic series in this or other combinations to plot desired data.

### Creating Data Sources

Create data sources for all geographic series that you want to display in the Ignite UI for Angular map. For example, you can the use [WorldConnections](geo-map-resources-world-connections.md) script.

```html
<div className="sampleRoot" >
    <igx-geographic-map #map
        width="700px"
        height="500px"
        zoomable="true" >
    </igx-geographic-map>
</div>

<ng-template let-series="series" let-item="item" #polylineTooltipTemplate>
        <div>
            <span>
                Arrival: {{item.origin.country}}
            </span>
            <br/>
            <span>
                   Destination: {{item.dest.country}}
            </span>
            <br/>
            <span>
                    Distance: {{item.distance}} miles
            </span>
        </div>
    </ng-template>

    <ng-template let-series="series" let-item="item" #pointTooltipTemplate>
            <div>
                <span>
                {{item?.country}}
                </span>
                <br />
                <span>
                {{item?.name}}
                </span>
                <br />
                <span>
                Population: {{item.pop}} M
                </span>
                <br/>
                <span>
                        Flights: {{item.flights}}
                </span>
            </div>
        </ng-template>
```

### Overlaying Flights

Create first [`IgxGeographicPolylineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicpolylineseriescomponent.html) object with flight connections between major airports and add it to [`IgxSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html) collection of the Ignite UI for Angular map.

```html
<igx-geographic-polyline-series  #polylineSeries
        [tooltipTemplate]="polylineTooltipTemplate"
                name="polylineSeries"
                shapeMemberPath="points"
                shapeStroke="rgba(147, 15, 180, 0.5)"
                thickness={3.0} >
</igx-geographic-polyline-series>
```

### Overlaying Gridlines

Create second [`IgxGeographicPolylineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicpolylineseriescomponent.html) object with geographic gridlines and add it to [`IgxSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html) collection of the Ignite UI for Angular map.

```html
  <igx-geographic-polyline-series  #polylineSeries
            [tooltipTemplate]="polylineTooltipTemplate"
                 datasource = worldFlights
                 name="polylineSeries"
                 shapeMemberPath="points"
                 shapeStroke="rgba(196, 14, 14,0.05)"
                 thickness={3.0} >
    </igx-geographic-polyline-series>
```

Create [`IgxGeographicSymbolSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicsymbolseriescomponent.html) object with geographic gridlines and add it to [`IgxSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html) collection of the geographic Ignite UI for Angular map.

```html
<igx-geographic-symbol-series  #symbolSeries
    name="symbolSeries"
    longitudeMemberPath="longitude"
    latitudeMemberPath="latitude"
    markerType="Circle"
    markerOutline="rgb(73, 73, 73)"
    markerBrush="White" >
</igx-geographic-symbol-series>
```

```ts
import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { MarkerType } from 'igniteui-angular-charts';
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxGeographicPolylineSeriesComponent } from "igniteui-angular-maps";
import { IgxGeographicSymbolSeriesComponent } from "igniteui-angular-maps";
import { WorldConnections } from "../../utilities/WorldConnections";

@Component({
  selector: "app-map-binding-multiple-data-sources",
  styleUrls: ["./map-binding-multiple-data-sources.component.scss"],
  templateUrl: "./map-binding-multiple--data-sources.component.html"
})

export class MapBindingMultipleSourcesComponent implements AfterViewInit {

    @ViewChild ("map")
    public map: IgxGeographicMapComponent;

    @ViewChild("polylineTooltipTemplate")
    public polylineTooltipTemplate: TemplateRef<object>;

    @ViewChild("pointTooltipTemplate")
    public pointTooltipTemplate: TemplateRef<object>;

    public data: any;
    constructor() {
    }

    public ngAfterViewInit(): void {
      this.map.windowRect = { left: 0.195, top: 0.1, width: 0.5, height: 0.5 };

      const worldFlights = WorldConnections.getFlights();
      const worldAirports = WorldConnections.getAirports();
      const worldGridlines = WorldConnections.getGridlines();

      this.addPolylineSeriesWith(worldFlights);
      this.addGridlineSeriesWith(worldGridlines);
      this.addSymbolSeriesWith(worldAirports);
    }

    public addGridlineSeriesWith(data: any[]) {
        const gridSeries = new IgxGeographicPolylineSeriesComponent();
        gridSeries.dataSource = data;
        gridSeries.shapeMemberPath = "points";
        gridSeries.shapeStroke = "Gray";
        gridSeries.shapeStrokeThickness = 1;
        this.map.series.add(gridSeries);
    }

    public addPolylineSeriesWith(data: any[]) {
        const lineSeries = new IgxGeographicPolylineSeriesComponent ();
        lineSeries.dataSource = data;
        lineSeries.shapeMemberPath = "points";
        lineSeries.shapeStroke = "rgba(196, 14, 14,0.05)";
        lineSeries.shapeStrokeThickness = 4;
        lineSeries.tooltipTemplate = this.polylineTooltipTemplate;
        this.map.series.add(lineSeries);
    }

    public addSymbolSeriesWith(data: any[]) {
        const symbolSeries = new IgxGeographicSymbolSeriesComponent ();
        symbolSeries.dataSource = data;
        symbolSeries.markerType = MarkerType.Circle;
        symbolSeries.latitudeMemberPath = "lat";
        symbolSeries.longitudeMemberPath = "lon";
        symbolSeries.markerBrush = "#aad3df";
        symbolSeries.markerOutline = "rgb(73, 73, 73)";
        symbolSeries.thickness = 1;
        symbolSeries.tooltipTemplate = this.pointTooltipTemplate;
        this.map.series.add(symbolSeries);
    }
}
```
