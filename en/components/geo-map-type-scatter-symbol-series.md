---
title: Angular Map | Data Visualization Tools | Scatter Symbol Series | Data Binding | Infragistics
_description: Use Infragistics Angular map's scatter symbol series to display geo-spatial data using points or markers in a geographic context.. Learn more about Ignite UI for Angular map's series!
_keywords: Angular map, scatter symbol series, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamGeographicMap']
---

# Angular Using Scatter Symbol Series

Use the Angular map component's [`IgxGeographicSymbolSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicsymbolseriescomponent.html) to display geo-spatial data using points or markers in a geographic context. This type of geographic series is often used to render a collection of geographic locations such as cities, airports, earthquakes, or points of interests.

## Angular Using Scatter Symbol Series Example

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/maps/geo-map-type-scatter-symbol-series"
           alt="Angular Using Scatter Symbol Series Example"
           github-src="maps/geo-map/type-scatter-symbol-series">
</code-view>

<div class="divider--half"></div>

## Data Requirements

Similarly to other types of geographic series in the map component, the [`IgxGeographicSymbolSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicsymbolseriescomponent.html) has the `ItemsSource` property which can be bound to an array of objects. In addition, each data item in this object must have two numeric data columns that store a geographic location (longitude and latitude). These data columns are then mapped to the [`latitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicsymbolseriescomponent.html#latitudememberpath) and [`longitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicsymbolseriescomponent.html#longitudememberpath) properties. The [`IgxGeographicSymbolSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicsymbolseriescomponent.html) uses values of these mapped data columns to plot symbol elements in the geographic map component.

## Code Snippet

The following code shows how to bind the [`IgxGeographicSymbolSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicsymbolseriescomponent.html) to locations of cities loaded from a shape file using the `ShapeDataSource`.

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
            <div *ngIf="item.org;then hasOrg; else notOrg" ></div>
            <span [style.color]="series.brush">
                {{item.name}}
            </span>
            <br/>
            <span>
                Population {{item.pop}} M
            </span>
        </div>
        <ng-template #hasOrg>
            <span>
                Population {{item.pop}} M
            </span>
            <br />
        </ng-template>
         <ng-template #notOrg>
            <span>
            </span>
         </ng-template>
</ng-template>
```

```ts
import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { MarkerType } from 'igniteui-angular-charts';
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxGeographicSymbolSeriesComponent } from "igniteui-angular-maps";
import { WorldLocations } from "../../utilities/WorldLocations";

@Component({
  selector: "app-map-geographic-scatter-symbol-series",
  styleUrls: ["./map-geographic-scatter-symbol-series.component.scss"],
  templateUrl: "./map-geographic-scatter-symbol-series.component.html"
})

export class MapTypeScatterSymbolSeriesComponent implements AfterViewInit {

    @ViewChild ("map")
    public map: IgxGeographicMapComponent;
    @ViewChild("template")
    public tooltip: TemplateRef<object>;

    constructor() {
    }

    public ngAfterViewInit(): void {
      this.addSeriesWith(WorldLocations.getCities(), "Gray");
      this.addSeriesWith(WorldLocations.getCapitals(), "rgb(32, 146, 252)");
    }

    public addSeriesWith(locations: any[], brush: string) {
        const symbolSeries = new IgxGeographicSymbolSeriesComponent ();
        symbolSeries.dataSource = locations;
        symbolSeries.markerType = MarkerType.Circle;
        symbolSeries.latitudeMemberPath = "lat";
        symbolSeries.longitudeMemberPath = "lon";
        symbolSeries.markerBrush  = "White";
        symbolSeries.markerOutline = brush;
        symbolSeries.tooltipTemplate = this.tooltip;
        this.map.series.add(symbolSeries);
    }
}
```
