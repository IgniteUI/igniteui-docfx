---
title: Sparkline | Data Visualization Tools | Ignite UI for Angular | Infragistics
_description: Use the sparkline chart to render in a small scale layout such as a grid cell or stand alone.
_keywords: Sparkline, Ignite UI for Angular, Infragistics
---

## Sparkline

The Ignite UI for Angular sparkline component is a lightweight charting control. It is intended for rendering within a small scale layout such as within a grid cell, but can also be rendered alone.

The sparkline control has several visual elements and corresponding features that can be configured and customized such as the chart type, markers, ranges, trendlines, unknown value plotting, and tooltips.

### Demo

<div class="sample-container loading" style="height: 375px">
    <iframe id="radial-gauge-sample-iframe" src='{environment:demosBaseUrl}/gauges/radial-gauge-animation' width="100%" height="100%" seamless="" frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<!-- <div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="radial-gauge-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div> -->

<div class="divider--half"></div>

### Dependencies

In order to use the Ignite UI for Angular sparkline component, the following packages need to be installed:

-   **npm install --save igniteui-angular-core**
-   **npm install --save igniteui-angular-charts**

The sparkline component requires the import of the following modules:

```typescript
// app.module.ts
import { IgxSparklineModule} from "igniteui-angular-charts/ES5/igx-sparkline-module";
import { IgxSparklineCoreModule} from "igniteui-angular-charts/ES5/igx-sparkline-core-module";

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

-   `Area`
-   `IgxColumnComponent`
-   `Line`
-   `Win/Loss`

The type is defined by setting the `DisplayType` property. If the `DisplayType` property is not specified, then by default, the `Line` type is displayed.

The `Win/Loss` sparkline type is a column chart type, in which the value of each column is equal to either the positive maximum (for positive values) or the negative minimum (for negative values) of the bound data set, often denoting a Win or a Loss, or similar opposing concepts. For the `Win/Loss` sparkline to display properly, the data set should have both positive and negative values.

If the `Win/Loss` sparkline is bound to the same data as the other types such as the `Line` type, which can be bound to a collection of numeric values, then the sparkline component will select two values from the collection - the highest and the lowest - and will render the sparkline based upon those values.

<div class="sample-container loading" style="height: 375px">
    <iframe id="radial-gauge-sample-iframe" src='{environment:demosBaseUrl}/gauges/radial-gauge-animation' width="100%" height="100%" seamless="" frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<!-- <div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="radial-gauge-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div> -->

<div class="divider--half"></div>

### Markers

The Ignite UI for Angular sparkline component allows you to show markers as circular colored icons on your series to indicate the individual data points based on X/Y coordinates. Markers can be set on sparklines of display types `Line`, `Area`, and `IgxColumnComponent`. The `Win/Loss` type of sparkline does not currently accept markers. By default, markers are not displayed.

Markers in the sparkline can be placed in any combination of the following locations:

-   `All`: Display markers for all data points in the sparkline.
-   `Low`: Display markers on the data point of the lowest value. If there are multiple points at the lowest value, it will show on each point with that value.
-   `High`: Display markers on the data point of the highest value. If there are multiple points at the highest value, it will show on each point with that value.
-   `First`: Display a marker on the first data point in the sparkline.
-   `Last`: Display a marker on the last data point in the sparkline.
-   `Negative`: Display markers on the negative data points plotted in the sparkline.

All of the markers mentioned above can be customized using the related marker types' property in aspects of color, visibility, and size. For example, the `Low` markers above will have properties `LowMarkerBrush`, `LowMarkerVisibility`, and `LowMarkerSize`.

<div class="sample-container loading" style="height: 375px">
    <iframe id="radial-gauge-sample-iframe" src='{environment:demosBaseUrl}/gauges/radial-gauge-animation' width="100%" height="100%" seamless="" frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<!-- <div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="radial-gauge-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div> -->

<div class="divider--half"></div>

### Normal Range

The normal range feature of the Ignite UI for Angular sparkline component is a horizontal stripe representing some pre-defined meaningful range when the data is being visualized. The normal range can be set as a shaded area outlined with the desired color.

The normal range can be wider than the maximum data point or beyond, and it can also be as thin as the sparkline's `Line` display type, to serve as a threshold indicator, for instance. The width of the normal range is determined by the following three properties, which serve as the minimum settings required for displaying the normal range:

-   `NormalRangeVisibility`: Whether or not the normal range is visible.
-   `NormalRangeMaximum`: The bottom border of the range.
-   `NormalRangeMinimum`: The top border of the range.

By default, the normal range is not displayed. When enabled, the normal range shows up with a light gray color appearance, which can also be configured using the `NormalRangeFill` property.

You can also configure whether or not to show the normal range in front of or behind the plotted series in your sparkline component by setting the `DisplayNormalRangeInFront` property.

<div class="sample-container loading" style="height: 375px">
    <iframe id="radial-gauge-sample-iframe" src='{environment:demosBaseUrl}/gauges/radial-gauge-animation' width="100%" height="100%" seamless="" frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<!-- <div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="radial-gauge-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div> -->

<div class="divider--half"></div>

### Trendlines

The Ignite UI for Angular sparkline component has support for a range of trendlines that display as another layer on top of the actual sparkline layer. To display a sparkline, you can use the `TrendLineType` property.

The trendlines are calculated according to the algorithm specified by the `TrendLineType` property using the values of the data the the chart is bound to.

Trendlines can only be displayed one at a time and by default, the trendline is not displayed.

A list of supported trendlines can be found below:

-   [`None`](/angular-apis/typescript/latest/enums/trendlinetype.html#none)
-   [`CubicFit`](/angular-apis/typescript/latest/enums/trendlinetype.html#cubicfit)
-   [`CumulativeAverage`](/angular-apis/typescript/latest/enums/trendlinetype.html#cumulativeaverage)
-   [`ExponentialAverage`](/angular-apis/typescript/latest/enums/trendlinetype.html#exponentialaverage)
-   [`ExponentialFit`](/angular-apis/typescript/latest/enums/trendlinetype.html#exponentialfit)
-   [`LinearFit`](/angular-apis/typescript/latest/enums/trendlinetype.html#linearfit)
-   [`LogarithmicFit`](/angular-apis/typescript/latest/enums/trendlinetype.html#logarithmicfit)
-   [`ModifiedAverage`](/angular-apis/typescript/latest/enums/trendlinetype.html#modifiedaverage)
-   [`PowerLawFit`](/angular-apis/typescript/latest/enums/trendlinetype.html#powerlawfit)
-   [`QuadraticFit`](/angular-apis/typescript/latest/enums/trendlinetype.html#quadraticfit)
-   [`QuarticFit`](/angular-apis/typescript/latest/enums/trendlinetype.html#quarticfit)
-   [`QuinticFit`](/angular-apis/typescript/latest/enums/trendlinetype.html#quinticfit)
-   [`SimpleAverage`](/angular-apis/typescript/latest/enums/trendlinetype.html#simpleaverage)
-   [`WeightedAverage`](/angular-apis/typescript/latest/enums/trendlinetype.html#weightedaverage)

The following code example shows how to enable a trendline in the Ignite UI for Angular sparkline component:

<div class="sample-container loading" style="height: 375px">
    <iframe id="radial-gauge-sample-iframe" src='{environment:demosBaseUrl}/gauges/radial-gauge-animation' width="100%" height="100%" seamless="" frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<!-- <div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="radial-gauge-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div> -->

<div class="divider--half"></div>

### Unknown Value Interpolation

The Ignite UI for Angular sparkline component can detect unknown values and render the space for unknown values through a specified interpolation algorithm. If your data contains null values and you do not use this feature, meaning no interpolation is specified, the unknown value will not be plotted.

In order to plot the unknown values, you can set the `UnknownValuePlotting` property of the sparkline component. This property has two possible values, [`LinearInterpolate`](/angular-apis/typescript/latest/enums/unknownvalueplotting.html#linearinterpolate) and [`DontPlot`](/angular-apis/typescript/latest/enums/unknownvalueplotting.html#dontplot), which will interpolate or ignore unknown values, respectively.

<div class="sample-container loading" style="height: 375px">
    <iframe id="radial-gauge-sample-iframe" src='{environment:demosBaseUrl}/gauges/radial-gauge-animation' width="100%" height="100%" seamless="" frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<!-- <div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="radial-gauge-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div> -->

<div class="divider--half"></div>
