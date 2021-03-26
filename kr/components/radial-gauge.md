---
title: Angular Radial Gauge Component - Native Angular | Ignite UI for Angular
_description: The Radial Gauge component in Ignite UI for Angular provides a number of visual elements, like a needle, tick marks, ranges, and labels, in order to create a predefined shape and scale.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Data Grid, Angular Chart Control, Angular Grid Component, Angular radial gauge component, Angular radial gauge
_language: kr
---

# Angular Radial Gauge

The Radial Gauge component provides a number of visual elements, like a needle, tick marks, ranges, and labels, in order to create a predefined shape and scale.

## Demo

The radial gauge component is a data visualization tool capable of displaying a gauge containing a number of visual elements, such as a scale with tick marks and labels, a needle, and a number of ranges. The component also has built-in support for animated transitions. This animation is easily customizable by setting the `transitionDuration` property.

The following sample demonstrates how setting multiple properties on the same gauge can transform it to completely different gauge.

<code-view style="height: 350px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/gauges/radial-gauge-animation"  
           github-src="gauges/radial-gauge/animation">
</code-view>

<div class="divider--half"></div>

<!-- Angular, React, WebComponents -->

## Dependencies

When installing the gauge package, the core package must also be installed.

-   **npm install --save igniteui-angular-core**
-   **npm install --save igniteui-angular-gauges**
    <!-- end: Angular, React, WebComponents -->

## Required Modules

The [`IgxRadialGaugeComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialgaugecomponent.html) requires the following modules:

```ts
// app.module.ts
import { IgxRadialGaugeModule } from 'igniteui-angular-gauges';
import { IgxRadialGauge } from 'igniteui-angular-gauges';

@NgModule({
    imports: [
        // ...
        IgxRadialGaugeModule,
        // ...
    ]
})
export class AppModule {}
```

<div class="divider--half"></div>

## Usage

The following code demonstrates how create a radial gauge containing a needle and three comparative ranges on the scale.

```html
 <igx-radial-gauge height="400px" width="400px"
    value="25"
    interval="5"
    minimumValue="0"
    maximumValue="100">
    <igx-radial-gauge-range startValue="0"
                            endValue="30"
                            brush="red">
    </igx-radial-gauge-range>
    <igx-radial-gauge-range startValue="30"
                            endValue="60"
                            brush="yellow">
    </igx-radial-gauge-range>
    <igx-radial-gauge-range startValue="60"
                            endValue="100"
                            brush="green">
    </igx-radial-gauge-range>
</igx-radial-gauge>
```

<div class="divider--half"></div>

## Backing

The gauge comes with a backing shape drawn behind the scale that acts as a background for the gauge.

The backing element represents background and border of the radial gauge control. It is always the first element rendered and all the rest of elements such as needle, labels, and tick marks are overlay on top of it.

The backing can be circular or fitted. A circular shape creates a 360 degree circle gauge while a fitted shape creates a filled arc segment encompassing the `scaleStartAngle` and `scaleEndAngle` properties. This can be set by setting the `backingShape` property.

```html
<igx-radial-gauge
    backingShape="Fitted"
    backingBrush="#fcfcfc"
    backingOutline="DodgerBlue"
    backingOversweep=5
    backingCornerRadius=10
    backingStrokeThickness=5
    backingOuterExtent=0.8
    backingInnerExtent=0.15
    scaleStartAngle=135 scaleEndAngle=45
    height="300px" width="300px"
    minimumValue=0 value=50
    maximumValue=80 interval=10>
</igx-radial-gauge>
```

<code-view style="height: 320px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/gauges/radial-gauge-backing"  
           github-src="gauges/radial-gauge/backing">
</code-view>

## Scale

The scale is visual element that highlights full range of values in the gauge which can be created by supplying `minimumValue` and `maximumValue` values. Together with backing, it defines overall shape of gauge. The `scaleStartAngle` and `scaleEndAngle` properties define bounds of arc of the scale. While, the `scaleSweepDirection` property specifies whether the scale sweeps in clockwise or counter-clockwise direction. You can customize appearance of the scale by setting `scaleBrush`, `scaleStartExtent`, and `scaleEndExtent` properties.

```html
<igx-radial-gauge
    scaleStartAngle=135
    scaleEndAngle=45
    scaleBrush="DodgerBlue"
    scaleSweepDirection="Clockwise"
    scaleOversweep=1
    scaleOversweepShape="Fitted"
    scaleStartExtent=0.45
    scaleEndExtent=0.575
    height="300px" width="300px"
    minimumValue=0 value=50
    maximumValue=80 interval=10>
</igx-radial-gauge>
```

<code-view style="height: 320px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/gauges/radial-gauge-scale"  
           github-src="gauges/radial-gauge/scale">
</code-view>

## Labels

The gauge labels are visual elements displaying numeric values at a specified interval between values of the `minimumValue` and `maximumValue` properties. You can position labels by setting the `labelExtent` property to a fraction, where 0 represents center of gauge and 1 represents outer extent of the gauge backing. Also, you can customize labels setting various styling properties such as `fontBrush` and `font`.

```html
<igx-radial-gauge
    labelExtent=0.65
    labelInterval=10
    font="11px Verdana"
    fontBrush="DodgerBlue"
    height="300px" width="300px"
    minimumValue=0 value=50
    maximumValue=100 interval=10>
</igx-radial-gauge>
```

<code-view style="height: 320px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/gauges/radial-gauge-labels"  
           github-src="gauges/radial-gauge/labels">
</code-view>

## Tick Marks

Tick marks are thin lines radiating from the center of the radial gauge. There are two types of tick marks: major and minor. Major tick marks are displayed at the `interval` between the `minimumValue` and `maximumValue` properties. Use the `minorTickCount` property to specify the number of minor tick marks displayed between each major tick mark. You can control the length of tick marks by setting a fraction (beteen 0 and 1) to `tickStartExtent`, `tickEndExtent`, `minorTickStartExtent`, and `minorTickEndExtent` properties.

```html
<igx-radial-gauge
    tickStartExtent=0.45
    tickEndExtent=0.575
    tickStrokeThickness=2
    tickBrush="DodgerBlue"
    minorTickCount=4
    minorTickEndExtent=0.5
    minorTickStartExtent=0.575
    minorTickStrokeThickness=1
    minorTickBrush="DarkViolet"
    height="300px" width="300px"
    minimumValue=0 value=50
    maximumValue=80 interval=10>
</igx-radial-gauge>
```

<code-view style="height: 320px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/gauges/radial-gauge-tickmarks"  
           github-src="gauges/radial-gauge/tickmarks">
</code-view>

## Ranges

A range highlights a set of continuous values bound by a specified `minimumValue` and `maximumValue` properties. You can add multiple ranges to the gauge by specifying their starting and ending values. Each range has a few customization properties such as `brush` and `outline`. Alternatively, you can set `rangeBrushes` and `rangeOutlines` properties to a list of colors for the ranges.

```html
<igx-radial-gauge
    height="300px" width="300px"
    minimumValue=0 value=50
    maximumValue=80 interval=10
    rangeBrushes ="red, yellow, green"
    rangeOutlines="red, yellow, green">
   <igx-radial-gauge-range
       startValue=5  endValue=15 brush="red">
   </igx-radial-gauge-range>
   <igx-radial-gauge-range
       startValue=15  endValue=35 brush="yellow">
   </igx-radial-gauge-range>
   <igx-radial-gauge-range
       startValue=35  endValue=45 brush="green">
   </igx-radial-gauge-range>
</igx-radial-gauge>
```

<code-view style="height: 320px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/gauges/radial-gauge-ranges"  
           github-src="gauges/radial-gauge/ranges">
</code-view>

## Needle

Gauge needles are visual elements used to signify a gauge set value. Needles are available in one of the several predefined shapes. The needle can have a pivot shape, which is placed in the center of the gauge. The pivot shape also takes one of the predefined shapes. Pivot shapes that include an overlay or an underlay can have a separate pivot brush applied to the shape.

The supported needle shapes and caps are set using the `needleShape` and `needlePivotShape` properties.

You can enable an interactive mode of the gauge (using [`isNeedleDraggingEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxradialgaugecomponent.html#isneedledraggingenabled) property) and the end-user will be able to change value by dragging the needle between values of `minimumValue` and `maximumValue` properties.

```html
<igx-radial-gauge
    value=50
    isNeedleDraggingEnabled=true
    isNeedleDraggingConstrained=true
    needleShape="NeedleWithBulb"
    needleBrush="DodgerBlue"
    needleOutline="DodgerBlue"
    needleEndExtent=0.475
    needleStrokeThickness=1
    needlePivotShape="CircleOverlay"
    needlePivotBrush="#9f9fa0"
    needlePivotOutline="#9f9fa0"
    needlePivotWidthRatio=0.2
    needlePivotStrokeThickness=1
    height="300px" width="300px"
    minimumValue=0
    maximumValue=80 interval=10>
</igx-radial-gauge>
```

<code-view style="height: 320px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/gauges/radial-gauge-needle"  
           github-src="gauges/radial-gauge/needle">
</code-view>

## Summary

For your convenience, all above code snippets are combined into one code block below that you can easily copy to your project and see the radial gauge with all features and visuals enabled.

```html
<igx-radial-gauge
    height="300px" width="300px"
    minimumValue=0
    maximumValue=80
    scaleStartAngle=135
    scaleEndAngle=45
    scaleBrush="#c6c6c6"
    scaleSweepDirection="Clockwise"
    scaleOversweep=1
    scaleOversweepShape="Fitted"
    scaleStartExtent=0.45
    scaleEndExtent=0.575

    value=70
    isNeedleDraggingEnabled=true
    isNeedleDraggingConstrained=true
    needleShape="NeedleWithBulb"
    needleBrush="DodgerBlue"
    needleOutline="DodgerBlue"
    needleEndExtent=0.475
    needleStrokeThickness=1
    needlePivotShape="CircleOverlay"
    needlePivotBrush="#9f9fa0"
    needlePivotOutline="#9f9fa0"
    needlePivotWidthRatio=0.2
    needlePivotStrokeThickness=1

    interval=10
    tickStartExtent=0.45
    tickEndExtent=0.575
    tickStrokeThickness=2
    tickBrush="Black"
    minorTickCount=4
    minorTickEndExtent=0.5
    minorTickStartExtent=0.575
    minorTickStrokeThickness=1
    minorTickBrush="Black"

    labelExtent=0.65
    labelInterval=10
    font="11px Verdana"
    fontBrush="Black"

    backingShape="Fitted"
    backingBrush="#ededed"
    backingOutline="Gray"
    backingOversweep=5
    backingCornerRadius=10
    backingStrokeThickness=5
    backingOuterExtent=0.8
    backingInnerExtent=0.15

    rangeBrushes ="#a4bd29, #F86232"
    rangeOutlines="#a4bd29, #F86232">
    <igx-radial-gauge-range
        startValue=20 endValue=40
        innerStartExtent=0.45 innerEndExtent=0.45
        outerStartExtent=0.57 outerEndExtent=0.57>
    </igx-radial-gauge-range>
    <igx-radial-gauge-range
        startValue=40 endValue=60
        innerStartExtent=0.45 innerEndExtent=0.45
        outerStartExtent=0.57 outerEndExtent=0.57>
    </igx-radial-gauge-range>
</igx-radial-gauge>
```
