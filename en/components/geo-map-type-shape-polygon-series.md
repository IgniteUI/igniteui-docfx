---
title: Angular Map | Data Visualization Tools | Shape Polygon Series | Infragistics
_description: Use Infragistics Angular map's shape polygon series to render shapes of countries or regions defined by geographic locations. Learn more about Ignite UI for Angular map's series!
_keywords: Angular map, shape polygon series, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamGeographicMap']
---

# Angular Using Shape Polygon Series

Use the Angular map component's [`IgxGeographicShapeSeriesComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicshapeseriescomponent.html) to display geo-spatial data using shape polygons in a geographic context. This type of geographic series is often used to render shapes of countries or regions defined by geographic locations.

## Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="geo-map-type-shape-polygon-series-iframe" src='{environment:dvDemosBaseUrl}/maps/geo-map-type-shape-polygon-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-type-shape-polygon-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>


<div class="divider--half"></div>

The [`IgxGeographicShapeSeriesComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicshapeseriescomponent.html) works a lot like the [`IgxGeographicPolylineSeriesComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicpolylineseriescomponent.html) except that geo-spatial data is rendered with polygons instead of polylines.

## Data Requirements

Similar to other types of geographic series in the map control, the [`IgxGeographicShapeSeriesComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicshapeseriescomponent.html) has the `DataSource` property which can be bound to an array of objects. In addition, each data item in this object must have one data column that stores single/multiple shapes using an array of arrays of objects with x and y values representing geographic locations. This data column is then mapped to the `ShapeMemberPath` property. The [`IgxGeographicShapeSeriesComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicshapeseriescomponent.html) uses points of this mapped data column to plot polygons in the map control.

## Code Snippet

The following code demonstrates how to bind the [`IgxGeographicShapeSeriesComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicshapeseriescomponent.html) to shapes of countries in the world loaded from a shape file using the `ShapeDataSource`.

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
import { IgxShapeDataSource } from 'igniteui-angular-core';
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxGeographicShapeSeriesComponent } from 'igniteui-angular-maps';

@Component({
  selector: "app-map-geographic-shape-polygon-series",
  styleUrls: ["./map-geographic-shape-polygon-series.component.scss"],
  templateUrl: "./map-geographic-shape-polygon-series.component.html"
})
export class MapTypeShapePolygonSeriesComponent implements AfterViewInit {

    @ViewChild ("map")
    public map: IgxGeographicMapComponent;

    @ViewChild("template")
    public tooltip: TemplateRef<object>;

    public data: any;
    constructor() {
    }

    public ngAfterViewInit(): void {
      const sds = new IgxShapeDataSource();
      sds.shapefileSource = "assets/Shapes/WorldCountries.shp";
      sds.databaseSource  = "assets/Shapes/WorldCountries.dbf";
      sds.dataBind();
      sds.importCompleted.subscribe(() => this.onDataLoaded(sds, ""));
    }

    public onDataLoaded(sds: IgxShapeDataSource, e: any) {
        const shapeRecords = sds.getPointData();
        console.log("loaded /Shapes/WorldCountries.shp " + shapeRecords.length);

        const countriesNATO: any[] = [];
        const countriesSCO: any[] = [];
        const countriesARAB: any[] = [];
        const countriesOther: any[] = [];

        for (const record of shapeRecords) {
            // using field/column names from .DBF file
            const country = {
                name: record.fieldValues.NAME,
                org: record.fieldValues.ALLIANCE,
                points: record.points,
                pop: record.fieldValues.POPULATION
            };

            const group = record.fieldValues.ALLIANCE;
            if (group === "NATO") {
                countriesNATO.push(country);
            } else if (group === "SCO") {
                countriesSCO.push(country);
            } else if (group === "ARAB LEAGUE") {
                countriesARAB.push(country);
            } else {
                countriesOther.push(country);
            }
        }

        this.addSeriesWith(countriesNATO, "rgb(32, 146, 252)", "NATO");
        this.addSeriesWith(countriesSCO, "rgb(252, 32, 32)", "SCO");
        this.addSeriesWith(countriesARAB, "rgb(14, 194, 14)", "AL");
        this.addSeriesWith(countriesOther, "rgb(146, 146, 146)", "Other");
  }

    public addSeriesWith(shapeData: any[], shapeBrush: string, shapeTitle: string) {
        const seriesName = shapeTitle + "series";
        const geoSeries = new IgxGeographicShapeSeriesComponent();
        geoSeries.dataSource = shapeData;
        geoSeries.shapeMemberPath = "points";
        geoSeries.brush = shapeBrush;
        geoSeries.outline = "Black";
        geoSeries.tooltipTemplate = this.tooltip;
        geoSeries.thickness = 1;
        geoSeries.title = shapeTitle;

        this.map.series.add(geoSeries);
  }
}
```
