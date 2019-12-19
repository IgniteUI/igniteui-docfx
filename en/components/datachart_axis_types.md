---
title: Data Chart | Visualization Tools | Ignite UI for Angular | Infragistics | Axis
_description: Create a data chart that displays multiple instances of visual elements in the same plot area in order to create composite chart views.
_keywords: data chart, Ignite UI for Angular, Infragistics
mentionedTypes: ['XamDataChart', 'CategoryXAxis', 'NumericYAxis', 'CategoryDateTimeXAxis']
---

## Axis

In the Angular data chart component, an axis provides base properties for specifying appearance of axis main lines, gridlines, tickmarks, titles, and labels. There are several different types of axis that can be used by the data chart component for the different types of series that the data chart supports. The type of series determines what type of axes can be used with them.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="data-chart-overview-iframe" src='{environment:dvDemosBaseUrl}/charts/data-chart-axis-types' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-overview-iframe" data-demos-base-url="{environment:dvDemosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Supported Axes

The Angular data chart component supports various types of axis that are intended to use with specific type of series. The following table lists which axes can be used with type of series.

| Axis Type          | Supported Series Types                                                                                                                                                                                                                                                                                   |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CategoryYAxis      | only [`IgxBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html) in [Category Series](datachart_series_types_category.md) group                                                                                                                 |
| CategoryXAxis      | all [Financial Series](datachart_series_types_financial.md), [Range Series](datachart_series_types_range.md),  [Category Series](datachart_series_types_category.md) (except [`IgxBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html))       |
| TimeXAxis          | all [Financial Series](datachart_series_types_financial.md), [Range Series](datachart_series_types_range.md),  [Category Series](datachart_series_types_category.md) (except [`IgxBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html))       |
| OrdinalTimeXAxis   | all [Financial Series](datachart_series_types_financial.md), [Range Series](datachart_series_types_range.md),  [Category Series](datachart_series_types_category.md) (except [`IgxBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html))       |
| PercentChangeYAxis | all [Financial Series](datachart_series_types_financial.md), [Range Series](datachart_series_types_range.md), [Category Series](datachart_series_types_category.md), [Scatter Series](datachart_series_types_scatter_bubble.md), [Shape Series](datachart_series_types_shape.md)                         |
| NumericYAxis       | all [Scatter Series](datachart_series_types_scatter_bubble.md), [Shape Series](datachart_series_types_shape.md), [Financial Series](datachart_series_types_financial.md), [Range Series](datachart_series_types_range.md), [Category Series](datachart_series_types_category.md)                         |
| NumericXAxis       | all [Scatter Series](datachart_series_types_scatter_bubble.md), [Shape Series](datachart_series_types_shape.md), and [`IgxBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html) in [Category Series](datachart_series_types_category.md) group |
| NumericAngleAxis   | all [Polar Series](datachart_series_types_polar.md)                                                                                                                                                                                                                                                      |
| NumericRadiusAxis  | all [Polar Series](datachart_series_types_polar.md) and [Radial Series](datachart_series_types_radial.md)                                                                                                                                                                                                |
| CategoryAngleAxis  | all  [Radial Series](datachart_series_types_radial.md)                                                                                                                                                                                                                                                   |

### Category X Axis

The [`IgxCategoryXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html) treats the data as a sequence of category data items. Labels on this axis are placed along the X-Axis, according to their position in the sequence. This type of axis can display almost any type of data including strings and numbers. This type of axis is compatible with the [Financial Series](datachart_series_types_financial.md), [Range Series](datachart_series_types_range.md),  and [Category Series](datachart_series_types_category.md) (except [`IgxBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html))

The following code snippet demonstrates how to add a [`IgxCategoryXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryxaxiscomponent.html) to the Angular data chart component:

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-category-x-axis name="xAxis" />
</igx-data-chart>
```

### Category Y Axis

The [`IgxCategoryYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryyaxiscomponent.html) treats the data as a sequence of category data items. Labels on this axis are placed along the Y-Axis, according to their position in the sequence. This type of axis can display almost any type of data including strings and numbers. This type of axis is compatible only with [`IgxBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html) within the [Category Series](datachart_series_types_category.md) group.

The following code snippet demonstrates how to add a [`IgxCategoryYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategoryyaxiscomponent.html) to the data chart component:

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-category-y-axis name="yAxis" />
</igx-data-chart>
```

### Category DateTime X Axis

The [`IgxCategoryDateTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorydatetimexaxiscomponent.html) Axis treats the data as a sequence of category data items that are sorted by date. Labels on this axis are placed along the X-Axis, according to the value in a data column that is mapped using the [`dateTimeMemberPath`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimeaxisbasecomponent.html#datetimememberpath) property of this axis. Also in order to display the formatted labels you can use the ‘FormatLabel’ event.
This type of axis is compatible with the [Financial Series](datachart_series_types_financial.md), [Range Series](datachart_series_types_range.md), and [Category Series](datachart_series_types_category.md) (except [`IgxBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html))

The following code snippet demonstrates how to add a [`IgxCategoryDateTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxcategorydatetimexaxiscomponent.html) to the Angular data chart component:

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-category-date-time-x-axis name="yAxis" 
        (FormatLabel)=”xAxisFormatLabel()” 
        dateTimeMemberPath="Date" >
        </igx-category-date-time-x-axis>
</igx-data-chart>
```

### Numeric X Axis

The [`IgxNumericXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericxaxiscomponent.html) treats the data as continously varying numerical data items. Labels on this axis are placed along the X-Axis. Location of labels varies according to the value in a data column that is mapped using their corresponding value-mapping properties. This type of axis is compatible with the [Scatter Series](datachart_series_types_scatter_bubble.md) and [Shape Series](datachart_series_types_shape.md) types. Also, this axis is compatible with the [`IgxBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html) type of [Category Series](datachart_series_types_category.md), in which the `ValueMemberPath` property will be used to map the data column.

The following code snippet demonstrates how to add a [`IgxNumericXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericxaxiscomponent.html) to the Angular data chart component:

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-numeric-x-axis name="xAxis" />
</igx-data-chart>
```

### Numeric Y Axis

The [`IgxNumericYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html) treats the data as continuously varying numerical data items. Labels on this axis are placed along the Y-axis. Location of labels varies according to the value in a data column that is mapped using their corresponding value-mapping properties. This type of axis is compatible with the [Scatter Series](datachart_series_types_scatter_bubble.md) and [Shape Series](datachart_series_types_shape.md) types. Also, this axis is compatible with [Financial Series](datachart_series_types_financial.md), [Range Series](datachart_series_types_range.md), and [Category Series](datachart_series_types_category.md) types (except [`IgxBarSeriesComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxbarseriescomponent.html)).

The following code snippet demonstrates how to add a [`IgxNumericYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html) to the Angular data chart component:

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-numeric-y-axis name="yAxis" />
</igx-data-chart>
```

### Time X Axis

The [`IgxTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) treats the data as a sequence of category data items that are sorted by date. Labels on this axis are placed along the X-Axis, according to the value in a data column that is mapped using the [`dateTimeMemberPath`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimeaxisbasecomponent.html#datetimememberpath) property of this axis. This type of axis is compatible with the [Financial Series](datachart_series_types_financial.md), [Range Series](datachart_series_types_range.md), and [Category Series](datachart_series_types_category.md) types.

The [`IgxTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) also supports the ability to exclude intervals of data with [`breaks`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html#breaks). As a result, labels will not appear at the excluded interval. For example, working/non-working days, holidays, or weekends.

The following code snippet demonstrates how to add a [`IgxTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) to the Angular data chart component:

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-time-x-axis name="xAxis" dateTimeMemberPath="Date"/>
</igx-data-chart>
```

### Ordinal Time X Axis

The main difference between the [`IgxOrdinalTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html) and the [`IgxTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) is that in the ordinal axis, the dates displayed are assumed to be equidistant. The [`IgxTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxtimexaxiscomponent.html) currently sorts and aligns the dates according to a chronological timescale. Therefore, we recommend using [`IgxOrdinalTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html) for better performance or when your data items are already in chronological order with the same time interval.

The following code snippet demonstrates how to add a [`IgxOrdinalTimeXAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxordinaltimexaxiscomponent.html) to the Angular data chart component:

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-ordinal-time-x-axis name="xAxis" dateTimeMemberPath="Date"/>
</igx-data-chart>
```

### Percent Change Y Axis

The [`IgxPercentChangeYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpercentchangeyaxiscomponent.html) works such that it takes the first point in your series as a reference value. Each value after the first value is scaled according to what percent increase or decrease it is compared to the reference value.

This axis type is based on [`IgxNumericYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxnumericyaxiscomponent.html), and so will support the same series types. For [Category Series](datachart_series_types_category.md), the reference value will correspond to the `ValueMemberPath` for those series. For[Scatter Series](datachart_series_types_scatter_bubble.md), the reference value will correspond to the `YMemberPath` of those series. For [Financial Series](datachart_series_types_financial.md), the reference value will correspond to the first value mappted to `OpenMemberPath` property.

The following code snippet demonstrates how to add a [`IgxPercentChangeYAxisComponent`](/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxpercentchangeyaxiscomponent.html) to the Angular data chart component:

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-percent-change-y-axis name="yAxis" />
</igx-data-chart>
```

### Additional Resources

-   [Axis Types](datachart_axis_types.md)
-   [Axis Sharing](datachart_axis_sharing.md)
-   [Axis Settings](datachart_axis_settings.md)
-   [Chart Legend](datachart_chart_legends.md)
-   [Series Markers](datachart_series_markers.md)
-   [Series Types](datachart_series_types.md)
