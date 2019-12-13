---
title: Data analysis with Ignite UI for Angular.
_description: How to use chart integration functionality with Ignite UI for Angular and provide the data analysis means to achieve better business objectives.
_keywords: data analysis, ignite ui for angular, infragistics
---

## Data Analysis  

### Chart Integration
This section introduces Grid's integration with charting functionality, which allows the end user to visualize a chart based on Grid's selected data and choose different chart types if needed. Data analysis is the process of examining, transforming, and arranging data in a specific way to generate useful information from it. Data analysis allows for the evaluation of data through analytical and logical reasoning to lead to some sort of outcome or conclusion in some context.

The chart will be shown by selecting a range of cells and by clicking on the show analysis button.

<div class="sample-container loading" style="height: 650px;">
    <iframe id="grid-dynamic-chart" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/grid/grid-dynamic-chart-data" class="lazyload"></iframe>
</div>

We currently support the following Chart types:
- [ColumnGrouped](../../data-chart-type-category-series.md), [AreaGrouped](../../data-chart-type-category-area-series.md), [LineGrouped](../../data-chart-type-category-line-series.md), [BarGrouped](../../data-chart-type-category-series.md)
- [ColumnStacked](../../data-chart-type-stacked-column-series.md), [AreaStacked](../../data-chart-type-category-spline-area-series.md), [LineStacked](../../data-chart-type-stacked-line-series.md), [BarStacked](../../data-chart-type-stacked-bar-series.md)
- Column100Stacked, [Area100Stacked](../../data-chart-type-stacked-100-area-series.md), [Line100Stacked](../../data-chart-type-stacked-100-line-series.md), [Bar100Stacked](../../data-chart-type-stacked-100-bar-series.md)
- ScatterPoint, ScatterBubble, ScatterLine. In order to show meaningful Scatter Bubble Chart we disable the preview when the data is not in valid format.
- [Pie Chart](../../pie-chart.md)

> Note: This functionality will be introduced as a Directive in order to ease the configuration and limit the required code at minimum

### Conditional Cell Formatting 
The sample below demonstrated how you can configure the Grid to apply Conditional Formatting based on predefined criteria:
- `Data Bars` - Data bars condition make it very easy to visualize values in a range of selected cells. A longer bar represents a higher value. The cell that holds the minimum value (0 if there are no negative values) has no data bar and the cell that holds the maximum value (95) has a data bar that fills the entire cell (Positive values are with `green` color). All other cells are filled proportionally. If the cell has negative values, the bar will be `red`.
![](../../../images/general/data-bars-formatting.png)
- `Color Scale` - The shade of the color represents the value in the cell. The cell that holds the minimum value will be colored `red`. The cell that holds the median value will be colored `yellow`, and the cell that holds the maximum value will be colored `green`. All other cells are colored proportionally.
- `Top 10%` -
- `Greater than` - 
- `Duplicate values` - 
- `Unique values` - 
- `Empty` - 

<div class="sample-container loading" style="height: 750px;">
    <iframe id="grid-dynamic-chart" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/grid/grid-dynamic-chart-data" class="lazyload"></iframe>
</div>

### Useful resources

<div class="divider--half"></div>

* [Angular Universal guide](https://angular.io/guide/universal)
* [Ignite UI Starter Kit](https://github.com/IgniteUI/ng-universal-example)
* [Server-side rendering terminology](https://developers.google.com/web/updates/2019/02/rendering-on-the-web)
* [Getting started with Ignite UI for Angular](../getting_started.md)
* [Ignite UI CLI Guide](../cli/step-by-step-guide.md)