---
title: Angular Chart Data Filtering | Data Visualization | Infragistics
_description: Infragistics' Angular Chart Data Filtering
_keywords: Angular Charts, Filtering, Infragistics
_license: commercial
mentionedTypes: ["CategoryChart"]
namespace: Infragistics.Controls.Charts
---

# Angular Chart Data Filtering

Data Filtering allows you to query large data in order to analyze and plot small subset of data entries via filter expressions, all without having to manually modify the datasource bound to the chart.

A complete list of valid expressions and keywords to form a query string can be found here:

[Filter expressions](https://learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/webservices/use-filter-expressions-in-odata-uris)

> NOTE: Any incorrect filter applied will result with an empty chart.

## Angular Chart Data Filter Example

The following example depicts a [Column Chart](../types/column-chart.md) of annual birth rates across several decades. The drop-down allows you to select a decade, which inserts an expression via the [`initialFilter`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#initialFilter) property, to update the chart visual and thus filtering out the other decades out.

<code-view style="height: 500px" alt="Angular Data Filter Example"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/data-filter"
                                                 github-src="charts/category-chart/data-filter">
</code-view>


<div class="divider--half"></div>

The [`initialFilter`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#initialFilter) property is a string that requires the following syntax in order to filter properly. The value requires sets of parentheses that include both the filter expression definition, column and value associated with the record(s) filtering in.

eg. To show all countries that start with the letter B:

"(startswith(Country, 'B'))"

eg. Concatenating more than one expression:

"(startswith(Country, 'B') and endswith(Country, 'L') and contains(Product, 'Royal Oak') and contains(Date, '3/1/20'))"

## Additional Resources

You can find more information about related chart features in these topics:

*   [Chart Annotations](chart-annotations.md)
*   [Chart Highlighting](chart-highlighting.md)
*   [Chart Tooltips](chart-tooltips.md)

## API References

The following is a list of API members mentioned in the above sections:

*   [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html)
*   [`isTransitionInEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#isTransitionInEnabled)
*   [`transitionInDuration`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#transitionInDuration)
*   [`transitionInMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html#transitionInMode)
