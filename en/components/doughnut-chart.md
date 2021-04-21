---
title: Angular Doughnut Chart | Hierarchical Data Visualization  | Infragistics
_description: Use the Infragistics' Angular doughnut chart control to display multiple variables in concentric rings for hierarchical data visualization. View Ignite UI for Angular doughnut chart demos for more information!
_keywords: Angular charts, doughnut chart, Ignite UI for Angular, Infragistics, data binding, slice selection, slice explosion, animation, multiple rings
mentionedTypes: ['XamDoughnutChart']

---

# Angular Doughnut Chart Overview

The Ignite UI for Angular doughnut chart component is similar to the Pie Chart component, proportionally illustrating the occurrences of a variable. The doughnut chart can display multiple variables in concentric rings, and provides built-in support for visualizing hierarchical data.

## Angular Doughnut Chart Example

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/doughnut-chart-overview"
           alt="Angular Doughnut Chart Example"
           github-src="charts/doughnut-chart/overview">
</code-view>

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

The Angular doughnut chart component requires the following modules:

```ts
// app.module.ts
import { IgxDoughnutChartModule } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxDoughnutChartModule,
        // ...
    ]
})
export class AppModule {}
```

<div class="divider--half"></div>

## Usage

Now that the doughnut chart module is imported, next step is to bind it to data.
In order to create the component, you must first have data to bind it to. The following code snippet demonstrates how to create a simple data source.

```ts
this.data = [
    { Value: 30, Label: "Google",    },
    { Value: 15, Label: "Microsoft", },
    { Value: 30, Label: "Apple",     },
    { Value: 15, Label: "Samsung",   },
    { Value: 10, Label: "Other",     },
];
```

The following code demonstrates how to bind the doughnut chart to the above data.

```html
 <igx-doughnut-chart height="100%" width="100%">
        <igx-ring-series
            [dataSource]="data"
            labelMemberPath="Label"
            valueMemberPath="Value">
        </igx-ring-series>
 </igx-doughnut-chart>
```

<div class="divider--half"></div>

## Multiple Rings

The doughnut chart component can also display multiple rings at the same time with each of the rings capable of being bound to a different data item, or they can share a common data source. For example, the following 2 data sources
are used to bind to multiple rings:

    ```ts
    public Months: any[];
    public Seasons: any[];
    /// ...

    this.Months = [
        { Value: 1, Label: "December" },
        { Value: 1, Label: "January" },
        { Value: 1, Label: "February" },
        { Value: 1, Label: "March" },
        { Value: 1, Label: "April" },
        { Value: 1, Label: "May" },
        { Value: 1, Label: "June" },
        { Value: 1, Label: "July" },
        { Value: 1, Label: "August" },
        { Value: 1, Label: "September" },
        { Value: 1, Label: "October" },
        { Value: 1, Label: "November" },
    ];
    this.Seasons = [
        { Value: 4, Label: "Winter" },
        { Value: 4, Label: "Spring" },
        { Value: 4, Label: "Summer" },
        { Value: 4, Label: "Fall" },
    ];

```html
 <igx-doughnut-chart width="100%" height="100%">
        <igx-ring-series name="Months"
            [dataSource]="Months"
            labelsPosition="Center"
            labelMemberPath="Label"
            valueMemberPath="Value"
            radiusFactor="0.9"
            startAngle="0">
        </igx-ring-series>
        <igx-ring-series name="Seasons"
            [dataSource]="Seasons"
            labelsPosition="InsideEnd"
            labelMemberPath="Label"
            valueMemberPath="Value"
            radiusFactor="0.4"
            startAngle="0">
        </igx-ring-series>
 </igx-doughnut-chart>
```

## Multiple Rings Demo

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/doughnut-chart-rings"
           github-src="charts/doughnut-chart/rings">
</code-view>

<div class="divider--half"></div>

## Slice Selection

The doughnut chart component exposes the API for setting the state of one or more slices to selected. Optionally, you may apply a single custom visual style to the selected slices.

**Enable/disable slice selection** - You can enable (default setting) or disable slice selection in the doughnut chart by setting the [`allowSliceSelection`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdoughnutchartcomponent.html#allowsliceselection) property.

**Configuring the look of the selected slices** - You can define how the selected slices will look by defining a style with a `TargetType` of Slice and assigning it to the `SelectedStyle` property of the doughnut chart.

**Changing the selection state upon slice click** - If you attach an event handler for the `SliceClick` event, it supplies a reference to the clicked slice in the event arguments allowing you to modify its selection state. The doughnut chart exposes a `SelectedStyle` property that determines the look of the selected slices. By default, no style is applied, and selecting a slice will not alter its appearance in any way. In order to apply your own style to the selected slices you need to define a Style with `TargetType` of Slice and set it as the value of the `SelectedStyle` property.

**Setting the IsSelected property** - The Angular doughnut chart component holds references to all the slices allowing you to modify their `IsSelected` property directly. The doughnut chart exposes a `SliceClick` event used to change the selected/unselected state of a slice.

**Modifying the contents of the SelectedSlices collection** - You can change the selected slice by changing the contents of the `SelectedSlices` collection. The doughnut chart holds references to all the slices allowing you to modify their `IsSelected` property directly to the Slice objects.

## Slice Selection Demo

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/doughnut-chart-selection"
           github-src="charts/doughnut-chart/selection">
</code-view>

<div class="divider--half"></div>

<!-- Angular, React, WebComponents -->

## Slice Explosion

The doughnut chart component slices explode either programmatically or by user interaction.

**Enable/disable slice explosion**
You can enable or disable the ability to explode slices by setting the [`allowSliceExplosion`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdoughnutchartcomponent.html#allowsliceexplosion) property.

**Changing the exploded state of a slice upon slice click**
If you attach an event handler for the `SliceClick` event, a reference to the clicked slice is supplied in the event arguments and you can modify its exploded state.

**Setting the IsExploded property**
The doughnut chart component holds references to all the slices allowing you to modify their `IsExploded` property directly.

**Modifying the contents of the ExplodedSlices collection**
You can change the exploded slices by changing the contents of the `ExplodedSlices` collection.

## Slice Explosion Demo

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/doughnut-chart-explosion"
           github-src="charts/doughnut-chart/explosion">
</code-view>

<div class="divider--half"></div>
<!-- end: Angular, React, WebComponents -->

## Legend

The doughnut chart component supports the use of a legend. The legend used is the ItemLegend which is connected though the series of the chart.

## Legend Demo

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/doughnut-chart-legend"
           github-src="charts/doughnut-chart/legend">
</code-view>

## Animation

You can animate the doughnut chart by setting the `radiusFactor` property, which will scales the chart's radius.
Also set the `startAngle` property to angle the chart such that it keep increasing the chart angle while rotating.

In the code below, the radiusFactor is increasing the chart by 0.25% of the size, and startAngle is rotating the chart by 1 degree. When radiusFactor and startAngle reached to its maximum limit the animation is stopped by reset the animation flag and clear the interval.

```ts
window.setInterval(() => this.tick(), 15);
public tick(): void {
    if (this.isAnimating) {
        if (this.chartSeries.radiusFactor < 1.0)
            this.chartSeries.radiusFactor += 0.0025;

        if (this.chartSeries.startAngle < 360)
            this.chartSeries.startAngle++;

        if (this.chartSeries.radiusFactor >= 1.0 &&
            this.chartSeries.startAngle >= 360) {
            this.isAnimating = false;
            window.clearInterval(this.interval);
        }
    }
}
```

## Animation Demo

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/doughnut-chart-animation"
           github-src="charts/doughnut-chart/animation">
</code-view>
