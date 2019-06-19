---
title: Map | Data Visualization Tools | Ignite UI for Angular | Multiple Series | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.View the demo, dependencies, usage and toolbar for more information.
_keywords: map, Ignite UI for Angular, infragistics
---

## Binding and Overlaying Multiple Shape Files

In the `GeographicMap`, you can add multiple geographic series objects to overlay a few shapefiles with geo-spacial data. For example, `IgxGeographicSymbolSeriesComponent` for plotting geographic locations of ports, the `IgxGeographicPolylineSeriesComponent` for plotting routes between ports, and the `IgxGeographicShapeSeriesComponent` for plotting shapes of countries.

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

-   `IgxGeographicSymbolSeriesComponent` – displays locations of major cities
-   `IgxGeographicPolylineSeriesComponent` – displays routes between major ports
-   `IgxGeographicShapeSeriesComponent` – displays shapes of countries of the world

You can use geographic series in this or other combinations to plot desired data.

### Loading Multiple Shapefiles

In constructor of your page, add a `ShapeDataSource` for each shapefile that you want to display in the geographic map component.

```ts
import { ShapeDataSource } from "igniteui-react-core/ES5/igr-shape-data-source";
// ...

const sdsPolygons = new ShapeDataSource();
sdsPolygons.importCompleted = this.onShapePolygonsLoaded;
sdsPolygons.shapefileSource = url + "/shapes/WorldCountries.shp";
sdsPolygons.databaseSource  = url + "/shapes/WorldCountries.dbf";
sdsPolygons.dataBind();
const sdsPolylines = new ShapeDataSource();
sdsPolylines.importCompleted = this.onShapePolylinesLoaded;
sdsPolylines.shapefileSource = url + "/shapes/WorldConnections.shp";
sdsPolylines.databaseSource  = url + "/shapes/WorldConnections.dbf";
sdsPolylines.dataBind();
const sdsLocations = new ShapeDataSource();
sdsLocations.importCompleted = this.onShapeLocationsLoaded;
sdsLocations.shapefileSource = url + "/Shapes/WorldCities.shp";
sdsLocations.databaseSource  = url + "/Shapes/WorldCities.dbf";
sdsLocations.dataBind();
```

### Overlaying Shape Polygons

Create `IgxGeographicShapeSeriesComponent` object with shapes of countries of the world and add it to `IgxSeriesComponent` collection of the `GeographicMap`.

### Overlaying Shape Polyline

Create `IgxGeographicPolylineSeriesComponent` object with routes between major ports and add it to `IgxSeriesComponent` collection of the `GeographicMap`.

### Overlaying Shape Points

Create `IgxGeographicSymbolSeriesComponent` object with locations of major cities and add it to `IgxSeriesComponent` collection of the `GeographicMap`.

Also, you might want to hide geographic imagery from the map background content if your shape files provided sufficient geographic context (e.g. shape of countries) for your application.
