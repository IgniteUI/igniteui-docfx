---
title: Financial Chart - High Volume Data
_description: The Ignite UI for Angular Financial Chart component is easily configured to display financial data using a simple and intuitive API, as once the user binds the data, the chart offers multiple ways in which the data can then be visualized and interpreted.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Grid Component, Angular Chart Component, Angular Financial Chart
---
## High Volume Data

The `igx-financial-chart` control is capable of handling high volumes of data. The following demo binds 20 years of data, with 1 hour intervals and displays the stock prices using line chart type.

### Demo
<div class="sample-container" style="height: 570px">
    <iframe id="financial-chart-high-volume-iframe" src='{environment:demosBaseUrl}/financial-chart-high-volume' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="financial-chart-high-volume-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>
<div class="divider--half"></div>

There are several chart features and Angular specific features that affect performance of the chart and they should be considered when optimizing performance in your application.

* When storing lots of data in properties in your components to bind against, you should make sure to set changeDetection: ChangeDetectionStrategy.OnPush in your @Component decorator. Setting this will tell Angular not to dig deeply into changes within your data array, something you don't want Angular doing every change detection cycle.

The following code demonstrates how to bind the financial chart to high volumes of data.

```typescript
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

* [Chart Performance](financialchart_performance.md)
* [Binding Real-Time Data](financialchart_real_time_data.md)
* [Binding Multiple Data Sources](financialchart_binding_to_multiple_data.md)


