---
title: Tooltip Types
_description: The Ignite UI for Angular Financial Chart component is easily configured to display financial data using a simple and intuitive API, as once the user binds the data, the chart offers multiple ways in which the data can then be visualized and interpreted.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Chart Component, Angular Financial Chart
---

## Tooltip Types

This topic provides conceptual information about the tooltip types available on the `IgxFinancialChart`.

### Demo

<div class="sample-container" style="height: 500px">
    <iframe id="financial-chart-tooltip-types-iframe" src='{environment:demosBaseUrl}/financial-chart-tooltip-types' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<!-- <div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="financial-chart-tooltip-types-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div> -->
<div class="divider--half"></div>

### Tooltip Types

The IgxFinancialChart can be configured to display Tooltips in the following ways:

1.  `Default` tooltips will display a tooltip for a single item when the pointer is positioned over it.
2.  `Item` tooltips will display a tooltip for each data item in the category that the pointer is positioned over.
3.  `Category` tooltips will display a grouped tooltip for all data points in the category that the pointer is positioned over.
4.  `None` will prevent tooltips from displaying.

```html
<igx-financial-chart
    [dataSource]="data"
    toolTipType="Category">
</igx-financial-chart>
```
