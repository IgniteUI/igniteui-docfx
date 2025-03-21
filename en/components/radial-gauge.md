---
title: Angular Radial Gauge Chart | Data Visualization Tools | Infragistics
_description: Use Infragistics' Angular radial gauge control to create engaging data visualizations and dashboards and show off KPIs with rich style and interactivity. Learn about the Ignite UI for Angular radial gauge configurable elements!
_keywords: Radial Gauge, Ignite UI for Angular, Infragistics, animation, labels, needle, scales, ranges, tick marks
mentionedTypes: ["XamRadialGauge", "XamRadialGaugeRange"]
namespace: Infragistics.Controls.Gauges
---

# Angular Radial Gauge Overview

The Angular radial gauge component provides a number of visual elements, like a needle, tick marks, ranges, and labels, in order to create a predefined shape and scale. The [`IgxRadialGaugeComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html)  also has built-in support for animated transitions. This animation is easily customizable by setting the [`transitionDuration`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#transitionDuration) property.

## Angular Radial Gauge Example

The following sample demonstrates how setting multiple properties on the same [`IgxRadialGaugeComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html) can transform it to completely different radial gauge.

<code-view style="height: 375px" alt="Angular Radial Gauge Example"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/gauges/radial-gauge/animation"
                                                 github-src="gauges/radial-gauge/animation">
</code-view>


<div class="divider--half"></div>

<!-- Angular, React, WebComponents -->

## Dependencies

When installing the gauge component, the core package must also be installed.

```cmd
npm install --save igniteui-angular-core
npm install --save igniteui-angular-gauges
```

<!-- end: Angular, React, WebComponents -->

## Component Modules

The [`IgxRadialGaugeComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html) requires the following modules:

```ts
// app.module.ts
import { IgxRadialGaugeModule } from 'igniteui-angular-gauges';

@NgModule({
    imports: [
        // ...
        IgxRadialGaugeModule
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

The radial gauge component comes with a backing shape drawn behind the scale that acts as a background for the radial gauge.

The backing element represents background and border of the radial gauge component. It is always the first element rendered and all the rest of elements such as needle, labels, and tick marks are overlay on top of it.

The backing can be circular or fitted. A circular shape creates a 360 degree circle gauge while a fitted shape creates a filled arc segment encompassing the [`scaleStartAngle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#scaleStartAngle) and [`scaleEndAngle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#scaleEndAngle) properties. This can be set by setting the [`backingShape`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#backingShape) property.

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

<code-view style="height: 320px" alt="Angular radial gauge backing"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/gauges/radial-gauge/backing"
                                                 github-src="gauges/radial-gauge/backing">
</code-view>


## Scale

The scale is visual element that highlights full range of values in the gauge which can be created by supplying [`minimumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#minimumValue) and [`maximumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#maximumValue) values. Together with backing, it defines overall shape of gauge. The [`scaleStartAngle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#scaleStartAngle) and [`scaleEndAngle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#scaleEndAngle) properties define bounds of arc of the scale. While, the [`scaleSweepDirection`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#scaleSweepDirection) property specifies whether the scale sweeps in clockwise or counter-clockwise direction. You can customize appearance of the scale by setting [`scaleBrush`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#scaleBrush), [`scaleStartExtent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#scaleStartExtent), and [`scaleEndExtent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#scaleEndExtent) properties.

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

<code-view style="height: 320px" alt="Angular radial gauge scale"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/gauges/radial-gauge/scale"
                                                 github-src="gauges/radial-gauge/scale">
</code-view>


## Labels and Titles

The radial gauge labels are visual elements displaying numeric values at a specified interval between values of the [`minimumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#minimumValue) and [`maximumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#maximumValue) properties. You can position labels by setting the [`labelExtent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#labelExtent) property to a fraction, where 0 represents center of gauge and 1 represents outer extent of the gauge backing. Also, you can customize labels setting various styling properties such as [`fontBrush`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#fontBrush) and [`font`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#font).

Each of these labels for the needle have various styling attributes you can apply to change the font, angle, brush and distance from the center of the gauge such as [`titleExtent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#titleExtent), [`titleAngle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#titleAngle), `SubtitleFontSize`, [`highlightLabelBrush`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#highlightLabelBrush).

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

<code-view style="height: 320px" alt="Angular radial gauge labels"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/gauges/radial-gauge/labels"
                                                 github-src="gauges/radial-gauge/labels">
</code-view>


## Title & Subtitle

[`titleText`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#titleText) and [`subtitleText`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#subtitleText) properties are available and can both be used to display custom text for the needle. Alternatively, [`titleDisplaysValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#titleDisplaysValue) and [`subtitleDisplaysValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#subtitleDisplaysValue), when set to true, will let display the needle's value and override [`titleText`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#titleText) and [`subtitleText`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#subtitleText). So you can occupy custom text for the title but show the value via the subtitle and vice versa.

If the highlight needle is shown, as explained below, then custom text can be shown via  [`highlightLabelText`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#highlightLabelText), otherwise [`highlightLabelDisplaysValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#highlightLabelDisplaysValue) can be enabled and display it's value.

```html
<igx-radial-gauge
    titleText="Global Sales"
    subtitleText="2024">
</igx-radial-gauge>
```

## Optical Scaling

The radial gauge's labels and titles can change it's scaling. To enable this, first set [`opticalScalingEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#opticalScalingEnabled) to true. Then you can set [`opticalScalingSize`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#opticalScalingSize) which manages the size at which labels have 100% optical scaling. Labels will have larger fonts when gauge's size is larger. For example, labels will have a 200% larger font size when this property is set to 500 and the gauge px size is doubled to eg. 1000.

<code-view style="height: 500px" alt="Angular radial gauge optical scaling"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/gauges/radial-gauge/optical-scaling"
                                                 github-src="gauges/radial-gauge/optical-scaling">
</code-view>


## Tick Marks

Tick marks are thin lines radiating from the center of the radial gauge. There are two types of tick marks: major and minor. Major tick marks are displayed at the [`interval`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#interval) between the [`minimumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#minimumValue) and [`maximumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#maximumValue) properties. Use the [`minorTickCount`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#minorTickCount) property to specify the number of minor tick marks displayed between each major tick mark. You can control the length of tick marks by setting a fraction (between 0 and 1) to [`tickStartExtent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#tickStartExtent), [`tickEndExtent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#tickEndExtent), [`minorTickStartExtent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#minorTickStartExtent), and [`minorTickEndExtent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#minorTickEndExtent) properties.

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

<code-view style="height: 320px" alt="Angular radial gauge tickmarks"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/gauges/radial-gauge/tickmarks"
                                                 github-src="gauges/radial-gauge/tickmarks">
</code-view>


## Ranges

A range highlights a set of continuous values bound by a specified [`minimumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#minimumValue) and [`maximumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#maximumValue) properties. You can add multiple ranges to the radial gauge by specifying their starting and ending values. Each range has a few customization properties such as [`brush`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugerangecomponent.html#brush) and [`outline`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugerangecomponent.html#outline). Alternatively, you can set [`rangeBrushes`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#rangeBrushes) and [`rangeOutlines`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#rangeOutlines) properties to a list of colors for the ranges.

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

<code-view style="height: 320px" alt="Angular radial gauge ranges"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/gauges/radial-gauge/ranges"
                                                 github-src="gauges/radial-gauge/ranges">
</code-view>


## Needle

Radial gauge needles are visual elements used to signify a gauge set value. Needles are available in one of the several predefined shapes. The needle can have a pivot shape, which is placed in the center of the gauge. The pivot shape also takes one of the predefined shapes. Pivot shapes that include an overlay or an underlay can have a separate pivot brush applied to the shape.

The supported needle shapes and caps are set using the [`needleShape`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#needleShape) and [`needlePivotShape`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#needlePivotShape) properties.

You can enable an interactive mode of the gauge (using [`isNeedleDraggingEnabled`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#isNeedleDraggingEnabled) property) and the end-user will be able to change value by dragging the needle between values of [`minimumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#minimumValue) and [`maximumValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#maximumValue) properties.

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

<code-view style="height: 320px" alt="Angular radial gauge needle"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/gauges/radial-gauge/needle"
                                                 github-src="gauges/radial-gauge/needle">
</code-view>


## Highlight Needle

The radial gauge can be modified to show a second needle. This will make the main needle's [`value`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#value) appear with a lower opacity. To enable this first set [`highlightValueDisplayMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#highlightValueDisplayMode) to Overlay and then apply a [`highlightValue`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html#highlightValue).

```html
<igx-radial-gauge #radialGauge
    labelExtent=0.65
    labelInterval=10
    highlightValueDisplayMode="Overlay"
    highlightValue=50
    highlightLabelDisplaysValue=true
    highlightLabelSnapsToNeedlePivot=true
    isHighlightNeedleDraggingEnabled=true
    height="100%" width="100%"
    minimumValue=0 value=30
    maximumValue=100 interval=10  >
</igx-radial-gauge>
```

<code-view style="height: 320px" alt="Angular radial gauge highlight needle"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/gauges/radial-gauge/highlight-needle"
                                                 github-src="gauges/radial-gauge/highlight-needle">
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

## API References

The following is a list of API members mentioned in the above sections:

*   [`IgxRadialGaugeComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugecomponent.html)
*   [`IgxRadialGaugeRangeComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_gauges.igxradialgaugerangecomponent.html)

## Additional Resources

You can find more information about other types of gauges in these topics:

*   [Bullet Graph](bullet-graph.md)
*   [Linear Gauge](linear-gauge.md)
