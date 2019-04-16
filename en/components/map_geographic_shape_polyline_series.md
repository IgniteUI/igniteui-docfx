---
title: Map | Data Visualization Tools | Ignite UI for Angular | Polyline Series | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.View the demo, dependencies, usage and toolbar for more information.
_keywords: map, Ignite UI for Angular, infragistics
---

## Using Shape Polyline Series

In the Ignite UI for Angular map component, the `GeographicPolylineSeries` is a visual map element that displays geo-spatial data using polylines in a geographic context. This type of geographic series is often used to render roads or connections between geographic locations such as cities or airports. The `GeographicPolylineSeries` works a lot like the `GeographicShapeSeries` except that geo-spatial data is rendered with polylines instead of polygons.

### Demo

<div class="sample-container" style="height: 500px">
    <iframe id="geo-map-type-shape-polyline-series-iframe" src='{environment:demosBaseUrl}/maps/geo-map-type-shape-polyline-series' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-type-shape-polyline-series-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

The following table summarized data structures required for each type of geographic series :

### Data Requirements

Similarly to other types of geographic series in the control, the `GeographicPolylineSeries` has the `ItemsSource` property for the purpose of data binding. This property can be bound to an object that implements the IEnumerable interface (e.g. List, Collection, Queue, Stack). In addition, each item in this object must have one data column that stores geographic locations (longitude and latitude) of connected items using the IEnumerable<Point> or IEnumerable&lt;IEnumerable<Point>> structure. The latter is the standard data structure used by shape files and the `ShapeDataSource` object. This data column is then mapped to the ShapeMemberPath property. The `GeographicPolylineSeries` uses points of this mapped data column to plot polygons in the control.

### Code Snippet

The following code shows how to bind the `GeographicPolylineSeries` to locations of cities loaded from a shape file using the `ShapeDataSource`.

<!-- Angular -->

```html
TODO - ADD CODE SNIPPET
```

```typescript

```
