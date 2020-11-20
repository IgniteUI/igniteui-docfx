---
title: Angular Financial Chart | Real Time Data | Infragistics
_description: Render millions of data points using Infragistics' Angular financial chart control at super fast speed. Check out the Ignite UI for Angular graph's high performance!
_keywords: Angular charts, financial chart, stock chart, data binding, Ignite UI for Angular, Infragistics
mentionedTypes: ['FinancialChart']
---

# Angular Binding Real-Time Data

The Angular financial chart component is very fast control that can handle rendering of data in real-time. The following demo shows how the financial chart component is capable of handling high frequency of data updates.

## Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="financial-chart-high-frequency-iframe" src='{environment:dvDemosBaseUrl}/charts/financial-chart-high-frequency' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="financial-chart-high-frequency-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>


</div>

<div class="divider--half"></div>

## Code Example

You can create the Angular financial chart component with high frequency data updates by removing the first data item from your data source and appending a new data item to end of your data. Also, you should call [`notifyRemoveItem`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#notifyremoveitem) and [`notifyInsertItem`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxfinancialchartcomponent.html#notifyinsertitem) functions to notify the chart about changes. Also, you can look for more "notify" methods on the financial chart to get more information about how to notify the chart of changes to the data it is bound against.

The following example demonstrates how to notify Financial Chart control about high frequency data updates:

```ts
private tick(): void {
    const newVal = this.getValue();
    const oldVal = this.data[0];

    this.data.push(newVal);
    this.chart.notifyInsertItem(this.data, this.data.length - 1, newVal);

    this.data.splice(0, 1);
    this.chart.notifyRemoveItem(this.data, 0, oldVal);
}
```

<div class="divider--half"></div>

### Additional Resources

<div class="divider--half"></div>

-   [Chart Performance](financial-chart-performance.md)
-   [Binding High Volume Data](financial-chart-high-volume.md)
-   [Binding Multiple Data Sources](financial-chart-multiple-data.md)
