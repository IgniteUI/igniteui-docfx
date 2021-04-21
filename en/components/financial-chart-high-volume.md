---
title: Angular Financial Chart | High Volume Data | Infragistics
_description: Learn how to optimize the performance of the Infragistics' Angular financial chart control. Improve the Ignite UI for Angulargraph's performance!
_keywords: Angular charts, financial chart, stock chart, performance, Ignite UI for Angular, Infragistics
mentionedTypes: ['FinancialChart']
---

# Angular Binding High Volume Data

The Angular financial chart component is capable of handling high volumes of data. The following demo binds 20 years of data, with 1 hour intervals and displays the stock prices using line chart type.

## Angular Binding High Volume Data Example

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-high-volume"
           alt="Angular Binding High Volume Data Example"
           github-src="charts/financial-chart/high-volume">
</code-view>

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
