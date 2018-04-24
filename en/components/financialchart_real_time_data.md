---
title: Financial Chart - Real Time Data
_description: The Ignite UI for Angular Financial Chart component is easily configured to display financial data using a simple and intuitive API, as once the user binds the data, the chart offers multiple ways in which the data can then be visualized and interpreted.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Grid Component, Angular Chart Component, Angular Financial Chart
---
## Binding Real-Time Data

The `igx-financial-chart` control is very fast control that can handle rendering of data in real-time. The following demo shows how Financial Chart is capable of handling high frequency of data updates.

### Demo

<div class="sample-container" style="height: 550px">
    <iframe id="financial-chart-high-frequency-iframe" src='{environment:demosBaseUrl}/financial-chart-high-frequency' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="financial-chart-high-frequency-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>


### Code Example

You can create the Financial Chart control with high frequency data updates by removing the first data item from your data source and appending a new data item to end of your data. Also, you should call `notifyRemoveItem` and `notifyInsertItem` functions to notify the chart about changes. Also, you can look for more `notify*` methods on the financial chart to get more information about how to notify the chart of changes to the data it is bound against.

The following example demonstrates how to notify Financial Chart control about high frequency data updates:


```typescript

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

* [Chart Performance](financialchart_performance.html)
* [Binding High Volume Data](financialchart_high_volume_data.html)
* [Binding Multiple Data Sources](financialchart_binding_to_multiple_data.html)

