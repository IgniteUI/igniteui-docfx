---
title: Angular Map | Data Visualization Tools | Binding Multiple Data Shapes | Infragistics
_description: Use Infragistics' Angular to add multiple geographic series objects to overlay a few shapefiles with geo-spacial data. View Ignite UI for Angular map tutorials!
_keywords: Angular map, shape files, Ignite UI for Angular, Infragistics, data binding
mentionedTypes: ['XamGeographicMap']
---

# Angular Binding and Overlaying Multiple Shape Files

In the Ignite UI for Angular map, you can add multiple geographic series objects to overlay a few shapefiles with geo-spacial data. For example, [`IgxGeographicSymbolSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicsymbolseriescomponent.html) for plotting geographic locations of ports, the [`IgxGeographicPolylineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicpolylineseriescomponent.html) for plotting routes between ports, and the [`IgxGeographicShapeSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicshapeseriescomponent.html) for plotting shapes of countries.

## Angular Binding and Overlaying Multiple Shape Files Example

<div class="sample-container loading" style="height: 500px">
    <iframe id="geo-map-binding-multiple-shapes-iframe" src='{environment:dvDemosBaseUrl}/maps/geo-map-binding-multiple-shapes' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-binding-multiple-shapes-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>


<div class="divider--half"></div>

This topic takes you step-by-step towards displaying multiple geographic series in the map component. All geographic series plot following geo-spatial data loaded from shape files using the `ShapeDataSource` class. Refer to the [Binding Shape Files](geo-map-binding-shp-file.md) topic for more information about `ShapeDataSource` object.

-   [`IgxGeographicSymbolSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicsymbolseriescomponent.html) – displays locations of major cities
-   [`IgxGeographicPolylineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicpolylineseriescomponent.html) – displays routes between major ports
-   [`IgxGeographicShapeSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicshapeseriescomponent.html) – displays shapes of countries of the world

You can use geographic series in above or other combinations to plot desired data.

## Importing Components

First, let's import required components and modules:

```ts
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxGeographicPolylineSeriesComponent } from 'igniteui-angular-maps';
import { IgxGeographicShapeSeriesComponent } from 'igniteui-angular-maps';
import { IgxGeographicSymbolSeriesComponent } from 'igniteui-angular-maps';
import { IgxShapeDataSource } from 'igniteui-angular-core';
```

<!-- Blazor -->

-   GeographicMapModule 
-   IgcDataChartInteractivityModule
    <!-- end: Blazor -->

## Creating Series

Next, we need to create a map with a few Geographic Series that will later load different type of shapefile.

```html
<div className="sampleRoot">
    <div className="map" >
        <igx-geographic-map
            #map
            width="700px"
            height="500px"
            zoomable="true" >
            <igx-geographic-shape-series #shapeSeries
                name="polygonSeries"
                shapeMemberPath="points"
                shapeFill="rgb(150, 150, 150)"
                shapeStroke="Black"
                shapeStrokeThickness={1.0} >
            </igx-geographic-shape-series>
            <igx-geographic-polyline-series  #polylineSeries
            [tooltipTemplate]="polylineTooltipTemplate"
                  name="polylineSeries"
                 shapeMemberPath="points"
                 shapeStroke="rgba(147, 15, 180, 0.5)"
                 thickness={3.0} >
            </igx-geographic-polyline-series>
            <igx-geographic-symbol-series  #symbolSeries
                name="symbolSeries"
                longitudeMemberPath="longitude"
                latitudeMemberPath="latitude"
                markerType="Circle"
                markerOutline="rgb(2, 102, 196)"
                markerBrush="White" >
            </igx-geographic-symbol-series>
        </igx-geographic-map>
    </div>
</div>

<ng-template let-series="series" let-item="item" #polylineTooltipTemplate>
        <div>
            <span>{{item.capacity}}</span><br />
            <span>Distance: {{item.distance}}</span>
        </div>
    </ng-template>

    <ng-template let-series="series" let-item="item" #shapeTooltipTemplate>
        <div>
            <span>{{item.name}}</span><br />
            <span>Population: {{item.population}}</span>
        </div>
    </ng-template>

    <ng-template let-series="series" let-item="item" #pointTooltipTemplate>
        <div>
            <span [style.color]="series.brush">City: {{item.city}}</span>
        </div>
    </ng-template>
```

## Loading Shapefiles

Next, in constructor of your page, add a `ShapeDataSource` for each shapefile that you want to display in the geographic map component.

```ts
const sdsPolygons = new IgxShapeDataSource();
sdsPolygons.importCompleted = this.onPolygonsLoaded;
sdsPolygons.shapefileSource = url + "/shapes/WorldCountries.shp";
sdsPolygons.databaseSource  = url + "/shapes/WorldCountries.dbf";
sdsPolygons.dataBind();
const sdsPolylines = new IgxShapeDataSource();
sdsPolylines.importCompleted = this.onPolylinesLoaded;
sdsPolylines.shapefileSource = url + "/shapes/WorldConnections.shp";
sdsPolylines.databaseSource  = url + "/shapes/WorldConnections.dbf";
sdsPolylines.dataBind();
const sdsLocations = new IgxShapeDataSource();
sdsLocations.importCompleted = this.onPointsLoaded;
sdsLocations.shapefileSource = url + "/Shapes/WorldCities.shp";
sdsLocations.databaseSource  = url + "/Shapes/WorldCities.dbf";
sdsLocations.dataBind();
```

<!-- Angular, React, WebComponents -->

## Processing Polygons

Process shapes data loaded in `ShapeDataSource` with of countries of the world and assign it to [`IgxGeographicShapeSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicshapeseriescomponent.html) object.

```ts
import { IgxGeographicPolylineSeriesComponent } from 'igniteui-angular-maps';
import { IgxShapeDataSource } from 'igniteui-angular-core';
// ...
public onPolygonsLoaded(sds: IgxShapeDataSource, e: any) {
    const geoPolygons: any[] = [];
    // parsing shapefile data and creating geo-polygons
    let pointData = sds.getPointData();
    for ( let i = 0; i < pointData.length; i++ ) {
        let record = pointData[i];
        // using field/column names from .DBF file
        const country = {
            points: record.points,
            name: record.fieldValues.NAME,
            gdp: record.fieldValues.GDP,
            population: record.fieldValues.POPULATION
        };
        geoPolygons.push(country);
    };

    const shapeSeries = this.geoMap.series[0] as IgxGeographicShapeSeries;
    shapeSeries.dataSource = geoPolygons;
}
```

## Processing Polyline

Process shapes data loaded in `ShapeDataSource` with communication routes between major cities and assign it to [`IgxGeographicPolylineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicpolylineseriescomponent.html) object.

```ts
import { IgxGeographicPolylineSeriesComponent } from 'igniteui-angular-maps';
import { IgxShapeDataSource } from 'igniteui-angular-core';
// ...
public onPolylinesLoaded(sds: IgxShapeDataSource, e: any) {
    const geoPolylines: any[] = [];
    // parsing shapefile data and creating geo-polygons
    let pointData = sds.getPointData();
    for ( let i = 0; i < pointData.length; i++ ) {
        let record = pointData[i];
        // using field/column names from .DBF file
        const route = {
            points: record.points,
            name: record.fieldValues.Name,
            capacity: record.fieldValues.CapacityG,
            distance: record.fieldValues.DistanceKM,
            isOverLand: record.fieldValues.OverLand === 0,
            isActive: record.fieldValues.NotLive !== 0,
            service: record.fieldValues.InService
        };
        geoPolylines.push(route);
    }
    const lineSeries = this.geoMap.series[1] as IgxGeographicPolylineSeries;
    lineSeries.dataSource = geoPolylines;
}
```

## Processing Points

Process shapes data loaded in `ShapeDataSource` with locations of major cities and assign it to [`IgxGeographicSymbolSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicsymbolseriescomponent.html) object.

```ts
import { IgxGeographicSymbolSeriesComponent } from 'igniteui-angular-maps';
import { IgxShapeDataSource } from 'igniteui-angular-core';
// ...
public onPointsLoaded(sds: IgxShapeDataSource, e: any) {
    const geoLocations: any[] = [];
    // parsing shapefile data and creating geo-locations
    let pointData = sds.getPointData();
    for ( let i = 0; i < pointData.length; i++ ) {
        let record = pointData[i];
        const pop = record.fieldValues.POPULATION;
        if (pop > 0) {
            // each shapefile record has just one point
            const location = {
                latitude: record.points[0][0].y,
                longitude: record.points[0][0].x,
                city: record.fieldValues.NAME,
                population: pop
            };
            geoLocations.push(location);
        }
    }
    const symbolSeries = this.geoMap.series[2] as IgxGeographicSymbolSeries;
    symbolSeries.dataSource = geoLocations;
}
```

<!-- end: Angular, React, WebComponents -->

## Map Background

Also, you might want to hide geographic imagery from the map background content if your shape files provided sufficient geographic context (e.g. shape of countries) for your application.

```ts
public geoMap: IgxGeographicMapComponent;
// ...

this.geoMap.backgroundContent = {};
```

## Summary

For your convenience, all above code snippets are combined into one code block below that you can easily copy to your project.

```ts
import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { IgxShapeDataSource } from 'igniteui-angular-core';
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxGeographicPolylineSeriesComponent } from "igniteui-angular-maps";
import { IgxGeographicShapeSeriesComponent } from 'igniteui-angular-maps';
import { IgxGeographicSymbolSeriesComponent } from 'igniteui-angular-maps';

@Component({
  selector: "app-map-binding-multiple-shapes-files",
  styleUrls: ["./map-binding-multiple-shapes-files.component.scss"],
  templateUrl: "./map-binding-multiple-shapes-files.component.html"
})

export class MapBindingMultipleShapesComponent implements AfterViewInit {

    @ViewChild ("map")
    public map: IgxGeographicMapComponent;

    @ViewChild ("shapeSeries")
    public shapeSeries: IgxGeographicShapeSeriesComponent;

    @ViewChild ("polylineSeries")
    public polylineSeries: IgxGeographicPolylineSeriesComponent;

    @ViewChild ("symbolSeries")
    public symbolSeries: IgxGeographicSymbolSeriesComponent;

    @ViewChild("polylineTooltipTemplate")
    public polylineTooltipTemplate: TemplateRef<object>;

    @ViewChild("shapeTooltipTemplate")
    public shapeTooltipTemplate: TemplateRef<object>;

    @ViewChild("pointTooltipTemplate")
    public pointTooltipTemplate: TemplateRef<object>;

    constructor() {
    }

    public ngAfterViewInit(): void {

        this.map.windowRect = { left: 0.2, top: 0.1, width: 0.6, height: 0.6 };

        // loading a shapefile with geographic polygons
        const sdsPolygons = new IgxShapeDataSource();
        sdsPolygons.importCompleted.subscribe(() => this.onPolygonsLoaded(sdsPolygons, ""));
        sdsPolygons.shapefileSource = "assets/Shapes/WorldCountries.shp";
        sdsPolygons.databaseSource  = "assets/Shapes/WorldCountries.dbf";
        sdsPolygons.dataBind();
        // loading a shapefile with geographic polylines at runtime.
        const sdsPolylines = new IgxShapeDataSource();
        sdsPolylines.shapefileSource = "assets/Shapes/WorldCableRoutes.shp";
        sdsPolylines.databaseSource  = "assets/Shapes/WorldCableRoutes.dbf";
        sdsPolylines.dataBind();
        sdsPolylines.importCompleted.subscribe(() => this.onPolylinesLoaded(sdsPolylines, ""));

        // loading a shapefile with geographic points
        const sdsPoints = new IgxShapeDataSource();
        sdsPoints.importCompleted.subscribe(() => this.onPointsLoaded(sdsPoints, ""));
        sdsPoints.shapefileSource = "assets/Shapes/WorldCities.shp";
        sdsPoints.databaseSource  = "assets/Shapes/WorldCities.dbf";
        sdsPoints.dataBind();
    }

    public onPointsLoaded(sds: IgxShapeDataSource, e: any) {
        const geoLocations: any[] = [];
        // parsing shapefile data and creating geo-locations
        for (const record of sds.getPointData()) {
            const pop = record.fieldValues["POPULATION"];
            if (pop > 0) {
                // each shapefile record has just one point
                const location = {
                    city: record.fieldValues["NAME"],
                    latitude: record.points[0][0].y,
                    longitude: record.points[0][0].x,
                    population: pop
                };
                geoLocations.push(location);
            }
        }
        this.symbolSeries.dataSource = geoLocations;
        this.symbolSeries.tooltipTemplate = this.pointTooltipTemplate;
    }

    public onPolylinesLoaded(sds: IgxShapeDataSource, e: any) {
        const geoPolylines: any[] = [];
        // parsing shapefile data and creating geo-polygons
        for (const record of sds.getPointData()) {
            // using field/column names from .DBF file
            const route = {
                capacity: record.fieldValues["CapacityG"],
                distance: record.fieldValues["DistanceKM"],
                isActive: record.fieldValues["NotLive"] !== 0,
                isOverLand: record.fieldValues["OverLand"] === 0,
                name: record.fieldValues["Name"],
                points: record.points,
                service: record.fieldValues["InService"]
            };
            geoPolylines.push(route);
        }
        this.polylineSeries.dataSource = geoPolylines;
        this.polylineSeries.shapeMemberPath = "points";
        this.polylineSeries.shapeFilterResolution = 2.0;
        this.polylineSeries.shapeStrokeThickness = 2;
        this.polylineSeries.shapeStroke = "rgba(252, 32, 32, 0.9)";
        this.polylineSeries.tooltipTemplate = this.polylineTooltipTemplate;
    }

    public onPolygonsLoaded(sds: IgxShapeDataSource, e: any) {
        const geoPolygons: any[] = [];
        // parsing shapefile data and creating geo-polygons
        sds.getPointData().forEach((record) => {
            // using field/column names from .DBF file
            const country = {
                gdp: record.fieldValues["GDP"],
                name: record.fieldValues["NAME"],
                points: record.points,
                population: record.fieldValues["POPULATION"]
            };
            geoPolygons.push(country);
        });
        this.shapeSeries.dataSource = geoPolygons;
        this.shapeSeries.tooltipTemplate = this.shapeTooltipTemplate;
    }
}
```
