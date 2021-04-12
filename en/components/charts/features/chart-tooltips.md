---
title: Angular Chart Tooltips | Data Visualization | Infragistics
_description: Infragistics' Angular Chart Tooltips
_keywords: Angular Charts, Tooltips, Infragistics
mentionedTypes: ["XamCategoryChart", "ToolTipType"]
---

# Angular Chart Tooltips

In Angular charts, tooltips provide details about bound data and they are rendered in popups when the end-user hovers over data points. Tooltips are supported by the `XamCategoryChart`, `XamFinancialChart`, and [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) controls.

## Angular Chart Tooltips Types

The following example shows the [Column Chart](../types/column-chart.md) with tooltips enabled by setting the [`ToolTipType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/tooltiptype.html) property to "Default" at the start. This property is configurable in the sample and can be set to one of the following options:

| Property Value                                                                                                                         | Description                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| [`Default`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/tooltiptype.html#default)  Tooltip  | Display a tooltip for a single item when the pointer is positioned over it.                        |
| [`Item`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/tooltiptype.html#item)  Tooltip        | Display a tooltip for each data item in the category that the pointer is positioned over.          |
| [`Category`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/tooltiptype.html#category) Tooltip | Display a grouped tooltip for all data points in the category that the pointer is positioned over. |

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-column-chart-with-tooltips"
           alt="Angular Tooltip Types Example"
           github-src="charts/category-chart/column-chart-with-tooltips">
</code-view>

<div class="divider--half"></div>

## Angular Chart Tooltip Template

If none of built-in types of tooltips are matching your requirements, you can create your own tooltips to display and style series title, data values, and axis values. The following sections demonstrate how to do this in different types of Angular charts.

## Custom Tooltips in Category Chart

This example shows how to create custom tooltips for all series in Angular Category Chart control.

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-tooltip-template"
           alt="Angular Tooltip Template"
           github-src="charts/category-chart/tooltip-template">
</code-view>

<div class="divider--half"></div>

## Custom Tooltips in Data Chart

This example shows how to create custom tooltips for each series in Angular Data Chart control.

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-tooltip-template"
           alt="Angular Tooltip Template"
           github-src="charts/data-chart/tooltip-template">
</code-view>

<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart features in these topics:

-   [Chart Annotations](chart-annotations.md)
-   [Chart Markers](chart-markers.md)

## API Members

The following is a list of API members mentioned in the above sections:

-   [`ToolTipType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/tooltiptype.html)
-   `XamCategoryChart`
-   [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html)
