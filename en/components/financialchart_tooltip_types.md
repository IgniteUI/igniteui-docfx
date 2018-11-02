---
title: Tooltip Types
_description: The Ignite UI for Angular Financial Chart component is easily configured to display financial data using a simple and intuitive API, as once the user binds the data, the chart offers multiple ways in which the data can then be visualized and interpreted.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Grid Component, Angular Chart Component, Angular Financial Chart
---
## Annotations

This topic provides conceptual information about the annotations and overlay interactions available on the `igx-financial-chart`.

### Demo
<div class="sample-container" style="height: 550px">
    <iframe id="financial-chart-annotations-iframe" src='{environment:demosBaseUrl}/financial-chart-annotations' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="financial-chart-annotations-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>
<div class="divider--half"></div>

### Tooltip Types

The IgxFinancialChart can display Tooltips in three ways, as Default, Item, or Category.

1. Default tooltips will display a tooltip for a single item when the pointer is positioned over it.

1. Item tooltips will display a tooltip for each data item in the category that the pointer is positioned over.

1. Category tooltips will display a grouped tooltip for all data points in the category that the pointer is positioned over.

```html
<igx-financial-chart
    [dataSource]="data"
    toolTipType="Category">
</igx-financial-chart>
```
