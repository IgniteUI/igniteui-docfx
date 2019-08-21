---
title: Data Chart | Visualization Tools | Ignite UI for Angular | Infragistics | Value Overlay
_description: Create a data chart that displays multiple instances of visual elements in the same plot area in order to create composite chart views.
_keywords: data chart, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamDataChart', 'ColumnSeries', 'ValueOverlay']
namespace: Infragistics.Controls.Charts
---

## Value Overlay

The Ignite UI for Angular data chart component allows for placement of horizontal or vertical lines at a single numeric value that you define through usage of the [`IgxValueOverlayComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxvalueoverlaycomponent.html). This can help you to visualize data such as the mean or median of a particular series.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-overview-iframe" src='{environment:demosBaseUrl}/charts/data-chart-value-overlay' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-overview-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

Unlike other series types that use a `DataSource` for data binding, the value overlay uses a [`valueMemberPath`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxanchoredcategoryseriescomponent.html#valuememberpath) property to bind a single numeric value. In addition, the value overlay requires you to define a single [`axis`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxvalueoverlaycomponent.html#axis) to use. If you use an X-axis, the value overlay will be a vertical line, and if you use a Y-axis, it will be a horizontal line.

When using a numeric X or Y axis, the [`valueMemberPath`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxanchoredcategoryseriescomponent.html#valuememberpath) property should reflect the actual numeric value on the axis where you want the value overlay to be drawn. When using a category X or Y axis, the [`valueMemberPath`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxanchoredcategoryseriescomponent.html#valuememberpath) should reflect the index of the category at which you want the value overlay to appear.

When using the value overlay with a numeric angle axis, it will appear as a line from the center of the chart and when using a numeric radius axis, it will appear as a circle.

[`IgxValueOverlayComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxvalueoverlaycomponent.html) appearance properties are inherited from [`IgxSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html) and so [`brush`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html#brush) and [`thickness`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html#thickness) for example are available and work the same way they do with other types of series.

### Code Example - Value Overlay

The following code snippet demonstrates adding a value overlay to the Ignite UI for Angular data chart component:

```html
<igx-data-chart #chart height="600px" width="800px" [dataSource]="data">
  <igx-category-x-axis #xAxis label="Label"></igx-category-x-axis>
  <igx-numeric-y-axis #yAxis></igx-numeric-y-axis>

  <igx-column-series [xAxis]="xAxis" [yAxis]="yAxis" valueMemberPath="Value"></igx-column-series>

  <igx-value-overlay [axis]="yAxis" value=5 thickness=5></igx-value-overlay>

</igx-data-chart>
```
