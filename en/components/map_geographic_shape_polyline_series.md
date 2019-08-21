---
title: Map | Data Visualization Tools | Ignite UI for Angular | Polyline Series | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.View the demo, dependencies, usage and toolbar for more information.
_keywords: map, Ignite UI for Angular, infragistics
mentionedTypes: ['XamGeographicMap']
---

## Using Shape Polyline Series

Use the map component's [`IgxGeographicPolylineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicpolylineseriescomponent.html) to display geo-spatial data using polylines in a geographic context. This type of geographic series is often used to render roads or connections between geographic locations such as cities or airports.

### Demo

<div class="sample-container loading" style="height: 400px">
    <iframe id="geo-map-type-shape-polyline-series-iframe" src='{environment:demosBaseUrl}/maps/geo-map-type-shape-polyline-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-type-shape-polyline-series-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

The [`IgxGeographicPolylineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicpolylineseriescomponent.html) works a lot like the [`IgxGeographicShapeSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicshapeseriescomponent.html) except that geo-spatial data is rendered with polylines instead of polygons.

### Data Requirements

Similarly to other types of geographic series in the control, the [`IgxGeographicPolylineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicpolylineseriescomponent.html) has the `ItemsSource` property which can be bound to an array of objects. In addition, each data item in this object must have one data column that stores single/multiple shapes using an array of arrays of objects with x and y values representing geographic locations. This data column is then mapped to the ShapeMemberPath property. The [`IgxGeographicPolylineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicpolylineseriescomponent.html) uses points of this mapped data column to plot polygons in the control.

### Code Snippet

The following code shows how to bind the [`IgxGeographicPolylineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicpolylineseriescomponent.html) to locations of cities loaded from a shape file using the `ShapeDataSource`.

<!-- Angular -->

```html
<div className="sampleRoot" >

        <igx-geographic-map #map
            width="700px"
            height="500px"
            zoomable="true"
            >
        </igx-geographic-map>
</div>
<ng-template let-series="series" let-item="item" #template>
<div>
    <span>
    {{item.country}} {{item.type}}
    </span>
    <br />
    <span>
    Length: {{item.length}} miles
    </span>
</div>
</ng-template>
```

```ts
import { AfterViewInit, Component, EmbeddedViewRef, TemplateRef, ViewChild} from "@angular/core";
import { ShapeDataSource } from "igniteui-angular-core/ES5/igx-shape-data-source";
import { IgxGeographicMapComponent } from "igniteui-angular-maps/ES5/igx-geographic-map-component";
import { IgxGeographicPolylineSeriesComponent
} from "igniteui-angular-maps/ES5/igx-geographic-polyline-series-component";

@Component({
  selector: "app-map-geographic-shape-polyline-series",
  styleUrls: ["./map-geographic-shape-polyline-series.component.scss"],
  templateUrl: "./map-geographic-shape-polyline-series.component.html"
})

export class MapTypeShapePolylineSeriesComponent implements AfterViewInit {

  @ViewChild ("map")
  public map: IgxGeographicMapComponent;

  @ViewChild("template")
  public tooltip: TemplateRef<object>;

  constructor() {
  }

  public ngAfterViewInit(): void {
    this.map.windowRect = { left: 0.195, top: 0.325, width: 0.2, height: 0.1 };

    const sds = new ShapeDataSource();
    sds.shapefileSource = "/assets/Shapes/AmericanRoads.shp";
    sds.databaseSource  = "/assets/Shapes/AmericanRoads.dbf";
    sds.dataBind();
    sds.importCompleted.subscribe(() => this.onDataLoaded(sds, ""));
  }

  public onDataLoaded(sds: ShapeDataSource, e: any) {
    const shapeRecords = sds.getPointData();
    console.log("loaded /Shapes/AmericanRoads.shp " + shapeRecords.length);

    const roadsUSA: any[] = [];
    const roadsMEX: any[] = [];
    const roadsCAN: any[] = [];

    // filtering records of loaded shapefile
    for (const record of shapeRecords) {
        // reading field values loaded from DBF file
        const type = record.fieldValues.RoadType;
        const road = {
            country: record.fieldValues.Country,
            length: record.fieldValues.RoadLength / 10,
            points: record.points,
            type: type === 1 ? "Highway" : "Road"
        };
        // grouping road items by country names
        if (type === 1 || type === 2) {
            if (road.country === "USA") {
                roadsUSA.push(road);
            } else if (road.country === "MEX") {
                roadsMEX.push(road);
            } else if (road.country === "CAN") {
                roadsCAN.push(road);
            }
        }
    }

    // creating polyline series for roads of each country
    this.addSeriesWith(roadsCAN, "rgba(252, 32, 32, 0.9)");
    this.addSeriesWith(roadsUSA, "rgba(3, 121, 231, 0.9)");
    this.addSeriesWith(roadsMEX, "rgba(14, 194, 14, 0.9)");
}

  public addSeriesWith(shapeData: any[], shapeBrush: string) {
        const lineSeries = new IgxGeographicPolylineSeriesComponent ();
        lineSeries.dataSource = shapeData;
        lineSeries.shapeMemberPath = "points";
        lineSeries.shapeFilterResolution = 2.0;
        lineSeries.shapeStrokeThickness = 2;
        lineSeries.shapeStroke = shapeBrush;
        lineSeries.tooltipTemplate = this.tooltip;
        this.map.series.add(lineSeries);
    }
}
```
