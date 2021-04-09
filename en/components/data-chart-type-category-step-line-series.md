---
title: Angular Data Chart | Data Visualization Tools | Step Line Chart | Data Binding | Infragistics
_description: Use Infragistics' Angular charts control to create step line charts. Learn about our Ignite UI for Angular graph types!
_keywords: Angular charts, data chart, step line chart, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamDataChart']
---

# Angular Step Line Chart

The Ignite UI for Angular step line chart belongs to a group of category charts and it is rendered using a collection of points connected by continuous vertical and horizontal lines forming a step-like progression. Values are represented on the y-axis and categories are displayed on the x-axis. [`IgxStepLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsteplineseriescomponent.html) emphasizes the amount of change over a period of time or compares multiple items. The Angular step line chart is identical to the Angular step area chart in all aspects except that the area below the step lines is not filled in.

## Angular Step Line Chart Example

<code-view style="height: 400px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-type-category-step-line-series" 
           alt="Angular Step Line Chart Example" 
           github-src="charts/data-chart/type-category-step-line-series">
</code-view>

<div class="divider--half"></div>

## Required Axes

The Angular data chart component provides various types of axes but only the following types of axes can be used with [`IgxStepLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsteplineseriescomponent.html).

-   [`IgxCategoryXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html)
-   [`IgxOrdinalTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html)
-   [`IgxTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html)
-   [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html)

## Required Data

The [`IgxStepLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsteplineseriescomponent.html) has the following data requirements:

-   The data source must be an array or a list of data items.
-   The data source must contain at least one data item otherwise the chart will not render the [`IgxStepLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsteplineseriescomponent.html).
-   All data items must contain at least one data column (string or date time) which should be mapped to the [`IgxLabelComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlabelcomponent.html) property of the category axis (e.g. [`IgxCategoryXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html))
-   All data items must contain at least one numeric data column which should be mapped using the `ValueMemberPath` property of the [`IgxStepLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsteplineseriescomponent.html).

You can use the [SampleCategoryData](data-chart-data-sources-category.md) as data source which meets above data requirements.

```ts
public dataSource: any[] = SampleCategoryData.create();
```

## Required Modules

Creation of the [`IgxStepLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsteplineseriescomponent.html) requires the following modules:

```ts
// axis' modules:
import { IgxCategoryXAxis } from 'igniteui-angular-charts';
import { IgxNumericYAxis } from 'igniteui-angular-charts';
// series' modules:
import { IgxStepLineSeries } from 'igniteui-angular-charts';
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

## Code Example

This code demonstrates how to create an instance of the Ignite UI for Angular data chart with [`IgxStepLineSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsteplineseriescomponent.html) and bind it to a data source.

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-category-x-axis name="xAxis" label="Year"></igx-category-x-axis>
    <igx-numeric-y-axis  name="yAxis"></igx-numeric-y-axis>
    <igx-step-line-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        valueMemberPath="USA">
    </igx-step-line-series>
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
