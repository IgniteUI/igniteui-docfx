---
title: Angular Chart Trendlines | Data Visualization | Infragistics
_description: Infragistics' Angular Chart Trendlines
_keywords: Angular Charts, Trendlines, Infragistics
mentionedTypes: ["XamFinancialChart", "XamCategoryChart", "XamDataChart", "TrendLineType"]
---

# Angular Chart Trendlines

In Ignite UI for Angular charts, trendlines help in identifying a trend or finding patterns in data. Trendlines are always rendered in front of data points bound to the chart and are supported by the `XamCategoryChart`, `XamFinancialChart`, and [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) (except for stacked series, shape series, and range series).

Trendlines are off by default, but you can enable them by setting the [`TrendLineType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/trendlinetype.html) property. Also, you can modify multiple appearance properties of trendlines such as its brush, period, and thickness. 

# Angular Chart Trendlines Example

The following sample depicts a `XamFinancialChart` showing the stock trend of Microsoft between 2013 and 2017 with a [`QuinticFit`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/trendlinetype.html#quinticfit) trendline initially applied. There is a drop-down that will allow you to change the type of trendline that is applied, and all possible trendline types are listed within that drop-down.

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-trendlines"
           alt="Angular Trendlines Example"
           github-src="charts/financial-chart/trendlines">
</code-view>

<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart features in these topics:

-   [Chart Annotations](chart-annotations.md)
-   [Chart Highlighting](chart-highlighting.md)

## API Members

The following is a list of API members mentioned in the above sections:

-   `XamCategoryChart`
-   [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html)
-   `XamFinancialChart`
-   [`TrendlineType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/trendlinetype.html)
