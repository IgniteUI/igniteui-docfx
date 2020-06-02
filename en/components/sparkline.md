---
title: Sparkline | Data Visualization Tools | Ignite UI for Angular | Infragistics
_description: Use the sparkline chart to render in a small scale layout such as a grid cell or stand alone.
_keywords: Sparkline, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamSparkline', 'SparklineDisplayType', 'TrendLineType']
---

## Sparkline

The Ignite UI for Angular sparkline component is a lightweight charting control. It is intended for rendering within a small scale layout such as within a grid cell, but can also be rendered alone.

The sparkline control has several visual elements and corresponding features that can be configured and customized such as the chart type, markers, ranges, trendlines, unknown value plotting, and tooltips.

### Demo

<div class="sample-container loading" style="height: 450px">
    <iframe id="sparkline-display-types-iframe" src='{environment:dvDemosBaseUrl}/charts/sparkline-display-types' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="sparkline-display-types-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>


<div class="divider--half"></div>

### Dependencies

In order to use the Ignite UI for Angular sparkline component, the following packages need to be installed:

-   **npm install --save igniteui-angular-core**
-   **npm install --save igniteui-angular-charts**

The sparkline component requires the import of the following modules:

```ts
// app.module.ts
import { IgxSparklineModule } from "igniteui-angular-charts";
import { IgxSparklineCoreModule } from "igniteui-angular-charts";
import { SparklineDisplayType } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxSparklineCoreModule,
        IgxSparklineModule
        // ...
    ]
})
export class AppModule {}
```

### Sparkline Types

The Ignite UI for Angular sparkline component supports the following types of sparklines:

-   [`Area`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/sparklinedisplaytype.html#area)
-   [`Column`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/sparklinedisplaytype.html#column)
-   [`Line`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/sparklinedisplaytype.html#line)
-   [`WinLoss`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/sparklinedisplaytype.html#winloss)

The type is defined by setting the [`displayType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsparklinecomponent.html#displaytype) property. If the [`displayType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsparklinecomponent.html#displaytype) property is not specified, then by default, the [`Line`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/sparklinedisplaytype.html#line) type is displayed.

The [`WinLoss`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/sparklinedisplaytype.html#winloss) sparkline type is a column chart type, in which the value of each column is equal to either the positive maximum (for positive values) or the negative minimum (for negative values) of the bound data set, often denoting a Win or a Loss, or similar opposing concepts. For the [`WinLoss`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/sparklinedisplaytype.html#winloss) sparkline to display properly, the data set should have both positive and negative values.

If the [`WinLoss`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/sparklinedisplaytype.html#winloss) sparkline is bound to the same data as the other types such as the [`Line`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/sparklinedisplaytype.html#line) type, which can be bound to a collection of numeric values, then the sparkline component will select two values from the collection - the highest and the lowest - and will render the sparkline based upon those values.

```html
<igx-sparkline height="200px" width="400px"
    [dataSource]="data"
    valueMemberPath="Value"
    displayType="Area" />
```

<div class="sample-container loading" style="height: 450px">
    <iframe id="sparkline-display-types-iframe" src='{environment:dvDemosBaseUrl}/charts/sparkline-display-types' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="sparkline-display-types-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Markers

The Ignite UI for Angular sparkline component allows you to show markers as circular colored icons on your series to indicate the individual data points based on X/Y coordinates. Markers can be set on sparklines of display types [`Line`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/sparklinedisplaytype.html#line), [`Area`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/sparklinedisplaytype.html#area), and [`Column`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/sparklinedisplaytype.html#column). The [`WinLoss`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/sparklinedisplaytype.html#winloss) type of sparkline does not currently accept markers. By default, markers are not displayed.

Markers in the sparkline can be placed in any combination of the following locations:

-   `All`: Display markers for all data points in the sparkline.
-   `Low`: Display markers on the data point of the lowest value. If there are multiple points at the lowest value, it will show on each point with that value.
-   `High`: Display markers on the data point of the highest value. If there are multiple points at the highest value, it will show on each point with that value.
-   `First`: Display a marker on the first data point in the sparkline.
-   `Last`: Display a marker on the last data point in the sparkline.
-   `Negative`: Display markers on the negative data points plotted in the sparkline.

All of the markers mentioned above can be customized using the related marker types' property in aspects of color, visibility, and size. For example, the `Low` markers above will have properties [`lowMarkerBrush`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsparklinecomponent.html#lowmarkerbrush), [`lowMarkerVisibility`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsparklinecomponent.html#lowmarkervisibility), and [`lowMarkerSize`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsparklinecomponent.html#lowmarkersize).

```html
<igx-sparkline
    highMarkerVisibility="Visible"
    lowMarkerVisibility="Visible"
    firstMarkerVisibility="Visible"
    lastMarkerVisibility="Visible"
    negativeMarkerVisibility="Visible"
    markerVisibility="Collapsed"
    markerSize="10"
    firstMarkerSize="10"
    lastMarkerSize="10"
    lowMarkerSize="10"
    highMarkerSize="10"
    negativeMarkerSize="10"/>
```

<div class="sample-container loading" style="height: 300px">
    <iframe id="sparkline-markers-iframe" src='{environment:dvDemosBaseUrl}/charts/sparkline-markers' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="sparkline-markers-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Normal Range

The normal range feature of the Ignite UI for Angular sparkline component is a horizontal stripe representing some pre-defined meaningful range when the data is being visualized. The normal range can be set as a shaded area outlined with the desired color.

The normal range can be wider than the maximum data point or beyond, and it can also be as thin as the sparkline's [`Line`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/sparklinedisplaytype.html#line) display type, to serve as a threshold indicator, for instance. The width of the normal range is determined by the following three properties, which serve as the minimum settings required for displaying the normal range:

-   [`normalRangeVisibility`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsparklinecomponent.html#normalrangevisibility): Whether or not the normal range is visible.
-   [`normalRangeMaximum`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsparklinecomponent.html#normalrangemaximum): The bottom border of the range.
-   [`normalRangeMinimum`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsparklinecomponent.html#normalrangeminimum): The top border of the range.

By default, the normal range is not displayed. When enabled, the normal range shows up with a light gray color appearance, which can also be configured using the [`normalRangeFill`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsparklinecomponent.html#normalrangefill) property.

You can also configure whether or not to show the normal range in front of or behind the plotted series in your sparkline component by setting the [`displayNormalRangeInFront`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsparklinecomponent.html#displaynormalrangeinfront) property.

```html
<igx-sparkline
    normalRangeVisibility="Visible"
    normalRangeMinimum="1"
    normalRangeMaximum="4"
    normalRangeFill="rgba(88, 88, 88, 0.4)"
    displayNormalRangeInFront="true" />
```

<div class="sample-container loading" style="height: 300px">
    <iframe id="sparkline-normal-range-iframe" src='{environment:dvDemosBaseUrl}/charts/sparkline-normal-range' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="sparkline-normal-range-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Trendlines

The Ignite UI for Angular sparkline component has support for a range of trendlines that display as another layer on top of the actual sparkline layer. To display a sparkline, you can use the [`trendLineType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsparklinecomponent.html#trendlinetype) property.

The trendlines are calculated according to the algorithm specified by the [`trendLineType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsparklinecomponent.html#trendlinetype) property using the values of the data the the chart is bound to.

Trendlines can only be displayed one at a time and by default, the trendline is not displayed.

A list of supported trendlines can be found below:

-   [`None`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/trendlinetype.html#none)
-   [`CubicFit`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/trendlinetype.html#cubicfit)
-   [`CumulativeAverage`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/trendlinetype.html#cumulativeaverage)
-   [`ExponentialAverage`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/trendlinetype.html#exponentialaverage)
-   [`ExponentialFit`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/trendlinetype.html#exponentialfit)
-   [`LinearFit`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/trendlinetype.html#linearfit)
-   [`LogarithmicFit`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/trendlinetype.html#logarithmicfit)
-   [`ModifiedAverage`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/trendlinetype.html#modifiedaverage)
-   [`PowerLawFit`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/trendlinetype.html#powerlawfit)
-   [`QuadraticFit`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/trendlinetype.html#quadraticfit)
-   [`QuarticFit`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/trendlinetype.html#quarticfit)
-   [`QuinticFit`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/trendlinetype.html#quinticfit)
-   [`SimpleAverage`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/trendlinetype.html#simpleaverage)
-   [`WeightedAverage`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/trendlinetype.html#weightedaverage)

The following code example shows how to enable a trendline in the Ignite UI for Angular sparkline component:

```html
<igx-sparkline
    trendLineThickness="3"
    trendLinePeriod="5"
    trendLineType="ExponentialFit"
    trendLineBrush="gray" />
```

<div class="sample-container loading" style="height: 300px">
    <iframe id="sparkline-trendlines-iframe" src='{environment:dvDemosBaseUrl}/charts/sparkline-trendlines' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="sparkline-trendlines-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Unknown Value Interpolation

The Ignite UI for Angular sparkline component can detect unknown values and render the space for unknown values through a specified interpolation algorithm. If your data contains null values and you do not use this feature, meaning no interpolation is specified, the unknown value will not be plotted.

In order to plot the unknown values, you can set the [`unknownValuePlotting`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxsparklinecomponent.html#unknownvalueplotting) property of the sparkline component.

```html
<igx-sparkline
    unknownValuePlotting="LinearInterpolate" />
```

<div class="sample-container loading" style="height: 300px">
    <iframe id="sparkline-unknown-values-iframe" src='{environment:dvDemosBaseUrl}/charts/sparkline-unknown-values' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="sparkline-unknown-values-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Sparkline in Data Grid

You can embed the Ignite UI for Angular sparkline component in a template column of data grid or other components that support templates. The following code example shows how to do this:

```html
<igx-grid #grid1 [data]="data | async"
[height]="'500px'" width="100%" [autoGenerate]='false' >
    <!-- ... -->
    <igx-column [field]="'OrderHistory'" [width]="'160px'" header="Order History" >
        <ng-template igxCell let-val>
            <igx-sparkline height="50px" width="150px"
            [dataSource]="val"
            valueMemberPath="Sold"
            displayType="Line"
            lineThickness="2"
            brush="rgb(21, 190, 6)"  >
            </igx-sparkline>
        </ng-template>
    </igx-column>
    <!-- ... -->
</igx-grid>
```

<div class="sample-container loading" style="height: 530px">
    <iframe id="sparkline-grid-iframe" src='{environment:dvDemosBaseUrl}/charts/sparkline-grid' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="sparkline-grid-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>
