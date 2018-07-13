---
title: Linear Gauge Component - Native Angular | Ignite UI for Angular 
_description: In Ignite UI for Angular, use the Linear Gauge component to see a simple display of a value compared against a scale and one or more ranges.  
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Data Grid, Angular Chart Control, Angular Grid Component, Angular linear graph Component, Angular linear graph 
---
## Linear Gauge

In Ignite UI for Angular, use the Linear Gauge component to see a simple display of a value compared against a scale and one or more ranges.

### Demo

<div class="sample-container" style="height: 125px">
    <iframe id="linear-gauge-sample-iframe" src='{environment:demosBaseUrl}/linear-gauge-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="linear-gauge-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

The features of the linear gauge component include configurable orientation and direction, configurable visual elements, and more. The component has also a built-in support for animated transitions.

### Dependencies
When installing the gauges package, the core package must also be installed.

**npm install ignite-angular-gauges ignite-angular-core**

The linear gauge exported as an `NgModule`, you need to import the _IgxLinearGaugeModule_ inside your `AppModule`:

```typescript
// app.module.ts
import { IgxLinearGaugeModule } from 'ignite-angular-gauges/ES5/igx-linear-gauge-module';

@NgModule({
    imports: [
        ...
        IgxLinearGaugeModule,
        ...
    ]
})
export class AppModule {}
```

<div class="divider--half"></div>

### Usage

The following code demonstrates how create a linear gauge containing a needle and three comparative ranges on the scale.

```html
 <igx-linear-gauge width="70px"
                   height="300px"
                   minimumValue = "5"
                   maximumValue = "55"
                   value = "43">
    <igx-linear-graph-range startValue="0"
                            endValue="15"
                            brush="red"/>
    <igx-linear-graph-range startValue="15"
                            endValue="30"
                            brush="yellow"/>
    <igx-linear-graph-range startValue="30"
                            endValue="55"
                            brush="green"/>        
 </igx-linear-gauge>
```

<div class="divider--half"></div>

### Configurable Visual Elements

**Needle** – This is the primary measure displayed by the component and is visualized as a bar.

```html
 <igx-linear-gauge
    height="80px"
    width="400px"
    minimumValue = 0
    maximumValue = 100
    value = 50
    needleShape = "Needle"
    needleBrush = "red">
</igx-linear-gauge>
```

**Comparative range(s)** – The ranges are visual elements that highlight a specified range of values on a scale. Their purpose is to visually communicate the qualitative state of the performance bar measure, illustrating at the same times the degree to which it resides within that state.

```html
<igx-linear-gauge
    height="80px"
    width="400px"
    minimumValue = 0
    maximumValue = 100
    value = 50 >
    <igx-linear-graph-range
        startValue=0 endValue=30
        brush="red">
    </igx-linear-graph-range>
    <igx-linear-graph-range
        startValue=30 endValue=70
        brush="yellow">
    </igx-linear-graph-range>
    <igx-linear-graph-range
        startValue=70 endValue=100
        brush="green">
    </igx-linear-graph-range>
</igx-linear-gauge>
```
**Tick marks** (3) –The tick marks serve as a visual division of the scale into intervals in order to increase the readability of the linear gauge.

Major tick marks – The major tick marks are used as primary delimiters on the scale. The frequency they appear at, their extents and style can be controlled by setting the corresponding properties.

Minor tick marks – The minor tick marks represent helper tick marks, which might be used to additionally improve the readability of the scale and can be customized in a way similar to the major ones.

```html
<igx-linear-gauge
    height="80px"
    width="400px"
    minimumValue = 0
    maximumValue = 100
    value = 50
    minorTickEndExtent = 0.10
    minorTickStartExtent = 0.20
    tickStartExtent = 0.25
    tickEndExtent = 0.05
    tickStrokeThickness = 2>
</igx-linear-gauge>
```

**Labels** – The labels indicate the measures on the scale.
```html
<igx-linear-gauge
    height="80px"
    width="400px"
    minimumValue = 0
    maximumValue = 100
    value = 50
    interval = 10
    labelInterval = 10>
</igx-linear-gauge>
```

**Background** – The background on which visual elements is placed is configurable in terms of pattern and color.

```html
<igx-linear-gauge
    height="80px"
    width="400px"
    minimumValue = 0
    maximumValue = 100
    value = 50
    backingBrush = "#ffffff"
    backingOutline = "#d1d1d1"
    backingStrokeThickness = 0>
</igx-linear-gauge>
```
