---
title: Angular Point Chart | Data Visualization | Infragistics
_description: Infragistics' Angular Point Chart
_keywords: Angular Charts, Point Chart, Infragistics
mentionedTypes: ["XamCategoryChart", "ChartType", "Legend"]
---

# Angular Point Chart

Angular Point Chart renders a collection of points. Values are represented on the y-axis (labels on the left side) and categories are displayed on the x-axis (bottom labels). These charts emphasize the amount of change over a period of time or compare multiple items as well as the relationship of parts of a whole by displaying the total of the plotted values.

With multiple series, our Angular Point Chart requires more visual indicators for end-users to easily perceive what data is displayed. To improve the experience, we need to add a legend for the multiple series. First, we will add a legend object to our application and then we will set it to the [`IgxLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlegendcomponent.html) property of the Angular `XamCategoryChart` control. This gives the benefit for our users to more easily comprehend what data set each point corresponds to.

## Angular Category Point Chart

You can create the Angular Point Chart in the `XamCategoryChart` control by binding your data to `ItemsSource` property and setting [`ChartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/charttype.html) property to `Point` value, as shown in the example below.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-point-chart-multiple-sources"
           alt="Angular Point Chart Example" >
</code-view>

<div class="divider--half"></div>

## Angular Point Chart with Single Series

In the following example, the Angular Point Chart is comparing the generation of renewable electricity for the countries Europe, China, and USA over the years of 2009 to 2019. The Y-Axis, or labels on the left of the chart, are displaying the terawatt hour (TWh) values of renewed electricity and the X-Axis, or labels on the bottom of the chart, are displaying the year.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-point-chart-single-source"
           alt="Angular Point Chart with Single Series" >
</code-view>

<div class="divider--half"></div>

## Angular Point Chart with Multiple Series

Since the Angular Point Chart allows you to combine multiple series and compare or see how they change over time, let’s see how easy it is to achieve this. All we need to do is bind to a data source containing the data for China and the USA, and the point chart will automatically update to fit the additional data.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-point-chart-multiple-sources"
           alt="Angular Point Chart with Multiple Series" >
</code-view>

<div class="divider--half"></div>

## Angular Point Chart Styling

Once the Angular Point Chart is set up, we may want to make some further styling customizations such as change the markers and its outlines, brushes and thickness.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-point-chart-styling"
           alt="Angular Point Chart Styling" >
</code-view>

<div class="divider--half"></div>

## Additional Resources

-   [Bubble Chart](bubble-chart.md)
-   [Scatter Chart](scatter-chart.md)

## API Members

-   `XamCategoryChart`
-   [`ChartType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/charttype.html)
-   `MarkerTypes`
-   `MarkerOutlines`
-   `MarkerBrushes`
-   `MarkerThickness`
