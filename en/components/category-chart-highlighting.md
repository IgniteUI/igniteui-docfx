---
title: Angular Charts and Graphs | Data Visualization Tools | Highlighting | Infragistics
_description: Infragistics' Angular charts control allows you to highlight areas of the graph. Learn about Ignite UI for Angular highlighing features!
_keywords: Angular charts, category chart, Highlight Layers, Highlighting, Ignite UI for Angular, Infragistics
mentionedTypes: ['CategoryChart']
---

# Angular Highlighting

This topic provides conceptual information about the highlighting features of the Ignite UI for Angular category chart component.

## Angular Highlighting Example

<code-view style="height: 500px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-highlighting" 
           alt="Angular Highlighting Example" 
           github-src="charts/category-chart/highlighting">
</code-view>

<div class="divider--half"></div>

## Highlight Layers

The Ignite UI for Angular category chart component can enable three types of highlighting when hovering over items.

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
