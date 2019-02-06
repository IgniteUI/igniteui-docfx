---
title: Tooltip Types
_description: The Ignite UI for Category Chart component simplifies the complexities of the data visualization domain into manageable API so that a user can bind a collection of data, a group of collections, and a data property, and let the charting control do the rest.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Grid Component, Angular Chart Component, Angular Category Chart
---

## Tooltip Types

This topic provides conceptual information about the tooltip types available on the `IgxCategoryChart`.

### Demo

<div class="sample-container" style="height: 500px">
    <iframe id="category-chart-tooltip-types-iframe" src='{environment:demosBaseUrl}/category-chart-tooltip-types' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<!-- <div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="category-chart-tooltip-types-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div> -->
<div class="divider--half"></div>

### Tooltip Types

The `IgxCategoryChart` can be configured to display Tooltips in the following ways:

1.  `Default` tooltips will display a tooltip for a single item when the pointer is positioned over it.
2.  `Item` tooltips will display a tooltip for each data item in the category that the pointer is positioned over.
3.  `Category` tooltips will display a grouped tooltip for all data points in the category that the pointer is positioned over.
4.  `None` will prevent tooltips from displaying.

```html
<igx-category-chart
    [dataSource]="data"
    toolTipType="Category">
</igx-category-chart>
```
