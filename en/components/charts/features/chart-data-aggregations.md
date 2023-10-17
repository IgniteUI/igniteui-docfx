---
title: Angular Data Aggregations | Data Visualization | Infragistics
_description: Infragistics' Angular Data Aggregations
_keywords: Angular Charts, Markers, Infragistics
mentionedTypes: ["DomainChart", "CategoryChart"]
namespace: Infragistics.Controls.Charts
---

# Angular Data Aggregations

In the Ignite UI for Angular [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html) control Data Aggregations feature allows you to group data in the chart by unique values on the `XAxis` and then sort those groups. You may then apply summaries which will be reflected by the range of the `YAxis` and will be displayed in the tooltip when hovering the series.

# Angular Data Aggregations Example

The following example depicts a [Column Chart](../types/column-chart.md) that groups by the Country member of the `XAxis` and can be changed to other properties within each data item such as Product, MonthName, and Year to aggregate the sales data. Also a summary and sort option is available to get a desirable order for the grouped property.

Note, the abbreviated functions found within the dropdowns for [`initialSummaries`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#initialSummaries) and [`groupSorts`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#groupSorts) have be applied as shown to get a correct result based on the property you assign. eg. Sum(sales) as Sales | Sales Desc

<code-view style="height: 500px" alt="Angular Data Aggregations Example"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/data-aggregations"
                                                 github-src="charts/category-chart/data-aggregations">
</code-view>


```html
<igx-category-chart
    [dataSource]="salesData"
    initialGroups="country"
    initialSummaries="Sum(sales) as Sales"
    groupSorts="Sales Desc">
</igx-category-chart>
```

## API References

The following is a list of API members mentioned in the above sections:

*   [`initialSortDescriptions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#initialSortDescriptions)
*   [`initialSorts`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#initialSorts)
*   [`sortDescriptions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#sortDescriptions)
*   [`initialGroups`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#initialGroups)
*   [`initialGroupDescriptions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#initialGroupDescriptions)
*   [`groupDescriptions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#groupDescriptions)
*   [`initialSummaries`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#initialSummaries)
*   [`initialSummaryDescriptions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#initialSummaryDescriptions)
*   [`summaryDescriptions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#summaryDescriptions)
*   [`initialGroupSortDescriptions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#initialGroupSortDescriptions)
*   [`groupSorts`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#groupSorts)
*   [`groupSortDescriptions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#groupSortDescriptions)

> \[!Note]
> Chart Aggregation will not work when using [`includedProperties`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#includedProperties) | [`excludedProperties`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdomainchartcomponent.html#excludedProperties). These properties on the chart are meant for non-aggregated data. Once you attempt to aggregate data these properties should no longer be used. The reason it does not work is because aggregation replaces the collection that is passed to the chart for render.  The include/exclude properties are designed to filter in/out properties of that data and those properties no longer exist in the new aggregated collection.
