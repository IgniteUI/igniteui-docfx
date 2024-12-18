---
title: Angular Map | Data Visualization Tools | Scatter Area Series | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.View the demo, dependencies, usage and toolbar for more information.
_keywords: map, Ignite UI for Angular, Infragistics
_language: kr
mentionedTypes: ["XamGeographicMap", "ShapefileConverter"]
---

# Angular Using Scatter Area Series

Use the map component's [`IgxGeographicScatterAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicscatterareaseriescomponent.html) to draw a colored surface, in a geographic context, based on a triangulation of longitude and latitude data with a numeric value assigned to each point. This type of geographic series is useful for rendering scattered data, defined by geographic locations such as weather temperature, precipitation, population distribution, air pollution, etc.

## Demo

<code-view style="height: 400px" alt="Angular geo map type scatter area series"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/maps/geo-map/type-scatter-area-series"
                                                 github-src="maps/geo-map/type-scatter-area-series">
</code-view>


<div class="divider--half"></div>

The [`IgxGeographicScatterAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicscatterareaseriescomponent.html) works a lot like the [`IgxGeographicContourLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographiccontourlineseriescomponent.html) except that it represents data as interpolated and colored surface instead of contour lines connecting data points with the same values.

## Data Requirements

Similar to other types of geographic series in the map component, the [`IgxGeographicScatterAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicscatterareaseriescomponent.html) has the `ItemsSource` property which can be bound to an array of objects. In addition, each item in the items source must have three data columns, two that store a geographic longitude and latitude coordinates and one data column that stores a value associated with the geographic location. The `LongitudeMemberPath`, `LatitudeMemberPath`, and [`colorMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicscatterareaseriescomponent.html#colorMemberPath) properties of the geographic series identify these data column.
The [`IgxGeographicScatterAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicscatterareaseriescomponent.html) automatically performs built-in data triangulation on items in the ItemsSource if no triangulation is set to the `TrianglesSource` property. However, computing triangulation can be a very time-consuming process, so the runtime performance will be better when specifying a TriangulationSource for this property, especially when a large number of data items are present.

## Data Binding

The following table summarizes properties of GeographicScatterAreaSeries used for data binding.

| Property Name  | Property Type   | Description   |
|--------------|---------------| ---------------|
|`ItemsSource`|any|The source of data items to perform triangulation on if the `TrianglesSource` property provides no triangulation data.|
|`LongitudeMemberPath`|string|The name of the property containing the Longitude for all items bound to the `ItemsSource`.|
|`LatitudeMemberPath`|string|The name of the property containing the Latitude for all items bound to the `ItemsSource`.|
|[`colorMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicscatterareaseriescomponent.html#colorMemberPath)|string|The name of the property containing a value at Latitude and Longitude coordinates of each data item. This numeric value will be be converted to a color when the [`colorScale`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicscatterareaseriescomponent.html#colorScale) property is set.|
|`TrianglesSource`|any|The source of triangulation data. Setting Triangles of the `TriangulationSource` object to this property improves both runtime performance and geographic series rendering.|
|`TriangleVertexMemberPath1`|string|The name of the property of the `TrianglesSource` items which, for each triangle, contains the index of the first vertex point in the ItemsSource. It is not mandatory to set this property. It is taken by default unless custom triangulation logic is provided.|
|`TriangleVertexMemberPath2`|string|The name of the property of the `TrianglesSource` items which, for each triangle, contains the index of the first vertex point in the ItemsSource. It is not mandatory to set this property. It is taken by default unless custom triangulation logic is provided.|
|`TriangleVertexMemberPath3`|string|The name of the property of the `TrianglesSource` items which, for each triangle, contains the index of the first vertex point in the ItemsSource. It is not mandatory to set this property. It is taken by default unless custom triangulation logic is provided.|

## Color Scale

Use the ColorScale property of the [`IgxGeographicScatterAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicscatterareaseriescomponent.html) to resolve colors values of points and thus fill surface of the geographic series. The colors are smoothly interpolated around the shape of the surface by applying a pixel-wise triangle rasterizer to a triangulation data. Because rendering of the surface is pixel-wise, the color scale uses colors instead of brushes.
The provided [`IgxCustomPaletteColorScaleComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcustompalettecolorscalecomponent.html) class should satisfy most coloring needs, but the ColorScale base class can be inherited by the application for custom coloring logic.

The following table list properties of the [`IgxCustomPaletteColorScaleComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcustompalettecolorscalecomponent.html) affecting surface coloring of the GeographicScatterAreaSeries.

| Property Name  | Property Type   | Description   |
|--------------|---------------| ---------------|
|[`palette`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcustompalettecolorscalecomponent.html#palette)|ObservableCollection<Color>|Gets or sets the collection of colors to select from or to interpolate between.|
|[`interpolationMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcustompalettecolorscalecomponent.html#interpolationMode)|ColorScaleInterpolationMode|Gets or sets the method getting a color from the Palette.|
|[`maximumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcustompalettecolorscalecomponent.html#maximumValue)|double|The highest value to assign a color. Any given value greater than this value will be Transparent.|
|[`minimumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcustompalettecolorscalecomponent.html#minimumValue)|double|The lowest value to assign a color. Any given value less than this value will be Transparent.|

## Code Snippet

The following code shows how to bind the [`IgxGeographicScatterAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_maps.igxgeographicscatterareaseriescomponent.html) to triangulation data representing surface temperatures in the world.

<!-- Angular -->

```html
TODO - ADD CODE SNIPPET
```
