---
title: Data Chart | Visualization Tools | Ignite UI for Angular | Infragistics | Stacked Bar Chart
_description: Create a stacked bar chart that displays multiple instances of visual elements in the same plot area in order to create composite chart views.
_keywords: data chart, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamDataChart','StackedBarSeries']
namespace: Infragistics.Controls.Charts
---

## Stacked Bar Chart

The Ignite UI for Angular stacked bar chart belongs to a group of category charts and is rendered using a collection of rectangles ([`IgxStackedFragmentSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedfragmentseriescomponent.html)) that are stacked next to each other. Each stacked fragment in the collection represents one visual element in each stack. Each stack can contain both positive and negative values. All positive values are grouped on the positive side of the x-axis, and all negative values are grouped on the negative side of the x-axis. [`IgxStackedBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedbarseriescomponent.html) uses the same concepts of data plotting as [`IgxStackedColumnSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedcolumnseriescomponent.html) but data points are stacked along horizontal line (x-axis) rather than along vertical line (y-axis). In other words, the stacked bar chart is rendered like the stacked column chart but with 90 degrees clockwise rotation.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-overview-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-stacked-bar-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-overview-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

The [`IgxStackedBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedbarseriescomponent.html) has its own [`IgxSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html) collection in which you can place the [`IgxStackedFragmentSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedfragmentseriescomponent.html) elements. These fragments are what make up the actual rendering of the chart and are the elements that accept the [`valueMemberPath`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedfragmentseriescomponent.html#valuememberpath).

### Required Axes

The Angular data chart component provides various types of axes but only the following types of axes can be used with [`IgxStackedBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedbarseriescomponent.html).

-   [`IgxNumericXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericxaxiscomponent.html)
-   [`IgxCategoryYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryyaxiscomponent.html)

### Required Data

The [`IgxStackedBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedbarseriescomponent.html) has the following data requirements:

-   The data source must be an array or a list of data items.
-   The data source must contain at least one data item otherwise the chart will not render the [`IgxStackedBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedbarseriescomponent.html).
-   All data items must contain at least one data column (string or date time) which should be mapped to the `Label` property of the category axis (e.g. [`IgxCategoryYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryyaxiscomponent.html)).
-   All data items must contain at least one numeric data column which should be mapped using the `ValueMemberPath` property of the [`IgxStackedFragmentSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedfragmentseriescomponent.html) to be added to the [`IgxStackedBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedbarseriescomponent.html)' [`IgxSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html) collection.

### Required Modules

Creation of the [`IgxStackedBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedbarseriescomponent.html) requires the following modules:

```ts
// axis' modules:
import { IgxNumericXAxis } from 'igniteui-angular-charts';
import { IgxCategoryYAxis } from 'igniteui-angular-charts';
// series' modules:
import { IgxStackedBarSeries } from 'igniteui-angular-charts';
// data chart's modules:

import { IgxDataChartCoreModule } from 'igniteui-angular-charts';
import { IgxDataChartCategoryModule } from 'igniteui-angular-charts';
import { IgxDataChartStackedModule } from 'igniteui-angular-charts';

@NgModule({
    imports: [
        // ...
        IgxDataChartCoreModule,
        IgxDataChartCategoryModule,
        IgxDataChartStackedModule
        // ...
    ]
})
```

### Code Example

This code demonstrates how to create an instance of the Ignite UI for Angular data chart with [`IgxStackedBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxstackedbarseriescomponent.html) and bind it to a data source.

```html
<igx-data-chart #chart height="100%" width="100%" [dataSource]="data">
  <igx-numeric-x-axis #xAxis></igx-numeric-x-axis>
  <igx-category-y-axis #yAxis label="Country"></igx-category-y-axis>

  <igx-stacked-bar-series [xAxis]="xAxis" [yAxis]="yAxis">
    <igx-stacked-fragment-series valueMemberPath="Coal"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Hydro"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Nuclear"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Gas"></igx-stacked-fragment-series>
    <igx-stacked-fragment-series valueMemberPath="Oil"></igx-stacked-fragment-series>
  </igx-stacked-bar-series>

</igx-data-chart>
```
