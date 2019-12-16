---
title: Financial Chart | Data Visualization Tools | Ignite UI for Angular | Infragistics } Binding to Multiple Data Sources
_description: Use the financial chart component to visualize financial data using a simple API. View the demo, dependencies, usage and toolbar for more information.
_keywords: financial chart, Ignite UI for Angular, infragistics
mentionedTypes: ['XamFinancialChart']
---

## Binding Multiple Sources

The Angular financial chart component can bind easily to multiple data sources, as shown in the following demo.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="financial-chart-multiple-data-iframe" src='{environment:dvDemosBaseUrl}/charts/financial-chart-multiple-data' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="financial-chart-multiple-data-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>
<div class="divider--half"></div>

The financial chart component can plot multiple data sources as long as your each data source is added to an array. The following code snippet demonstrates how to create a multiple data sources.

```ts
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

The following code demonstrates how to bind the financial chart component to the above data.

```html
 <igx-financial-chart
    [dataSource]="data" >
 </igx-financial-chart>
```

<div class="divider--half"></div>

### Additional Resources

<div class="divider--half"></div>

-   [Chart Performance](financial-chart-performance.md)
-   [Binding Real-Time Data](financial-chart-high-frequency.md)
-   [Binding High Volume Data](financial-chart-high-volume.md)
