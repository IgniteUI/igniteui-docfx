---
title: Map | Data Visualization Tools | Ignite UI for Angular | Geographic Series | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.View the demo, dependencies, usage and toolbar for more information.
_keywords: map, Ignite UI for Angular, infragistics
mentionedTypes: ['XamGeographicMap']
---

## Geographic Series

In the Ignite UI for Angular Map component, geographic series are visual elements of the map that display geo-spatial data as points (e.g. locations of cities), polylines (e.g. road connections), or polygons (shape of countries) in a geographic context.
The map component's [`IgxSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html) property is a collection of geographic series objects. This property is used to support rendering an unlimited number of geographic series in the same plot area. When multiple geographic series objects are added to the [`IgxSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html) property, each successive series will be layered on top of the previous series starting from the first to the last series. Therefore, geographic series can be better understood as map layers that can be stacked on top of each other and/or on top of geographic imagery.

All types of geographic series are always rendered on top of the geographic imagery tiles. However, sometimes geographic series (e.g. with detailed shape files of the world) might provide enough geographic contexts for an application and geographic imagery is not desired in the map control.

### Type of Geographic Series

The Geographic Map component supports the following typs of geographic series:

-   [Using Scatter Symbol Series](map_geographic_scatter_symbol_series.md)
-   [Using Scatter Proportional Series](map_geographic_scatter_proportional_series.md)
-   [Using Scatter Contour Series](map_geographic_scatter_contour_series.md)
-   [Using Scatter Density Series](map_geographic_scatter_density_series.md)
-   [Using Scatter Area Series](map_geographic_scatter_area_series.md)
-   [Using Shape Polygon Series](map_geographic_shape_polygon_series.md)
-   [Using Shape Polyline Series](map_geographic_shape_polyline_series.md)
