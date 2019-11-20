---
title: Data Chart | Visualization Tools | Ignite UI for Angular | Infragistics | Range
_description: Create a data chart that displays multiple instances of visual elements in the same plot area in order to create composite chart views.
_keywords: data chart, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamDataChart']
---

## Range Series

This topic explains various types of range series in the Angular data chart component. The range series is a group of chart series that takes two numeric data columns and render them as collection of data points stretched in horizontal orientation (e.g. [`IgxRangeAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxrangeareaseriescomponent.html))

### Demo

<div class="sample-container loading" style="height: 400px">
    <iframe id="data-chart-type-range-series-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-type-range-series' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-type-range-series-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Types of Range Series

The following table lists all types of range series and their descriptions:

| Series Name                                                                                                                          | Description                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`IgxRangeAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxrangeareaseriescomponent.html)     | Displays filled region/area between pairs of High/Low values of data points. Categories are arranged horizontally and values – vertically.                 |
| [`IgxRangeColumnSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxrangecolumnseriescomponent.html) | Displays discrete data in separate columns between High/Low values of data points. Categories are arranged horizontally and values are plotted vertically. |

### Required Axes

The Angular data chart component provides various types of axes but only the following types of axes can be used with range series.

| Series Type                                                                                                                          | YAxis Type                                                                                                                 | XAxis Type                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`IgxRangeAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxrangeareaseriescomponent.html)     | [`IgxNumericYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html) | [`IgxCategoryXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html), [`IgxOrdinalTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html), [`IgxTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) |
| [`IgxRangeColumnSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxrangecolumnseriescomponent.html) | [`IgxNumericYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html) | [`IgxCategoryXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html), [`IgxOrdinalTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html), [`IgxTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) |

### Required Data

Range series have the following data requirements:

-   The data source must be an array or a list of data items
-   The data source must contain at least one data item otherwise the chart will not render the range series.
-   All data items must contain at least one label data column (string or date time) which should be mapped to the `Label` property of the category axis (e.g. [`IgxCategoryXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html))
-   All data items must contain at least two numeric data column which should be mapped using the `HighMemberPath` and `LowMemberPath` properties of range series (e.g. [`IgxRangeAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxrangeareaseriescomponent.html))

You can use the [SampleRangeData](data-chart-data-sources-range.md) as data source which meets above data requirements.

```ts
public dataSource: any[] = SampleRangeData.create();
```

### Required Modules

In order to use range series, you need to import the following modules in your app during load:

```ts
// in app.module.ts file

// axis' modules:
import { IgxCategoryXAxis } from "igniteui-angular-charts/ES5/igx-category-x-axis";
import { IgxNumericYAxis } from "igniteui-angular-charts/ES5/igx-numeric-y-axis";
// series' modules:
import { IgxRangeAreaSeries } from "igniteui-angular-charts/ES5/igx-range-area-series";
import { IgxRangeColumnSeries } from "igniteui-angular-charts/ES5/igx-range-column-series";
// data chart's modules:

import { IgxDataChartCoreModule } from "igniteui-angular-charts/ES5/igx-data-chart-core--module";
import { IgxDataChartCategoryModule } from "igniteui-angular-charts/ES5/igx-data-chart-category--module";

@NgModule({
    imports: [
        // ...
        IgxDataChartCoreModule,
        IgxDataChartCategoryModule,
        // ...
    ]
})
```

### Code Example

This code demonstrates how to create an instance of data chart with [`IgxRangeColumnSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxrangecolumnseriescomponent.html) and bind it to the data source.

```html
 <igx-data-chart
    [dataSource]="dataSource"
    width="700px"
    height="500px">
    <igx-category-x-axis name="xAxis" label="Year"></igx-category-x-axis>
    <igx-numeric-y-axis  name="yAxis"></igx-numeric-y-axis>
    <igx-range-column-series
        name="series1"
        xAxisName="xAxis"
        yAxisName="yAxis"
        highMemberPath="High"
        lowMemberPath="Low">
    </igx-range-column-series>
 </igx-data-chart>
```

Note that you can also use above code to create [`IgxRangeAreaSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxrangeareaseriescomponent.html) by replacing [`IgxRangeColumnSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxrangecolumnseriescomponent.html).

### Additional Resources

-   [Axis Types](data-chart-axis-types.md)
-   [Axis Sharing](data-chart-axis-sharing.md)
-   [Chart Legend](data-chart-legends.md)
-   [Series Annotations](data-chart-series-annotations.md)
-   [Series Highlighting](data-chart-series-highlighting.md)
-   [Series Markers](data-chart-series-markers.md)
-   [Series Tooltips](data-chart-series-tooltips.md)
-   [Series Trendlines](data-chart-series-trendlines.md)
-   [Series Types](data-chart-series-types.md)
