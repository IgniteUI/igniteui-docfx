---
title: Angular Financial Chart | Tooltip Templates | Infragistics
_description: Use Infragistics' Angular financial chart's tooltips to display important data. View our Ignite UI for Angular graph tutorials!
_keywords: Angular charts, financial chart, stock chart, tooltip templates, Ignite UI for Angular, Infragistics
mentionedTypes: ['FinancialChart']
---

# Angular Tooltip Templates

The Angular financial chart component provides default tooltips for each type of series. The default tooltips displays all the information relevant to the particular series item for example series title, data values, axis values. They are styled to match the series' style. If default tooltips are not sufficient, tooltip templates can be configured to customize the tooltip content and look and feel.

## Angular Tooltip Templates Example

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-tooltip-template"
           alt="Angular Tooltip Templates Example"
           github-src="charts/financial-chart/tooltip-template">
</code-view>

<div class="divider--half"></div>

The tooltip content is customized by creating a template for the tooltip as demonstrated in the following code.

```html
<ng-template let-series="series" let-item="item" #valueTooltip>
    <div>
        <span [style.color]="series.actualBrush">{{series.title}}</span>
        <span> stock opened on {{item.time | date}} with a value of ${{item.open | number}} and closed with a value of ${{item.close | number}}.</span>
    </div>
</ng-template>

<igx-financial-chart
    width="850px"
    height="600px"
    [dataSource]="data"
    [tooltipTemplate]="valueTooltip" >
</igx-financial-chart>
```
