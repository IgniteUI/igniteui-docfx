---
title: Angular Chart Tooltips | Data Visualization | Infragistics
_description: Infragistics' Angular Chart Tooltips
_keywords: Angular Charts, Tooltips, Infragistics
mentionedTypes: ["DomainChart", "CategoryChart", "ToolTipType"]
namespace: Infragistics.Controls.Charts
---

# Angular Chart Tooltips

In Angular charts, tooltips provide details about bound data and they are rendered in popups when the end-user hovers over data points. Tooltips are supported by the [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html), [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html), and [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) controls.

## Angular Chart Tooltip Types

Angular Chart provide three types of tooltips that you can with tooltips enabled by setting the [`toolTipType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#tooltiptype) property. The following example shows the [Column Chart](../types/column-chart.md) with a combo-box that you can use to change type of tooltips.

<code-view style="height: 500px" alt="Angular Tooltip Types Example"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/column-chart-with-tooltips"
                                                 github-src="charts/category-chart/column-chart-with-tooltips">
</code-view>


<div class="divider--half"></div>

The [`toolTipType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#tooltiptype) property is configurable and can be set to one of the following options:

| Property Value     | Description  |
| -------------------|----------------  |
| [`Default`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/NaNtooltiptype.html#default)  Tooltip | Display a tooltip for a single item when the pointer is positioned over it.  |
| [`Data`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/NaNtooltiptype.html#data) Tooltip | Display the data tooltips for all series in the chart.  |
| [`Item`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/NaNtooltiptype.html#item)  Tooltip    | Display a tooltip for each data item in the category that the pointer is positioned over.  |
| [`Category`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/NaNtooltiptype.html#category) Tooltip | Display a grouped tooltip for all data points in the category that the pointer is positioned over.  |

<div class="divider--half"></div>

## Angular Chart Tooltip Template

If none of built-in types of tooltips are matching your requirements, you can create your own tooltips to display and style series title, data values, and axis values. The following sections demonstrate how to do this in different types of Angular charts.

## Custom Tooltips in Category Chart

This example shows how to create custom tooltips for all series in Angular [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) control. Note that you can also apply the same logic to custom tooltips in Angular [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html) control.

<code-view style="height: 500px" alt="Angular Tooltip Template"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/tooltip-template"
                                                 github-src="charts/category-chart/tooltip-template">
</code-view>


<div class="divider--half"></div>

## Custom Tooltips in Data Chart

This example shows how to create custom tooltips for each series in Angular Data Chart control.

<code-view style="height: 500px" alt="Angular Tooltip Template"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/tooltip-template"
                                                 github-src="charts/data-chart/tooltip-template">
</code-view>


<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart features in these topics:

*   [Chart Annotations](chart-annotations.md)
*   [Chart Markers](chart-markers.md)

## API References

The following is a list of API members mentioned in the above sections:

*   [`toolTipType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#tooltiptype)
*   [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html)
*   [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html)

The [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) and [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html) components share the following API properties:

*   [`toolTipType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#tooltiptype)

In the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html) component, you can use the following API components and properties:

*   [`IgxDataToolTipLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatatooltiplayercomponent.html)
*   [`IgxItemToolTipLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxitemtooltiplayercomponent.html)
*   [`IgxCategoryToolTipLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorytooltiplayercomponent.html)
*   `ShowDefaultToolTip`
