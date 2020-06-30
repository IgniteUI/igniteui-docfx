---
title: Data Chart | Visualization Tools | Ignite UI for Angular | Infragistics | Markers
_description: Create a data chart that displays multiple instances of visual elements in the same plot area in order to create composite chart views.
_keywords: data chart, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamDataChart', 'MarkerSeries']
---

## Markers

In the Angular data chart component's plot area, markers are visual elements displayed at location of data points. Markers help your end users immediately identify a data point’s even if its values fall between major or minor grid lines.

### Demo

<div class="sample-container loading" style="height: 300px">
    <iframe id="data-chart-series-markers-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-series-markers' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-series-markers-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Supported Series

Most of data chart series support markers and they are listed below:

-   All [Category Series](data-chart-type-category-series.md)
-   All [Polar Series](data-chart-type-polar-series.md)
-   All [Radial Series](data-chart-type-radial-series.md)
-   Some Scatter Series:
    -   [Scatter Bubble Series](data-chart-type-scatter-bubble-series.md)
    -   [Scatter Point Series](data-chart-type-scatter-point-series.md)
    -   [Scatter Line Series](data-chart-type-scatter-point-series.md)
    -   [Scatter Spline Series](data-chart-type-scatter-point-series.md)

### Marker Properties

Above series support 12 shapes of markers that you can change using the [`markerType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxmarkerseriescomponent.html#markertype) property.  Also, you can change fill and stroke using [`markerBrush`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxmarkerseriescomponent.html#markerbrush) and [`markerOutline`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxmarkerseriescomponent.html#markeroutline) properties respectively.

This code snippet below demonstrate how to change shape and appearance of markers.

```html
<igx-column-series name="series1"
    markerType="Square"
    markerBrush="white"
    markerOutline="purple">
</igx-column-series>
```

<!-- TODO add this section when we add MarkerTemplate

### Marker Templates

You can provide custom shape using the `MarkerTemplate` property.

This code snippet below demonstrate how to create custom  marker with values of data points.


```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">

    TODO

 </igx-data-chart>
```

```tsx
<IgrColumnSeries name="series1"
    markerTemplate="customMarker" />
``` -->

### Additional Resources

-   [Axis Types](data-chart-axis-types.md)
-   [Series Types](data-chart-series-types.md)
-   [Series Tooltips](data-chart-series-tooltips.md)
