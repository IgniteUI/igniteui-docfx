---
title: Category Chart | Data Visualization Tools | Ignite UI for Angular | Tooltip Types | Infragistics 
_description: Use the category chart component to analyze and  automatically choose the best chart type to represent data. Learn about our chart types for visualization.
_keywords: category chart, Ignite UI for Angular, infragistics 
---

## Tooltip Types

This topic provides conceptual information about the tooltip types available on the Ignite UI for Angular category chart component.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="category-chart-tooltip-types-iframe" src='{environment:demosBaseUrl}/charts/category-chart-tooltip-types' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="category-chart-tooltip-types-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>
<div class="divider--half"></div>

### Tooltip Types

The category chart component can be configured to display Tooltips in the following ways:

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
