---
title: Angular Charts and Graphs | Data Visualization Tools | Tooltip Types | Infragistics
_description: Use Infragistics' Angular chart's tooltips to display important data. View our Ignite UI for Angular graph tutorials!
_keywords: Angular charts, category chart, tooltip, Ignite UI for Angular, Infragistics
mentionedTypes: ['CategoryChart', 'ToolTipType']
---

# Angular Tooltip Types

This topic provides conceptual information about the tooltip types available on the Ignite UI for Angular category chart component.

## Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="category-chart-tooltip-types-iframe" src='{environment:dvDemosBaseUrl}/charts/category-chart-tooltip-types' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="category-chart-tooltip-types-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>


</div>
<div class="divider--half"></div>

## Tooltip Types

The Ignite UI for Angular category chart component can be configured to display Tooltips in the following ways:

1.  [`Default`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/tooltiptype.html#default) tooltips will display a tooltip for a single item when the pointer is positioned over it.
2.  [`Item`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/tooltiptype.html#item) tooltips will display a tooltip for each data item in the category that the pointer is positioned over.
3.  [`Category`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/tooltiptype.html#category) tooltips will display a grouped tooltip for all data points in the category that the pointer is positioned over.
4.  [`None`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/tooltiptype.html#none) will prevent tooltips from displaying.

```html
<igx-category-chart
    [dataSource]="data"
    toolTipType="Category">
</igx-category-chart>
```
