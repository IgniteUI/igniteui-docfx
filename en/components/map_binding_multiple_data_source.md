---
title: Map | Data Visualization Tools | Ignite UI for Angular | Multiple Series | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.View the demo, dependencies, usage and toolbar for more information.
_keywords: map, Ignite UI for Angular, infragistics
---

## Binding Multiple Data Sources

The Ignite UI for Angular map component `IgxSeriesComponent` property is used to support rendering an unlimited number of geographic series. This property is a collection of geographic series objects and any type of geographic series can be added to it. For example, `GeographicSymbolSeries` can be added for plotting geographic locations such as cities and the `GeographicPolylineSeries` for plotting connections (for example, roads) between these geographic locations.

### Demo

<div class="sample-container" style="height: 500px">
    <iframe id="geo-map-binding-multiple-sources-iframe" src='{environment:demosBaseUrl}/maps/geo-map-binding-multiple-sources' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-binding-multiple-sources-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

This topic takes you step-by-step towards displaying multiple geographic series in the map component. All geographic series are added to the Series property, plot following geo-spatial data loaded from shape files using the `ShapeDataSource` class.

`GeographicShapeSeries` – displays countries of the world
`GeographicSymbolSeries` – displays locations of major cities
`GeographicPolylineSeries` – displays roads between major cities

You can use geographic series in this or other combinations to plot desired data. Also, you might want to hide geographic imagery from the map background content if your shape files provided sufficient geographic context for your application.

### Code Snippet

In constructor of your page, add a `ShapeDataSource` for each shapefile that you want to display in the geographic map component.

In the map component's `IgxSeriesComponent` collection, add `GeographicShapeSeries` object for displaying shapes of countries of the world.

In the map component's `IgxSeriesComponent` collection, add `GeographicPolylineSeries` object for displaying flight connections between major airports.

In the map's component's `IgxSeriesComponent` collection, add `GeographicSymbolSeries` object for displaying locations of major airports.
