---
title: Category Chart | Data Visualization Tools | Ignite UI for Angular | Highlighting | Infragistics
_description: Use the category chart component to analyze and  automatically choose the best chart type to represent data. Learn about our chart types for visualization.
_keywords: category chart, Ignite UI for Angular, infragistics
mentionedTypes: ['CategoryChart']
---

## Highlighting

This topic provides conceptual information about the highlighting features of the Ignite UI for Angular category chart component.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="category-chart-highlighting-iframe" src='{environment:dvDemosBaseUrl}/charts/category-chart-highlighting' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="category-chart-highlighting-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>
<div class="divider--half"></div>

### Highlight Layers

The category chart component can enable three types of highlighting when hovering over items.

1.  Series Highlighting will highlight the single data point when the pointer is positioned over it.

2.  Item Highlighting highlights items in a series either by drawing a banded shape at their position or by rendering a marker at their position.

3.  Category Highlighting targets all category axes in the chart. They draw a shape that illuminates the area of the axis closest to the pointer position.

```html
<igx-category-chart
    [dataSource]="data"
    isSeriesHighlightingEnabled="true"
    isCategoryHighlightingEnabled="true"
    isItemHighlightingEnabled="true">
</igx-category-chart>
```
