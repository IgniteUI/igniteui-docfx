---
title: Data Chart | Visualization Tools | Ignite UI for Angular | Infragistics | Financial
_description: Create a data chart that displays multiple instances of visual elements in the same plot area in order to create composite chart views.
_keywords: data chart, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamDataChart', 'FinancialPriceSeries']
---

## Financial OHLC Chart

The Ignite UI for Angular financial price chart in `OHLC` display mode is used to plot stock prices, and show the stock’s High, Low, Open, and Close prices for each day. Each data point is plotted as a vertical line with horizontal perpendicular lines on both the left and right side. The vertical line indicates the span between high and low values of an investment. The top of the vertical line indicates the highest price during a session and the bottom of the vertical line indicates the lowest price during a session. The horizontal lines indicate the span between the opening and closing values of an investment. The horizontal line on the left-hand side of the vertical line indicates the opening value of a session. The horizontal line on the right-hand side of the vertical line indicates the closing value of a session.

### Demo

<div class="sample-container loading" style="height: 400px">
    <iframe id="data-chart-type-financial-series-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-financial-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-financial-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Required Axes

The Angular data chart component provides various types of axes but all financial series can only use the [`IgxNumericYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html) as Y-Axis and [`IgxCategoryXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html), [`IgxOrdinalTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html), or [`IgxTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) as X-Axis.

### Required Data

Financial series have the following data requirements:

-   The data source must be an array or a list of data items
-   The data source must contain at least one data item otherwise the data chart will not render the financial series.
-   All data items must contain at least one data column (string or date time) which should be mapped to the `Label` property of the financial axis (e.g. [`IgxCategoryXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html))
-   All data items must contain 5 numeric data column which should be mapped using properties of a financial series: [`openMemberPath`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialseriescomponent.html#openmemberpath), [`highMemberPath`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialseriescomponent.html#highmemberpath), [`lowMemberPath`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialseriescomponent.html#lowmemberpath), [`closeMemberPath`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialseriescomponent.html#closememberpath), [`volumeMemberPath`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialseriescomponent.html#volumememberpath)

You can use the [SampleFinancialData](datachart_data_sources_financial.md) as data source which meets above data requirements.

```ts
this.state = { dataSource: SampleFinancialData.create() }
```

### Required Modules

The financial series require the following modules:

```ts
// axis' modules:
import { IgxNumericYAxis } from "igniteui-angular-charts/ES5/igx-numeric-y-axis";
import { IgxCategoryXAxis } from "igniteui-angular-charts/ES5/igx-category-x-axis";
// series' modules:
import { IgxFinancialPriceSeries } from "igniteui-angular-charts/ES5/igx-financial-price-series";
// data chart's modules:
import { IgxDataChartModule } from "igniteui-angular-charts/ES5/igx-data-chart-module";
import { IgxDataChartCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-core-module";

// in app.module.ts file
@NgModule({
    imports: [
        // ...
        IgxDataChartModule,
        IgxDataChartCoreModule,
        // ...
    ]
})
```

### Code Example

This code demonstrates how to create an instance of data chart with [`IgxFinancialPriceSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialpriceseriescomponent.html).

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">

    <igx-category-x-axis name="xAxis" label="Date"></igx-category-x-axis>
    <igx-numeric-y-axis  name="yAxis"></igx-numeric-y-axis>

    <igx-financial-price-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        displayType="OHLC"
        lowMemberPath="Low"
        highMemberPath="High"
        openMemberPath="Open"
        closeMemberPath="Close"
        volumeMemberPath="Volume">
    </igx-financial-price-series>

 </igx-data-chart>
```

### Additional Resources

-   [Axis Types](datachart_axis_types.md)
-   [Axis Sharing](datachart_axis_sharing.md)
-   [Chart Legend](datachart_chart_legends.md)
-   [Series Annotations](datachart_series_annotations.md)
-   [Series Highlighting](datachart_series_highlighting.md)
-   [Series Markers](datachart_series_markers.md)
-   [Series Tooltips](datachart_series_tooltips.md)
-   [Series Trendlines](datachart_series_trendlines.md)
-   [Series Types](datachart_series_types.md)
