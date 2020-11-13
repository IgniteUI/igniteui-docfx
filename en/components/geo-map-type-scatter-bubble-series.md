---
title: Angular Map | Data Visualization Tools | Scatter Proportional Series | Data Binding | Infragistics
_description: Use Infragistics Angular map's scatter proportional series to plot markers for the geographic points specified by the data in your application. Learn more about Ignite UI for Angular map's series!
_keywords: Angular map, scatter proportional series, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamGeographicMap']
---

# Angular Using Scatter Proportional Series

Use the Angular map component's [`IgxGeographicProportionalSymbolSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicproportionalsymbolseriescomponent.html) to plot markers for the geographic points specified by the data in your application. This map series can be useful for highlighting points of interest in your particular business case like department stores, warehouses, or offices. Also you can use this map series in a fleet management system or a GPS system for dynamic vehicle tracking.

## Angular Using Scatter Proportional Series Example

<div class="sample-container loading" style="height: 500px">
    <iframe id="geo-map-type-scatter-bubble-series-iframe" src='{environment:dvDemosBaseUrl}/maps/geo-map-type-scatter-bubble-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-type-scatter-bubble-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>


<div class="divider--half"></div>

The demo above shows the [`IgxGeographicProportionalSymbolSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicproportionalsymbolseriescomponent.html) series and how to specify data binding options of the series. Automatic marker selection is configured along with marker collision avoidance logic, and marker outline and fill colors are specified too.

## Configuration Summary

Similar to other types of scatter series in the map control, the [`IgxGeographicProportionalSymbolSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicproportionalsymbolseriescomponent.html) series has the `ItemsSource` property which can be bound to an array of objects. In addition, each data item in the items source must have two data columns that store geographic longitude and latitude coordinates and uses the [`longitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicproportionalsymbolseriescomponent.html#longitudememberpath) and [`latitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicproportionalsymbolseriescomponent.html#latitudememberpath) properties to map these data columns. The [`radiusScale`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicproportionalsymbolseriescomponent.html#radiusscale) and [`radiusMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicproportionalsymbolseriescomponent.html#radiusmemberpath) will settings configures the radius for the bubbles.

The following table summarizes the GeographicHighDensityScatterSeries series properties used for data binding.

| Property                                                                                                                                                                                  | Type                                                                                                                                           | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `ItemsSource`                                                                                                                                                                             | any                                                                                                                                            | Gets or sets the items source                                                                         |
| [`longitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicproportionalsymbolseriescomponent.html#longitudememberpath) | string                                                                                                                                         | Uses the ItemsSource property to determine the location of the longitude values on the assigned items |
| [`latitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicproportionalsymbolseriescomponent.html#latitudememberpath)   | string                                                                                                                                         | Uses the ItemsSource property to determine the location of the latitude values on the assigned items  |
| [`radiusMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicproportionalsymbolseriescomponent.html#radiusmemberpath)       | string                                                                                                                                         | Sets the path to use to get the radius values for the series.                                         |
| [`radiusScale`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicproportionalsymbolseriescomponent.html#radiusscale)                 | [`IgxSizeScaleComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsizescalecomponent.html) | Gets or sets the radius scale property for the current bubble series.                                 |
| [`minimumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsizescalecomponent.html#minimumvalue)                                        | any                                                                                                                                            | Configure the minimum value for calculating value sub ranges.                                         |
| [`maximumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsizescalecomponent.html#maximumvalue)                                        | any                                                                                                                                            | Configure the maximum value for calculating value sub ranges.                                         |

## Code Snippet

<!--Angular -->

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
            {{item.name}}
        </span>
    </div>
</ng-template>
```

```ts
import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { IgxSizeScaleComponent } from 'igniteui-angular-charts';
import { IgxValueBrushScaleComponent } from 'igniteui-angular-charts';
import { IgxDataContext } from 'igniteui-angular-core';
import { IgxShapeDataSource } from 'igniteui-angular-core';
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxGeographicProportionalSymbolSeriesComponent } from 'igniteui-angular-maps';
import { MarkerType } from 'igniteui-angular-charts';
import { WorldLocations } from "../../utilities/WorldLocations";

@Component({
  selector: "app-map-geographic-scatter-proportional-series",
  styleUrls: ["./map-geographic-scatter-proportional-series.component.scss"],
  templateUrl: "./map-geographic-scatter-proportional-series.component.html"
})
export class MapTypeScatterBubbleSeriesComponent implements AfterViewInit {

    @ViewChild ("map")
    public map: IgxGeographicMapComponent;
    @ViewChild ("template")
    public tooltipTemplate: TemplateRef<object>;
    constructor() {
    }

    public ngAfterViewInit(): void {
    const sds = new IgxShapeDataSource();
    sds.shapefileSource = "assets/Shapes/WorldTemperatures.shp";
    sds.databaseSource  = "assets/Shapes/WorldTemperatures.dbf";
    sds.dataBind();
    sds.importCompleted.subscribe(() => this.onDataLoaded(sds, ""));
}

    public onDataLoaded(sds: IgxShapeDataSource, e: any) {
    const shapeRecords = sds.getPointData();
    console.log("loaded contour shapes: " + shapeRecords.length + " from /Shapes/WorldTemperatures.shp");

    const contourPoints: any[] = [];
    for (const record of shapeRecords) {
        const temp = record.fieldValues.Contour;
        // using only major contours (every 10th degrees Celsius)
        if (temp % 10 === 0 && temp >= 0) {
            for (const shapes of record.points) {
                 for (let i = 0; i < shapes.length; i++) {
                    if (i % 5 === 0) {
                        const p = shapes[i];
                        const item = { lon: p.x, lat: p.y, value: temp};
                        contourPoints.push(item);
                    }
                 }
            }
        }
    }

    console.log("loaded contour points: " + contourPoints.length);
    this.addSeriesWith(WorldLocations.getAll());
}

    public addSeriesWith(locations: any[]) {
        const sizeScale = new IgxSizeScaleComponent();
        sizeScale.minimumValue = 4;
        sizeScale.maximumValue = 60;

        const brushes = [
            "rgba(14, 194, 14, 0.4)",  // semi-transparent green
            "rgba(252, 170, 32, 0.4)", // semi-transparent orange
            "rgba(252, 32, 32, 0.4)"  // semi-transparent red
        ];

        const brushScale = new IgxValueBrushScaleComponent();
        brushScale.brushes = brushes;
        brushScale.minimumValue = 0;
        brushScale.maximumValue = 30;

        const symbolSeries = new IgxGeographicProportionalSymbolSeriesComponent();
        symbolSeries.dataSource = locations;
        symbolSeries.markerType = MarkerType.Circle;
        symbolSeries.radiusScale = sizeScale;
        symbolSeries.fillScale = brushScale;
        symbolSeries.fillMemberPath = "pop";
        symbolSeries.radiusMemberPath = "pop";
        symbolSeries.latitudeMemberPath = "lat";
        symbolSeries.longitudeMemberPath = "lon";
        symbolSeries.markerOutline = "rgba(0,0,0,0.3)";
        symbolSeries.tooltipTemplate = this.tooltipTemplate;

        this.map.series.add(symbolSeries);
    }

}
```
