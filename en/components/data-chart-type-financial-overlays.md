---
title: Angular Data Chart | Data Visualization Tools | Financial Overlay | Infragistics
_description: Use Infragistics' Angular charts control to display financial overlays. Learn about our Ignite UI for Angular graph types!
_keywords: Angular charts, data chart, financial overlays, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamDataChart', 'FinancialPriceSeries']
---

# Angular Financial Overlays

Financial Overlays are often used by traders to measure changes and to show trends in stock prices. These overlays are usually displayed in front of the [`IgxFinancialPriceSeriesComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialpriceseriescomponent.html) because they share the same Y-Axis scale. In contrast, financial indicators do not share the same Y-Axis scale with the [`IgxFinancialPriceSeriesComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialpriceseriescomponent.html) and as result financial indicators are usually plotted below or above the [`IgxFinancialPriceSeriesComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialpriceseriescomponent.html) or overlays. However, the chart control supports plotting both overlays as well as indicators in the same plot area, if desired, using multiple axes or by sharing axes.

## Demo

<div class="sample-container loading" style="height: 400px">
    <iframe id="data-chart-type-financial-overlays-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-financial-overlays' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-financial-overlays-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>


</div>

<div class="divider--half"></div>

The following lists the available financial overlays:

-   [`IgxBollingerBandsOverlayComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbollingerbandsoverlaycomponent.html) (BBO) is based on the standard deviation in the prices, so they incorporate price changes in their width. The bands are wider when the standard deviation increases and narrower when the standard deviation decreases and are smoothed by a moving average. Apart from the standard deviation and smoothing period being user adjustable, there is also a user adjustable multiplier to affect the scale of the BollingerBandsOverlay width,
-   [`IgxPriceChannelOverlayComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpricechanneloverlaycomponent.html) (PCO) is price volatility or the changes in price over time between two parallel lines. The lower line is the trend line and is drawn on the lows prices, and the upper line is the channel line and is based on the high prices. Channels show trend direction for any time frame. Price channels, or trend, can be up, down or sideways

## Required Axes

The Angular data chart component provides various types of axes but all financial series can only use the [`IgxNumericYAxisComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html) as Y-Axis and [`IgxCategoryXAxisComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html), [`IgxOrdinalTimeXAxisComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html), or [`IgxTimeXAxisComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) as X-Axis.

## Required Data

Financial overlays have the following data requirements:

-   The data source must be an array or a list of data items
-   The data source must contain at least one data item otherwise the data chart will not render the financial series.
-   All data items must contain at least one data column (string or date time) which should be mapped to the [`IgxLabelComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlabelcomponent.html) property of the financial axis (e.g. [`IgxCategoryXAxisComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html))
-   All data items must contain 5 numeric data column which should be mapped using properties of a financial series: [`openMemberPath`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialseriescomponent.html#openmemberpath), [`highMemberPath`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialseriescomponent.html#highmemberpath), [`lowMemberPath`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialseriescomponent.html#lowmemberpath), [`closeMemberPath`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialseriescomponent.html#closememberpath), [`volumeMemberPath`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialseriescomponent.html#volumememberpath)

You can use the [SampleFinancialData](data-chart-data-sources-financial.md) as data source which meets above data requirements.

```ts
public dataSource: any[] = SampleFinancialData.create();
```

## Required Modules

The financial series requires the following modules<!-- Angular, React, WebComponents -->.<!-- end: Angular, React, WebComponents --><!-- Blazor --> to be registered in your application entry point:

-   DataChartCoreModule
-   DataChartFinancialModule
-   DataChartFinancialCoreModule
-   DataChartFinancialIndicatorsModule
-   DataChartInteractivityModule
    <!-- end: Blazor -->

```ts
// axis' modules:
import { IgxNumericYAxis } from 'igniteui-angular-charts';
import { IgxCategoryXAxis } from 'igniteui-angular-charts';
// series' modules:
import { IgxFinancialPriceSeries } from 'igniteui-angular-charts';
import { IgxBollingerBandsOverlay } from 'igniteui-angular-charts';
// data chart's modules:

import { IgxDataChartCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartCategoryModule } from 'igniteui-angular-charts';
import { IgxFinancialPriceSeriesModule } from 'igniteui-angular-charts';

// in app.module.ts file
@NgModule({
    imports: [
        // ...
        IgxDataChartCoreModule,
        IgxDataChartCategoryModule,
        IgxFinancialPriceSeriesModule,
        // ...
    ]
})
```

## Code Example

This code demonstrates how to create an instance of data chart with a [`IgxBollingerBandsOverlayComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbollingerbandsoverlaycomponent.html).

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

-   [Axis Types](data-chart-axis-types.md)
-   [Axis Sharing](data-chart-axis-sharing.md)
-   [Chart Legend](data-chart-legends.md)
-   [Series Annotations](data-chart-series-annotations.md)
-   [Series Highlighting](data-chart-series-highlighting.md)
-   [Series Markers](data-chart-series-markers.md)
-   [Series Tooltips](data-chart-series-tooltips.md)
-   [Series Trendlines](data-chart-series-trendlines.md)
-   [Series Types](data-chart-series-types.md)
