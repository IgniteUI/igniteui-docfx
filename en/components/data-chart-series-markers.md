---
title: Angular Data Chart | Data Visualization Tools | Markers | Infragistics
_description: Use the markers of the Infragistics' Angular charts to identify a data point even if it values fall between major or minor gridlines. Check out the Ignite UI for Angular graph's markers feature!
_keywords: Angular charts, data chart, markers, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamDataChart', 'MarkerSeries']
---

# Angular Markers

In the Angular data chart component's plot area, markers are visual elements displayed at location of data points. Markers help your end users immediately identify a data point’s even if its values fall between major or minor grid lines.

## Angular Markers Example

<code-view style="height: 300px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-series-markers" 
           alt="Angular Markers Example" 
           github-src="charts/data-chart/series-markers">
</code-view>

<div class="divider--half"></div>

## Supported Series

Most of data chart series support markers and they are listed below:

-   All [Category Series](data-chart-type-category-series.md)
-   All [Polar Series](data-chart-type-polar-series.md)
-   All [Radial Series](data-chart-type-radial-series.md)
-   Some Scatter Series:
    -   [Scatter Bubble Series](data-chart-type-scatter-bubble-series.md)
    -   [Scatter Point Series](data-chart-type-scatter-point-series.md)
    -   [Scatter Line Series](data-chart-type-scatter-line-series.md)
    -   [Scatter Spline Series](data-chart-type-scatter-spline-series.md)

## Marker Properties

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

## Marker Templates

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
