---
title: Map | Data Visualization Tools | Ignite UI for Angular | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.View the demo, dependencies, usage and toolbar for more information. 
_keywords: map, Ignite UI for Angular, infragistics
---

## Shape Series

The `GeographicShapeSeries` is a visual map element that displays geo-spatial data using shape polygons in a geographic context. This type of geographic series is often used to render shapes of countries or regions defined by geographic locations. 

### Demo

<div class="sample-container" style="height: 500px">
    <iframe id="geo-map-shape-series-iframe" src='{environment:demosBaseUrl}/maps/geo-map-shape-series' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-shape-series-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

The demo above shows the `GeographicShapeSeries` plotting countries of the world.

The `GeographicShapeSeries` works a lot like the `GeographicPolylineSeries` except that geo-spatial data is rendered with polygons instead of polylines.

### Data Requirements

Similar to other types of geographic series in the map control, the `GeographicShapeSeries` has the `ItemsSource` property for the purpose of data binding. This property can be bound to an object that implements IEnumerable interface. In addition, each item in this object must have one data column that stores geographic locations (longitude and latitude) of a shape using the IEnumerable<Point> or IEnumerable&lt;IEnumerable<Point>> structure. The latter is the standard data structure used by shape files and the ShapefileConverter class. This data column is then mapped to the `ShapeMemberPath` property. The `GeographicShapeSeries` uses points of this mapped data column to plot polygons in the map control.

### Code Snippet

The following code demonstrates how to bind the `GeographicShapeSeries` to shapes of countries in the world loaded from a shape file using the ShapefileConverter.
