---
title: Data Chart | Visualization Tools | Ignite UI for Angular | Infragistics | Legends
_description: Create a data chart that displays multiple instances of visual elements in the same plot area in order to create composite chart views.
_keywords: data chart, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamDataChart', 'Infragistics.Controls.Charts.Legend']
---

## Legends

Legends help end-users identify visuals of data chart series with contextual information related to data plotted in the Angular data chart component. Most data charts should have at least one legend in order to make it easier to understand data displayed in the plot area, however, it is not a requirement and the data chart can render without any legends, as it does by default.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-legends-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-legends' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-legends-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Legend Overview

By default, the Angular data chart component does not display legends for any series in the data chart. If you want to show a common legend for multiple series, you need to add a legend object to your application and then set it to the Legend property of the data chart.

In addition, you must set the [`chartTitle`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriesviewercomponent.html#charttitle) property for each series object or the legend will use a default series title.

The following code snippet shows how to use a legend in the Angular data chart component:

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

```ts
@ViewChild("legend")
public legend : IgxLegendComponent;
```
