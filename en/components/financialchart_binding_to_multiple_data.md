---
title: Financial Chart - Binding to Multiple Data Sources
_description: The Ignite UI for Angular Financial Chart component is easily configured to display financial data using a simple and intuitive API, as once the user binds the data, the chart offers multiple ways in which the data can then be visualized and interpreted.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Grid Component, Angular Chart Component, Angular Financial Chart
---
## Binding Financial Chart to Multiple Data Sources

The `igx-financial-chart` control can bind easily to multiple data sources, as shown in the following demo.

### Demo
<div class="sample-container" style="height: 570px">
    <iframe id="financial-chart-multiple-data-iframe" src='{environment:demosBaseUrl}/financial-chart-multiple-data' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="financial-chart-multiple-data-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>
<div class="divider--half"></div>

The financial chart can plot multiple data sources as long as your each data source is added to an array. The following code snippet demonstrates how to create a multiple data sources.


```typescript
let dataSource1: any = [
	{ time: new Date(2013, 1, 1), open: 268.93, high: 268.93, low: 262.80, close: 265.00, volume: 6118146 },
	{ time: new Date(2013, 1, 4), open: 262.78, high: 264.68, low: 259.07, close: 259.98, volume: 3723793 },
	{ time: new Date(2013, 1, 5), open: 262.00, high: 268.03, low: 261.46, close: 266.89, volume: 4013780 },
	{ time: new Date(2013, 1, 6), open: 265.16, high: 266.89, low: 261.11, close: 262.22, volume: 2772204 },
	{ time: new Date(2013, 1, 7), open: 264.10, high: 264.10, low: 255.11, close: 260.23, volume: 3977065 },
];
let dataSource2: any = [
	{ time: new Date(2013, 1, 1), open: 263.20, high: 263.25, low: 256.60, close: 257.21, volume: 3407457 },
	{ time: new Date(2013, 1, 4), open: 259.19, high: 260.16, low: 257.00, close: 258.70, volume: 2944730 },
	{ time: new Date(2013, 1, 5), open: 261.53, high: 269.96, low: 260.30, close: 269.47, volume: 5295786 },
	{ time: new Date(2013, 1, 6), open: 267.37, high: 270.65, low: 265.40, close: 269.24, volume: 3464080 },
	{ time: new Date(2013, 1, 7), open: 267.63, high: 268.92, low: 263.11, close: 265.09, volume: 3981233 }
];
dataSource1.title = "Stock1 Name (Symbol)";
dataSource2.title = "Stock2 Name (Symbol)";

let data: any = [ dataSource1, dataSource2 ]

```

The following code demonstrates how to bind the financial chart to the above data.

```html
 <igx-financial-chart
    [dataSource]="data" >
 </igx-financial-chart>
```

<div class="divider--half"></div>

### Additional Resources
<div class="divider--half"></div>

* [Chart Performance](financialchart_performance.md)
* [Binding Real-Time Data](financialchart_real_time_data.md)
* [Binding High Volume Data](financialchart_high_volume_data.md)
