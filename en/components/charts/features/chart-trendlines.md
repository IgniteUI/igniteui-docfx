---
title: Angular Chart Trendlines | Data Visualization | Infragistics
_description: Infragistics' Angular Chart Trendlines
_keywords: Angular Charts, Trendlines, Infragistics
mentionedTypes: ["DomainChart", "FinancialChart", "CategoryChart", "XamDataChart", "TrendLineType"]
namespace: Infragistics.Controls.Charts
---

# Angular Chart Trendlines

In Ignite UI for Angular charts, trendlines help in identifying a trend or finding patterns in data. Trendlines are always rendered in front of data points bound to the chart and are supported by the [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html), [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html), and [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) (except for stacked series, shape series, and range series).

Trendlines are off by default, but you can enable them by setting the [`trendLineType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#trendLineType) property. Also, you can modify multiple appearance properties of trendlines such as its brush, period, and thickness.

The trendlines also have the ability to have a dash array applied to them once enabled. This is done by setting the `TrendLineDashArray` property to an array of numbers. The numeric array describes the length of the dashes of the trendline.

# Angular Chart Trendlines Example

The following sample depicts a [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html) showing the stock trend of Microsoft between 2013 and 2017 with a **QuinticFit** trendline initially applied. There is a drop-down that will allow you to change the type of trendline that is applied, and all possible trendline types are listed within that drop-down.

<code-view style="height: 500px" alt="Angular Trendlines Example"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart/trendlines"
                                                 github-src="charts/financial-chart/trendlines">
</code-view>


<div class="divider--half"></div>

# Angular Chart Trendlines Dash Array Example

The following sample depicts a [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) showing a [`IgxFinancialPriceSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialpriceseriescomponent.html) with a **QuarticFit** dashed trendline applied via the [`trendLineDashArray`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialpriceseriescomponent.html#trendLineDashArray) property:

<code-view style="height: 500px" alt="Angular Trendlines Example"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/dash-array-trendline"
                                                 github-src="charts/data-chart/dash-array-trendline">
</code-view>


<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart features in these topics:

*   [Chart Annotations](chart-annotations.md)
*   [Chart Highlighting](chart-highlighting.md)

## API References

The [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) and [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html) components share the following API properties:

*   [`trendLineBrushes`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#trendLineBrushes)
*   [`trendLinePeriod`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#trendLinePeriod)
*   [`trendLineThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#trendLineThickness)
*   [`trendLineType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#trendLineType)

In the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) component, most types of series have the following API properties:

*   `TrendLineBrush`
*   `TrendLineDashArray`
*   [`trendLinePeriod`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#trendLinePeriod)
*   [`trendLineThickness`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#trendLineThickness)
*   [`trendLineType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#trendLineType)
