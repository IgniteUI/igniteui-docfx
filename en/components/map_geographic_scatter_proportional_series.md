---
title: Map | Data Visualization Tools | Ignite UI for Angular | Infragistics
_description: The Map allows you to display data that contains geographic locations from view models or geo-spatial data loaded from shape files on geographic imagery maps.View the demo, dependencies, usage and toolbar for more information. 
_keywords: map, Ignite UI for Angular, infragistics
---

## Proportional Symbol Series

Use the map component's `GeographicProportionalSymbolSeries` series to plot markers for the geographic points specified by the data in your application. This map series can be useful for highlighting points of interest in your particular business case like department stores, warehouses, or offices. Additional uses of this map series may be in a fleet management system or a GPS system for dynamic vehicle tracking.

### Demo

<div class="sample-container" style="height: 500px">
    <iframe id="geo-map-scatter-proportional-series-iframe" src='{environment:demosBaseUrl}/maps/geo-map-scatter-proportional-series' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="geo-map-scatter-proportional-series-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

The demo above shows the `GeographicProportionalSymbolSeries` series and how to specify data binding options of the series. Automatic marker selection is configured along with marker collision avoidance logic, and marker outline and fill colors are specified too.

### Configuration Summary

Similar to other types of scatter series in the map control, the `GeographicProportionalSymbolSeries` series has the `ItemsSource` property for data binding. This property can be bound to objects implementing an IEnumerable interface.
In addition, each item in the items source must have two data columns that store geographic longitude and latitude coordinates and uses the `LongitudeMemberPath` and `LatitudeMemberPath` properties to map these data columns. The `RadiusScale` and `RadiusMemberPath` will settings configures the radius for the bubbles.  

The following table summarizes the GeographicHighDensityScatterSeries series properties used for data binding.

| Property              | Type                                                    | Description                                                                                           |
| --------------------- | ------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `ItemsSource`         | IEnumerable                                             | Gets or sets the items source                                                                         |
| `LongitudeMemberPath` | String                                                  | Uses the ItemsSource property to determine the location of the longitude values on the assigned items |
| `LatitudeMemberPath`  | String                                                  | Uses the ItemsSource property to determine the location of the latitude values on the assigned items  |
| `RadiusMemberPath`    | String                                                  | Sets the path to use to get the radius values for the series.                                         |
| `RadiusScale`         | <!-- React -->IgrSizeScale <!-- Angular -->IgxSizeScale | Gets or sets the radius scale property for the current bubble series.                                 |
| `MinimumValue`        | any                                                     | Configure the minimum value for calculating value sub ranges.                                         |
| `MaximumValue`        | any                                                     | Configure the maximum value for calculating value sub ranges.                                         |

### Code Snippet

<!--Angular -->

```html
 TODO - ADD CODE SNIPPET
```
