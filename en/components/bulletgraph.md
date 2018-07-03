---
title: Bullet Graph Component - Native Angular | Ignite UI for Angular 
_description: The Bullet Graph Component in Ignite UI for Angular allows for a linear and concise view of measures compared against a scale.  
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Grid, Angular Data Grid, Angular Grid Control, Angular Grid Component, Angular data grid Bullet graph component example, Angular bullet graph 
---
## Bullet Graph

The Bullet Graph Component in Ignite UI for Angular allows for a linear and concise view of measures compared against a scale.  

### Demo

<div class="sample-container" style="height: 550px">
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

## Logical Areas 

The user-visible area of the bullet graph component is logically divided into the following areas: Reserved area, and Graph area.

 ![](../images/Bullet_Graph_1.png)

Each of them serves different purpose related to some of the visual elements of the bullet graph component.

**Reserved area** (1) – This area spreads:

- Along the scale – the Reserved area begins either at the edge of the component (when no Title area exists) or at the edge of the Title area (as in the pictures above) and ends at the edge of the component.

- Across the scale –
In horizontal orientation: the Reserved area begins at the bottom edge of the component and spreads upward as much as the height of the numbering labels is (depending on the size and the other formatting of the font used in the labels)
In vertical orientation: the Reserved area begins at the left edge of the component and spreads to the right as much as the width of the numbering labels is (depending on how large the numbers of the measurements of the scale are and the size and the other formatting of the font used in the labels).

**Graph area** (2) – The area for displaying the performance bar, the tick marks, the ranges, and, optionally, the numbering labels of the bullet graph. All extent-related properties for these visual elements (except for labels) are measured against its edges. The Graph area serves not as a placeholder but as a frame of reference for positioning the scale inside the control (More precisely, for positioning the visual elements of the scale).

### Configurable Visual Elements Summary
 ![](../images/Bullet_Graph_2.png)

**Performance bar** (3) – This is the primary measure displayed by the component and is visualized as a bar.

**Comparative marker** (4) – A measure which the performance bar measure compares against. It is visualized as a marker that runs perpendicular to the orientation of the performance bar.

**Comparative range(s)** (5) – The ranges are visual elements that highlight a specified range of values on a scale. Their purpose is to visually communicate the qualitative state of the performance bar measure, illustrating at the same times the degree to which it resides within that state.

**Tick marks** (6) – The tick marks serve as a visual division of the scale into intervals in order to increase the readability of the bullet graph.
- Major tick marks – The major tick marks are used as primary delimiters on the scale. The frequency they appear at, their extents and style can be controlled by setting the corresponding properties.
- Minor tick marks – The minor tick marks represent helper tick marks, which might be used to additionally improve the readability of the scale and can be customized in a way similar to the major ones.

**Scale labels** (7) – The labels indicate the measures on the scale.

**Border** (8) – The line visually delimiting the dimensions of the component.

**Background** (9) – The background on which visual elements is placed is configurable in terms of pattern and color.

