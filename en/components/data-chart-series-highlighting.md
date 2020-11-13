---
title: Angular Data Chart | Data Visualization Tools |  Highlighting | Infragistics
_description: Infragistics' Angular charts control allows you to highlight areas of the graph. Learn about Ignite UI for Angular highlighing features!
_keywords: Angular charts, data chart, highlighting, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamDataChart']
---

# Angular Highlighting

The Angular data chart component allows you to highlight the plotted series in the data chart to visualize the item or series that the mouse is hovering over or by using the highlighting layers.

> [!NOTE]
> Please note that highlighting is not currently supported for stacked series.

## Angular Highlighting Example

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-series-highlighting-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-series-highlighting' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-series-highlighting-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>


</div>

<div class="divider--half"></div>

In order to enable highlighting in the Angular data chart component, you need to import and register the interactivity module. This can be done using the following code:

<!-- Blazor -->

-   DataChartInteractivityModule
-   DataChartAnnotationModule
    <!-- end: Blazor -->

```ts
import { IgxDataChartInteractivityModule } from 'igniteui-angular-charts';
import { IgxDataChartAnnotationModule } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        IgxDataChartInteractivityModule,
        IgxDataChartAnnotationModule,
    ]
})
```

## Highlighting Series Visuals

The series highlighting feature of the Angular data chart component allows you to either highlight single items or entire series. For example, if you are using a line series, the highlighting will highlight the entire shape of the line as it is all one single shape. However, highlights can be applied to each single item in a series such as a column series.

The following code snippet demonstrates how to enable highlighting on series in the data chart:

```html
<igx-data-chart #chart
    height="400px"
    width="100%"
    [dataSource]="data">

    <igx-category-x-axis #xAxis></igx-category-x-axis>
    <igx-numeric-y-axis #yAxis></igx-numeric-y-axis>

    <igx-column-series name="series1"
        [xAxis]="xAxis"
        [yAxis]="yAxis"
        valueMemberPath="Value1"
        isHighlightingEnabled=true>
    </igx-column-series>

    <igx-column-series name="series2"
        [xAxis]="xAxis"
        [yAxis]="yAxis"
        valueMemberPath="Value2"
        isHighlightingEnabled=true>
    </igx-column-series>
</igx-data-chart>
```

## Highlight Series Categories

The category highlight layer targets a category axis, or all category axes in the Angular data chart component. If the axis contains any series that are aligned between major gridlines of the axis, for example, a column series, this will render a shape that fills the current category.

For other series, such as a line series, it will render a band with an adjustable thickness at the closest gridline to the pointer position. In this situation, if the `UseInterpolation` property is enabled, this will cause the x position to become fixed to the x-position of the pointer.

You can also change the color of the highlighting area by setting the `Brush` property.

The following is a code snippet demonstrating how to add a category highlight layer to the data chart:

```html
<igx-data-chart #chart
    height="400px"
    width="100%"
    [dataSource]="data">

    <igx-category-x-axis #xAxis></igx-category-x-axis>
    <igx-numeric-y-axis #yAxis></igx-numeric-y-axis>

    <igx-column-series name="series1"
        [xAxis]="xAxis"
        [yAxis]="yAxis"
        valueMemberPath="Value1"
        isHighlightingEnabled=true>
    </igx-column-series>

    <igx-column-series name="series2"
        [xAxis]="xAxis"
        [yAxis]="yAxis"
        valueMemberPath="Value2"
        isHighlightingEnabled=true>
    </igx-column-series>

    <igx-category-highlight-layer></igx-category-highlight-layer>

</igx-data-chart>
```

## Highlighting Series Items

The category item highlight layer highlights items in series using category axis by either drawing a banded shape or rendering a marker at that position.

The default highlight depends on the type of series. For example, the highlight for a column series and a line series is different. For column series it is a banded shape whereas for line series it is a marker. You can override the default highlight by setting the `HighlightType` property.

The following code snippet demonstrates how you can add a category item highlight layer to the Angular data chart component:

```html
<igx-data-chart #chart
    height="400px"
    width="100%"
    [dataSource]="data">

    <igx-category-x-axis #xAxis></igx-category-x-axis>
    <igx-numeric-y-axis #yAxis></igx-numeric-y-axis>

    <igx-column-series name="series1"
        [xAxis]="xAxis"
        [yAxis]="yAxis"
        valueMemberPath="Value1"
        isHighlightingEnabled=true>
    </igx-column-series>

    <igx-column-series name="series2"
        [xAxis]="xAxis"
        [yAxis]="yAxis"
        valueMemberPath="Value2"
        isHighlightingEnabled=true>
    </igx-column-series>

    <igx-category-item-highlight-layer></igx-category-item-highlight-layer>

</igx-data-chart>
```
