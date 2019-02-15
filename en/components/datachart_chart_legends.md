---
title: Data Chart Component - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Data Chart is a charting component that provides modular design of axis, markers, series, legend, and annotation layers. With this chart, you can create multiple instances of these visual elements in the same chart plot area in order to create composite chart views.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Chart Component, Angular Data Chart
---

## Legends

Legends help end-users identify visuals of chart series with contextual information related to data plotted in the `IgxDataChart` control. Most charts should have at least one legend in order to make it easier to understand data displayed in the plot area, however, it is not a requirement and the chart can render without any legends, as it does by default.

### Demo

<div class="sample-container" style="height: 500px">
    <iframe id="data-chart-overview-iframe" src='{environment:demosBaseUrl}/charts/data-chart-legends' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-legends-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Legend Overview

By default, the `IgxDataChart` does not display legends for any series in the chart. If you want to show a common legend for multiple series, you need to add an `IgxLegend` object to your application and then set it to the `IgxLegendComponent` property of the chart.

In addition, you must set the `Title` property for each series object or the legend will use a default series title.

The following code snippet shows how to use a legend in the `IgxDataChart` control:

```html
<div>
  <igx-legend #legend></igx-legend>
</div>
<div>
  <igx-data-chart chartTitle="Energy Use Per Country" subtitle="Results over a two year period" height="600px" width="100%"
    [dataSource]="data" [legend]="legend">

    <igx-category-x-axis #xAxis name="xAxis" label="Country"></igx-category-x-axis>
    <igx-numeric-y-axis #yAxis name="yAxis" minimumValue=0></igx-numeric-y-axis>

    <igx-column-series name="series1" title="Coal" [xAxis]="xAxis" [yAxis]="yAxis" valueMemberPath="Coal"></igx-column-series>
    <igx-column-series name="series2" title="Hydro" [xAxis]="xAxis" [yAxis]="yAxis" valueMemberPath="Hydro"></igx-column-series>
    <igx-column-series name="series3" title="Nuclear" [xAxis]="xAxis" [yAxis]="yAxis" valueMemberPath="Nuclear"></igx-column-series>
    <igx-column-series name="series4" title="Gas" [xAxis]="xAxis" [yAxis]="yAxis" valueMemberPath="Gas"></igx-column-series>
    <igx-column-series name="series5" title="Oil" [xAxis]="xAxis" [yAxis]="yAxis" valueMemberPath="Oil"></igx-column-series>
  </igx-data-chart>
</div>
```

```typescript
@ViewChild("legend")
public legend : IgxLegendComponent;
```
