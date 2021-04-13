---
title: Angular Axis Options | Data Visualization | Infragistics
_description: Infragistics' Angular Axis Options
_keywords: Angular Axis, Options, Title, Labels, Range Infragistics
mentionedTypes: ["CategoryChart"]
---

# Angular Axis Options

In all Ignite UI for Angular charts, the axes provide properties for visual configurations such as titles, labels, and ranges. These features are demonstrated in the examples provided below.

## Axis Titles Example

The axis titles feature of the Angular charts, allows you to add contextual information to the your chart. You can customize the look and feel of the axis titles in many different ways such as applying different font styles, colors, margins, and alignments.

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-axis-titles"
           alt="Angular Axis Titles Example"
           github-src="charts/category-chart/axis-titles">
</code-view>

<div class="divider--half"></div>

## Axis Labels Example

The Ignite UI for Angular charts allows you full control over configuring, formatting, and styling the font of the labels displayed on an axis in your chart. You can change the rotation angle, margin, horizontal and vertical alignment, color, padding, and visibility of axis labels.

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-axis-labels"
           alt="Angular Axis Labels Example"
           github-src="charts/category-chart/axis-labels">
</code-view>

<div class="divider--half"></div>

## Axis Range Example

In the Angular charts, you can define a range minimum and range maximum value of a numeric or time axis. The range minimum is the lowest value of the axis and the range maximum is the highest value of the axis. These are set by setting the [`yAxisMinimumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxisminimumvalue) and [`yAxisMaximumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxismaximumvalue) options.

By default, the Angular charts will calculate the minimum and maximum values for the numeric and time axis range based on the lowest and highest corresponding value points in your data, but this automatic calculation may not be appropriate for your set of data points in all cases. For example, if your data has a minimum value of 850, you may want to set the [`yAxisMinimumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxisminimumvalue) to 800 so that there will be a space value of 50 between the axis minimum and the lowest value of data points. The same idea can be applied to the axis minimum value and the highest value of data points using the [`yAxisMaximumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxismaximumvalue) property.

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-axis-range"
           alt="Angular Axis Range Example"
           github-src="charts/category-chart/axis-range">
</code-view>

<div class="divider--half"></div>

<!--
## Axis Scale Example

TODO add info/example of financial chart with  YAxisMode and YAxisIsLogarithm

-->

## Additional Resources

You can find more information about related chart features in these topics:

-   [Axis Gridlines](chart-axis-gridlines.md)
-   [Axis Layout](chart-axis-layouts.md)

## API Members

The following is a list of API members mentioned in the above sections:

-   `XAxisMaximumValue`
-   `XAxisMinimumValue`
-   [`yAxisMaximumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxismaximumvalue)
-   [`yAxisMinimumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html#yaxisminimumvalue)
-   [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html)
