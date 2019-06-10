---
title: Map | Data Visualization Tools | Ignite UI for Angular | Multiple Series | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.View the demo, dependencies, usage and toolbar for more information.
_keywords: map, Ignite UI for Angular, infragistics
---

## Binding and Overlaying Multiple Shape Files

In the `IgxGeographicMap`, you can add multiple geographic series objects to overlay a few shapefiles with geo-spacial data. For example, `GeographicSymbolSeries` for plotting geographic locations of ports, the `GeographicPolylineSeries` for plotting routes between ports, and the `GeographicShapeSeries` for plotting shapes of countries.

### Demo

<div class="sample-container" style="height: 400px">
    <iframe id="geo-map-binding-multiple-shapes-iframe" src='{environment:demosBaseUrl}/maps/geo-map-binding-multiple-shapes' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-binding-multiple-shapes-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

This topic takes you step-by-step towards displaying multiple geographic series in the map component. All geographic series plot following geo-spatial data loaded from shape files using the `ShapeDataSource` class. Refer to the [Binding Shape Files](map_binding_geographic_shape_files.md) topic for more information about `ShapeDataSource` object.

`GeographicSymbolSeries` – displays locations of major cities
`GeographicPolylineSeries` – displays routes between major ports
`GeographicShapeSeries` – displays shapes of countries of the world

You can use geographic series in this or other combinations to plot desired data.

### Loading Multiple Shapefiles

In constructor of your page, add a `ShapeDataSource` for each shapefile that you want to display in the geographic map component.

### Overlaying Shape Polygons

Create `GeographicShapeSeries` object with shapes of countries of the world and add it to `IgxSeriesComponent` collection of the `IgxGeographicMap`.

### Overlaying Shape Polyline

Create `GeographicPolylineSeries` object with routes between major ports and add it to `IgxSeriesComponent` collection of the `IgxGeographicMap`.

### Overlaying Shape Points

Create `GeographicSymbolSeries` object with locations of major cities and add it to `IgxSeriesComponent` collection of the `IgxGeographicMap`.

Also, you might want to hide geographic imagery from the map background content if your shape files provided sufficient geographic context (e.g. shape of countries) for your application.
