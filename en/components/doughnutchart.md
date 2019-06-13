---
title: Doughnut Chart | Hierarchical Data Visualization | Ignite UI for Angular | Infragistics
_description: Use the doughnut chart component to display multiple variables in concentric rings for hierarchical data visualization. View the demo for more information.
_keywords: doughnut chart, Ignite UI for Angular, infragistics

---

## Doughnut Chart

The Ignite UI for Angular doughnut chart component is similar to the Pie Chart component, proportionally illustrating the occurrences of a variable. The doughnut chart can display multiple variables in concentric rings, and provides built-in support for visualizing hierarchical data.

### Demo

<div class="sample-container loading" style="height: 450px">
    <iframe id="doughnut-chart-overview-iframe" src='{environment:demosBaseUrl}/charts/doughnut-chart-overview' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="doughnut-chart-overview-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Dependencies

When installing the charts package, the core package must also be installed.

-   **npm install --save igniteui-angular-core**
-   **npm install --save igniteui-angular-charts**

### Required Modules

The $PlatformShor$ douhgnut chart component requires the following modules:

```typescript
// app.module.ts
import { IgxDoughnutChartModule } from "igniteui-angular-charts/ES5/igx-doughnut-chart-module";

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

### Usage

Now that the doughnut chart module is imported, next step is to bind it to data.
In order to create the component, you must first have data to bind it to. The following code snippet demonstrates how to create a simple data source.

```typescript
this.state = {
    data: [
        { MarketShare: 30, Company: "Google",    },
        { MarketShare: 15, Company: "Microsoft", },
        { MarketShare: 30, Company: "Apple",     },
        { MarketShare: 15, Company: "Samsung",   },
        { MarketShare: 10, Company: "Other",     },
] };
```

The following code demonstradtes how to bind the doughnut chart to the above data.

```html
 <igx-doughnut-chart width="700px"
                     height="500px">
    <igx-doughnut-chart-series>
        <igx-ring-series  [itemsSource]="data"
                labelMemberPath="Label"
                valueMemberPath="Value">
        </igx-ring-series>
    </igx-doughnut-chart-series>
 </igx-doughnut-chart>
```

<div class="divider--half"></div>

### Multiple Rings

The doughnut chart component can display multiple rings at the same time with each of the rings capable of being bound to a different collection, or they can share a common data source.

### Slice Selection

The doughnut chart component exposes the API for setting the state of one or more slices to selected. Optionally, you may apply a single custom visual style to the selected slices.

**Enable/disable slice selection** - You can enable (default setting) or disable slice selection in the doughnut chart by setting the `allowSliceSelection` property.

**Configuring the look of the selected slices** - You can define how the selected slices will look by defining a style with a `targetType` of Slice and assigning it to the `selectedStyle` property of the doughnut chart.

**Changing the selection state upon slice click** - If you attach an event handler for the `sliceClick` event, it supplies a reference to the clicked slice in the event arguments allowing you to modify its selection state. The doughnut chart exposes a `selectedStyle` property that determines the look of the selected slices. By default, no style is applied, and selecting a slice will not alter its appearance in any way. In order to apply your own style to the selected slices you need to define a Style with `targetType` of Slice and set it as the value of the `selectedStyle` property.

**Setting the IsSelected property** - The $PlatformShor$ doughnut chart component holds references to all the slices allowing you to modify their `isSelected` property directly. The doughnut chart exposes a `sliceClick` event used to change the selected/unselected state of a slice.

**Modifying the contents of the SelectedSlices collection** - You can change the selected slice by changing the contents of the `selectedSlices` collection. The doughnut chart holds references to all the slices allowing you to modify their `isSelected` property directly to the Slice objects.

### Slice Selection Demo

<div class="sample-container loading" style="height: 450px">
    <iframe id="doughnut-chart-selection-iframe" data-src='{environment:demosBaseUrl}/charts/doughnut-chart-selection' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="doughnut-chart-selection-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Slice Explosion

The doughnut chart component slices explode either programmatically or by user interaction.

**Enable/disable slice explosion**
You can enable or disable the ability to explode slices by setting the `allowSliceExplosion` property.

**Changing the exploded state of a slice upon slice click**
If you attach an event handler for the `sliceClick` event, a reference to the clicked slice is supplied in the event arguments and you can modify its exploded state.

**Setting the IsExploded property**
The doughnut chart component holds references to all the slices allowing you to modify their `isExploded` property directly.

**Modifying the contents of the ExplodedSlices collection**
You can change the exploded slices by changing the contents of the `explodedSlices` collection.

### Slice Explosion Demo

<div class="sample-container loading" style="height: 450px">
    <iframe id="doughnut-chart-explosion-iframe" data-src='{environment:demosBaseUrl}/charts/doughnut-chart-explosion' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn"   data-iframe-id="doughnut-chart-explosion-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Legend

The doughnut chart component supports the use of a legend. The legend used is the ItemLegend which is connected though the series of the chart.

<!-- ### Legend Demo

<div class="sample-container loading" style="height: 450px">
    <iframe id="doughnut-chart-legend-iframe" data-src='{environment:demosBaseUrl}/charts/doughnut-chart-legend' width="100%" height="100%" seamless frameBorder="0" class="lazyload"></iframe>
</div>
<div>
    <button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="doughnut-chart-legend-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div> -->
