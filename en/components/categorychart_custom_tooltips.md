---
title: Category Chart Custom Tooltips
_description: The Ignite UI for Angular Category Chart component is a touch-enabled, highly performant, lightweight charting control that makes visualizing category data a breeze.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Chart component, Angular Category Chart component, Angular Chart controls, Angular Category Chart controls, Data Visualization
---
## Custom Tooltips 

The igxCategoryChart provides default tooltips for each type of series. The default tooltips displays all the information relevant to the particular series item for example series title, data values, axis values. They are styled to match the series' style. If default tooltips are not sufficient, custom tooltips can be configured to customize the tooltip content and look and feel.

<div class="divider"></div>

### Custom Tooltips Demo

<div class="sample-container" style="height: 650px">
    <iframe id="category-chart-custom-tooltips-iframe" src='{environment:demosBaseUrl}/category-chart-custom-tooltips' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="category-chart-custom-tooltips-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

TODO - UPDATE CONTENT AND CODE SNIPPET

The tooltip content is customized through the seriesAdded event

```html
<igx-category-chart
    [dataSource]="data"
    width="700px"
    height="500px"
    >
</igx-category-chart>
```


