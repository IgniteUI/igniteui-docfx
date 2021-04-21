---
title: Angular Data Chart | Data Visualization Tools | Infragistics | Synchronization
_description: Create a data chart that displays multiple instances of visual elements in the same plot area in order to create composite chart views.
_keywords: data chart, Ignite UI for Angular, Infragistics
_language: kr
---

# Angular Chart Synchronization

The Ignite UI for Angular data chart component allows for synchronization with respect to the coordination of zooming, panning, and crosshair events between multiple charts. This can help you to visualize the same areas of multiple charts, assuming your data sources are similar or the same with respect to the axes.

## Demo

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-chart-synchronization"
           github-src="charts/data-chart/chart-synchronization">
</code-view>

<div class="divider--half"></div>

There are four options of chart synchronization, in that you can synchronize horizontally only, vertically only, both, or you can choose not to synchronize at all, which is the default.

If you want to synchronize a set of charts, you can assign them the same name to the `SyncChannel` property and then specify whether or not to synchronize the charts horizontally and/or vertically by setting the `SynchronizeHorizontally` and `SynchronizeVertically` properties to the corresponding boolean value.

Note that in order to synchronize either vertically and/or horizontally, you will need to set the `IsHorizontalZoomEnabled` and/or `IsVerticalZoomEnabled` property to `true`, respectively. A synchronized chart that is dependent on another chart will still zoom regardless of this property setting.

## Code Snippet - Chart Synchronization

The following code snippet demonstrates how to synchronize a pair of chart controls in the Ignite UI for Angular data chart:

```html
<igx-data-chart width="600px"
    height="400px"
    [dataSource]="data"
    isHorizontalZoomEnabled=true
    isVerticalZoomEnabled=true
    syncChannel="ChannelA"
    synchronizeHorizontally=true
    synchronizeVertically=true>
</igx-data-chart>

<igx-data-chart width="600px"
    height="400px"
    [dataSource]="data"
    isHorizontalZoomEnabled=true
    isVerticalZoomEnabled=true
    syncChannel="ChannelA"
    synchronizeHorizontally=true
    synchronizeVertically=true>
</igx-data-chart>
```
