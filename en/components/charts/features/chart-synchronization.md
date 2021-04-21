---
title: Angular Data Chart | Data Visualization Tools | Synchronization | Infragistics
_description: Synchronize between multiple Infragistics' Angular charts controls including zooming, panning and crosshair events. Learn about our Ignite UI for Angular graph synchronization capabilities!
_keywords: Angular charts, data chart, synchronization, Ignite UI for Angular, Infragistics
mentionedTypes: ["XamDataChart"]
---

# Angular Chart Synchronization

The Ignite UI for Angular data chart allows for synchronization with respect to the coordination of zooming, panning, and crosshair events between multiple charts. This can help you to visualize the same areas of multiple charts, assuming your data sources are similar or the same with respect to the axes.

## Angular Chart Synchronization Example

This sample shows synchronization of two Angular data charts:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-chart-synchronization"
           alt="Angular Chart Synchronization Example"
           github-src="charts/data-chart/chart-synchronization">
</code-view>

<div class="divider--half"></div>

## Chart Synchronization Properties

There are four options of chart synchronization, in that you can synchronize horizontally only, vertically only, both, or you can choose not to synchronize at all, which is the default.

If you want to synchronize a set of charts, you can assign them the same name to the `SyncChannel` property and then specify whether or not to synchronize the charts horizontally and/or vertically by setting the `SynchronizeHorizontally` and `SynchronizeVertically` properties to the corresponding boolean value.

Note that in order to synchronize either vertically and/or horizontally, you will need to set the [`isHorizontalZoomEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html#ishorizontalzoomenabled) and/or [`isVerticalZoomEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html#isverticalzoomenabled) property to `true`, respectively. A synchronized chart that is dependent on another chart will still zoom regardless of this property setting.

## API Members

The following is a list of API members mentioned in the above sections:

-   [`isHorizontalZoomEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html#ishorizontalzoomenabled)
-   [`isVerticalZoomEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html#isverticalzoomenabled)
-   `SyncChannel`
-   `SynchronizeHorizontally`
-   `SynchronizeVertically`
-   [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html)
