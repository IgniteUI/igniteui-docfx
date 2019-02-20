---
title: Data Chart Component - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Data Chart is a charting component that provides modular design of axis, markers, series, legend, and annotation layers. With this chart, you can create multiple instances of these visual elements in the same chart plot area in order to create composite chart views.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Chart Component, Angular Data Chart
---

## Tooltips

The `IgxDataChart` control has support for showing tooltips along with a couple of tooltip "layers." These tooltips help you to see contextual information about each of the series in your chart.

### Demo

<div class="sample-container" style="height: 500px">
    <iframe id="data-chart-series-tooltips-iframe" src='{environment:demosBaseUrl}/charts/data-chart-series-tooltips' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-series-tooltips-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

In order to use tooltips or tooltip layers in the `IgxDataChart` control, you need to import and register the interactivity module. This can be done by using the following code:

```typescript
import { IgxDataChartInteractivityModule } from "igniteui-angular-charts/ES5/igx-data-chart-interactivity-module";

IgxDataChartInteractivityModule.register();
```

### Default Tooltips

The `IgxDataChart` control provides default tooltips for each type of series. The default tooltips display all of the information relevant to the particular series item that is being hovered, including the series title, data values, axis values, etc. They are also styled to match the series' appearance.

The following code snippet demonstrates how to enable the default tooltips in the `IgxDataChart` control:

```html
<igx-data-chart #chart
    height="400px"
    width="100%"
    [dataSource]="data">

    <igx-category-x-axis #xAxis></igx-category-x-axis>
    <igx-numeric-y-axis #yAxis></igx-numeric-y-axis>

    <igx-column-series name="series1"
        [xAxis]="xAxis"
        [yAxis]="yAxis"
        valueMemberPath="Value"
        showDefaultTooltip=true>
    </igx-column-series>

</igx-data-chart>
```

### Category Tooltip Layer

The CategoryToolTipLayer displays grouped tooltips for the series on the `IgxDataChart` control using a category axis. The grouped tooltips currently appear at the top of the `IgxDataChart` control.

The following code snippet demonstrates how to add a category tooltip layer to the `IgxDataChart` control:

```html
<igx-data-chart #chart
    height="400px"
    width="100%"
    [dataSource]="data">

    <igx-category-x-axis #xAxis></igx-category-x-axis>
    <igx-numeric-y-axis #yAxis></igx-numeric-y-axis>

    <igx-column-series name="series1"
        [xAxis]="xAxis"
        [yAxis]="yAxis"
        valueMemberPath="Value"
        showDefaultTooltip=true>
    </igx-column-series>

    <igx-category-tooltip-layer></igx-category-tooltip-layer>

</igx-data-chart>
```

### Item Tooltip Layer

The item tooltip layer displays tooltips for all the series on the `IgxDataChart` control individually when a pointer hovers over that particular series. The tooltip style is inherited from the series that is displaying the tooltip.

The following code snippet demonstrates how to add an item tooltip layer to the `IgxDataChart` control:

```html
<igx-data-chart #chart
    height="400px"
    width="100%"
    [dataSource]="data">

    <igx-category-x-axis #xAxis></igx-category-x-axis>
    <igx-numeric-y-axis #yAxis></igx-numeric-y-axis>

    <igx-column-series name="series1"
        [xAxis]="xAxis"
        [yAxis]="yAxis"
        valueMemberPath="Value"
        showDefaultTooltip=true>
    </igx-column-series>

    <igx-item-tooltip-layer></igx-item-tooltip-layer>

</igx-data-chart>
```
