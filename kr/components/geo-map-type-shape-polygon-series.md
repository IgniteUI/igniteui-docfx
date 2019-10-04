---
title: Map | Data Visualization Tools | Ignite UI for Angular | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.View the demo, dependencies, usage and toolbar for more information.
_keywords: map, Ignite UI for Angular, infragistics
---

## Using Shape Polygon Series

Use the map component's [`IgxGeographicShapeSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicshapeseriescomponent.html) to display geo-spatial data using shape polygons in a geographic context. This type of geographic series is often used to render shapes of countries or regions defined by geographic locations.

### Demo

<div class="sample-container loading" style="height: 400px">
    <iframe id="geo-map-type-shape-polygon-series-iframe" src='{environment:dvDemosBaseUrl}/maps/geo-map-type-shape-polygon-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-type-shape-polygon-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

The [`IgxGeographicShapeSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicshapeseriescomponent.html) works a lot like the [`IgxGeographicPolylineSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicpolylineseriescomponent.html) except that geo-spatial data is rendered with polygons instead of polylines.

### Data Requirements

Similar to other types of geographic series in the map control, the [`IgxGeographicShapeSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicshapeseriescomponent.html) has the `ItemsSource` property which can be bound to an array of objects. In addition, each data item in this object must have one data column that stores single/multiple shapes using an array of arrays of objects with x and y values representing geographic locations. This data column is then mapped to the `ShapeMemberPath` property. The [`IgxGeographicShapeSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicshapeseriescomponent.html) uses points of this mapped data column to plot polygons in the map control.

### Code Snippet

The following code demonstrates how to bind the [`IgxGeographicShapeSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicshapeseriescomponent.html) to shapes of countries in the world loaded from a shape file using the `ShapeDataSource`.

<!-- Angular -->

```html
TODO - ADD CODE SNIPPET
```
