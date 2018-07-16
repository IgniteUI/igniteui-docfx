---
title: Radial Gauge Component - Native Angular | Ignite UI for Angular
_description: The Radial Gauge component in Ignite UI for Angular provides a number of visual elements, like a needle, tick marks, ranges, and labels, in order to create a predefined shape and scale.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Data Grid, Angular Chart Control, Angular Grid Component, Angular radial gauge component, Angular radial gauge
---
## Radial Gauge

The Radial Gauge component in Ignite UI for Angular provides a number of visual elements, like a needle, tick marks, ranges, and labels, in order to create a predefined shape and scale.

### Demo

This gauge supports only one scale, one needle, one set of tick marks and one set of labels. However, all the changes made to the radial gauge control have animation enhancements. This animation is easily customizable by setting the `transitionDuration` property. You can achieve numerous needle shapes by fine tuning its shape parameters. The following sample demonstrates how setting multiple properties on the same gauge can transform it to completely different gauge.

<div class="sample-container" style="height: 350px">
    <iframe id="radial-gauge-animation-iframe" src='{environment:demosBaseUrl}/radial-gauge-animation' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="radial-gauge-animation-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

Create a scale by supplying `minimumValue` and `maximumValue` values and a needle can point to a value by setting the `value` property. The gauge also supports ranges, which provide visual cues for the scale.

The gauge comes with a backing shape drawn behind the scale that acts as a background for the gauge. The backing can be circular, which turns the shape into a full circle, or it can be fitted, which makes it sweep the scale – only providing backing behind the scale portion of the gauge.

Gauge needles are available in one of the several predefined shapes. The needle can have a pivot shape, which is placed in the center of the gauge. The pivot shape also takes one of the predefined shapes. Pivot shapes that include an overlay or an underlay can have a separate pivot brush applied to the shape.

### Dependencies
When installing the gauges package, the core package must also be installed.

**npm install ignite-angular-gauges ignite-angular-core**

The radial gauge exported as an `NgModule`, you need to import the _IgxRadialGaugeModule_ inside your `AppModule`:

```typescript
// app.module.ts
import { IgxRadialGaugeModule } from 'ignite-angular-gauges/ES5/igx-radial-gauge-module';

@NgModule({
    imports: [
        ...
        IgxRadialGaugeModule,
        ...
    ]
})
export class AppModule {}
```

<div class="divider--half"></div>

### Usage

The following code demonstrates how create a radial gauge containing a needle and three comparative ranges on the scale.

```html
 <igx-radial-gauge height="400px" width="400px"
    value=25
    interval=5
    minimumValue=0
    maximumValue=50>
    <igx-radial-graph-range startValue="0"
                            endValue="30"
                            brush="red"/>
    <igx-radial-graph-range startValue="30"
                            endValue="60"
                            brush="yellow"/>
    <igx-radial-graph-range startValue="60"
                            endValue="100"
                            brush="green"/>
</igx-radial-gauge>
```

<div class="divider--half"></div>

## Configurable Elements

### Backing

The backing element represents background and border of the radial gauge control. It is always the first element rendered and all the rest of elements such as needle, labels, and tick marks are overlay on top of it.

This area can be customized to be either circular or fitted by setting the `backingShape` property. A circular shape creates a 360 degree circle gauge while a fitted shape creates a filled arc segment encompassing the `scaleStartAngle` and `scaleEndAngle` properties.

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

<div class="sample-container" style="height: 320px">
    <iframe id="radial-gauge-backing-iframe" src='{environment:demosBaseUrl}/radial-gauge-backing' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="radial-gauge-backing-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

### Scale

The scale is visual element that highlights full range of values in the gauge. Together with backing, it defines overall shape of gauge. The `scaleStartAngle` and `scaleEndAngle` properties define bounds of arc of the scale. While, the `scaleSweepDirection` property specifies whether the scale sweeps in clockwise or counter-clockwise direction. You can customize appearance of the scale by setting `scaleBrush`, `scaleStartExtent`, and `scaleEndExtent` properties.

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
<div class="sample-container" style="height: 320px">
    <iframe id="radial-gauge-scale-iframe" src='{environment:demosBaseUrl}/radial-gauge-scale' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="radial-gauge-scale-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

### Labels
The gauge labels are visual elements displaying numeric values at a specified interval between values of the `minimumValue` and `maximumValue` properties. You can position labels by setting the `labelExtent` property to a fraction, where 0 represents center of gauge and 1 represents outer extent of the gauge backing. Also, you can customize labels setting various styling properties such as `fontBrush` and `font`.

```html
<igx-radial-gauge
    labelExtent=0.65
    labelInterval=10
    font="11px Verdana"
    fontBrush="DodgerBlue"

    height="80px" width="400px"
    minimumValue=0 value=50
    maximumValue=100 interval=10>
</igx-radial-gauge>
```
<div class="sample-container" style="height: 320px">
    <iframe id="radial-gauge-labels-iframe" src='{environment:demosBaseUrl}/radial-gauge-labels' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="radial-gauge-labels-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

### Tick Marks
Tick marks are thin lines radiating from the center of the radial gauge. There are two types of tick marks: major and minor. Major tick marks are displayed at the `interval` between the `minimumValue` and `maximumValue` properties. Use the `minorTickCount` property to specify the number of minor tick marks displayed between each major tick mark. You can control length of tick marks by setting a fraction (beteen 0 and 1) to `tickStartExtent`, `tickEndExtent`, `minorTickStartExtent`, and `minorTickEndExtent` properties.

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
<div class="sample-container" style="height: 320px">
    <iframe id="radial-gauge-tickmarks-iframe" src='{environment:demosBaseUrl}/radial-gauge-tickmarks' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="radial-gauge-tickmarks-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

### Ranges
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
<div class="sample-container" style="height: 320px">
    <iframe id="radial-gauge-ranges-iframe" src='{environment:demosBaseUrl}/radial-gauge-ranges' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="radial-gauge-ranges-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

### Needle
A gauge needle is a visual element used to signify a gauge set value and consists of needle cap overlays or underlays; the gauge needle’s pivot point. The supported needle shapes and caps are set using the `needleShape` and `needlePivotShape` properties.

You can enable an interactive mode of the gauge (using `isNeedleDraggingEnabled` property) and the end-user will be able to change value by dragging the needle between values of `minimumValue` and `maximumValue` properties.

```html
<igx-radial-gauge
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
    minimumValue=0 value=50
    maximumValue=80 interval=10>
</igx-radial-gauge>
```
<div class="sample-container" style="height: 320px">
    <iframe id="radial-gauge-needle-iframe" src='{environment:demosBaseUrl}/radial-gauge-needle' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="radial-gauge-needle-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>
