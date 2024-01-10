---
title: Angular Chart Markers | Data Visualization | Infragistics
_description: Infragistics' Angular Chart Markers
_keywords: Angular Charts, Markers, Infragistics
mentionedTypes: ["CategoryChart", "CategoryChartType", "MarkerType"]
namespace: Infragistics.Controls.Charts
---

# Angular Chart Markers

In Ignite UI for Angular, markers are visual elements that display the values of data points in the chart's plot area. Markers help your end-users immediately identify a data point's value even if the value falls between major or minor grid lines.

# Angular Chart Marker Example

In the following example, the [Line Chart](../types/line-chart.md) is comparing the generation of renewable electricity for the countries Europe, China, and USA over the years of 2009 to 2019 with markers enabled by setting the [`MarkerType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/NaNmarkertype.html) property to [`Circle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/NaNmarkertype.html#Circle) enum value.

The colors of the markers are also managed by setting the [`markerBrushes`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#markerBrushes) and [`markerOutlines`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#markerOutlines) properties in the sample below. The markers and [`chartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#chartType) is configurable in this sample by using the drop-downs as well.

<code-view style="height: 500px" alt="Angular Configuration Options Example"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/marker-options"
                                                 github-src="charts/category-chart/marker-options">
</code-view>


<div class="divider--half"></div>

# Angular Chart Marker Templates

In addition to marker properties, you can implement your own marker by setting a function to the  `MarkerTemplate` property of a series rendered in the [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) control as it is demonstrated in example below.

<code-view style="height: 600px" alt="Angular Chart Marker Templates"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/marker-templates"
                                                 github-src="charts/category-chart/marker-templates">
</code-view>


<div class="divider--half"></div>

## Additional Resources

You can find more information about related chart features in these topics:

*   [Chart Annotations](chart-annotations.md)
*   [Chart Highlighting](chart-highlighting.md)

## API References

The following is a list of API members mentioned in the above sections:

*   [`markerBrushes`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#markerBrushes)
*   [`markerOutlines`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#markerOutlines)
*   [`MarkerType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/NaNmarkertype.html)
*   [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html)
