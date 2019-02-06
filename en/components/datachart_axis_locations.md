---
title: Data Chart Component - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Data Chart component is TODO.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Chart Component, Angular Data Chart
---

## Axis Locations

 For all axes have, you can specify axis location in relationship to chart plot area. This especially important when using more than two axes in the same chart or when [Sharing Axis](datachart_axis_sharing.md) between multiple series.

### Demo

<div class="sample-container" style="height: 300px">
    <iframe id="data-chart-axis-sharing-iframe" src='{environment:demosBaseUrl}/data-chart--axis-sharing' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<!-- <div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="financial-chart--axis-sharing-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div> -->

<div class="divider--half"></div>

### Code Example

This code demonstrates how to create data chart with two `IgxNumericYAxisComponent` that will be placed on left/right sides and two `IgxCategoryXAxisComponent` that will be stacked on one another.

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">

    TODO

 </igx-data-chart>
```

### Additional Resources

-   [Axis Types](datachart_axis_types.md)
-   [Axis Sharing](datachart_axis_sharing.md)
-   [Series Types](datachart_series_types.md)
