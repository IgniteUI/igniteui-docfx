---
title: High Volume Data
_description: The Ignite UI for Category Chart component simplifies the complexities of the data visualization domain into manageable API so that a user can bind a collection of data, a group of collections, and a data property, and let the charting control do the rest. 
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Grid Component, Angular Chart Component, Angular Category Chart 
---
## High Volume Data

The Category Chart control is capable of handling high volumes of data, ranging into the millions of data points, as demonstated in the following demo.

### Demo 
<div class="sample-container" style="height: 570px">
    <iframe id="category-chart-high-volume-sample-iframe" src='{environment:demosBaseUrl}/category-chart-high-volume-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="category-chart-high-volume-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Performance Optimizations 
There are several chart features and Angular specific features that affect performance of the chart and they should be considered when optimizing performance in your application.

* When storing lots of data in properties in your components to bind against, you should make sure to set changeDetection: ChangeDetectionStrategy.OnPush in your @Component decorator.  
     * Setting this will tell Angular not to dig deeply into changes within your data array, something you don't want Angular doing every change detection cycle.
* Instead of Angular automatically telling the charts how they should react to data changes, its your responsibility to notify the components how the data they have been bound to has been modified. 
    * Reacting to these delta notifications can be done much more efficiently than to have to compare a 1M record array for any changes, every time Angular runs a change detection. 
    * Look for the notify* methods on each chart for more information about how to notify the chart of changes to the data it is bound against.
* When Angular is in Debug mode, there is a lot of overhead in some browsers that will drag down performance. When evaluating real world performance always make sure to serve or build with --prod


