---
title: Angular Data Chart | Data Visualization Tools | ToolTips | Infragistics
_description: Use Infragistics' Angular chart's tooltips to display important data. View our Ignite UI for Angular graph tutorials!
_keywords: Angular charts, data chart, tooltips, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamDataChart']
---

# Angular Tooltips

The Angular data chart component has support for showing tooltips along with a couple of tooltip layers. These tooltips help you to see contextual information about each of the series in your data chart.

## Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-series-tooltips-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-series-tooltips' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-series-tooltips-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>


</div>

<div class="divider--half"></div>

In order to use tooltips or tooltip layers in the Angular data chart component, you need to import and register the interactivity module. This can be done by using the following code:

<!-- Blazor -->

-   DataChartInteractivityModule
    <!-- end: Blazor -->

```ts
import { IgxDataChartInteractivityModule } from 'igniteui-angular-charts';

@NgModule({
    imports: [ IgxDataChartInteractivityModule ]
})
```

## Default Tooltips

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

## Category Tooltip Layer

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

## Item Tooltip Layer

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
