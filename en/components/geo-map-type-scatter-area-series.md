---
title: Map | Data Visualization Tools | Ignite UI for Angular | Scatter Area Series | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.View the demo, dependencies, usage and toolbar for more information.
_keywords: map, Ignite UI for Angular, infragistics
mentionedTypes: ['XamGeographicMap']
---

## Using Scatter Area Series

Use the map component's [`IgxGeographicScatterAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicscatterareaseriescomponent.html) to draw a colored surface, in a geographic context, based on a triangulation of longitude and latitude data with a numeric value assigned to each point. This type of geographic series is useful for rendering scattered data, defined by geographic locations such as weather temperature, precipitation, population distribution, air pollution, etc.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="geo-map-type-scatter-area-series-iframe" src='{environment:dvDemosBaseUrl}/maps/geo-map-type-scatter-area-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-type-scatter-area-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

The [`IgxGeographicScatterAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicscatterareaseriescomponent.html) works a lot like the [`IgxGeographicContourLineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographiccontourlineseriescomponent.html) except that it represents data as interpolated and colored surface instead of contour lines connecting data points with the same values.

### Data Requirements

Similar to other types of geographic series in the map component, the [`IgxGeographicScatterAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicscatterareaseriescomponent.html) has the `ItemsSource` property which can be bound to an array of objects. In addition, each item in the items source must have three data columns, two that store a geographic longitude and latitude coordinates and one data column that stores a value associated with the geographic location. The `LongitudeMemberPath`, `LatitudeMemberPath`, and [`colorMemberPath`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicscatterareaseriescomponent.html#colormemberpath) properties of the geographic series identify these data column.
The [`IgxGeographicScatterAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicscatterareaseriescomponent.html) automatically performs built-in data triangulation on items in the ItemsSource if no triangulation is set to the `TrianglesSource` property. However, computing triangulation can be a very time-consuming process, so the runtime performance will be better when specifying a TriangulationSource for this property, especially when a large number of data items are present.

### Data Binding

The following table summarizes properties of GeographicScatterAreaSeries used for data binding.

| Property Name                                                                                                                                    | Property Type | Description                                                                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ItemsSource`                                                                                                                                    | any           | The source of data items to perform triangulation on if the `TrianglesSource` property provides no triangulation data.                                                                                                                                                                                                   |
| `LongitudeMemberPath`                                                                                                                            | string        | The name of the property containing the Longitude for all items bound to the `ItemsSource`.                                                                                                                                                                                                                              |
| `LatitudeMemberPath`                                                                                                                             | string        | The name of the property containing the Latitude for all items bound to the `ItemsSource`.                                                                                                                                                                                                                               |
| [`colorMemberPath`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicscatterareaseriescomponent.html#colormemberpath) | string        | The name of the property containing a value at Latitude and Longitude coordinates of each data item. This numeric value will be be converted to a color when the [`colorScale`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicscatterareaseriescomponent.html#colorscale) property is set. |
| `TrianglesSource`                                                                                                                                | any           | The source of triangulation data. Setting Triangles of the `TriangulationSource` object to this property improves both runtime performance and geographic series rendering.                                                                                                                                              |
| `TriangleVertexMemberPath1`                                                                                                                      | string        | The name of the property of the `TrianglesSource` items which, for each triangle, contains the index of the first vertex point in the ItemsSource. It is not mandatory to set this property. It is taken by default unless custom triangulation logic is provided.                                                       |
| `TriangleVertexMemberPath2`                                                                                                                      | string        | The name of the property of the `TrianglesSource` items which, for each triangle, contains the index of the first vertex point in the ItemsSource. It is not mandatory to set this property. It is taken by default unless custom triangulation logic is provided.                                                       |
| `TriangleVertexMemberPath3`                                                                                                                      | string        | The name of the property of the `TrianglesSource` items which, for each triangle, contains the index of the first vertex point in the ItemsSource. It is not mandatory to set this property. It is taken by default unless custom triangulation logic is provided.                                                       |

### Color Scale

Use the ColorScale property of the [`IgxGeographicScatterAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicscatterareaseriescomponent.html) to resolve colors values of points and thus fill surface of the geographic series. The colors are smoothly interpolated around the shape of the surface by applying a pixel-wise triangle rasterizer to a triangulation data. Because rendering of the surface is pixel-wise, the color scale uses colors instead of brushes.
The provided [`IgxCustomPaletteColorScaleComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcustompalettecolorscalecomponent.html) class should satisfy most coloring needs, but the ColorScale base class can be inherited by the application for custom coloring logic.

The following table list properties of the [`IgxCustomPaletteColorScaleComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcustompalettecolorscalecomponent.html) affecting surface coloring of the GeographicScatterAreaSeries.

| Property Name                                                                                                                                    | Property Type                                                                                                                  | Description                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| [`palette`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcustompalettecolorscalecomponent.html#palette)                     | ObservableCollection<Color>                                                                                                    | Gets or sets the collection of colors to select from or to interpolate between.                   |
| [`interpolationMode`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcustompalettecolorscalecomponent.html#interpolationmode) | [`ColorScaleInterpolationMode`](/products/ignite-ui-angular/api/docs/typescript/latest/enums/colorscaleinterpolationmode.html) | Gets or sets the method getting a color from the Palette.                                         |
| `MaximumValue`                                                                                                                                   | double                                                                                                                         | The highest value to assign a color. Any given value greater than this value will be Transparent. |
| `MinimumValue`                                                                                                                                   | double                                                                                                                         | The lowest value to assign a color. Any given value less than this value will be Transparent.     |

### Code Snippet

The following code shows how to bind the [`IgxGeographicScatterAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicscatterareaseriescomponent.html) to triangulation data representing surface temperatures in the world.

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
            Degrees: {{item.value}} "°F"
        </span>
        <br/>
        <span>
                Longitutde: {{item.lon}}
        </span>
        <br/>
        <span>
                Latitude: {{item.lat}}
        </span>
    </div>
</ng-template>
```

```ts
import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { IgxCustomPaletteColorScaleComponent
} from "igniteui-angular-charts/ES5/igx-custom-palette-color-scale-component";
import { ShapeDataSource } from "igniteui-angular-core/ES5/igx-shape-data-source";
import { IgxGeographicMapComponent } from "igniteui-angular-maps/ES5/igx-geographic-map-component";
import { IgxGeographicScatterAreaSeriesComponent
} from "igniteui-angular-maps/ES5/igx-geographic-scatter-area-series-component";

@Component({
  selector: "app-map-geographic-scatter-area-series",
  styleUrls: ["./map-geographic-scatter-area-series.component.scss"],
  templateUrl: "./map-geographic-scatter-area-series.component.html"
})
export class MapTypeScatterAreaSeriesComponent implements AfterViewInit {

    @ViewChild ("map")
    public map: IgxGeographicMapComponent;
    @ViewChild ("template")
    public tooltipTemplate: TemplateRef<object>;
    constructor() {
    }

    public ngAfterViewInit(): void {
    const sds = new ShapeDataSource();
    sds.shapefileSource = "assets/Shapes/WorldTemperatures.shp";
    sds.databaseSource  = "assets/Shapes/WorldTemperatures.dbf";
    sds.dataBind();
    sds.importCompleted.subscribe(() => this.onDataLoaded(sds, ""));
}

    public onDataLoaded(sds: ShapeDataSource, e: any) {
    const shapeRecords = sds.getPointData();
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
    this.createContourSeries(contourPoints);
}

    public createContourSeries(data: any[]) {
    const brushes = [
        "rgba(32, 146, 252, 0.5)", // semi-transparent blue
        "rgba(14, 194, 14, 0.5)",  // semi-transparent green
        "rgba(252, 120, 32, 0.5)", // semi-transparent orange
        "rgba(252, 32, 32, 0.5)"  // semi-transparent red
    ];

    const colorScale = new IgxCustomPaletteColorScaleComponent();
    colorScale.palette = brushes;
    colorScale.minimumValue = 0;
    colorScale.maximumValue = 30;

    const areaSeries = new IgxGeographicScatterAreaSeriesComponent();
    areaSeries.dataSource = data;
    areaSeries.longitudeMemberPath = "lon";
    areaSeries.latitudeMemberPath = "lat";
    areaSeries.colorMemberPath = "value";
    areaSeries.colorScale = colorScale;
    areaSeries.tooltipTemplate = this.tooltipTemplate;
    areaSeries.thickness = 4;

    this.map.series.add(areaSeries);
}
}
```
