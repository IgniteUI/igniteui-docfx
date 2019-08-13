---
title: Data Chart | Visualization Tools | Ignite UI for Angular | Infragistics | Financial
_description: Create a data chart that displays multiple instances of visual elements in the same plot area in order to create composite chart views.
_keywords: data chart, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamDataChart', 'FinancialPriceSeries']
---

## Financial Series

<!-- This topic explains various types of financial series in the Angular data chart component. Financial series is a group of the simplest and most common form of data chart series that take financial data such as stock prices and render it as collection of OHLC bars or candlesticks along a horizontal line (e.g. `FinancialPriceSeries`). -->

TODO TODO TODO

### Demo

<div class="sample-container loading" style="height: 400px">
    <iframe id="data-chart-type-financial-series-iframe" src='{environment:demosBaseUrl}/charts/data-chart-type-financial-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-financial-series-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Financial Overlays

Financial overlays are usually displayed behind [`IgxFinancialPriceSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialpriceseriescomponent.html)
and they show trends in stock prices. These overlays can be plotted in the same Data Chart that plots [`IgxFinancialPriceSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialpriceseriescomponent.html) because they use the same scale of values on Y-Axis. The following list shows all types of financial overlays:

-   [`IgxBollingerBandsOverlayComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbollingerbandsoverlaycomponent.html) (BBO) is based on the standard deviation in the prices, so they incorporate price changes in their width. The bands are wider when the standard deviation increases and narrower when the standard deviation decreases and are smoothed by a moving average. Apart from the standard deviation and smoothing period being user adjustable, there is also a user adjustable multiplier to affect the scale of the BollingerBandsOverlay width,
-   [`IgxPriceChannelOverlayComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpricechanneloverlaycomponent.html) (PCO) is price volatility or the changes in price over time between two parallel lines. The lower line is the trend line and is drawn on the lows prices, and the upper line is the channel line and is based on the high prices. Channels show trend direction for any time frame. Price channels, or trend, can be up, down or sideways

### Required Axes

The Angular data chart component provides various types of axes but all financial series can only use the [`IgxNumericYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html) as Y-Axis and [`IgxCategoryXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html), [`IgxOrdinalTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html), or [`IgxTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) as X-Axis.

### Required Data

Financial overlays have the following data requirements:

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
import { IgxBollingerBandsOverlay } from "igniteui-angular-charts/ES5/igx-bollinger-bands-overlay";
import { IgxMedianPriceIndicator } from "igniteui-angular-charts/ES5/igx-median-price-indicator";
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

This code demonstrates how to create an instance of data chart with a [`IgxBollingerBandsOverlayComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbollingerbandsoverlaycomponent.html).

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    
    <igx-category-x-axis name="xAxis" label="Date"></igx-category-x-axis>
    <igx-numeric-y-axis  name="yAxis"></igx-numeric-y-axis>
    
    <igx-bollinger-bands-overlay
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        lowMemberPath="Low"
        highMemberPath="High"
        openMemberPath="Open"
        closeMemberPath="Close"
        volumeMemberPath="Volume">
    </igx-bollinger-bands-overlay>

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
