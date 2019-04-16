---
title: Map | Data Visualization Tools | Ignite UI for Angular | Symbol Series | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.View the demo, dependencies, usage and toolbar for more information.
_keywords: map, Ignite UI for Angular, infragistics
---

## Using Scatter Symbol Series

In the Ignite UI for Angular map component, the `GeographicSymbolSeries` is a visual map element that displays geo-spatial data using points or markers in a geographic context. This type of geographic series is often used to render a collection of geographic locations such as cities, airports, earthquakes, or points of interests.

### Demo

<div class="sample-container" style="height: 500px">
    <iframe id="geo-map-type-scatter-symbol-series-iframe" src='{environment:demosBaseUrl}/maps/geo-map-type-scatter-symbol-series' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-type-scatter-symbol-series-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Data Requirements

Similarly to other types of geographic series in the map component, the `GeographicSymbolSeries` has the `ItemsSource` property for the purpose of data binding. This property can be bound to an object that implements the IEnumerable interface (e.g. List, Collection, Queue, Stack). In addition, each item in this object must have two numeric data columns that store a geographic location (longitude and latitude). These data columns are then mapped to the `LatitudeMemberPath` and `LongitudeMemberPath` properties. The `GeographicSymbolSeries` uses values of these mapped data columns to plot symbol elements in the geographic map component.

### Code Snippet

The following code shows how to bind the `GeographicSymbolSeries` to locations of cities loaded from a shape file using the `ShapeDataSource`.

<!-- Angular -->

```html
TODO - ADD CODE SNIPPET
```

```typescript

```
