---
title: Map | Data Visualization Tools | Ignite UI for Angular | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.View the demo, dependencies, usage and toolbar for more information.
_keywords: map, Ignite UI for Angular, infragistics
---

## Using Scatter High Density Series

Use the map component's [`IgxGeographicHighDensityScatterSeriesComponent`](map_geographic_scatter_density_series.md) to bind and show scatter data ranging from hundreds to millions of data points requiring exceedingly little loading time.

### Demo

<div class="sample-container loading" style="height: 400px">
    <iframe id="geo-map-type-scatter-density-series-iframe" src='{environment:demosBaseUrl}/maps/geo-map-type-scatter-density-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-type-scatter-density-series-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

The demo above shows the [`IgxGeographicHighDensityScatterSeriesComponent`](map_geographic_scatter_density_series.md) series in the map component bound to hundreds or even thousands of data points representing Australia’s population density. The map plot area with more densely populated data points represented as coalescences of red pixels and loosely distributed data points by discrete blue pixels.

Because there are so many data points, the series displays the scatter data as tiny dots as opposed to full size markers, and displays areas with the most data using a higher color density representing a cluster of data points.

### Data Requirements

Similar to other types of scatter series in the map control, the [`IgxGeographicHighDensityScatterSeriesComponent`](map_geographic_scatter_density_series.md) series has the `ItemsSource` property which can be bound to an array of objects. In addition, each data item in the items source must have two data columns that store geographic longitude and latitude coordinates and uses the [`longitudeMemberPath`](map_geographic_scatter_density_series.md) and [`latitudeMemberPath`](map_geographic_scatter_density_series.md) properties to map these data columns.

#### Data Binding

The following table summarizes the GeographicHighDensityScatterSeries series properties used for data binding.

| Property                                                                                                                                 | Type   | Description                                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------------------------- |
| `ItemsSource`                                                                                                                            | any    | Gets or sets the items source                                                                         |
| [`longitudeMemberPath`](map_geographic_scatter_density_series.md) | string | Uses the ItemsSource property to determine the location of the longitude values on the assigned items |
| [`latitudeMemberPath`](map_geographic_scatter_density_series.md)   | string | Uses the ItemsSource property to determine the location of the latitude values on the assigned items  |

### Heat Color Scale

The Heat Color Scale, an optional feature, determines the color pattern within the series. The following table summarizes the properties used for determining the color scale.

| Property                                                                                                                           | Type   | Description                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------- |
| [`heatMinimum`](map_geographic_scatter_density_series.md)           | Double | Defines the double value representing the minimum end of the color scale  |
| [`heatMaximum`](map_geographic_scatter_density_series.md)           | Double | Defines the double value representing the maximum end of the color scale  |
| [`heatMinimumColor`](map_geographic_scatter_density_series.md) | Color  | Defines the point density color used at the bottom end of the color scale |
| [`heatMaximumColor`](map_geographic_scatter_density_series.md) | Color  | Defines the point density color used at the top end of the color scale    |

### Code Example

The following code demonstrates how set the [`heatMinimumColor`](map_geographic_scatter_density_series.md) and [`heatMaximumColor`](map_geographic_scatter_density_series.md) properties of the [`IgxGeographicHighDensityScatterSeriesComponent`](map_geographic_scatter_density_series.md)

<!-- Angular -->

```html
TODO - ADD CODE SNIPPET
```
