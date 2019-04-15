---
title: Map | Data Visualization Tools | Ignite UI for Angular | Multiple Series | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.View the demo, dependencies, usage and toolbar for more information. 
_keywords: map, Ignite UI for Angular, infragistics
---

## Displaying Multiple Geographic Series

The Ignite UI for Angular map component `IgxSeriesComponent` property is used to support rendering an unlimited number of geographic series. This property is a collection of geographic series objects and any type of geographic series can be added to it. For example, `GeographicSymbolSeries` can be added for plotting geographic locations such as cities and the `GeographicPolylineSeries` for plotting connections (for example, roads) between these geographic locations.

### Demo

<div class="sample-container" style="height: 500px">
    <iframe id="map-displaying-multiple-geographic-series-maps-iframe" src='{environment:demosBaseUrl}/maps/map-displaying-multiple-geographic-series' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="map-displaying-geographic-multiple-geographic-series-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

This topic takes you step-by-step towards displaying multiple geographic series in the map component. All geographic series are added to the Series property, plot following geo-spatial data loaded from shape files using the ShapefileConverter class.

`GeographicShapeSeries` – displays countries of the world
`GeographicSymbolSeries` – displays locations of major cities
`GeographicPolylineSeries` – displays roads between major cities

You can use geographic series in this or other combinations to plot desired data. Also, you might want to hide geographic imagery from the map background content if your shape files provided sufficient geographic context for your application. 

### Code Snippet

In resources section of your page, add a ShapefileConverter for each shapefile that you want to display in the XamGeographicMap control.

Add the map component with the `BackgroundContent` set to null.

In the map component's `IgxSeriesComponent` collection, add `GeographicShapeSeries` object for displaying shapes of countries of the world.

In the map component's `IgxSeriesComponent` collection, add `GeographicPolylineSeries` object for displaying roads between major cities.

In the map's component's `IgxSeriesComponent` collection, add `GeographicSymbolSeries` object for displaying locations of major cities.
