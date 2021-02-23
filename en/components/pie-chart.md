---
title: Angular Pie Chart | Data Visualization Tool | Infragistics
_description: Use Infragistics' Angular pie chart to create a colorful pie chart to display categorical data. Learn about the Ignite UI for Angular pie chart configurable elements!
_keywords: Angular charts, pie chart, Ignite UI for Angular, Infragistics, data binding, slice selection, slice explosion, animation
mentionedTypes: ['XamPieChart','SliceSelectionMode','PieSliceOthersContext']
---

# Angular Pie Chart Overview

The Ignite UI for Angular pie chart component is a specialized component that renders a pie chart, consisting of a circular area divided into sections. Each section has arc length proportional to its underlying data value.

This control is used for representing categorical data. It is most effective when there are only a few categories, and when each category makes up a relatively large percentage of the data as a whole.

## Angular Pie Chart Overview Example

<div class="sample-container loading" style="height: 350px">
    <iframe id="pie-chart-data-sample-iframe" src='{environment:dvDemosBaseUrl}/charts/pie-chart-overview' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular Pie Chart Overview Example"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="pie-chart-overview-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>


</div>

<div class="divider--half"></div>

<!-- Angular, React, WebComponents -->

## Dependencies

When installing the charts component, the core package must also be installed.

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save igniteui-angular-core
npm install --save igniteui-angular-charts
</pre>

<!-- end: Angular, React, WebComponents -->

## Required Modules

The [`IgxPieChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpiechartcomponent.html) requires the following modules:

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

<div class="divider--half"></div>

## Legend

In order to display a legend next to the pie chart component an ItemLegend needs to be created and assigned to the [`IgxLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlegendcomponent.html) property. The [`legendLabelMemberPath`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpiechartbasecomponent.html#legendlabelmemberpath) can then be used to specify which property on your data model it will use to display inside the legend for each pie slice.

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

<div class="sample-container loading" style="height: 350px">
    <iframe id="pie-chart-legend-iframe" data-src='{environment:dvDemosBaseUrl}/charts/pie-chart-legend' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="pie-chart-legend-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>


</div>

<div class="divider--half"></div>

## Others Category

Sometimes, the underlying data for the pie chart component will contain many items with small values. In this case, the Others category will permit automatic aggregation of several data values into a single slice

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

<div class="sample-container loading" style="height: 350px">
    <iframe id="pie-chart-others-iframe" data-src='{environment:dvDemosBaseUrl}/charts/pie-chart-others' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="pie-chart-others-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>


</div>

<div class="divider--half"></div>

## Explosion

The pie chart component supports explosion of individual pie slices as well as a `SliceClick` event that allows you to modify selection states and implement custom logic

```html
<igx-pie-chart [dataSource]="data"
               width="100%"
               height="100%"
               allowSliceExplosion="true"
               sliceClick="piechart_SliceClick">
</igx-pie-chart>
```

<div class="sample-container loading" style="height: 350px">
    <iframe id="pie-chart-explosion-iframe" data-src='{environment:dvDemosBaseUrl}/charts/pie-chart-explosion' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="pie-chart-explosion-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>


</div>

<div class="divider--half"></div>

## Selection

The pie chart supports slice selection by mouse click as the default behavior. You can determine the selected slices by using the [`selectedItems`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpiechartbasecomponent.html#selecteditems) property. The selected slices are then highlighted.

There is a property called [`selectionMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpiechartbasecomponent.html#selectionmode) which is how you set what mode you want the pie chart to use. The default value is [`Single`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/sliceselectionmode.html#single). In order to disable selection, set the property to [`Manual`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/sliceselectionmode.html#manual).

The pie chart component supports three different selection modes.

-   Single - When the mode is set to single, only one slice can be selected at a time. When you select a new slice the previously selected slice will be deselected and the new one will become selected.
-   Multiple - When the mode is set to Multiple, many slices can be selected at once. If you click on a slice, it will become selected and clicking on a different slice will also select that slice leaving the previous slice selected.
-   Manual - When the mode is set to Manual, selection is disabled.

The pie chart component has 4 events associated with selection:

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

<div class="sample-container loading" style="height: 350px">
    <iframe id="pie-chart-selection-iframe" data-src='{environment:dvDemosBaseUrl}/charts/pie-chart-selection' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="pie-chart-selection-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>


</div>

<div class="divider--half"></div>

## Animation

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

<div class="sample-container loading" style="height: 350px">
    <iframe id="pie-chart-animation-iframe" data-src='{environment:dvDemosBaseUrl}/charts/pie-chart-animation' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="pie-chart-animation-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>


</div>

<div class="divider--half"></div>
