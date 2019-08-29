---
title: Data Chart | Visualization Tools | Ignite UI for Angular | Infragistics | Tooltips
_description: Create a data chart that displays multiple instances of visual elements in the same plot area in order to create composite chart views.
_keywords: data chart, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamDataChart']
---

## Tooltips

The Angular data chart component has support for showing tooltips along with a couple of tooltip layers. These tooltips help you to see contextual information about each of the series in your data chart.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-series-tooltips-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-series-tooltips' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-series-tooltips-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

In order to use tooltips or tooltip layers in the Angular data chart component, you need to import and register the interactivity module. This can be done by using the following code:

```ts
import { IgxDataChartInteractivityModule } from "igniteui-angular-charts/ES5/igx-data-chart-interactivity-module";

IgxDataChartInteractivityModule.register();
```

### Default Tooltips

The Angular data chart component provides default tooltips for each type of series. The default tooltips display all of the information relevant to the particular series item that is being hovered, including the series title, data values, axis values, etc. They are also styled to match the series' appearance.

The following code snippet demonstrates how to enable the default tooltips in the Angular data chart component:

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

The CategoryToolTipLayer displays grouped tooltips for the series on the Angular data chart component using a category axis. The grouped tooltips currently appear at the top of the Angular data chart component.

The following code snippet demonstrates how to add a category tooltip layer to the Angular data chart component:

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

The item tooltip layer displays tooltips for all the series on the Angular data chart component individually when a pointer hovers over that particular series. The tooltip style is inherited from the series that is displaying the tooltip.

The following code snippet demonstrates how to add an item tooltip layer to the Angular data chart component:

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
