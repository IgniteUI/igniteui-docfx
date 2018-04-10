---
title: Financial Chart Component
_description: Present users with dashboards and engaging text, images, icons or buttons as an entry point for detailed information with Ignite UI for Angular Financial Chart component.
_keywords: Ignite UI for Angular, Data Visualization, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Chart component, Angular Financial Chart component, Angular Chart controls, Angular Financial Chart controls, Data Visualization
---
## Financial Chart 

The Financial Chart is a lightweight, high-performance chart. This chart can be easily configured to display financial data using an extremely simple and intuitive API. All you need to do is bind your data (a collection or a collection of collections) and the chart takes care of everything else. The chart analyzes the structure of the data source bound to the 'data' property. It plots one financial price series for each collection found in the data source. Also, it analyzes data items of each collection by searching for 5 numeric data columns with Open, High, Low, Close, Volume names and 1 date time column with Time name. The chart offers multiple ways for the user to visualize and interpret the data, including several display modes for price and volume, and many financial indicators. The chart also makes use of label formatting to give the data context. 

You can explicitly specify the chart type by setting the `chartType` property to one of the following options: 
    
Property|Description|Example
---|---|---
`bar`|Specifies the bar series with markers at each data point|![](/images/financial_chart_bar.png)
`candle`|Specifies the candle series|![](/images/financial_chart_candle.png)
`column`|Specifies the column series|![](/images/financial_chart_column.png)
`line`|Specifies the line series|![](/images/financial_chart_line.png)
`auto`|Specifies automatic selection of chart type based on suggestions from Data Adapter

A toolbar is displayed at the top of the financial chart. This allows your end users to change various details about the data being displayed, and also displays different panes. The toolbar consists of the following selectors:
- Indicator Type Selector - Allows users to select different types of financial indicators. These indicators are displayed below the price pane in an indicator pane because they do not share the same Y-Axis scale.
- Overlay Type Indicator - Allows users to select different types of financial overlays. These overlays are displayed in front of the financial prices series because they share the same y-axis scale.
- Trendline Type Selector - Allows users to select different types of trendlines. The trendline is displayed in a trendline layer on the price pane and the volume pane.
- Date Range Selector - Allows users to select different range presets to view the data.
- Chart Type Selector - Allows users to select chart types for the financial chart. These are displayed in the price pane.
- Volume Type Selector -  Allows users to view the stock volume data in the Volume Pane. Users can choose between None, Column, Line, and Area chart types.

<div class="divider"></div>

### Financial Chart Demo

<div class="sample-container" style="height: 280px">
    <iframe id="financial-chart-overview-sample-iframe" src='{environment:demosBaseUrl}/financial-chart-overview-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="financial-chart-overview-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Dependencies

The finacial chart is exported as as an `NgModule`, you need to import the _IgxFinancialChartModule_ inside your `AppModule`:

```typescript
// app.module.ts
import {IgxFinancialChartModule} from '@infragistics/igniteui-angular-charts/ES5/ig-financialchart-module'

@NgModule({
    imports: [
        ...
        IgxFinancialChartModule,
        ...
    ]
})
export class AppModule {}
```

<div class="divider--half"></div>

### Usage

Now that the financial chart module is imported, next step is to bind it to data.

In order to create an igFinancialChart control, you must first have data to bind it to. The following code snippet demonstrates how to create a simple data source. 

```typescript

var data = [
	{ time: new Date(2013, 1, 1), open: 268.93, high: 268.93, low: 262.80, close: 265.00, volume: 6118146 },
	{ time: new Date(2013, 1, 4), open: 262.78, high: 264.68, low: 259.07, close: 259.98, volume: 3723793 },
	{ time: new Date(2013, 1, 5), open: 262.00, high: 268.03, low: 261.46, close: 266.89, volume: 4013780 },
	{ time: new Date(2013, 1, 6), open: 265.16, high: 266.89, low: 261.11, close: 262.22, volume: 2772204 },
	{ time: new Date(2013, 1, 7), open: 264.10, high: 264.10, low: 255.11, close: 260.23, volume: 3977065 },
	{ time: new Date(2013, 1, 8), open: 261.40, high: 265.25, low: 260.56, close: 261.95, volume: 3879628 },
	{ time: new Date(2013, 1, 11), open: 263.20, high: 263.25, low: 256.60, close: 257.21, volume: 3407457 },
	{ time: new Date(2013, 1, 12), open: 259.19, high: 260.16, low: 257.00, close: 258.70, volume: 2944730 },
	{ time: new Date(2013, 1, 13), open: 261.53, high: 269.96, low: 260.30, close: 269.47, volume: 5295786 },
	{ time: new Date(2013, 1, 14), open: 267.37, high: 270.65, low: 265.40, close: 269.24, volume: 3464080 },
	{ time: new Date(2013, 1, 15), open: 267.63, high: 268.92, low: 263.11, close: 265.09, volume: 3981233 }
];

```

The following code demonstrates how to bind the financial chart to the above data. 

```html 
 <igx-financial-chart [dataSource]="data" style="width:850px; height:600px">
 </igx-financial-chart>
```


