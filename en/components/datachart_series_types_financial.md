---
title: Data Chart | Visualization Tools | Ignite UI for Angular | Infragistics | Financial
_description: Create a data chart that displays multiple instances of visual elements in the same plot area in order to create composite chart views.
_keywords: data chart, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamDataChart', 'FinancialPriceSeries']
---

## Financial Series

This topic explains various types of financial series in the Angular data chart component. Financial series is a group of the simplest and most common form of data chart series that take financial data such as stock prices and render it as collection of OHLC bars or candlesticks along a horizontal line (e.g. [`IgxFinancialPriceSeriesComponent`](datachart_series_types_financial.md)).

### Demo

<div class="sample-container loading" style="height: 400px">
    <iframe id="data-chart-type-financial-series-iframe" src='{environment:demosBaseUrl}/charts/data-chart-type-financial-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-financial-series-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Types of Financial Series

The Data Chart supports 2 financial overlays, over 30 financial indicators, and the [`IgxFinancialPriceSeriesComponent`](datachart_series_types_financial.md) that plots stock prices such as high, low, open, and close prices over time. It can display stock prices as OHLC bars or Candlesticks using the [`displayType`](datachart_series_types_financial.md) property. This series is often used in combination with a number of financial indicators and financial overlays to measure changes and analyze trends of stock prices.

### Financial Overlays

Financial overlays are usually displayed behind [`IgxFinancialPriceSeriesComponent`](datachart_series_types_financial.md)
and they show trends in stock prices. These overlays can be plotted in the same Data Chart that plots [`IgxFinancialPriceSeriesComponent`](datachart_series_types_financial.md) because they use the same scale of values on Y-Axis. The following list shows all types of financial overlays:

-   [`IgxBollingerBandsOverlayComponent`](datachart_series_types_financial.md) (BBO) is based on the standard deviation in the prices, so they incorporate price changes in their width. The bands are wider when the standard deviation increases and narrower when the standard deviation decreases and are smoothed by a moving average. Apart from the standard deviation and smoothing period being user adjustable, there is also a user adjustable multiplier to affect the scale of the BollingerBandsOverlay width,
-   [`IgxPriceChannelOverlayComponent`](datachart_series_types_financial.md) (PCO) is price volatility or the changes in price over time between two parallel lines. The lower line is the trend line and is drawn on the lows prices, and the upper line is the channel line and is based on the high prices. Channels show trend direction for any time frame. Price channels, or trend, can be up, down or sideways

### Financial Indicators

Financial indicators are often used by traders to measure changes and to show trends in stock prices. These indicators are usually displayed in a separate chart above or below of a chart with the [`IgxFinancialPriceSeriesComponent`](datachart_series_types_financial.md) because they do not share the same Y-Axis scale. However, the chart control supports plotting price series and indicators in the same plot area, if desired, using multiple axes and by sharing axes. For more information on this, please refer to the [Axis Sharing and Multiple Axes](datachart_axis_sharing.md) topic. In addition, all financial indicators have the [`displayType`](datachart_series_types_financial.md) property that determines if an indicator renders using a line, columns, or area. The following list shows all types of financial indicators:

-   [`IgxAbsoluteVolumeOscillatorIndicatorComponent`](datachart_series_types_financial.md) (AVO) calculates the difference between two average volume measures. It is similar to the Percentage Volume Oscillator, but scores range from -100% to +100%. The indicator is used to identify whether volume trends are increasing or decreasing. The user can select the time period for analysis
-   [`IgxAccumulationDistributionIndicatorComponent`](datachart_series_types_financial.md) (ADI) is a very popular volume related indicator. It evaluates the supply and demand of a stock, security, or index over time by looking at disparities in whether investors are selling or buying
-   [`IgxAverageDirectionalIndexIndicatorComponent`](datachart_series_types_financial.md) |  (ADX) measures trend strength without regard to trend direction. This indicator is usually used to determine the strength and direction of the stock trends
-   [`IgxAverageTrueRangeIndicatorComponent`](datachart_series_types_financial.md) |  is (ATR) measures a security’s degree of price movement or volatility within a given period of time. The indicator is not a measure of price direction or duration, but simply the amount of price movement or volatility. The Average True Range (ATR) is frequently calculated with a 14 day period using several bases, including: daily, weekly or monthly. The Average True Range is the exponential moving average of the TR values for the last 14 periods. The actual period used can vary depending on user preference
-   [`IgxBollingerBandWidthIndicatorComponent`](datachart_series_types_financial.md) |  (BBW) is used with the [`IgxBollingerBandsOverlayComponent`](datachart_series_types_financial.md). This indicator represents the width of the Bollinger bands at a given point. The more variation there is, the wider the band. Narrowing bandwidth (lower values) indicates decreases in standard deviation and widening bandwidth (higher values) indicates increasing standard deviation in price. It supports a scaling factor like the [`IgxBollingerBandsOverlayComponent`](datachart_series_types_financial.md), so that their values can be matched
-   [`IgxChaikinVolatilityIndicatorComponent`](datachart_series_types_financial.md) (CHV) reflects the volatility of a security by showing the percent change of the Exponential Moving Average of the difference in high and low prices during a specified period of time.
-   [`IgxChaikinOscillatorIndicatorComponent`](datachart_series_types_financial.md) is (COI) used to identify trends in the accumulation/distribution indicator. The Chaikin Oscillator is the 10-day exponential moving average (EMA) of the accumulation/distribution indicator subtracted from the 3-day EMA of the accumulation/distribution indicator.
-   [`IgxCommodityChannelIndexIndicatorComponent`](datachart_series_types_financial.md) (CCI) is used to identify cyclical trends in a security. The indicator is based on the assumption that securities prices change in cycles that can be identified. It is calculated by dividing difference of the Simple Moving Average (SMA) of the Typical Price (SMATP) during a given time period with the previous period’s Typical Price (TP) by the product of the Constant and the Mean Absolute Deviation.
-   [`IgxDetrendedPriceOscillatorIndicatorComponent`](datachart_series_types_financial.md) (DPO) is designed to control for long-term pricing trends in order to identify short-term trends. It is based on a displaced moving average and is not a momentum oscillator.
-   [`IgxEaseOfMovementIndicatorComponent`](datachart_series_types_financial.md) (EOM) is used to identify the volume needed to change the price of a security. It is usually smoothed with a moving average.
-   [`IgxFastStochasticOscillatorIndicatorComponent`](datachart_series_types_financial.md) (FSO) displays the closing price relative to the high-low range over a given period of time. There are three types of Stochastic Oscillators: Fast, Slow, and Full. This indicator is a momentum indicator that shows the relation of the current close price relative to the high/low range over a given time period using a scale of 0 to 100. It is based on the premise that prices will close near 100 in a rising market and closer to 0 in a declining market. This indicator is used to identify buying or selling divergences.
-   [`IgxForceIndexIndicatorComponent`](datachart_series_types_financial.md) (FII) is a price-and-volume oscillator that financial analysts use to determine if a stock’s trend is positive or negative. The force index is calculated by subtracting yesterday’s closing price from today’s closing price and multiplying the difference with the current day’s volume. If the closing price is higher today than yesterday, the force is positive. If the closing price is lower than yesterday’s, the force is negative.
-   [`IgxFullStochasticOscillatorIndicatorComponent`](datachart_series_types_financial.md) (FSO) displays the closing price relative to the high-low range over a given period of time. This indicator is similar to the [`IgxSlowStochasticOscillatorIndicatorComponent`](datachart_series_types_financial.md) but with time period customization.
-   [`IgxMarketFacilitationIndexIndicatorComponent`](datachart_series_types_financial.md) (MFI) combines price and volume in analysis to measure efficiency. It is calculated by taking the difference between the low price and the high price and dividing it by the volume.
-   [`IgxMassIndexIndicatorComponent`](datachart_series_types_financial.md) (MII) is used for finding trend reversals. It is based on the premise that reversals are likely to happen when the price range widens. The calculation compares the previous trading ranges (highs minus lows). EMAs are used for this purpose. This indicator increases if there is substantial movement or it decreases if there are small movements
-   [`IgxMedianPriceIndicatorComponent`](datachart_series_types_financial.md) (MPI) represents the middle point between the high and low prices. Median is a measure of central tendency. This indicator displays a chart of the median.
-   [`IgxMarketFacilitationIndexIndicatorComponent`](datachart_series_types_financial.md) (MFI) is a momentum indicator and is similar to the Relative Strength Index (RSI The MFI is used as a measure of the money flowing in and out of a security and can be used to predict a trend reversal. MFI ranges from 0 and 100 and is interpreted like the RSI.
-   [`IgxMovingAverageConvergenceDivergenceIndicatorComponent`](datachart_series_types_financial.md) (MACD) is one of the most popular indicators for financial services. It is used to identify changes in the strength, direction, momentum, or length of a trend for a stock price. MACD is computed by taking the difference between two exponential moving averages (EMAs) of closing prices. The difference is then charted over time with a moving average of the difference.
-   [`IgxNegativeVolumeIndexIndicatorComponent`](datachart_series_types_financial.md) (NVI) is frequently used in combination with the [`IgxPositiveVolumeIndexIndicatorComponent`](datachart_series_types_financial.md). This indicator can be used to identify bull markets. These two indicators are based on the premise that smart money trades on low volume days and less informed or overly optimistic investors trade on high volume days.
-   [`IgxOnBalanceVolumeIndicatorComponent`](datachart_series_types_financial.md) (OBV) calculates a running total of sales volume for a stock and displays whether this volume is flowing in (purchasing) or out (selling) of a given stock. The total volume for a day is given a positive or negative value depending on whether the prices were higher or lower that day than the previous day. A higher closing price would yield a positive value and a lower closing price would result in a negative value. These values are accumulated into the running total.
-   [`IgxPercentagePriceOscillatorIndicatorComponent`](datachart_series_types_financial.md) (PPO) shows the difference between two moving averages. The difference is presented as a percentage of the larger moving average. The end user selects the time period for analysis.
-   [`IgxPercentageVolumeOscillatorIndicatorComponent`](datachart_series_types_financial.md) (PVO) is the percentage difference between volume smoothed using a long period and a short period. This indicator hovers around zero. The user can select the various period values to analyze. This indicator changes, when graphically displayed, can be useful for detecting patterns in volume. An increasing PVO indicates increases in volume levels and a declining PVO indicates declining volume levels.
-   [`IgxPositiveVolumeIndexIndicatorComponent`](datachart_series_types_financial.md) (PVI) is used together with the Negative Volume Index, it can be used to identify bull markets. These two indicators are based on the premise that smart money trades on low volume days and less informed or overly optimistic investors trade on high volume days.
-   [`IgxPriceVolumeTrendIndicatorComponent`](datachart_series_types_financial.md) (PVT) is a momentum based indicator used to measure money flow by adding or subtracting a portion of the daily volume. This added or subtracted value depends on the amount of the current day’s price rising or falling compared to the previous day’s close. This indicator is primarily used to confirm trends, as well as spot possible trading signals due to divergences.
-   [`IgxPriceVolumeTrendIndicatorComponent`](datachart_series_types_financial.md) (PVT) is a momentum based indicator used to measure money flow by adding or subtracting a portion of the daily volume. This added or subtracted value depends on the amount of the current day’s price rising or falling compared to the previous day’s close. This indicator is primarily used to confirm trends, as well as spot possible trading signals due to divergences.
-   [`IgxRelativeStrengthIndexIndicatorComponent`](datachart_series_types_financial.md) (RSI) is a commonly used measure of market strength/weakness calculated on closing prices during a specified time period. It is based on the premise that prices close higher in strong market periods and lower in weak periods. RSI is the ratio of higher closes to lower closes. The range is 0 to 100.
-   [`IgxSlowStochasticOscillatorIndicatorComponent`](datachart_series_types_financial.md) (SSO) displays the closing price relative to the high-low range over a given period of time. This indicator is used to identify buying or selling divergences and it uses a 3-day time period for Simple Moving Average (SMA).
-   [`IgxStandardDeviationIndicatorComponent`](datachart_series_types_financial.md) (SDI) measures statistical variation in stock prices or volatility. The difference between an individual security’s closing price and the average security closing price is called the dispersion. The larger the dispersion is the higher the standard deviation will be and therefore the volatility. The smaller the dispersion is (the difference between an individual closing price and the average price), the smaller the standard deviation and the lower the price volatility.
-   [`IgxStochRSIIndicatorComponent`](datachart_series_types_financial.md) (SRSI) measures when a security is overbought or oversold within a specified period of time. The values range from 0 to 1. This indicator is calculated by applying the Stochastic Oscillator formula to [`IgxRelativeStrengthIndexIndicatorComponent`](datachart_series_types_financial.md) (RSI) data.
-   [`IgxTRIXIndicatorComponent`](datachart_series_types_financial.md) (TRIX) is a measure of momentum used to identify overbought or oversold securities. Like other oscillators, TRIX scores hover around zero. A positive value indicates an overbought security while a negative value indicates an oversold one. TRIX is calculated using a triple exponential smoothed moving average of the price over a specific period of time. A signal line is frequently used to indicate where a security’s price is likely to be in the future.
-   [`IgxTypicalPriceIndicatorComponent`](datachart_series_types_financial.md) (TPI) is common financial pivot point that represents the arithmetic average of the High, Low, and Closing prices of a security for a given period of time.
-   [`IgxUltimateOscillatorIndicatorComponent`](datachart_series_types_financial.md) (UOI) uses the weighted average from three different time periods in order to reduce the volatility and noise associated with other indicators that are based on single time periods. Since this is a range bound indicator, the scores are between 0 and 100.
-   [`IgxWeightedCloseIndicatorComponent`](datachart_series_types_financial.md) (WCI) is similar to the [`IgxTypicalPriceIndicatorComponent`](datachart_series_types_financial.md) in that it represents an average of the high price, low price, and closing price for a day. However, this indicator has more emphasis on the closing price and it is included twice when calculating the arithmetic average.
-   [`IgxWilliamsPercentRIndicatorComponent`](datachart_series_types_financial.md) (WPRI) is similar to the Stochastic Oscillator. However, the scale ranges from 0 to -100. It is useful for identifying overbought and oversold securities. This indicator is calculated by dividing the difference between the highest high for the period and the current close by the highest high minus the lowest low for the period.

### Required Axes

The Angular data chart component provides various types of axes but all financial series can only use the [`IgxNumericYAxisComponent`](datachart_series_types_financial.md) as Y-Axis and [`IgxCategoryXAxisComponent`](datachart_series_types_financial.md), [`IgxOrdinalTimeXAxisComponent`](datachart_series_types_financial.md), or [`IgxTimeXAxisComponent`](datachart_series_types_financial.md) as X-Axis.

### Required Data

Financial series, indicators, and overlays have the following data requirements:

-   The data source must be an array or a list of data items
-   The data source must contain at least one data item otherwise the data chart will not render the financial series.
-   All data items must contain at least one data column (string or date time) which should be mapped to the `Label` property of the financial axis (e.g. [`IgxCategoryXAxisComponent`](datachart_series_types_financial.md))
-   All data items must contain 5 numeric data column which should be mapped using properties of a financial series: [`openMemberPath`](datachart_series_types_financial.md), [`highMemberPath`](datachart_series_types_financial.md), [`lowMemberPath`](datachart_series_types_financial.md), [`closeMemberPath`](datachart_series_types_financial.md), [`volumeMemberPath`](datachart_series_types_financial.md)

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

This code demonstrates how to create an instance of data chart with [`IgxFinancialPriceSeriesComponent`](datachart_series_types_financial.md), [`IgxBollingerBandsOverlayComponent`](datachart_series_types_financial.md), and [`IgxMedianPriceIndicatorComponent`](datachart_series_types_financial.md). Note these series use the same X-Axis and Y-Axis but you can use multiple axes and assign them to different series. Refer to the [Axis Sharing and Multiple Axes](datachart_axis_sharing.md) topic for more info.

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

    <igx-financial-price-series
        name="series2"
        xAxisName="xAxis"
        yAxisName="yAxis"
        displayType="Candlestick"
        lowMemberPath="Low"
        highMemberPath="High"
        openMemberPath="Open"
        closeMemberPath="Close"
        volumeMemberPath="Volume">
    </igx-financial-price-series>

    <igx-median-price-indicator
        name="series3"
        xAxisName="xAxis"
        yAxisName="yAxis"
        displayType="Line"
        lowMemberPath="Low"
        highMemberPath="High"
        openMemberPath="Open"
        closeMemberPath="Close"
        volumeMemberPath="Volume">
    </igx-median-price-indicator>
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
