---
title: Map | Data Visualization Tools | Ignite UI for Angular | Multiple Series | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.View the demo, dependencies, usage and toolbar for more information.
_keywords: map, Ignite UI for Angular, infragistics
---

## Binding Multiple Data Sources

In the `GeographicMap`, you can add multiple geographic series objects to overlay custom data sources with geo-spacial data. For example, `GeographicSymbolSeries` for plotting geographic locations of airports, the `GeographicPolylineSeries` for plotting flights between airports, and 2nd `GeographicPolylineSeries` for plotting gridlines of major geographic coordinates.

### Demo

<div class="sample-container" style="height: 400px">
    <iframe id="geo-map-binding-multiple-sources-iframe" src='{environment:demosBaseUrl}/maps/geo-map-binding-multiple-sources' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-binding-multiple-sources-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

This topic takes you step-by-step towards displaying multiple geographic series that will plot following geo-spatial data:

-   `GeographicSymbolSeries` – displays locations of major airports
-   `GeographicPolylineSeries` – displays flights between airports
-   `GeographicPolylineSeries` – displays gridlines of major coordinates

You can use geographic series in this or other combinations to plot desired data.

### Creating Data Sources

Create data sources for all geographic series that you want to display in the `GeographicMap`. For example, you can the use [WorldConnections](map_resources_world_connections.md) script.

### Overlaying Flights

Create first `GeographicPolylineSeries` object with flight connections between major airports and add it to `IgxSeriesComponent` collection of the `GeographicMap`.

### Overlaying Gridlines

Create second `GeographicPolylineSeries` object with geographic gridlines and add it to `IgxSeriesComponent` collection of the `GeographicMap`.

Create `GeographicSymbolSeries` object with geographic gridlines and add it to `IgxSeriesComponent` collection of the geographic `GeographicMap`.
