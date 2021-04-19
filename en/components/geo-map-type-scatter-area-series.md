---
title: Angular Map | Data Visualization Tools | Scatter Area Series | Data Binding | Infragistics
_description: Use Infragistics Angular map's scatter area series to draw a colored area surface based on a triangulation of longitude and latitude data with a numeric value assigned to each point. Learn more about Ignite UI for Angular map's series!
_keywords: Angular map, scatter area series, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamGeographicMap','GeographicScatterAreaSeries','CustomPaletteColorScale']
---

# Angular Using Scatter Area Series

Use the Angular map component's [`IgxGeographicScatterAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicscatterareaseriescomponent.html) to draw a colored surface, in a geographic context, based on a triangulation of longitude and latitude data with a numeric value assigned to each point. This type of geographic series is useful for rendering scattered data, defined by geographic locations such as weather temperature, precipitation, population distribution, air pollution, etc.

## Angular Using Scatter Area Series Example

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/maps/geo-map-type-scatter-area-series"
           alt="Angular Using Scatter Area Series Example"
           github-src="maps/geo-map/type-scatter-area-series">
</code-view>

<div class="divider--half"></div>

The [`IgxGeographicScatterAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicscatterareaseriescomponent.html) works a lot like the [`IgxGeographicContourLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographiccontourlineseriescomponent.html) except that it represents data as interpolated and colored surface instead of contour lines connecting data points with the same values.

## Data Requirements

Similar to other types of geographic series in the map component, the [`IgxGeographicScatterAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicscatterareaseriescomponent.html) has the `ItemsSource` property which can be bound to an array of objects. In addition, each item in the items source must have three data columns, two that store a geographic longitude and latitude coordinates and one data column that stores a value associated with the geographic location. The [`longitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicxytriangulatingseriescomponent.html#longitudememberpath), [`latitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicxytriangulatingseriescomponent.html#latitudememberpath), and [`colorMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicscatterareaseriescomponent.html#colormemberpath) properties of the geographic series identify these data column.
The [`IgxGeographicScatterAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicscatterareaseriescomponent.html) automatically performs built-in data triangulation on items in the ItemsSource if no triangulation is set to the [`trianglesSource`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicxytriangulatingseriescomponent.html#trianglessource) property. However, computing triangulation can be a very time-consuming process, so the runtime performance will be better when specifying a TriangulationSource for this property, especially when a large number of data items are present.

## Data Binding

The following table summarizes properties of GeographicScatterAreaSeries used for data binding.

| Property Name                                                                                                                                                                                      | Property Type | Description                                                                                                                                                                                                                                                                                                                                                                                                                     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ItemsSource`                                                                                                                                                                                      | any           | The source of data items to perform triangulation on if the [`trianglesSource`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicxytriangulatingseriescomponent.html#trianglessource) property provides no triangulation data.                                                                                                                                             |
| [`longitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicxytriangulatingseriescomponent.html#longitudememberpath)             | string        | The name of the property containing the Longitude for all items bound to the `ItemsSource`.                                                                                                                                                                                                                                                                                                                                     |
| [`latitudeMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicxytriangulatingseriescomponent.html#latitudememberpath)               | string        | The name of the property containing the Latitude for all items bound to the `ItemsSource`.                                                                                                                                                                                                                                                                                                                                      |
| [`colorMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicscatterareaseriescomponent.html#colormemberpath)                         | string        | The name of the property containing a value at Latitude and Longitude coordinates of each data item. This numeric value will be be converted to a color when the [`colorScale`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicscatterareaseriescomponent.html#colorscale) property is set.                                                                              |
| [`trianglesSource`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicxytriangulatingseriescomponent.html#trianglessource)                     | any           | The source of triangulation data. Setting Triangles of the `TriangulationSource` object to this property improves both runtime performance and geographic series rendering.                                                                                                                                                                                                                                                     |
| [`triangleVertexMemberPath1`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicxytriangulatingseriescomponent.html#trianglevertexmemberpath1) | string        | The name of the property of the [`trianglesSource`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicxytriangulatingseriescomponent.html#trianglessource) items which, for each triangle, contains the index of the first vertex point in the ItemsSource. It is not mandatory to set this property. It is taken by default unless custom triangulation logic is provided. |
| [`triangleVertexMemberPath2`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicxytriangulatingseriescomponent.html#trianglevertexmemberpath2) | string        | The name of the property of the [`trianglesSource`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicxytriangulatingseriescomponent.html#trianglessource) items which, for each triangle, contains the index of the first vertex point in the ItemsSource. It is not mandatory to set this property. It is taken by default unless custom triangulation logic is provided. |
| [`triangleVertexMemberPath3`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicxytriangulatingseriescomponent.html#trianglevertexmemberpath3) | string        | The name of the property of the [`trianglesSource`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicxytriangulatingseriescomponent.html#trianglessource) items which, for each triangle, contains the index of the first vertex point in the ItemsSource. It is not mandatory to set this property. It is taken by default unless custom triangulation logic is provided. |

## Color Scale

Use the ColorScale property of the [`IgxGeographicScatterAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicscatterareaseriescomponent.html) to resolve colors values of points and thus fill surface of the geographic series. The colors are smoothly interpolated around the shape of the surface by applying a pixel-wise triangle rasterizer to a triangulation data. Because rendering of the surface is pixel-wise, the color scale uses colors instead of brushes.
The provided [`IgxCustomPaletteColorScaleComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcustompalettecolorscalecomponent.html) class should satisfy most coloring needs, but the ColorScale base class can be inherited by the application for custom coloring logic.

The following table list properties of the [`IgxCustomPaletteColorScaleComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcustompalettecolorscalecomponent.html) affecting surface coloring of the GeographicScatterAreaSeries.

| Property Name                                                                                                                                                              | Property Type                                                                                                                                            | Description                                                                                       |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| [`palette`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcustompalettecolorscalecomponent.html#palette)                     | ObservableCollection<Color>                                                                                                                              | Gets or sets the collection of colors to select from or to interpolate between.                   |
| [`interpolationMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcustompalettecolorscalecomponent.html#interpolationmode) | [`ColorScaleInterpolationMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/colorscaleinterpolationmode.html) | Gets or sets the method getting a color from the Palette.                                         |
| [`maximumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcustompalettecolorscalecomponent.html#maximumvalue)           | double                                                                                                                                                   | The highest value to assign a color. Any given value greater than this value will be Transparent. |
| [`minimumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcustompalettecolorscalecomponent.html#minimumvalue)           | double                                                                                                                                                   | The lowest value to assign a color. Any given value less than this value will be Transparent.     |

## Code Snippet

The following code shows how to bind the [`IgxGeographicScatterAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicscatterareaseriescomponent.html) to triangulation data representing surface temperatures in the world.

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
                Longitude: {{item.lon}}
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
import { IgxCustomPaletteColorScaleComponent } from 'igniteui-angular-charts';
import { IgxShapeDataSource } from 'igniteui-angular-core';
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxGeographicScatterAreaSeriesComponent } from 'igniteui-angular-maps';

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
    const sds = new IgxShapeDataSource();
    sds.shapefileSource = "assets/Shapes/WorldTemperatures.shp";
    sds.databaseSource  = "assets/Shapes/WorldTemperatures.dbf";
    sds.dataBind();
    sds.importCompleted.subscribe(() => this.onDataLoaded(sds, ""));
}

    public onDataLoaded(sds: IgxShapeDataSource, e: any) {
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
