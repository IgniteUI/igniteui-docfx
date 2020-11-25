---
title: Angular Linear Gauge | Data Visualization Tools | Infragistics
_description: Use Infragistics' Angular linear gauge control to visualize data with a simple and concise view. Learn about the Ignite UI for Angular linear gauge configurable elements!
_keywords: linear gauge, Ignite UI for Angular, Infragistics, animation, labels, needle, scales, ranges, tick marks
mentionedTypes: ['XamLinearGauge']
---

# Angular Linear Gauge Overview

Use the Angular linear gauge component to see a simple display of a value compared against a scale and one or more ranges.

## Angular Linear Gauge Overview Example

The Ignite UI for Angular linear gauge component allows for visualizing data in the form of a linear gauge. It provides a simple and concise view of a value compared against a scale and one or more ranges. It supports one scale, one set of tick marks and one set of labels. The component has also a built-in support for animated transitions. This animation is easily customizable by setting the [`transitionDuration`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlineargaugecomponent.html#transitionduration) property. The features of the linear gauge component include configurable orientation and direction, configurable visual elements such as the needle, and more.

The following sample demonstrates how setting multiple properties on the same linear gauge can transform it to completely different linear gauge.

<div class="sample-container loading" style="height: 155px">
    <iframe id="linear-gauge-sample-iframe" src='{environment:dvDemosBaseUrl}/gauges/linear-gauge-animation' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular Linear Gauge Overview Example"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="linear-gauge-sample-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>


</div>

<div class="divider--half"></div>

<!-- Angular, React, WebComponents -->

## Dependencies

When installing the Angular gauge component, the core package must also be installed.

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save igniteui-angular-core
npm install --save igniteui-angular-gauges
</pre>

<!-- end: Angular, React, WebComponents -->

## Required Modules

The [`IgxLinearGaugeComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlineargaugecomponent.html) requires the following modules<!-- Angular, React, WebComponents -->.<!-- end: Angular, React, WebComponents --><!-- Blazor --> to be registered in your application entry point:

-   LinearGaugeModule 
    <!-- end: Blazor -->

```ts
// app.module.ts
import { IgxLinearGaugeModule } from 'igniteui-angular-gauges';
import { IgxLinearGaugeComponent } from 'igniteui-angular-gauges';

@NgModule({
    imports: [
        // ...
        IgxLinearGaugeModule,
        IgxLinearGaugeComponent,
        // ...
    ]
})
export class AppModule {}
```

<div class="divider--half"></div>

## Usage

The following code demonstrates how create a linear gauge containing a needle and three comparative ranges on the scale.

```html
 <igx-linear-gauge width="700px"
                   height="30px"
                   minimumValue = "5"
                   maximumValue = "55"
                   value = "43">
    <igx-linear-graph-range startValue="0"
                            endValue="15"
                            brush="red">
    </igx-linear-graph-range>
    <igx-linear-graph-range startValue="15"
                            endValue="30"
                            brush="yellow">
    </igx-linear-graph-range>
    <igx-linear-graph-range startValue="30"
                            endValue="55"
                            brush="green">
    </igx-linear-graph-range>
 </igx-linear-gauge>
```

<div class="divider--half"></div>

## Needle

This is the primary measure displayed by the linear gauge component and is visualized as a bar or you can customize it to show almost any shape as is demonstrated below.

```html
 <igx-linear-gauge
    height="80px" width="400px"
    minimumValue=0
    maximumValue=100 interval=10
    value=50
    isNeedleDraggingEnabled=true
    needleShape="Custom"
    needleBrush="DodgerBlue"
    needleOutline="DodgerBlue"
    needleStrokeThickness=1
    needleBreadth=15
    needleInnerExtent=0.35
    needleOuterExtent=0.65
    needleOuterPointExtent=0.8
    needleInnerPointExtent=0.325
    needleInnerPointWidth=0
    needleOuterPointWidth=0.3
    needleInnerBaseWidth=0
    needleOuterBaseWidth=0.07>
</igx-linear-gauge>
```

<div class="sample-container loading" style="height: 125px">
    <iframe id="linear-gauge-needle-iframe" data-src='{environment:dvDemosBaseUrl}/gauges/linear-gauge-needle' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="linear-gauge-needle-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>


</div>

## Ranges

The ranges are visual elements that highlight a specified range of values on a scale. Their purpose is to visually communicate the qualitative state of the performance bar measure, illustrating at the same times the degree to which it resides within that state.

```html
<igx-linear-gauge
    height="80px" width="400px"
    minimumValue=0 value=50
    maximumValue=100 interval=10
    rangeBrushes="#a4bd29, #F86232"
    rangeOutlines="#a4bd29, #F86232" >
    <igx-linear-graph-range
        startValue=0 endValue=50
        innerStartExtent=0.075 innerEndExtent=0.075
        outerStartExtent=0.25 outerEndExtent=0.4>
    </igx-linear-graph-range>
    <igx-linear-graph-range
        startValue=50 endValue=100
        innerStartExtent=0.075 innerEndExtent=0.075
        outerStartExtent=0.4 outerEndExtent=0.55>
    </igx-linear-graph-range>
</igx-linear-gauge>
```

<div class="sample-container loading" style="height: 125px">
    <iframe id="linear-gauge-ranges-iframe" data-src='{environment:dvDemosBaseUrl}/gauges/linear-gauge-ranges' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="linear-gauge-ranges-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>


</div>

## Tick Marks

The tick marks serve as a visual division of the scale into intervals in order to increase the readability of the linear gauge.

Major tick marks – The major tick marks are used as primary delimiters on the scale. The frequency they appear at, their extents and style can be controlled by setting their corresponding properties.

Minor tick marks – The minor tick marks represent helper tick marks, which might be used to additionally improve the readability of the scale and can be customized in a way similar to the major ones.

```html
<igx-linear-gauge
    height="80px" width="400px"
    minimumValue=0 value=50
    maximumValue=100
    interval=10
    tickBrush="DodgerBlue"
    ticksPreTerminal=0
    ticksPostInitial=0
    tickStrokeThickness=2
    tickStartExtent=0.25
    tickEndExtent=0.05
    minorTickCount=4
    minorTickBrush="DarkViolet"
    minorTickEndExtent=0.05
    minorTickStartExtent=0.15
    minorTickStrokeThickness=1>
</igx-linear-gauge>
```

<div class="sample-container loading" style="height: 125px">
    <iframe id="linear-gauge-tickmarks-iframe" data-src='{environment:dvDemosBaseUrl}/gauges/linear-gauge-tickmarks' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="linear-gauge-tickmarks-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>


</div>

## Labels

The labels indicate the measures on the scale.

```html
<igx-linear-gauge
    height="80px" width="400px"
    minimumValue=0 value=50
    maximumValue=100 interval=10
    labelInterval=10
    labelExtent=0.025
    labelsPreTerminal=0
    labelsPostInitial=0
    fontBrush="DodgerBlue"
    font="11px Verdana">
</igx-linear-gauge>
```

<div class="sample-container loading" style="height: 125px">
    <iframe id="linear-gauge-labels-iframe" data-src='{environment:dvDemosBaseUrl}/gauges/linear-gauge-labels' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="linear-gauge-labels-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>


</div>

## Backing

The backing element represents background and border of the linear gauge component. It is always the first element rendered and all the rest of elements such as labels, and tick marks are overlaid on top of it.

```html
<igx-linear-gauge
    height="80px" width="400px"
    minimumValue=0 value=50
    maximumValue=100 interval=10
    backingBrush="#bddcfc"
    backingOutline="DodgerBlue"
    backingStrokeThickness=4
    backingInnerExtent=0
    backingOuterExtent=1>
</igx-linear-gauge>
```

<div class="sample-container loading" style="height: 125px">
    <iframe id="linear-gauge-backing-iframe" data-src='{environment:dvDemosBaseUrl}/gauges/linear-gauge-backing' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="linear-gauge-backing-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>


</div>

## Scale

The scale is a visual element that highlights the full range of values in the linear gauge. You can customize the appearance and the shape of the scale. It can also be inverted (using [`isScaleInverted`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlineargaugecomponent.html#isscaleinverted) property) and all labels will be rendered from right-to-left instead of left-to-right.

```html
<igx-linear-gauge
    height="80px" width="400px"
    minimumValue=0 value=50
    maximumValue=100 interval=10
    isScaleInverted=false
    scaleBrush="DodgerBlue"
    scaleOutline="DarkViolet"
    scaleStrokeThickness=1
    scaleInnerExtent=0.05
    scaleOuterExtent=0.65
    scaleStartExtent=0.05
    scaleEndExtent=0.95>
</igx-linear-gauge>
```

<div class="sample-container loading" style="height: 125px">
    <iframe id="linear-gauge-scale-iframe" data-src='{environment:dvDemosBaseUrl}/gauges/linear-gauge-scale' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="linear-gauge-scale-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>


</div>

## Summary

For your convenience, all above code snippets are combined into one code block below that you can easily copy to your project and see the linear gauge with all features and visuals enabled.

```html
<igx-linear-gauge
    height="80px" width="400px"
    minimumValue=0
    maximumValue=100

    labelInterval=10
    labelExtent=0.025
    labelsPreTerminal=0
    labelsPostInitial=0
    fontBrush="Black"
    font="11px Verdana"

    interval=10
    tickBrush="Black"
    ticksPreTerminal=0
    ticksPostInitial=0
    tickStrokeThickness=2
    tickStartExtent=0.25
    tickEndExtent=0.05

    minorTickCount=4
    minorTickBrush="Black"
    minorTickEndExtent=0.05
    minorTickStartExtent=0.15
    minorTickStrokeThickness=1

    value=50
    isNeedleDraggingEnabled=true
    needleShape="Custom"
    needleBrush="Black"
    needleOutline="Black"
    needleStrokeThickness=1
    needleBreadth=15
    needleInnerExtent=0.35
    needleOuterExtent=0.65
    needleOuterPointExtent=0.8
    needleInnerPointExtent=0.325
    needleInnerPointWidth=0
    needleOuterPointWidth=0.3
    needleInnerBaseWidth=0
    needleOuterBaseWidth=0.07

    isScaleInverted=false
    scaleBrush="Gray"
    scaleOutline="Gray"
    scaleStrokeThickness=1
    scaleInnerExtent=0.05
    scaleOuterExtent=0.65
    scaleStartExtent=0.05
    scaleEndExtent=0.95

    backingBrush="#cecece"
    backingOutline="#cecece"
    backingStrokeThickness=4
    backingInnerExtent=0
    backingOuterExtent=1

    rangeBrushes ="#C62828, #F96232, #FF9800"
    rangeOutlines="#C62828, #F96232, #FF9800">
    <igx-linear-graph-range
        startValue=0 endValue=50
        innerStartExtent=0.075 innerEndExtent=0.075
        outerStartExtent=0.25 outerEndExtent=0.4>
    </igx-linear-graph-range>
    <igx-linear-graph-range
        startValue=50 endValue=100
        innerStartExtent=0.075 innerEndExtent=0.075
        outerStartExtent=0.4 outerEndExtent=0.55>
    </igx-linear-graph-range>
</igx-linear-gauge>
```
