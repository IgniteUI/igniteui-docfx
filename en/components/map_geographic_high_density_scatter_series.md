---
title: Map | Data Visualization Tools | Ignite UI for Angular | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.View the demo, dependencies, usage and toolbar for more information. 
_keywords: map, Ignite UI for Angular, infragistics
---

## High Density Scatter Series

Use the map component's `GeographicHighDensityScatterSeries` series to bind and show scatter data ranging from hundreds to millions of data points requiring exceedingly little loading time.

### Demo

<div class="sample-container" style="height: 500px">
    <iframe id="geo-map-scatter-density-series-iframe" src='{environment:demosBaseUrl}/maps/geo-map-scatter-density-series' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-scatter-density-series-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

The demo above shows the `GeographicHighDensityScatterSeries` series in the map component bound to hundreds or even thousands of data points representing Australia’s population density. The map plot area with more densely populated data points represented as coalescences of red pixels and loosely distributed data points by discrete blue pixels.

Because there are so many data points, the series displays the scatter data as tiny dots as opposed to full size markers, and displays areas with the most data using a higher color density representing a cluster of data points.

### Data Requirements

Similar to other types of scatter series in the map control, the `GeographicHighDensityScatterSeries` series has the `ItemsSource` property for data binding. This property can be bound to objects implementing an IEnumerable interface.
In addition, each item in the items source must have two data columns that store geographic longitude and latitude coordinates and uses the `LongitudeMemberPath` and `LatitudeMemberPath` properties to map these data columns.

#### Data Binding

The following table summarizes the GeographicHighDensityScatterSeries series properties used for data binding.

| Property              | Type        | Description                                                                                           |
| --------------------- | ----------- | ----------------------------------------------------------------------------------------------------- |
| `ItemsSource`         | IEnumerable | Gets or sets the items source                                                                         |
| `LongitudeMemberPath` | String      | Uses the ItemsSource property to determine the location of the longitude values on the assigned items |
| `LatitudeMemberPath`  | String      | Uses the ItemsSource property to determine the location of the latitude values on the assigned items  |

### Heat Color Scale

The Heat Color Scale, an optional feature, determines the color pattern within the series. The following table summarizes the properties used for determining the color scale.

| Property           | Type   | Description                                                               |
| ------------------ | ------ | ------------------------------------------------------------------------- |
| `HeatMinimum`      | Double | Defines the double value representing the minimum end of the color scale  |
| `HeatMaximum`      | Double | Defines the double value representing the maximum end of the color scale  |
| `HeatMinimumColor` | Color  | Defines the point density color used at the bottom end of the color scale |
| `HeatMaximumColor` | Color  | Defines the point density color used at the top end of the color scale    |

The following code demonstrates how set the `HeatMinimumColor` and `HeatMaximumColor` properties of the `GeographicHighDensityScatterSeries`
