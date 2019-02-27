---
title: Data Chart Component - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Data Chart is a charting component that provides modular design of axis, markers, series, legend, and annotation layers. With this chart, you can create multiple instances of these visual elements in the same chart plot area in order to create composite chart views.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Chart Component, Angular Data Chart
_language: ja
---

## Series Annotations

The `IgxDataChart` supports layers that allow you to display contextual information about the points plotted in your chart as annotations. This can help to show more information to your end-users that cannot be seen by simply looking at the series.

### Demo

<div class="sample-container" style="height: 500px">
    <iframe id="data-chart-series-annotations-iframe" src='{environment:demosBaseUrl}/charts/data-chart-series-annotations' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-series-annotations-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Callout Layer

The callout layer displays annotations from existing or new data on the `IgxDataChart` control. The annotations appear next to the given data values in the data source.

Use the callout annotations to display additional information, such as notes or specific details about datapoints, that you would like to point out to your users.

You can configure the callouts to target a specific series if you want to have multiple callouts layers present with different configurations. This can be done be setting the `TargetSeries` property.

The following code snippet demonstrates how to add a callout layer to the chart:

```html
<igx-data-chart dataSource={this.data}
   width="100%"
   height="400px">

   <igx-category-x-axis name="xAxis" />
   <igx-numeric-y-axis  name="yAxis" />

   <igx-column-series name="series1"
       xAxisName="xAxis"
       yAxisName="yAxis"
       valueMemberPath="Value1"/>
   <igx-column-series name="series2"
       xAxisName="xAxis"
       yAxisName="yAxis"
       valueMemberPath="Value2"/>
   <igx-callout-layer name="callout"
       xMemberPath="Index"
       yMemberPath="Value"
       labelMemberPath="Label" />
</igx-data-chart>
```

### Crosshair Layer

The crosshair layer renders as crossing lines intersecting at the actual value of every series that they are configured to target with each series rendering a separate set of lines.

You can configure the crosshair layer so that the layer will only display one specific series as by default they target all series on the `IgxDataChart` control. To achieve this, set the `TargetSeries` property.

By default, the color of the crosshair lines is the color of the series that it is interacting with. However, this default setting can be overridden so that you can select a color that will be used for the crosshair lines. This is done by setting the `Brush` property.

The following code snippet shows how to add a crosshair layer to the chart:

```html
<igx-data-chart dataSource={this.data}
   width="100%"
   height="400px" >
   <igx-category-x-axis name="xAxis" />
   <igx-numeric-y-axis  name="yAxis" />

   <igx-column-series name="series1"
       xAxisName="xAxis"
       yAxisName="yAxis"
       valueMemberPath="Value1" />
   <igx-column-series name="series2"
       xAxisName="xAxis"
       yAxisName="yAxis"
       valueMemberPath="Value2" />

   <igx-crosshair-layer name="crosshair" />
</igx-data-chart>
```

### Final Value Layer

The final value layer displays annotations along the chart’s axes that represent the final value of a series on the `IgxDataChart` control.

You can configure the annotations to target a specific series if you want to have multiple final value layers present with different configurations. This can be done be setting the `TargetSeries` property.

The following code snippet demonstrates how to add a final value layer to the chart:

```html
<igx-data-chart dataSource={this.data}
   width="100%"
   height="400px">
   <igx-category-x-axis name="xAxis" />
   <igx-numeric-y-axis name="yAxis" />

   <igx-column-series name="series1"
       xAxisName="xAxis"
       yAxisName="yAxis"
       valueMemberPath="Value1"/>
   <igx-column-series name="series2"
       xAxisName="xAxis"
       yAxisName="yAxis"
       valueMemberPath="Value2"/>

   <igx-final-value-layer name="finalValue" />
</igx-data-chart>
```
