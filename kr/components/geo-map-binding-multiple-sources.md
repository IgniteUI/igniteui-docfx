---
title: Angular Map | Data Visualization Tools | Multiple Series | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.View the demo, dependencies, usage and toolbar for more information.
_keywords: map, Ignite UI for Angular, Infragistics
---

# Angular Binding Multiple Data Sources

In the [`IgxGeographicMapComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicmapcomponent.html), you can add multiple geographic series objects to overlay custom data sources with geo-spacial data. For example, [`IgxGeographicSymbolSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicsymbolseriescomponent.html) for plotting geographic locations of airports, the [`IgxGeographicPolylineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicpolylineseriescomponent.html) for plotting flights between airports, and 2nd [`IgxGeographicPolylineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicpolylineseriescomponent.html) for plotting gridlines of major geographic coordinates.

## Demo

<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/maps/geo-map-binding-multiple-sources"  >
</code-view>

<div class="divider--half"></div>

This topic takes you step-by-step towards displaying multiple geographic series that will plot following geo-spatial data:

[`IgxGeographicSymbolSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicsymbolseriescomponent.html) – displays locations of major airports
[`IgxGeographicPolylineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicpolylineseriescomponent.html) – displays flights between airports
[`IgxGeographicPolylineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicpolylineseriescomponent.html) – displays gridlines of major coordinates

You can use geographic series in this or other combinations to plot desired data.

## Creating Data Sources

Create data sources for all geographic series that you want to display in the [`IgxGeographicMapComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicmapcomponent.html). For example, you can the use[WorldConnections](geo-map-resources-world-connections.md) script.

## Overlaying Flights

Create first [`IgxGeographicPolylineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicpolylineseriescomponent.html) object with flight connections between major airports and add it to [`IgxSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html) collection of the [`IgxGeographicMapComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicmapcomponent.html).

## Overlaying Gridlines

Create second [`IgxGeographicPolylineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicpolylineseriescomponent.html) object with geographic gridlines and add it to [`IgxSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html) collection of the [`IgxGeographicMapComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicmapcomponent.html).

Create [`IgxGeographicSymbolSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicsymbolseriescomponent.html) object with geographic gridlines and add it to [`IgxSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html) collection of the geographic [`IgxGeographicMapComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxgeographicmapcomponent.html).
