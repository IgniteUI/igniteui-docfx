---
title: Map | Data Visualization Tools | Ignite UI for Angular | Multiple Series | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.View the demo, dependencies, usage and toolbar for more information.
_keywords: map, Ignite UI for Angular, infragistics
---

## Binding Multiple Data Sources

In the [`IgxGeographicMap`](map_binding_multiple_data_sources.md), you can add multiple geographic series objects to overlay custom data sources with geo-spacial data. For example, [`IgxGeographicSymbolSeriesComponent`](map_binding_multiple_data_sources.md) for plotting geographic locations of airports, the [`IgxGeographicPolylineSeriesComponent`](map_binding_multiple_data_sources.md) for plotting flights between airports, and 2nd [`IgxGeographicPolylineSeriesComponent`](map_binding_multiple_data_sources.md) for plotting gridlines of major geographic coordinates.

### Demo

<div class="sample-container loading" style="height: 400px">
    <iframe id="geo-map-binding-multiple-sources-iframe" src='{environment:demosBaseUrl}/maps/geo-map-binding-multiple-sources' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-binding-multiple-sources-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

This topic takes you step-by-step towards displaying multiple geographic series that will plot following geo-spatial data:

[`IgxGeographicSymbolSeriesComponent`](map_binding_multiple_data_sources.md) – displays locations of major airports
[`IgxGeographicPolylineSeriesComponent`](map_binding_multiple_data_sources.md) – displays flights between airports
[`IgxGeographicPolylineSeriesComponent`](map_binding_multiple_data_sources.md) – displays gridlines of major coordinates

You can use geographic series in this or other combinations to plot desired data.

### Creating Data Sources

Create data sources for all geographic series that you want to display in the [`IgxGeographicMap`](map_binding_multiple_data_sources.md). For example, you can the use[WorldConnections](map_resources_world_connections.md) script.

### Overlaying Flights

Create first [`IgxGeographicPolylineSeriesComponent`](map_binding_multiple_data_sources.md) object with flight connections between major airports and add it to `Infragistics.Controls.Charts.Series` collection of the [`IgxGeographicMap`](map_binding_multiple_data_sources.md).

### Overlaying Gridlines

Create second [`IgxGeographicPolylineSeriesComponent`](map_binding_multiple_data_sources.md) object with geographic gridlines and add it to `Infragistics.Controls.Charts.Series` collection of the [`IgxGeographicMap`](map_binding_multiple_data_sources.md).

Create [`IgxGeographicSymbolSeriesComponent`](map_binding_multiple_data_sources.md) object with geographic gridlines and add it to `Infragistics.Controls.Charts.Series` collection of the geographic [`IgxGeographicMap`](map_binding_multiple_data_sources.md).
