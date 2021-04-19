---
title: Angular Map | Data Visualization Tools | Contour Line Series | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.View the demo, dependencies, usage and toolbar for more information.
_keywords: map, Ignite UI for Angular, Infragistics
---

# Angular Using Scatter Contour Series

Use the map component's [`IgxGeographicContourLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographiccontourlineseriescomponent.html) to draw colored contour lines, in a geographic context, based on a triangulation of longitude and latitude data with a numeric value assigned to each point. This type of geographic series is useful for rendering scattered data defined by geographic locations such as weather temperature, atmospheric pressure, precipitation, population distribution, topographic data, etc.

## Demo

<code-view style="height: 400px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/maps/geo-map-type-scatter-contour-series"  >
</code-view>

<div class="divider--half"></div>

The [`IgxGeographicContourLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographiccontourlineseriescomponent.html) works a lot like the [`IgxGeographicScatterAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicscatterareaseriescomponent.html) except that it represents data as contour lines, colored using a fill scale and the geographic scatter area series, represents data as a surface interpolated using a color scale.

## Data Requirements

Similar to other types of geographic series in the map component, the [`IgxGeographicContourLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographiccontourlineseriescomponent.html) has the `ItemsSource` property which can be bound to an array of objects. In addition, each item in the items source must have three data columns, two that store geographic location (longitude and latitude coordinates) and one data column that stores a value associated with the geographic location. These data column, are identified by `LongitudeMemberPath`, `LatitudeMemberPath`, and [`valueMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographiccontourlineseriescomponent.html#valuememberpath) properties of the geographic series.
The [`IgxGeographicContourLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographiccontourlineseriescomponent.html) automatically performs built-in data triangulation on items in the ItemsSource if no triangulation is set to the `TrianglesSource` property. However, computing triangulation can be a very time-consuming process, so the runtime performance will be better when specifying a `TriangulationSource` for this property, especially when a large number of data items are present.

## Data Binding

The following table summarizes properties of [`IgxGeographicContourLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographiccontourlineseriescomponent.html) used for data binding.

| Property Name                                                                                                                                                              | Property Type | Description                                                                                                                                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ItemsSource`                                                                                                                                                              | any           | The source of data items to perform triangulation on if the `TrianglesSource` property provides no triangulation data.                                                                                                                                                                                                                           |
| `LongitudeMemberPath`                                                                                                                                                      | string        | The name of the property containing the Longitude for all items bound to the `ItemsSource`.                                                                                                                                                                                                                                                      |
| `LatitudeMemberPath`                                                                                                                                                       | string        | The name of the property containing the Latitude for all items bound to to the `ItemsSource`.                                                                                                                                                                                                                                                    |
| [`valueMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographiccontourlineseriescomponent.html#valuememberpath) | string        | The name of the property containing a value at Latitude and Longitude coordinates of each data item. This numeric value will be be converted to a color when the [`fillScale`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographiccontourlineseriescomponent.html#fillscale) property is set. |
| `TrianglesSource`                                                                                                                                                          | any           | Gets or sets the source of triangulation data. Setting Triangles of the TriangulationSource object to this property improves both runtime performance and geographic series rendering.                                                                                                                                                           |
| `TriangleVertexMemberPath1`                                                                                                                                                | string        | The name of the property of the TrianglesSource items which, for each triangle, contains the index of the first vertex point in the ItemsSource. It is not mandatory to set this property. It is taken by default unless custom triangulation logic is provided.                                                                                 |
| `TriangleVertexMemberPath2`                                                                                                                                                | string        | The name of the property of the TrianglesSource items which, for each triangle, contains the index of the first vertex point in the ItemsSource. It is not mandatory to set this property. It is taken by default unless custom triangulation logic is provided.                                                                                 |
| `TriangleVertexMemberPath3`                                                                                                                                                | string        | The name of the property of the TrianglesSource items which, for each triangle, contains the index of the first vertex point in the ItemsSource. It is not mandatory to set this property. It is taken by default unless custom triangulation logic is provided.                                                                                 |

## Contour Fill Scale

Use the [`fillScale`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographiccontourlineseriescomponent.html#fillscale) property of the [`IgxGeographicContourLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographiccontourlineseriescomponent.html) to resolve fill brushes of the contour lines of the geographic series.
The provided \`ValueBrushScale class should satisfy most of your coloring needs, but the application for custom coloring logic can inherit the ValueBrushScale class.
The following table list properties of the CustomPaletteColorScale affecting the surface coloring of the GeographicContourLineSeries.

| Property Name  | Property Type   | Description                                                                                                                                                                                                                                           |
| -------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Brushes`      | BrushCollection | Gets or sets the collection of brushes for filling contours of the [`IgxGeographicContourLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographiccontourlineseriescomponent.html) |
| `MaximumValue` | double          | The highest value to assign a brush in a fill scale.                                                                                                                                                                                                  |
| `MinimumValue` | double          | The lowest value to assign a brush in a fill scale.                                                                                                                                                                                                   |

## Code Snippet

The following code shows how to bind the [`IgxGeographicContourLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographiccontourlineseriescomponent.html) to triangulation data representing surface temperatures in the world.

<!-- Angular -->

```html
TODO - ADD CODE SNIPPET
```
