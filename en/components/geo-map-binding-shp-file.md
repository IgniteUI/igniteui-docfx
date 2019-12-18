---
title: Map | Data Visualization Tools | Ignite UI for Angular | Geographic Shape Files | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files. View the demo, dependencies, usage and toolbar for more information.
_keywords: map, Ignite UI for Angular, infragistics
mentionedTypes: ['XamGeographicMap', 'ShapefileConverter']
---

## Binding Shape Files with Geo-spatial Data

The Ignite UI for Angular map component, the `ShapeDataSource` class loads geo-spatial data (points/locations, polylines, polygons) from shape files and converts it to a collection of [`ShapefileRecord`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/shapefilerecord.html) objects.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="geo-map-binding-shp-polylines-iframe" src='{environment:dvDemosBaseUrl}/maps/geo-map-binding-shp-polylines' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-binding-shp-polylines-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

The following table explains properties of the `ShapeDataSource` class for loading shape files.

| Property          | Type   | Description                                                                                              |
| ----------------- | ------ | -------------------------------------------------------------------------------------------------------- |
| `ShapefileSource` | string | Specifies the Uri to a shape file (.shp) that contains geo-spatial data items.                           |
| `DatabaseSource`  | string | Specifies the Uri to a shape database file (.dbf) that contains a data table for geo-spatial data items. |

<!-- TODO add for WPF only: -->

<!-- Both of the source properties for shape files are of Uri type. This means that shape files can be embedded resources in the application assembly and on the internet (via http). Refer to the previous section for more information on this process. The rules for resolving Uri objects are equivalent to any standard Uri property, for example the BitmapImage.UriSource property. -->

When both source properties are set to non-null values, then the `ShapeDataSource` object’s ImportAsync method is invoked which in return performs fetching and reading the shape files and finally doing the conversion. After this operation is complete, the `ShapeDataSource` is populated with [`ShapefileRecord`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/shapefilerecord.html) objects and the `ImportCompleted` event is raised in order to notify about completed process of loading and converting geo-spatial data from shape files.

### Loading Shapefiles

The following code creates an instance of the `ShapeDataSource` object for loading a shape file that contains locations of major cities in the world. It also demonstrates how to handle the `ImportCompleted` event as a prerequisite for binding data to the map component.

### Binding Shapefiles

In the map component, Geographic Series are used for displaying geo-spatial data that is loaded from shape files. All types of Geographic Series have an `ItemsSource` property which can be bound to an array of objects. The `ShapeDataSource` is an example such array because it contains a list of [`ShapefileRecord`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/shapefilerecord.html) objects.

The [`ShapefileRecord`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/shapefilerecord.html) class provides properties for storing geo-spatial data, listed in the following table.

| Property   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Points`   | Contains all the points in one geo-spatial shape loaded from a shape file (.shp). For example, the country of Japan in shape file would be represented as a list of a list of points object, where:<ul><li>The first list of points describes shape of Hokkaido island</li><li>The second list of points describes shape of Honshu island</li><li>The third list of points describes shape of Kyushu island</li><li>The fourth list of points describes shape of Shikoku island |
| </li></ul> |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `Fields`   | Contains a row of data from the shape database file (.dbf) keyed by a column name. For example, a data about county of Japan which includes population, area, name of a capital, etc.                                                                                                                                                                                                                                                                                           |

This data structure is suitable for use in most Geographic Series as long as appropriate data columns are mapped to them.

### Code Snippet

This code example assumes that shape files were loaded using the `ShapeDataSource`.
The following code binds [`IgxGeographicPolylineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicpolylineseriescomponent.html) in the map component to the `ShapeDataSource` and maps the `Points` property of all [`ShapefileRecord`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/shapefilerecord.html) objects.

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
                Airline: {{item.name}}
                </span>
                <br />
                <span>
                Length: {{item.distance}} miles
                </span>
            </div>
</ng-template>
```

```ts
import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { IgxShapeDataSource } from 'igniteui-angular-core';
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxGeographicPolylineSeriesComponent } from 'igniteui-angular-maps';

@Component({
  selector: "app-map-binding-shape-files",
  styleUrls: ["./map-binding-shape-files.component.scss"],
  templateUrl: "./map-binding-shape-files.component.html"
})
export class MapBindingShapefilePolylinesComponent implements AfterViewInit {

    @ViewChild ("map")
    public map: IgxGeographicMapComponent;

    @ViewChild("template")
    public tooltipTemplate: TemplateRef<object>;
    constructor() { }

    public ngAfterViewInit() {
    // loading a shapefile with geographic polygons
    const sds = new IgxShapeDataSource();
    sds.importCompleted.subscribe(() => this.onDataLoaded(sds, ""));
    sds.shapefileSource = "assets/Shapes/WorldCableRoutes.shp";
    sds.databaseSource  = "assets/Shapes/WorldCableRoutes.dbf";
    sds.dataBind();
    }
    public onDataLoaded(sds: IgxShapeDataSource, e: any) {
        const shapeRecords = sds.getPointData();
        const geoPolylines: any[] = [];
        // parsing shapefile data and creating geo-polygons
        for (const record of shapeRecords) {
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

        const geoSeries = new IgxGeographicPolylineSeriesComponent();
        geoSeries.dataSource = geoPolylines;
        geoSeries.shapeMemberPath = "points";
        geoSeries.shapeFilterResolution = 0.0;
        geoSeries.shapeStrokeThickness = 3;
        geoSeries.shapeStroke = "rgb(82, 82, 82, 0.4)";
        geoSeries.tooltipTemplate = this.tooltipTemplate;

        this.map.series.add(geoSeries);
        }
}
```
