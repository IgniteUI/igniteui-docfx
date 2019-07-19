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
    <iframe id="data-chart-overview-iframe" src='{environment:demosBaseUrl}/charts/data-chart-axis-types' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="data-chart-overview-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Supported Axes

The Angular data chart component supports various types of axis that are intended to use with specific type of series. The following table lists which axes can be used with type of series.

| Axis Type          | Supported Series Types                                                                                                                                                                                                                                                            |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CategoryYAxis      | only [`IgxBarSeriesComponent`](datachart_axis_types.md) in [Category Series](datachart_series_types_category.md) group                                                                                                                 |
| CategoryXAxis      | all [Financial Series](datachart_series_types_financial.md), [Range Series](datachart_series_types_range.md),  [Category Series](datachart_series_types_category.md) (except [`IgxBarSeriesComponent`](datachart_axis_types.md))       |
| TimeXAxis          | all [Financial Series](datachart_series_types_financial.md), [Range Series](datachart_series_types_range.md),  [Category Series](datachart_series_types_category.md) (except [`IgxBarSeriesComponent`](datachart_axis_types.md))       |
| OrdinalTimeXAxis   | all [Financial Series](datachart_series_types_financial.md), [Range Series](datachart_series_types_range.md),  [Category Series](datachart_series_types_category.md) (except [`IgxBarSeriesComponent`](datachart_axis_types.md))       |
| PercentChangeYAxis | all [Financial Series](datachart_series_types_financial.md), [Range Series](datachart_series_types_range.md), [Category Series](datachart_series_types_category.md), [Scatter Series](datachart_series_types_scatter_bubble.md), [Shape Series](datachart_series_types_shape.md)  |
| NumericYAxis       | all [Scatter Series](datachart_series_types_scatter_bubble.md), [Shape Series](datachart_series_types_shape.md), [Financial Series](datachart_series_types_financial.md), [Range Series](datachart_series_types_range.md), [Category Series](datachart_series_types_category.md)  |
| NumericXAxis       | all [Scatter Series](datachart_series_types_scatter_bubble.md), [Shape Series](datachart_series_types_shape.md), and [`IgxBarSeriesComponent`](datachart_axis_types.md) in [Category Series](datachart_series_types_category.md) group |
| NumericAngleAxis   | all [Polar Series](datachart_series_types_polar.md)                                                                                                                                                                                                                               |
| NumericRadiusAxis  | all [Polar Series](datachart_series_types_polar.md) and [Radial Series](datachart_series_types_radial.md)                                                                                                                                                                         |
| CategoryAngleAxis  | all  [Radial Series](datachart_series_types_radial.md)                                                                                                                                                                                                                            |

### Category X Axis

The [`IgxCategoryXAxisComponent`](datachart_axis_types.md) treats the data as a sequence of category data items. Labels on this axis are placed along the X-Axis, according to their position in the sequence. This type of axis can display almost any type of data including strings and numbers. This type of axis is compatible with the [Financial Series](datachart_series_types_financial.md), [Range Series](datachart_series_types_range.md),  and [Category Series](datachart_series_types_category.md) (except [`IgxBarSeriesComponent`](datachart_axis_types.md))

The following code snippet demonstrates how to add a [`IgxCategoryXAxisComponent`](datachart_axis_types.md) to the Angular data chart component:

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-category-x-axis name="xAxis" />
</igx-data-chart>
```

### Category Y Axis

The [`IgxCategoryYAxisComponent`](datachart_axis_types.md) treats the data as a sequence of category data items. Labels on this axis are placed along the Y-Axis, according to their position in the sequence. This type of axis can display almost any type of data including strings and numbers. This type of axis is compatible only with [`IgxBarSeriesComponent`](datachart_axis_types.md) within the [Category Series](datachart_series_types_category.md) group.

The following code snippet demonstrates how to add a [`IgxCategoryYAxisComponent`](datachart_axis_types.md) to the data chart component:

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-category-y-axis name="yAxis" />
</igx-data-chart>
```

### Category DateTime X Axis

The [`IgxCategoryDateTimeXAxisComponent`](datachart_axis_types.md) Axis treats the data as a sequence of category data items that are sorted by date. Labels on this axis are placed along the X-Axis, according to the value in a data column that is mapped using the [`dateTimeMemberPath`](datachart_axis_types.md) property of this axis. Also in order to display the formatted labels you can use the ‘FormatLabel’ event.
This type of axis is compatible with the [Financial Series](datachart_series_types_financial.md), [Range Series](datachart_series_types_range.md), and [Category Series](datachart_series_types_category.md) (except [`IgxBarSeriesComponent`](datachart_axis_types.md))

The following code snippet demonstrates how to add a [`IgxCategoryDateTimeXAxisComponent`](datachart_axis_types.md) to the Angular data chart component:

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

The [`IgxNumericXAxisComponent`](datachart_axis_types.md) treats the data as continously varying numerical data items. Labels on this axis are placed along the X-Axis. Location of labels varies according to the value in a data column that is mapped using their corresponding value-mapping properties. This type of axis is compatible with the [Scatter Series](datachart_series_types_scatter_bubble.md) and [Shape Series](datachart_series_types_shape.md) types. Also, this axis is compatible with the [`IgxBarSeriesComponent`](datachart_axis_types.md) type of [Category Series](datachart_series_types_category.md), in which the `ValueMemberPath` property will be used to map the data column.

The following code snippet demonstrates how to add a [`IgxNumericXAxisComponent`](datachart_axis_types.md) to the Angular data chart component:

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-numeric-x-axis name="xAxis" />
</igx-data-chart>
```

### Numeric Y Axis

The [`IgxNumericYAxisComponent`](datachart_axis_types.md) treats the data as continuously varying numerical data items. Labels on this axis are placed along the Y-axis. Location of labels varies according to the value in a data column that is mapped using their corresponding value-mapping properties. This type of axis is compatible with the [Scatter Series](datachart_series_types_scatter_bubble.md) and [Shape Series](datachart_series_types_shape.md) types. Also, this axis is compatible with [Financial Series](datachart_series_types_financial.md), [Range Series](datachart_series_types_range.md), and [Category Series](datachart_series_types_category.md) types (except [`IgxBarSeriesComponent`](datachart_axis_types.md)).

The following code snippet demonstrates how to add a [`IgxNumericYAxisComponent`](datachart_axis_types.md) to the Angular data chart component:

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-numeric-y-axis name="yAxis" />
</igx-data-chart>
```

### Time X Axis

The [`IgxTimeXAxisComponent`](datachart_axis_types.md) treats the data as a sequence of category data items that are sorted by date. Labels on this axis are placed along the X-Axis, according to the value in a data column that is mapped using the [`dateTimeMemberPath`](datachart_axis_types.md) property of this axis. This type of axis is compatible with the [Financial Series](datachart_series_types_financial.md), [Range Series](datachart_series_types_range.md), and [Category Series](datachart_series_types_category.md) types.

The [`IgxTimeXAxisComponent`](datachart_axis_types.md) also supports the ability to exclude intervals of data with [`breaks`](datachart_axis_types.md). As a result, labels will not appear at the excluded interval. For example, working/non-working days, holidays, or weekends.

The following code snippet demonstrates how to add a [`IgxTimeXAxisComponent`](datachart_axis_types.md) to the Angular data chart component:

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-time-x-axis name="xAxis" dateTimeMemberPath="Date"/>
</igx-data-chart>
```

### Ordinal Time X Axis

The main difference between the [`IgxOrdinalTimeXAxisComponent`](datachart_axis_types.md) and the [`IgxTimeXAxisComponent`](datachart_axis_types.md) is that in the ordinal axis, the dates displayed are assumed to be equidistant. The [`IgxTimeXAxisComponent`](datachart_axis_types.md) currently sorts and aligns the dates according to a chronological timescale. Therefore, we recommend using [`IgxOrdinalTimeXAxisComponent`](datachart_axis_types.md) for better performance or when your data items are already in chronological order with the same time interval.

The following code snippet demonstrates how to add a [`IgxOrdinalTimeXAxisComponent`](datachart_axis_types.md) to the Angular data chart component:

```html
<igx-data-chart [dataSource]="data"
    width="100%"
    height="400px">
    <igx-ordinal-time-x-axis name="xAxis" dateTimeMemberPath="Date"/>
</igx-data-chart>
```

### Percent Change Y Axis

The [`IgxPercentChangeYAxisComponent`](datachart_axis_types.md) works such that it takes the first point in your series as a reference value. Each value after the first value is scaled according to what percent increase or decrease it is compared to the reference value.

This axis type is based on [`IgxNumericYAxisComponent`](datachart_axis_types.md), and so will support the same series types. For [Category Series](datachart_series_types_category.md), the reference value will correspond to the `ValueMemberPath` for those series. For[Scatter Series](datachart_series_types_scatter_bubble.md), the reference value will correspond to the `YMemberPath` of those series. For [Financial Series](datachart_series_types_financial.md), the reference value will correspond to the first value mappted to `OpenMemberPath` property.

The following code snippet demonstrates how to add a [`IgxPercentChangeYAxisComponent`](datachart_axis_types.md) to the Angular data chart component:

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
