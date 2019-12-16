---
title: Data Chart | Visualization Tools | Ignite UI for Angular | Infragistics | Bar Chart
_description: Create a bar chart that displays multiple instances of visual elements in the same plot area in order to create composite chart views.
_keywords: data chart, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamDataChart']
---

## Bar Chart

The Ignite UI for Angular bar chart belongs to a group of category charts and it is rendered using a collection of rectangles that extend from the left to right of the chart towards the values of data points. [`IgxBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html) uses the same concepts of data plotting as [`IgxColumnSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcolumnseriescomponent.html) but data points are stretched along a vertical line (y-axis) rather than horizontal line (x-axis). In other words, the bar chart is rendered like the column chart, but with 90 degrees clockwise rotation.

### Demo

<div class="sample-container loading" style="height: 400px">
    <iframe id="data-chart-type-category-series-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-category-bar-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-category-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Required Axes

The Angular data chart component provides various types of axes but only the following types of axes can be used with [`IgxBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html).

-   [`IgxNumericXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericxaxiscomponent.html)
-   [`IgxCategoryYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryyaxiscomponent.html)

### Required Data

The [`IgxBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html) has the following data requirements:

-   The data source must be an array or a list of data items.
-   The data source must contain at least one data item otherwise the chart will not render the [`IgxBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html).
-   All data items must contain at least one data column (string or date time) which should be mapped to the `Label` property of the category axis (e.g. [`IgxCategoryYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryyaxiscomponent.html)).
-   All data items must contain at least one numeric data column which should be mapped using the `ValueMemberPath` property of the [`IgxBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html).

You can use the [SampleCategoryData](data-chart-data-sources-category.md) as data source which meets above data requirements.

```ts
public dataSource: any[] = SampleCategoryData.create();
```

### Required Modules

Creation of the [`IgxBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html) requires the following modules:

```ts
// axis' modules:
import { IgxNumericXAxis } from 'igniteui-angular-charts';
import { IgxCategoryYAxis } from 'igniteui-angular-charts';
// series' modules:
import { IgxBarSeries } from 'igniteui-angular-charts';
// data chart's modules:

import { IgxDataChartCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartCategoryModule } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxDataChartCoreModule,
        IgxDataChartCategoryModule,
        // ...
    ]
})
```

### Code Example

This code demonstrates how to create an instance of the Ignite UI for Angular data chart with [`IgxBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html) and bind it to a data source.

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-numeric-x-axis  name="xAxis"></igx-numeric-x-axis>
    <igx-category-y-axis name="yAxis" label="Year"></igx-category-y-axis>
    <igx-bar-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        valueMemberPath="USA">
    </igx-bar-series>
 </igx-data-chart>
```

### Additional Resources

-   [Axis Types](data-chart-axis-types.md)
-   [Axis Sharing](data-chart-axis-sharing.md)
-   [Chart Legend](data-chart-legends.md)
-   [Series Annotations](data-chart-series-annotations.md)
-   [Series Highlighting](data-chart-series-highlighting.md)
-   [Series Markers](data-chart-series-markers.md)
-   [Series Tooltips](data-chart-series-tooltips.md)
-   [Series Trendlines](data-chart-series-trendlines.md)
-   [Series Types](data-chart-series-types.md)
