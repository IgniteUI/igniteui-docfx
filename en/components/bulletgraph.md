---
title: Bullet Graph Component - Native Angular | Ignite UI for Angular 
_description: The Bullet Graph Component in Ignite UI for Angular allows for a linear and concise view of measures compared against a scale.  
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Data Grid, Angular Chart Control, Angular Grid Component, Angular data grid Bullet graph component example, Angular bullet graph  
---
## Bullet Graph

The Bullet Graph Component in Ignite UI for Angular allows for a linear and concise view of measures compared against a scale.  

### Demo

<div class="sample-container" style="height: 125px">
    <iframe id="bullet-graph-sample-iframe" src='{environment:demosBaseUrl}/bullet-graph-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="bullet-graph-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

The bullet graph component provides you with the ability to create attractive data presentations, replacing meters and gauges that are used on dashboards with simple yet straightforward and clear bar charts. A bullet graph is one of the most effective and efficient ways to present progress towards goals, good/better/best ranges, or compare multiple measurements in as little horizontal or vertical space as possible.

The features of the bullet graph include configurable orientation and direction, configurable visual elements, and more. The control has also a built-in support for animated transitions.

### Dependencies
When installing the gauges package, the core package must also be installed.

**npm install ignite-angular-gauges ignite-angular-core**

The bullet graph is exported as an `NgModule`, you need to import the _IgxBulletGraphModule_ inside your `AppModule`:

```typescript
// app.module.ts
import { IgxBulletGraphModule } from 'ignite-angular-gauges/ES5/igx-bullet-graph-module';

@NgModule({
    imports: [
        ...
        IgxBulletGraphModule,
        ...
    ]
})
export class AppModule {}
```

<div class="divider--half"></div>

### Usage

The following code walks through creating a bullet graph component, and configuring a performance bar, comparative measure marker, and three comparative ranges on the scale.


```html
 <igx-bullet-graph height="100"
                   width="300"
                   minimumValue="5"
                   maximumValue="55"
                   value = "35"
                   targetValue = "43">
        <igx-linear-graph-range startValue="0"
                                endValue="15"
                                Brush="#828181"/>
        <igx-linear-graph-range StartValue="15"
                                EndValue="30"
                                Brush="#AAAAAA"/>
        <igx-linear-graph-range StartValue="30"
                                EndValue="55"
                                Brush="#D0D0D0"/>
 </igx-bullet-graph>
```

<div class="divider--half"></div>

### Configurable Visual Elements Summary

**Performance bar** – This is the primary measure displayed by the component and is visualized as a bar.

```html
<igx-bullet-graph
    height="80px"
    width="400px"
    minimumValue = 0
    maximumValue = 120
    valueBrush = "black"
    value = 70>
</igx-bullet-graph>
```

**Comparative marker** – A measure which the performance bar measure compares against. It is visualized as a marker that runs perpendicular to the orientation of the performance bar.

```html
<igx-bullet-graph
    height="80px"
    width="400px"
    minimumValue = 0
    maximumValue = 120
    targetValueBrush = "#4286f4"
    targetValue = 90
    targetValueBreadth = 10>
</igx-bullet-graph>
```

**Comparative range(s)** – The ranges are visual elements that highlight a specified range of values on a scale. Their purpose is to visually communicate the qualitative state of the performance bar measure, illustrating at the same times the degree to which it resides within that state.

```html
<igx-bullet-graph
    height="80px"
    width="400px"
    minimumValue = 0
    maximumValue = 120
    valueBrush = "black"
    value = 70
    targetValueBrush = "black"
    targetValue = 90>
    <igx-linear-graph-range
        startValue=20 endValue=40 brush="red">
    </igx-linear-graph-range>
    <igx-linear-graph-range
        startValue=40 endValue=80 brush="yellow">
    </igx-linear-graph-range>
    <igx-linear-graph-range
        startValue=80 endValue=120 brush="green">
    </igx-linear-graph-range>
</igx-bullet-graph>
```
**Tick marks** – The tick marks serve as a visual division of the scale into intervals in order to increase the readability of the bullet graph.
- Major tick marks – The major tick marks are used as primary delimiters on the scale. The frequency they appear at, their extents and style can be controlled by setting the corresponding properties.
- Minor tick marks – The minor tick marks represent helper tick marks, which might be used to additionally improve the readability of the scale and can be customized in a way similar to the major ones.

```html
<igx-bullet-graph
    height="80px"
    width="400px"
    minimumValue = 0
    maximumValue = 120
    valueBrush = "#4286f4"
    value = 70
    interval = 5
    minorTickEndExtent = 0.10
    minorTickStartExtent = 0.20
    tickStartExtent = 0.25
    tickEndExtent = 0.05
    tickStrokeThickness = 2>
</igx-bullet-graph>
```

**Scale labels** (5) – The labels indicate the measures on the scale.
```html
<igx-bullet-graph
    height="80px"
    width="400px"
    minimumValue = 0
    maximumValue = 120
    valueBrush = "#4286f4"
    value = 70
    targetValue = 90
    labelInterval = 10>
</igx-bullet-graph>
```

**Background** – The background on which visual elements is placed is configurable in terms of pattern and color.

```html
<igx-bullet-graph
    height="80px"
    width="400px"
    minimumValue = 0
    maximumValue = 120
    value = 70
    targetValue = 90
    backingBrush = "black"
    backingOutline = "black">
</igx-bullet-graph>
```