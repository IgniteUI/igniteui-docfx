---
title: Map | Data Visualization Tools | Ignite UI for Angular | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.View the demo, dependencies, usage and toolbar for more information.
_keywords: map, Ignite UI for Angular, infragistics
---

## Using Scatter Proportional Series

Use the map component's [`IgxGeographicProportionalSymbolSeriesComponent`](map_geographic_scatter_proportional_series.md) to plot markers for the geographic points specified by the data in your application. This map series can be useful for highlighting points of interest in your particular business case like department stores, warehouses, or offices. Also you can use this map series in a fleet management system or a GPS system for dynamic vehicle tracking.

### Demo

<div class="sample-container loading" style="height: 400px">
    <iframe id="geo-map-type-scatter-bubble-series-iframe" src='{environment:demosBaseUrl}/maps/geo-map-type-scatter-bubble-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-type-scatter-bubble-series-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

The demo above shows the [`IgxGeographicProportionalSymbolSeriesComponent`](map_geographic_scatter_proportional_series.md) series and how to specify data binding options of the series. Automatic marker selection is configured along with marker collision avoidance logic, and marker outline and fill colors are specified too.

### Configuration Summary

Similar to other types of scatter series in the map control, the [`IgxGeographicProportionalSymbolSeriesComponent`](map_geographic_scatter_proportional_series.md) series has the `ItemsSource` property which can be bound to an array of objects. In addition, each data item in the items source must have two data columns that store geographic longitude and latitude coordinates and uses the [`longitudeMemberPath`](map_geographic_scatter_proportional_series.md) and [`latitudeMemberPath`](map_geographic_scatter_proportional_series.md) properties to map these data columns. The [`radiusScale`](map_geographic_scatter_proportional_series.md) and [`radiusMemberPath`](map_geographic_scatter_proportional_series.md) will settings configures the radius for the bubbles.

The following table summarizes the GeographicHighDensityScatterSeries series properties used for data binding.

| Property                                                                                                                                 | Type                                                                        | Description                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `ItemsSource`                                                                                                                            | any                                                                         | Gets or sets the items source                                                                         |
| [`longitudeMemberPath`](map_geographic_scatter_proportional_series.md) | string                                                                      | Uses the ItemsSource property to determine the location of the longitude values on the assigned items |
| [`latitudeMemberPath`](map_geographic_scatter_proportional_series.md)   | string                                                                      | Uses the ItemsSource property to determine the location of the latitude values on the assigned items  |
| [`radiusMemberPath`](map_geographic_scatter_proportional_series.md)       | string                                                                      | Sets the path to use to get the radius values for the series.                                         |
| [`radiusScale`](map_geographic_scatter_proportional_series.md)                 | [`IgxSizeScale`](map_geographic_scatter_proportional_series.md) | Gets or sets the radius scale property for the current bubble series.                                 |
| `MinimumValue`                                                                                                                           | any                                                                         | Configure the minimum value for calculating value sub ranges.                                         |
| `MaximumValue`                                                                                                                           | any                                                                         | Configure the maximum value for calculating value sub ranges.                                         |

### Code Snippet

<!--Angular -->

```html
TODO - ADD CODE SNIPPET
```
