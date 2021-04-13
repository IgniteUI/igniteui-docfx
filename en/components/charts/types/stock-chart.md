---
title: Angular Stock/Financial Charts | Ignite UI for Angular
_description: The Ignite UI for Angular Stock Chart is a composite visualization that renders stock ticker data, or price data in an interactive time-series display. Try for FREE.
_keywords: Angular Charts, Stock Chart, Financial Chart, Candlestick Chart, OHLC Chart, Infragistics
mentionedTypes: ["FinancialChart", "ChartType", "IndicatorTypes", "ZoomSliderType"]
---

# Angular Stock Chart

The Ignite UI for Angular Stock Chart, sometimes referred to as Angular Financial Chart or Candlestick Chart, is a composite visualization that renders stock ticker data, or price data in an interactive time-series display. Stock Chart shows stock prices for a ticker over time in a Time Series X-Axis. Also, this chart shows information for a company’s ticker data like Open Price, High Price, Low Price and Close Price (OHLC) for configurable period of time. The Stock Chart offers multiple ways in which the data can be visualized and interpreted, including display modes for price and volume and a host of Stock indicators.

## Angular Stock Chart Example

You can create Stock Chart using the [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html) control by binding your data and optionally setting [`chartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#charttype) property to [`line`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/charttype.html#line) value, as shown in the example below.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-multiple-data"
           alt="Angular Stock Chart Example" >
</code-view>

<div class="divider--half"></div>

## Stock Chart Recommendations

### Are Angular Stock Charts right for your project?

The typical stock chart is represented with ticker data in a candlestick chart which is used for the technical analysis of the price ranges. A candlestick chart compares the high and low prices of a day to the open and close of the ticker symbol.

-   The body of the candlestick chart shows the open and close trade values (O/C).
-   The wicks of the candlestick chart show the high and low trade prices (H/L).
-   The distance between the top and bottom of the ticker value is the day range of the ticker price.
-   The candlestick chart ticker value is hollow when the asset closed higher than it opened.
-   The candlestick chart ticker value is filled when the asset closed lower than it opened.
-   A black or red candle represents a price with a lower closing price than the prior candle's close.
-   A white or green candle represents a higher closing price than the prior candle's close.

The Stock Chart can be set to display one of the following:

-   Candlestick Chart
-   Bar Chart
-   Column Chart
-   Line Chart

As a Stock Chart is meant to allow the user to perform data analysis functions, it includes interactive elements such as:

-   Time-based Filters
-   Prices View
-   Volume View
-   Indicators View
-   Trend Lines
-   Navigation / Zoombar View

### Stock Chart Data Structure:

-   The data source must be an array or a list of data items.
-   The data source must contain at least one data item.
-   All data items must contain at least one date-time (or string) column that represents the date of the ticker data.
-   All data items must contain 1 numeric column for Bar, Line, and Column chart.
-   All data items must contain 4 numeric columns for Open, High, Low, Close (OHLC) for a Candlestick chart.
-   All data items must contain 5 numeric columns for Open, High, Low, Close and Volume for a Candlestick chart.

## Angular Stock Chart with Multiple Series

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-multiple-data"
           alt="Angular Stock Index Chart" >
</code-view>

<div class="divider--half"></div>

## Angular Stock Chart

In this example the Stock Chart is representing the S&P 500 over the course of a year; useful for investors and conducting technical analysis and forecasting future pricing/reports.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-stock-index-chart"
           alt="Angular Stock Index Chart" >
</code-view>

<div class="divider--half"></div>

## Angular Stock Chart Styling

If you need a Stock Chart with more features such as composite other series, you can configure the thickness, outlines, brushes, negative outlines, negative brushes as demonstrated below. In this example, the stock chart is comparing revenue between Amazon, Microsoft and Tesla.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-styling"
           alt="Angular Stock Index Chart" >
</code-view>

<div class="divider--half"></div>

## Angular Chart Annotations

The Crosshair Annotation Layer provides crossing lines that meet at the actual value of every targeted series. Crosshair types include: Horizontal, Vertical, and Both. The Crosshairs can also be configured to snap to data points by setting the [`crosshairsSnapToData`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#crosshairssnaptodata) property to true, otherwise the crosshairs will be interpolated between data points. Annotations can also be enabled to display the crosshair's value along the axis.

The Final Value Layer provides a quick view along the axis of the ending value displayed in a series.

The Callout Layer displays a callout at X/Y positions.

Note: When using the ordinal X axis mode, the CalloutsXMemberPath should point to the numeric index of the item, otherwise CalloutsXMemberPath should point to the time value.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-annotations"
           alt="Angular Chart Annotations" >
</code-view>

<div class="divider--half"></div>

## Angular Chart Panes

The following panes are available:

-   Price Pane - Renders prices using Line, Candlestick, Bar (OHLC), trendlines and financial overlays.
-   Indicator Pane - Renders all the financial indicators in a separate chart while the BollingerBands and PriceChannel overlays are rendered in the Price Pane because they share the same values range on Y-Axis.
-   Volume Pane - Renders stocks volumes using Column, Line, and Area chart types below all above panes.
-   Zoom Pane - Controls the zoom of all the panes and it is always rendered at bottom of the chart.

### Indicator Pane

Financial Indicators are often used by traders to measure changes and to show trends in stock prices. These indicators are usually displayed below the price pane because they do not share the same Y-Axis scale.

By default the indicator panes are not displayed. The toolbar allows the end user to select which indicator to display at run time.
In order to display an indicator pane initially, the [`indicatorTypes`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#indicatortypes) property must be set to a least one type of indicator, as demonstrated in the following code:

### Volume Pane

The volume pane represents the number of shares traded during a given period. Low volume would indicate little interest, while high volume would indicate high interest with a lot of trades.  This can be displayed using column, line or area chart types. The toolbar allows the end user to display the volume pane by selecting a chart type to render the data at runtime. In order the display the pane, a volume type must be set, as demonstrated in the following code:

### Price Pane

This pane displays stock prices and shows the stock's high, low, open and close prices over time. In addition it can display trend lines and overlays. Your end user can choose different chart types from the toolbar. By default, the chart type is set to `Auto`. You can override the default setting, as demonstrated in the following code:

Note that is recommended to use line chart type if plotting multiple data sources or if plotting data source with a lot of data points.

### Zoom Pane

This pane controls the zoom of all the displayed panes. This pane is displayed by default. It can be turned off by setting the [`zoomSliderType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#zoomslidertype) to `none` as demonstrated in the following code:

Note that you should set the [`zoomSliderType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#zoomslidertype) option to the same value as the [`chartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#charttype) option is set to. This way, the zoom slider will show correct preview of the price pane. The following code demonstrates how to do this:

In this example, the stock chart is plotting revenue for United States.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-panes"
           alt="Angular Chart Panes" >
</code-view>

<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart features in these topics:

-   [Chart Animations](../features/chart-animations.md)
-   [Chart Annotations](../features/chart-annotations.md)
-   [Chart Navigation](../features/chart-navigation.md)
-   [Chart Trendlines](../features/chart-trendlines.md)
-   [Chart Performance](../features/chart-performance.md)

## API Members

The following table lists API members mentioned in the above sections:

-   [`chartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#charttype)
-   [`crosshairsSnapToData`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#crosshairssnaptodata)
-   [`indicatorTypes`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#indicatortypes)
-   [`zoomSliderType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#zoomslidertype)
-   [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html)
