---
title: Angular Data Aggregations | Data Visualization | Infragistics
_description: Infragistics' Angular Data Aggregations
_keywords: Angular Charts, Markers, Infragistics
mentionedTypes: ["DomainChart", "CategoryChart"]
namespace: Infragistics.Controls.Charts
---

# Angular Data Aggregations

In the Ignite UI for Angular [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorychartcomponent.html) control Data Aggregations feature allows you to group data in the chart by unique values on the `XAxis` and then sort those groups. You may then apply summaries which will be reflected by the range of the `YAxis` and will be displayed in the tooltip when hovering the series.

# Angular Data Aggregations Example

The following example depicts a [Column Chart](../types/column-chart.md) that groups by the Country member of the `XAxis` and applies a summary and sort based on the Sales Sum.

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

*   [`initialSortDescriptions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#initialsortdescriptions)
*   [`initialSorts`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#initialsorts)
*   [`sortDescriptions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#sortdescriptions)
*   [`initialGroups`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#initialgroups)
*   [`initialGroupDescriptions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#initialgroupdescriptions)
*   [`groupDescriptions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#groupdescriptions)
*   [`initialSummaries`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#initialsummaries)
*   [`initialSummaryDescriptions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#initialsummarydescriptions)
*   [`summaryDescriptions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#summarydescriptions)
*   [`initialGroupSortDescriptions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#initialgroupsortdescriptions)
*   [`groupSorts`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#groupsorts)
*   [`groupSortDescriptions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#groupsortdescriptions)

> \[!Note]
> Chart Aggregation will not work when using [`includedProperties`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#includedproperties) | [`excludedProperties`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdomainchartcomponent.html#excludedproperties). These properties on the chart are meant for non-aggregated data. Once you attempt to aggregate data these properties should no longer be used. The reason it does not work is because aggregation replaces the collection that is passed to the chart for render.  The include/exclude properties are designed to filter in/out properties of that data and those properties no longer exist in the new aggregated collection.
