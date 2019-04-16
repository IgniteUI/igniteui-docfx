---
title: Map | Data Visualization Tools | Ignite UI for Angular | Geographic Series | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.View the demo, dependencies, usage and toolbar for more information. 
_keywords: map, Ignite UI for Angular, infragistics
---

## Geographic Series

In the Ignite UI for Angular map component, geographic series are visual elements of the map that display geo-spatial data as points (e.g. locations of cities), polylines (e.g. road connections), or polygons (shape of countries) in a geographic context.
The map component's `IgxSeriesComponent` property is a collection of geographic series objects. This property is used to support rendering an unlimited number of geographic series in the same plot area. When multiple geographic series objects are added to the `IgxSeriesComponent` property, each successive series will be layered on top of the previous series starting from the first to the last series. Therefore, geographic series can be better understood as map layers that can be stacked on top of each other and/or on top of geographic imagery.

All types of geographic series are always rendered on top of the geographic imagery tiles. However, sometimes geographic series (e.g. with detailed shape files of the world) might provide enough geographic contexts for an application and geographic imagery is not desired in the map control. 

### Code Snippet

The code shows how to add the `GeographicShapeSeries` with the `ShapefileConverter` binding to the map component.

<!-- Angular -->

```html
 TODO - ADD CODE SNIPPET
```

```typescript

```

### Additional Resources

-   [Using Geographic Contour Line Series](map_geographic_contour_line_series.md)
-   [Using Geographic High Density Scatter Series](map_geographic_high_density_scatter_series.md)
-   [Using Geographic Scatter Area Series](map_geographic_scatter_area_series.md)
-   [Using Geographic Shape Series](map_geographic_shape_series.md)
-   [Using Geographic Shape Control Series](map_geographic_shape_control_series.md)
-   [Using Geographic Polyline Series](map_geographic_polyline_series.md)
-   [Using Geographic Proportional Symbol Series](map_geographic_proportional_symbol_series.md)
-   [Using Geographic Symbol Series](map_geographic_symbol_series.md)
-   [Displaying Multiple Geographic Series](map_displaying_multiple_geographic_series.md)
