---
title: Angular Pie Charts and Graphs | Ignite UI for Angular
_description: The Ignite UI for Angular pie chart is a specialized component that renders a pie chart, consisting of a circular area divided into sections.  Try for FREE.
_keywords: Angular charts, pie chart, Ignite UI for Angular, Infragistics, data binding, slice selection, slice explosion, animation
mentionedTypes: ["XamPieChart", "XamDataChart"]
---

# Angular Pie Chart

Angular Pie Chart, or Pie Graph, is a part-to-whole chart that shows how categories (parts) of a data set add up to a total (whole) value. Categories are rendered as sections in a circular, or pie-shaped graph. Each section, or pie slice, has an arc length proportional to its underlying data value. Categories are shown in proportion to other categories based on their value percentage to the total value being analyzed, as parts of 100 or 100%.

## Angular Pie Chart Example

You can create this type of chart with the [`IgxPieChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpiechartcomponent.html) control by binding your data as shown in the example below.

This example of an Angular Pie Chart includes a simple data set with 6 values. Each key/pair value has a string and a numeric data value, the data values add up to a value of 100% of visualization. In this case, we are showing the overall breakdown of budget spend by department.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/pie-chart-overview"
           alt="Angular Pie Chart Overview" >
</code-view>

<div class="divider--half"></div>

## Angular Pie Chart Recommendations

Pie Charts are appropriate for small data sets and are easy to read at a glance. Pie charts are just one type of part-to-whole visualization. Others include:

-   Pie
-   Doughnut (Ring)
-   Funnel
-   Stacked Area
-   Stacked 100% Area (Stacked Percentage Area)
-   Stacked Bar
-   Stacked 100% Bar (Stacked Percentage Bar)
-   Treemap
-   Waterfall

The Angular Pie Chart includes interactive features that give the viewer tools to analyze data, like:

-   Legends
-   Slice Explosion
-   Slice Selection
-   Chart Animations

Best Practices for a Pie Chart:

-   Comparing slices or segments as percentage values in proportion to a total value or whole.
-   Showing how a group of categories is broken into smaller segments.
-   Presenting small, non-hierarchical data sets (less than 6 to 8 segments of data).
-   Ensuring data segments add up to 100%.
-   Arranging the order of data from largest (highest) to smallest (least).
-   Using standard presentation techniques such as starting in the 12 o'clock position and continuing clockwise.
-   Ensuring the color palette is distinguishable for segments/slices of the parts.
-   Considering data labels in segments vs. legends for ease of reading.
-   Choosing an alternative chart to Pie such as Bar or Ring based on ease of comprehension.
-   Avoiding positioning multiple pie charts next to each other for comparative analysis.

Do Not Use Pie Chart When:

-   Comparing change over time —use a Bar, Line or Area chart.
-   Requiring precise data comparison —use a Bar, Line or Area chart.
-   You have more than 6 or 8 segments (high data volume) — consider a Bar, Line or Area chart if it works for your data story.
-   It would be easier for the viewer to perceive the value difference in a Bar chart.

<!-- Angular, React, WebComponents -->

## How to Make Angular Pie Chart

### 1. Install Angular core package

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save igniteui-angular-core
</pre>

### 2. Install Angular charts

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save igniteui-angular-charts
</pre>

### 3. Install Required Modules

The Angular Pie Chart requires the following modules

```ts
// app.module.ts

import { IgxPieChartModule } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxPieChartModule,
        // ...
    ]
})
export class AppModule {}
```

<div class="divider--half"></div>

<!-- end: Angular, React, WebComponents -->

<!-- Angular, React, WebComponents -->

## Usage

Now that the pie chart module is imported, next step is to bind it to data.
In order to create a pie chart, you must first have data to bind it to. The following code snippet demonstrates how to create a simple data source.

```ts
var data = [
    { MarketShare: 30, Company: "Google",    },
    { MarketShare: 30, Company: "Apple",     },
    { MarketShare: 15, Company: "Microsoft", },
    { MarketShare: 15, Company: "Samsung",   },
    { MarketShare: 10, Company: "Other",     },
];
```

The following code demonstrates how to bind the pie chart to the above data.

```html
<igx-pie-chart [dataSource]="data"
               width="100%"
               height="100%"
               labelMemberPath="Company"
               valueMemberPath="MarketShare">
</igx-pie-chart>
```

<!-- end: Angular, React, WebComponents -->

<div class="divider--half"></div>

## Angular Pie Chart Legend

Legends are used to show information about each point, to know about its contribution towards the total sum. You can collapse the point using legend click.

In order to display a legend next to the pie chart an ItemLegend needs to be created and assigned to the [`IgxLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlegendcomponent.html) property. The [`legendLabelMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpiechartbasecomponent.html#legendlabelmemberpath) can then be used to specify which property on your data model it will use to display inside the legend for each pie slice.

Additionally you can use the [`legendItemTemplate`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpiechartbasecomponent.html#legenditemtemplate) and [`legendItemBadgeTemplate`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpiechartbasecomponent.html#legenditembadgetemplate) properties and the various font properties on ItemLegend to further customize the look of the legend items.

```html
<igx-pie-chart [dataSource]="data"
               width="100%"
               height="100%"
               valueMemberPath="MarketShare"
               labelMemberPath="Company"
               legendLabelMemberPath="Company"
               [legend]="PieChartLegend">
</igx-pie-chart>
```

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/pie-chart-legend"
           alt="Angular Pie Chart Legend" >
</code-view>

<div class="divider--half"></div>

## Angular Pie Chart Others Category

Sometimes, the underlying data for the pie chart will contain many items with small values. In this case, the Others category will permit automatic aggregation of several data values into a single slice

In the sample below, the [`othersCategoryThreshold`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpiechartbasecomponent.html#otherscategorythreshold) is set to 2, and [`othersCategoryType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpiechartbasecomponent.html#otherscategorytype) is set to Number. Therefore, items with value less than or equal to 2 will be assigned to the “Others” category.

If you set [`othersCategoryType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpiechartbasecomponent.html#otherscategorytype) to Percent, then [`othersCategoryThreshold`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpiechartbasecomponent.html#otherscategorythreshold) will be interpreted as a percentage rather than as a value, i.e. items whose values are less than 2% of the sum of all item values would be assigned to the Others category. You can use whichever [`othersCategoryType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpiechartbasecomponent.html#otherscategorytype) is most appropriate for your application.

```html
<igx-pie-chart [dataSource]="data"
               width="100%"
               height="100%"
               labelMemberPath="Company"
               valueMemberPath="MarketShare"
               othersCategoryThreshold="2"
               othersCategoryType="Number"
               othersCategoryText="Others">
</igx-pie-chart>
```

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/pie-chart-others"
           alt="Angular Pie Chart Others" >
</code-view>

<div class="divider--half"></div>

## Angular Pie Chart Explosion

The pie chart supports explosion of individual pie slices as well as a `SliceClick` event that allows you to modify selection states and implement custom logic

```html
<igx-pie-chart [dataSource]="data"
               width="100%"
               height="100%"
               allowSliceExplosion="true"
               sliceClick="piechart_SliceClick">
</igx-pie-chart>
```

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/pie-chart-explosion"
           alt="Angular Pie Chart Explosion" >
</code-view>

<div class="divider--half"></div>

## Angular Pie Chart Selection

The pie chart supports slice selection by mouse click as the default behavior. You can determine the selected slices by using the [`selectedItems`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpiechartbasecomponent.html#selecteditems) property. The selected slices are then highlighted.

There is a property called [`selectionMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpiechartbasecomponent.html#selectionmode) which is how you set what mode you want the pie chart to use. The default value is `Single`. In order to disable selection, set the property to `Manual`.

The pie chart supports three different selection modes.

-   Single - When the mode is set to single, only one slice can be selected at a time. When you select a new slice the previously selected slice will be deselected and the new one will become selected.
-   Multiple - When the mode is set to Multiple, many slices can be selected at once. If you click on a slice, it will become selected and clicking on a different slice will also select that slice leaving the previous slice selected.
-   Manual - When the mode is set to Manual, selection is disabled.

The pie chart has 4 events associated with selection:

-   SelectedItemChanging
-   SelectedItemChanged
-   SelectedItemsChanging
-   SelectedItemsChanged

The events that end in “Changing” are cancelable events which means you can stop the selection of a slice by setting the event argument property `Cancel` to true. When set to true the associated property will not update and the slice will not become selected. This is useful for scenarios where you want to keep users from being able to select certain slices based on the data inside it.

For scenarios where you click on the Others slice, the pie chart will return an object called [`IgxPieSliceOthersContext`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpiesliceotherscontext.html). This object contains a list of the data items contained within the Others slice.

```html
<igx-pie-chart [dataSource]="data"
            width="100%"
            height="100%"
            selectionMode="multiple"
            selectedSliceStroke = "white"
            selectedSliceFill= "rgb(143,143,143)"
            selectedSliceOpacity =1.0
            selectedSliceStrokeThickness=2>
</igx-pie-chart>
```

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/pie-chart-selection"
           alt="Angular Pie Chart Selection" >
</code-view>

<div class="divider--half"></div>

## Angular Pie Chart Animation

You can animate the pie chart smoothly by setting the `radiusFactor` property, which will scale the chart's radius. Also set the `startAngle` property to angle the chart such that it keep increasing the chart angle while rotating.

In the code below, the radiusFactor is increasing the chart by 0.25% of the size, and startAngle is rotating the chart by 1 degree. When radiusFactor and startAngle reached to its maximum limit the animation is stopped by reset the animation flag and clear the interval.

```ts
window.setInterval(() => this.tick(), 15);

public tick(): void {
    if (this.isAnimating) {
        if (this.chart.radiusFactor < 1.0)
            this.chart.radiusFactor += 0.0025;

        if (this.chart.startAngle < 360)
            this.chart.startAngle++;

        if (this.chart.radiusFactor >= 1.0 &&
            this.chart.startAngle >= 360) {
            this.isAnimating = false;
            window.clearInterval(this.interval);
        }
    }
}
```

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/pie-chart-animation"
           alt="Angular Pie Chart Animation" >
</code-view>

<div class="divider--half"></div>

## Angular Pie Chart Styling

Once our pie chart is created, we may want to make some further styling customizations such as a change of the colors for the slices of the chart, as demonstrated below:

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/pie-chart-styling"
           alt="Angular Pie Chart Styling" >
</code-view>

<div class="divider--half"></div>

## Angular Radial Pie Chart

The Radial Pie Chart belongs to a group of Radial Charts and uses belongs to a group of radial charts and uses pie slices that extend from the center of chart towards locations of data points. This chart type takes concepts of categorizing multiple series of data points and wraps them around a circular axis rather than stretching data points along a horizontal line.

<code-view style="height: 600px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart-radial-pie-chart"
           alt="Angular Radial Pie Chart" >
</code-view>

<div class="divider--half"></div>

## Additional Resources

-   [Donut Chart](donut-chart.md)
-   [Polar Chart](polar-chart.md)
-   [Radial Chart](radial-chart.md)

## API Members

The following table lists API members mentioned in the above sections:

-   [`legendItemBadgeTemplate`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpiechartbasecomponent.html#legenditembadgetemplate)
-   [`legendItemTemplate`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpiechartbasecomponent.html#legenditemtemplate)
-   [`legendLabelMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpiechartbasecomponent.html#legendlabelmemberpath)
-   [`othersCategoryThreshold`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpiechartbasecomponent.html#otherscategorythreshold)
-   [`othersCategoryType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpiechartbasecomponent.html#otherscategorytype)
-   [`selectionMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpiechartbasecomponent.html#selectionmode)

| Chart Type       | Control Name                                                                                                                                   | API Members                                                                                                                                                |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Pie Chart        | [`IgxPieChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpiechartcomponent.html)   | `PieChart`                                                                                                                                                 |
| Radial Pie Chart | [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) | [`IgxRadialPieSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialpieseriescomponent.html) |
