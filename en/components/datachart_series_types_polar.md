---
title: Data Chart Component - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Data Chart component is TODO.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Chart Component, Angular Data Chart
---

## Polar Series

This topic explains various types of polar series in the `IgxDataChart` control. Polar series is a group of series that use the polar (angle, radius) coordinate system instead of the Cartesian (x, y) coordinate system to plot data in chart. In other words, polar series take concepts of [Scatter Series](datachart_series_types_scatter.md) and wrap them around a circle rather than stretching along a horizontal line. This group of series is used to show the relationship among the items in several distinct series of data using the polar coordinates system.

Polar series draw attention to uneven intervals or clusters of data. They are often used to plot scientific data (e.g. wind's direction and speed, strength and direction of magnetic field, location of objects in solar system), and can highlight the deviation of collected data from predicted results.

### Demo

<div class="sample-container" style="height: 300px">
    <iframe id="data-chart-type-polar-series-iframe" src='{environment:demosBaseUrl}/data-chart-type-polar-series' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<!-- <div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="financial-chart-type-polar-series-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div> -->

<div class="divider--half"></div>

### Types of Polar Series

The Data Chart supports the following types of polar series:

| Series Name             | Description                                                                                                                                                      |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `PolarAreaSeries`       | Displays a filled polygon enclosed by a collection of straight lines connecting data points which are located at the polar (angle/radius) coordinates            |
| `PolarSplineAreaSeries` | Displays a filled polygon enclosed by a collection of smooth/interpolated lines connecting data points which are located at the polar (angle/radius) coordinates |
| `PolarSplineSeries`     | Displays a collection of smooth/interpolated lines connecting data points which are located at the polar (angle/radius) coordinates                              |
| `PolarScatterSeries`    | Displays a collection of markers representing data points which are located at the polar (angle/radius) coordinates                                              |
| `PolarLineSeries`       | Displays a collection of straight lines connecting data points which are located at the polar (angle/radius) coordinates                                         |

### Required Axes

The `IgxDataChart` control provides various types of axes but only the following types of axes can be used with polar series.

| Series Type             | Radius Axis Type                | Angle Axis Type                |
| ----------------------- | ------------------------------- | ------------------------------ |
| `PolarAreaSeries`       | `IgxNumericRadiusAxisComponent` | `IgxNumericAngleAxisComponent` |
| `PolarSplineAreaSeries` | `IgxNumericRadiusAxisComponent` | `IgxNumericAngleAxisComponent` |
| `PolarSplineSeries`     | `IgxNumericRadiusAxisComponent` | `IgxNumericAngleAxisComponent` |
| `PolarScatterSeries`    | `IgxNumericRadiusAxisComponent` | `IgxNumericAngleAxisComponent` |
| `PolarLineSeries`       | `IgxNumericRadiusAxisComponent` | `IgxNumericAngleAxisComponent` |

### Required Data

Polar series have the following data requirements:

-   The data source must be an array or a list of data items
-   The data source must contain at least one data item otherwise the chart will not render the polar series.
-   All data items must contain at least two numeric data columns which should be mapped using the `AngleMemberPath` and `RadiusMemberPath` properties of polar series (e.g. `PolarAreaSeries`)

In polar coordinate systems, the location of data points is determined by an angle (angular coordinate) from a fixed direction and distance (radial coordinate) from a fixed point (analogous to the origin of a Cartesian coordinate) which is called "the pole". The lines that start from the pole and point outwards are gridlines of the angular axis (`IgxNumericAngleAxisComponent`) and the concentric rings that surround the pole are gridlines of the radius axis (`IgxNumericRadiusAxisComponent`)

You can use the [SamplePolarData](datachart_data_sources_polar.md) as data source which meets above data requirements.

```typescript
this.state = { dataSource: SamplePolarData.create() }
```

### Required Modules

<!-- Angular -->

In order to use polar series, you need to import the following modules in your app during load and register data chart modules:

```typescript
// axis' modules:
TODO Angular
// category series' modules:
TODO Angular
// data chart's modules:
TODO Angular
```

### Code Example

This code demonstrates how to create an instance of data chart with `PolarLineSeries` and bind it to the data source.

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">

    TODO

 </igx-data-chart>
```

Note that you can also use above code to create other type of polar series by replacing `PolarLineSeries` with name of polar series that you want to render.

### Additional Resources

-   [Axis Types](datachart_axis_types.md)
-   [Axis Locations](datachart_axis_locations.md)
-   [Axis Sharing](datachart_axis_sharing.md)
-   [Chart Legend](datachart_chart_legends.md)
-   [Series Markers](datachart_series_markers.md)
-   [Series Requirements](datachart_series_requirements.md)
-   [Series Types](datachart_series_types.md)
