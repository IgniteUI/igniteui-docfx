---
title: Angular Financial Chart | ToolTip Types | Infragistics
_description: Use Infragistics' Angular financial chart's tooltips to display important data. View our Ignite UI for Angular graph tutorials!
_keywords: Angular charts, financial chart, stock chart, tooltips, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamFinancialChart']
---

# Angular Tooltip Types

This topic provides conceptual information about the tooltip types available on the Angular financial chart component.

## Angular Tooltip Types Example

<div class="sample-container loading" style="height: 500px">
    <iframe id="financial-chart-tooltip-types-iframe" src='{environment:dvDemosBaseUrl}/charts/financial-chart-tooltip-types' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular Tooltip Types Example"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="financial-chart-tooltip-types-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>


</div>
<div class="divider--half"></div>

## Tooltip Types

The Angular financial chart component can be configured to display Tooltips in the following ways:

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
