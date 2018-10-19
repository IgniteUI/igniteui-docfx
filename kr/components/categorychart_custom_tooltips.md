---
title: Category Chart Custom Tooltips
_description: The Ignite UI for Category Chart component simplifies the complexities of the data visualization domain into manageable API so that a user can bind a collection of data, a group of collections, and a data property, and let the charting control do the rest. 
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Grid Component, Angular Chart Component, Angular Category Chart
_language: kr
---
## Custom Tooltips 

The Category Chart provides default tooltips for each type of series. The default tooltips displays all the information relevant to the particular series item for example series title, data values, axis values. They are styled to match the series' style. If default tooltips are not sufficient, custom tooltips can be configured to customize the tooltip content and look and feel.

### Demo

<div class="sample-container" style="height: 550px">
    <iframe id="category-chart-custom-tooltips-sample-iframe" src='{environment:demosBaseUrl}/category-chart-custom-tooltips-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="category-chart-custom-tooltips-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

The tooltip content is customized by creating a template for the tooltip as demonstrated in the following code.

```html
<ng-template let-series="series" let-item="item" #valueTooltip>
   <div>
      <span> {{item.Country}} energy use: <br/></span>
      <span> Coal :{{item.Coal | number}}<br/></span>
      <span> Oil :{{item.Oil | number}}<br/></span>
      <span> Gas :{{item.Gas | number}}<br/></span>
      <span> Nuclear :{{item.Nuclear | number}}<br/></span>
      <span> Hyrdo :{{item.Hydro | number}}<br/></span>
    </div>
</ng-template>
    
<div class="chart">
    <igx-category-chart height="100%" width="100%"
        [dataSource]="data" chartTitle="Energy Production"
        subtitle="by Country"
        [tooltipTemplate]="valueTooltip"
        [chartType]="chartType">
    </igx-category-chart>
</div>
```
    