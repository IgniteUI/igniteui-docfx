---
title: Custom Tooltips
_description: The Ignite UI for Angular Financial Chart component is a touch-enabled, highly performant, lightweight charting control that makes visualizing financial data a breeze.
_keywords: Ignite UI for Angular, Data Visualization, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Chart component, Angular Financial Chart component, Angular Chart controls, Angular Financial Chart controls, Data Visualization
---
## Custom Tooltips 

The igxFinancialChart provides default tooltips for each type of series. The default tooltips displays all the information relevant to the particular series item for example series title, data values, axis values. They are styled to match the series' style. If default tooltips are not sufficient, custom tooltips can be configured to customize the tooltip content and look and feel.

### Custom Tooltips Demo

<div class="sample-container" style="height: 650px">
    <iframe id="financial-chart-custom-tooltips-iframe" src='{environment:demosBaseUrl}/financial-chart-custom-tooltips' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="financial-chart-custom-tooltips-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

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
    [dataSource]="data"
    width="850px"
    height="600px"
    [tooltipTemplate]="valueTooltip" > 
</igx-financial-chart> 
```


