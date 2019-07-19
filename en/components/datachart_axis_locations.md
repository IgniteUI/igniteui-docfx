---
title: Data Chart | Visualization Tools | Ignite UI for Angular | Infragistics | Axis Location
_description: Create a data chart that displays multiple instances of visual elements in the same plot area in order to create composite chart views.
_keywords: data chart, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamDataChart']
---

## Axis Locations

 For all axes have, you can specify axis location in relationship to chart plot area. This especially important when using more than two axes in the same data chart or when [Sharing Axis](datachart_axis_sharing.md) between multiple series.

### Demo

<div class="sample-container loading" style="height: 450px">
    <iframe id="data-chart-axis-locations-iframe" src='{environment:demosBaseUrl}/charts/data-chart-axis-locations' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-axis-locations-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Code Example

This code demonstrates how to create data chart with two [`IgxNumericYAxisComponent`](datachart_axis_locations.md) that will be placed on left/right sides and two [`IgxCategoryXAxisComponent`](datachart_axis_locations.md) that will be stacked on one another.

```html
   <igx-data-chart
            [dataSource]="dataSource"
            width="700px"
            height="500px">
        
            <igx-category-x-axis name="xAxisYears"
            interval="12" labelLocation="OutsideBottom"
            label="Year"  overlap="1" gap="0.4"  >
            </igx-category-x-axis>
            <igx-category-x-axis name="xAxisMonths"
            interval="1"  labelLocation="OutsideBottom"
            label="Month" overlap="1" gap="0.4" >
            </igx-category-x-axis>

            <igx-numeric-y-axis  name="yAxisLeft"
            title="Expanse | Revenue"
            minimumValue="-900" labelLocation="OutsideLeft"
            maximumValue="900"
            interval="300" >
            </igx-numeric-y-axis>
            <igx-numeric-y-axis  name="yAxisRight"
            title="Profit (%)"
            minimumValue="0"  labelLocation="OutsideRight"
            maximumValue="100" >
            </igx-numeric-y-axis>        
            <igx-column-series name="series1"
            valueMemberPath="Revenue"
            xAxisName="xAxisMonths"
            yAxisName="yAxisLeft" >
            </igx-column-series>
            <igx-column-series name="series3"
            valueMemberPath="Expanse"
            xAxisName="xAxisMonths"
            yAxisName="yAxisLeft" >
            </igx-column-series>
            <igx-column-series name="series2"
            valueMemberPath="Profit"
            xAxisName="xAxisYears"
            yAxisName="yAxisRight" >
            </igx-column-series>
         </igx-data-chart>
```

### Additional Resources

-   [Axis Types](datachart_axis_types.md)
-   [Axis Sharing](datachart_axis_sharing.md)
-   [Series Types](datachart_series_types.md)
