---
title: Data analysis with Ignite UI for Angular.
_description: How to use chart integration functionality with Ignite UI for Angular and provide the data analysis means to achieve better business objectives.
_keywords: data analysis, ignite ui for angular, infragistics
---

## Data Analysis

Data analysis is the process of examining, transforming, and arranging data in a specific way to generate useful information based on it. It also allows for reaching certain outcomes and conclusions through analytical and logical reasoning.

>[!NOTE]
>This functionality will be introduced in **Ignite UI for Angular** as external package in order to ease the configuration and limit the required code at minimum

### Data Analysis Button
The data analysis button is the outlet to visualize your selected data in various ways:

![](../../../images/general/data-analysis-button.png)

This way every range selection performed in the grid can be easily analyzed in a single click.

The button renders on every range selection, its position is at the **bottom-right most fully visible cell** of the selection and hides when the range selection is no more active. Horizontal and vertical scrolling reposition the button so that it can always render at its designated position.

### Chart Integration
This section introduces Grid's integration with charting functionality, which allows the end user to visualize a chart, based on Grid's selected data and choose different chart types if needed.

The chart will be shown by selecting a range of cells and by clicking on the show analysis button.

>[!NOTE]
>The chart creation option is available when there are numeric values in the selected data, otherwise it will be disabled.

<div class="sample-container loading" style="height: 750px;">
    <iframe id="grid-dynamic-chart" frameborder="0" seamless="" width="100%" height="100%" data-src="{environment:demosBaseUrl}/grid/grid-dynamic-chart-data" class="lazyload"></iframe>
</div>

We currently support the following Chart types:
- [ColumnGrouped](../../data-chart-type-category-series.md), [AreaGrouped](../../data-chart-type-category-area-series.md), [LineGrouped](../../data-chart-type-category-line-series.md), [BarGrouped](../../data-chart-type-category-series.md)
- [ColumnStacked](../../data-chart-type-stacked-column-series.md), [AreaStacked](../../data-chart-type-category-spline-area-series.md), [LineStacked](../../data-chart-type-stacked-line-series.md), [BarStacked](../../data-chart-type-stacked-bar-series.md)
- Column100Stacked, [Area100Stacked](../../data-chart-type-stacked-100-area-series.md), [Line100Stacked](../../data-chart-type-stacked-100-line-series.md), [Bar100Stacked](../../data-chart-type-stacked-100-bar-series.md)
- ScatterPoint, ScatterBubble, ScatterLine. In order to show meaningful Scatter Bubble Chart we disable the preview when the data is not in valid format.
- [Pie Chart](../../pie-chart.md)

### Conditional Cell Formatting 
If you have a Grid with thousands of rows of data it would be very difficult to see patterns and trends just from examining the raw information. Similar to charts and sparklines, `Conditional formatting` provides another way to visualize data and make it easier to understand. 

Understanding conditional formatting - it allows you to automatically apply formatting such as colors and data bars to cells based on `their value` in the range selection. The [sample below](#demo) demonstrates how you can configure the Grid to apply `Conditional Formatting`. It depends on the `Conditional formatting selection type` what condition `rules` will be shown.  Below you will find the predefined styles (presets) that you can use in order to quickly apply conditional formatting to your data. The formatting of a range clears when performing formatting on different range or through the clear button. The clear button activates when there is an applied formatting and removes the formatting from the whole range.  

#### Number range selection
- `Data Bars` - Data bars can help you spot larger and smaller numbers, such as top-selling and bottom-selling products. This preset makes it very easy to visualize values in a range of selected cells. A longer bar represents a higher value. A cell that holds  value of 0 has no data bar all other cells are filled proportionally. Positive values are with `green` color  and  negative values will be `red`


![](../../../images/general/data-bars-formatting.png)

- `Color Scale` - The shade of the color represents the value in the cell. The cells that hold values below the `*Lowest threshold` will be colored in `red`. The cells that are above the `*Highest threshold` will be colored in `green`. And all the cells that are between the `Lowest` and `Highest threshold` will be colored in `yellow`.

> `Lowest threshold` - Below 33% of the maximum cell value in range selection.

> `Highest threshold` - Above 66% of the maximum cell value in range selection. 

![](../../../images/general/color-scale-formatting.png)

- `Top 10%` - Use this preset to highlight the values which are equivalent to top 10% of the selected data.

![](../../../images/general/top-10-percent.png)

- `Greater than` - This preset marks all values `Greater than the avarege`
- `Duplicate values` - Marks all duplicate values.
- `Unique values` - All cell values that are unique will be marked (`blue` background color).

![](../../../images/general/unique-values-formatting.png)

- `Empty`- Marks all cells with `undefined` values

#### Text range selection
- `Text contains` - Marks all cells that contain the cell value from the `top-left most selected cell`. Example:

![](../../../images/general/contains-formatting.png)

- `Duplicate values` - Marks all duplicate values.
- `Unique values` - All cell values that are unique will be marked (`blue` background color).
- `Empty`- Marks all cells with `undefined` values

#### Demo

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
