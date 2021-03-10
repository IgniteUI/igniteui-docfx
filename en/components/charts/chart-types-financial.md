---
title: Angular Financial Chart | Data Visualization | Infragistics
_description: Infragistics' Angular Financial Chart
_keywords: Angular Charts, Financial Chart, Infragistics
mentionedTypes: ["XamFinancialChart"]
---

# Angular Financial Chart

Angular  Financial Chart makes it easy to visualize financial and stock data by using a simple and intuitive API. It's purpose is for building high-performance, high-volume financial services, and capital market data applications.

There are several display modes for price and volume and a host of financial indicators. Financial chart analyzes and selects data columns - Date/Time column to use for x-axis and Open, High, Low, Close, Volume columns or the first 5 numeric columns for y-axis. Beyond this, the user can specify the chart type to either Bar, Candle, Column, and Line. With its five main visual elements, a toolbar, a prices view, a volume view, an indicators view, and a navigation view, data has become more perceptible.

You can explicitly specify the chart type by setting the chartType property to one of the following options:

-   Bar 
-   Candle
-   Column 
-   Line
-   Auto - Specifies automatic selection of chart type based on Data Adapter which suggest one of above values based names and number of numeric columns in your data. For example, it will suggest Bar for data items with Open, High, Low, Close columns.

## Angular Stock Chart with Multiple Series

<div class="sample-container loading" style="height: 400px">
    <iframe id="cc-chart-with-legend" src='{environment:dvDemosBaseUrl}/charts/financial-chart-stock-index-chart' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular Stock Index Chart"></iframe>
</div>

<div class="divider--half"></div>

## Angular Stock Chart Example

In this example, the financial chart is representing the S&P 500 over the course of a year.

<!-- TODO use this iframe which will point to a new sample:
<iframe src='{environment:dvDemosBaseUrl}/charts/category-chart-type-Line' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular Financial Chart Example"></iframe> -->

## Angular Simple Stock Chart

<!-- TODO show code for FinancialChart with:
- the dataSource set to multiple data sources
- the chartType property set to Candlestick
- the zoomSliderType property set to Candlestick
-->

## Composite Angular Stock Chart

In this example, the financial chart is plotting revenue for United States.

<!-- TODO show code for FinancialChart with:
- the dataSource set to multiple data sources
- the volumeType="Column"
- the overlayType="BollingerBands"
- the indicatorTypes="AverageTrueRange"
-->

## Styling Angular Stock Chart

In this example, the financial chart is comparing revenue between Amazon, Microsoft and Tesla.

<!-- TODO show code for FinancialChart with:
- the brushes and outlines properties set
- the thickness property set
-->

## Angular Advanced Stock Chart

If you need a Financial Chart with more features such as composite other series, you can configure the thickness, outlines, brushes, negative outlines, negative brushes as demonstrated below. 

<!-- TODO copy and combine content (code snippets, description) from these topics:
	data-chart-type-financial-candlestick-series.md
	data-chart-type-financial-ohlc-series.md
	data-chart-type-financial-line-indicators.md
	data-chart-type-financial-overlays.md
-->

## Additional Resources

<!-- TODO list topic links related to this topic -->

## API Members

<!-- TODO list API links used in this topic -->
