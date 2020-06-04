---
title: Financial Chart | Data Visualization Tools | Ignite UI for Angular | Infragistics | High Volume Data
_description: Use the financial chart component to visualize financial data using a simple API. View the demo, dependencies, usage and toolbar for more information.
_keywords: financial chart, Ignite UI for Angular, infragistics
mentionedTypes: ['XamFinancialChart']
---

## Binding High Volume Data

The Angular financial chart component is capable of handling high volumes of data. The following demo binds 20 years of data, with 1 hour intervals and displays the stock prices using line chart type.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="financial-chart-high-volume-iframe" src='{environment:dvDemosBaseUrl}/charts/financial-chart-high-volume' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="financial-chart-high-volume-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>


</div>
<div class="divider--half"></div>

There are several chart features and Angular specific features that affect performance of the chart and they should be considered when optimizing performance in your application.

When storing lots of data in properties in your components to bind against, you should make sure to set `changeDetection: ChangeDetectionStrategy.OnPush` in your `@Component` decorator. Setting this will tell Angular not to dig deeply into changes within your data array, something you don't want Angular doing every change detection cycle.

The following code demonstrates how to bind the financial chart to high volumes of data.

```ts
import { GenerateHourlyPricesService } from "../services/generate-hourly-prices.service";

export class AppComponent {
    public data: any;

    constructor(private dataService: GenerateHourlyPricesService) {
        const dateEnd = new Date(2018, 3, 20); // April 20, 2018
        const dateStart = new Date(1998, 3, 20); // April 20, 1998
        this.data = this.dataService.GetStockHistoryBetween(dateStart, dateEnd);
    }
}
```

```html
 <igx-financial-chart
    [dataSource]="data"
    width="850px"
    height="600px">
 </igx-financial-chart>
```

<div class="divider--half"></div>

### Additional Resources

<div class="divider--half"></div>

-   [Chart Performance](financial-chart-performance.md)
-   [Binding Real-Time Data](financial-chart-high-frequency.md)
-   [Binding Multiple Data Sources](financial-chart-multiple-data.md)
