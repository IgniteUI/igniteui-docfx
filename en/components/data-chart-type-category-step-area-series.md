---
title: Angular Data Chart | Data Visualization Tools | Step Area Chart | Data Binding | Infragistics
_description: Use Infragistics' Angular charts control to create step area charts. Learn about our Ignite UI for Angular graph types!
_keywords: Angular charts, data chart, step area chart, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamDataChart']
---

# Angular Step Area Chart

The Ignite UI for Angular step area chart belongs to a group of category charts and it is rendered using a collection of points connected by continuous vertical and horizontal lines with the area below lines filled in. Values are represented on the y-axis and categories are displayed on the x-axis. [`IgxStepAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstepareaseriescomponent.html) emphasizes the amount of change over a period of time or compares multiple items. The Angular step area chart is identical to the Angular step line chart in all aspects except that the area below the step lines is filled in.

## Angular Step Area Chart Example

<div class="sample-container loading" style="height: 400px">
    <iframe id="data-chart-type-category-series-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-category-step-area-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular Step Area Chart Example"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-category-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>


</div>

<div class="divider--half"></div>

## Required Axes

The Angular data chart component provides various types of axes but only the following types of axes can be used with [`IgxStepAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstepareaseriescomponent.html).

-   [`IgxCategoryXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html)
-   [`IgxOrdinalTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html)
-   [`IgxTimeXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html)
-   [`IgxNumericYAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html)

## Required Data

The [`IgxStepAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstepareaseriescomponent.html) has the following data requirements:

-   The data source must be an array or a list of data items.
-   The data source must contain at least one data item otherwise the chart will not render the [`IgxStepAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstepareaseriescomponent.html).
-   All data items must contain at least one data column (string or date time) which should be mapped to the [`IgxLabelComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlabelcomponent.html) property of the category axis (e.g. [`IgxCategoryXAxisComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html))
-   All data items must contain at least one numeric data column which should be mapped using the `ValueMemberPath` property of the [`IgxStepAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstepareaseriescomponent.html).

You can use the [SampleCategoryData](data-chart-data-sources-category.md) as data source which meets above data requirements.

```ts
public dataSource: any[] = SampleCategoryData.create();
```

## Required Modules

Creation of the [`IgxStepAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstepareaseriescomponent.html) requires the following modules:

```ts
// axis' modules:
import { IgxCategoryXAxis } from 'igniteui-angular-charts';
import { IgxNumericYAxis } from 'igniteui-angular-charts';
// series' modules:
import { IgxStepAreaSeries } from 'igniteui-angular-charts';
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

This code demonstrates how to create an instance of the Ignite UI for Angular data chart with [`IgxStepAreaSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstepareaseriescomponent.html) and bind it to a data source.

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-category-x-axis name="xAxis" label="Year"></igx-category-x-axis>
    <igx-numeric-y-axis  name="yAxis"></igx-numeric-y-axis>
    <igx-step-area-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        valueMemberPath="USA">
    </igx-step-area-series>
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
