---
title: Map | Data Visualization Tools | Ignite UI for Angular | Multiple Series | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.View the demo, dependencies, usage and toolbar for more information.
_keywords: map, Ignite UI for Angular, infragistics
---

## Binding and Overlaying Multiple Shape Files

In the [`IgxGeographicMap`](map_binding_multiple_shapes_files.md), you can add multiple geographic series objects to overlay a few shapefiles with geo-spacial data. For example, [`IgxGeographicSymbolSeriesComponent`](map_binding_multiple_shapes_files.md) for plotting geographic locations of ports, the [`IgxGeographicPolylineSeriesComponent`](map_binding_multiple_shapes_files.md) for plotting routes between ports, and the [`IgxGeographicShapeSeriesComponent`](map_binding_multiple_shapes_files.md) for plotting shapes of countries.

### Demo

<div class="sample-container loading" style="height: 400px">
    <iframe id="geo-map-binding-multiple-shapes-iframe" src='{environment:demosBaseUrl}/maps/geo-map-binding-multiple-shapes' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-binding-multiple-shapes-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

This topic takes you step-by-step towards displaying multiple geographic series in the map component. All geographic series plot following geo-spatial data loaded from shape files using the `ShapeDataSource` class. Refer to the [Binding Shape Files](map_binding_geographic_shape_files.md) topic for more information about `ShapeDataSource` object.

[`IgxGeographicSymbolSeriesComponent`](map_binding_multiple_shapes_files.md) – displays locations of major cities
[`IgxGeographicPolylineSeriesComponent`](map_binding_multiple_shapes_files.md) – displays routes between major ports
[`IgxGeographicShapeSeriesComponent`](map_binding_multiple_shapes_files.md) – displays shapes of countries of the world

You can use geographic series in this or other combinations to plot desired data.

### Loading Multiple Shapefiles

In constructor of your page, add a `ShapeDataSource` for each shapefile that you want to display in the geographic map component.

### Overlaying Shape Polygons

Create [`IgxGeographicShapeSeriesComponent`](map_binding_multiple_shapes_files.md) object with shapes of countries of the world and add it to `Infragistics.Controls.Charts.Series` collection of the [`IgxGeographicMap`](map_binding_multiple_shapes_files.md).

### Overlaying Shape Polyline

Create [`IgxGeographicPolylineSeriesComponent`](map_binding_multiple_shapes_files.md) object with routes between major ports and add it to `Infragistics.Controls.Charts.Series` collection of the [`IgxGeographicMap`](map_binding_multiple_shapes_files.md).

### Overlaying Shape Points

Create [`IgxGeographicSymbolSeriesComponent`](map_binding_multiple_shapes_files.md) object with locations of major cities and add it to `Infragistics.Controls.Charts.Series` collection of the [`IgxGeographicMap`](map_binding_multiple_shapes_files.md).

Also, you might want to hide geographic imagery from the map background content if your shape files provided sufficient geographic context (e.g. shape of countries) for your application.
