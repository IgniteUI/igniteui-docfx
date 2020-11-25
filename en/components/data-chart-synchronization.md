---
title: Angular Data Chart | Data Visualization Tools | Synchronization | Infragistics
_description: Synchronize between multiple Infragistics' Angular charts controls including zooming, panning and crosshair events. Learn about our Ignite UI for Angular graph synchronization capabilies!
_keywords: Angular charts, data chart, synchronization, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamDataChart']
---

# Angular Chart Synchronization

The Ignite UI for Angular data chart component allows for synchronization with respect to the coordination of zooming, panning, and crosshair events between multiple charts. This can help you to visualize the same areas of multiple charts, assuming your data sources are similar or the same with respect to the axes.

## Angular Chart Synchronization Example

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-chart-synchronization-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-chart-synchronization' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular Chart Synchronization Example"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-chart-synchronization-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>


</div>

<div class="divider--half"></div>

There are four options of chart synchronization, in that you can synchronize horizontally only, vertically only, both, or you can choose not to synchronize at all, which is the default.

If you want to synchronize a set of charts, you can assign them the same name to the `SyncChannel` property and then specify whether or not to synchronize the charts horizontally and/or vertically by setting the `SynchronizeHorizontally` and `SynchronizeVertically` properties to the corresponding boolean value.

Note that in order to synchronize either vertically and/or horizontally, you will need to set the [`isHorizontalZoomEnabled`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html#ishorizontalzoomenabled) and/or [`isVerticalZoomEnabled`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html#isverticalzoomenabled) property to `true`, respectively. A synchronized chart that is dependent on another chart will still zoom regardless of this property setting.

## Code Snippet

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
