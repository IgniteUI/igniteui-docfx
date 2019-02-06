---
title: Data Chart Component - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Data Chart component is TODO.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Chart, Angular Chart Control, Angular Chart Example, Angular Chart Component, Angular Data Chart
---

## Axis Types

In the `IgxDataChart` control, an axis provides base properties for specifying appearance of axis main lines, gridlines, tickmarks, titles, and labels. There are several different types of axes that can be used by the `IgxDataChart` for the different types of series that the chart supports. The type of series determines what type of axes can be used with them.

### Demo

<div class="sample-container" style="height: 500px">
    <iframe id="data-chart-overview-iframe" src='{environment:demosBaseUrl}/data-chart-overview' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<!-- <div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="financial-chart-overview-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div> -->

<div class="divider--half"></div>

The `IgxDataChart` chart control supports various types of axes. These axes are categorized into two groups based on their shape and orientation in the chart plot area. The following lists these axes along with the types of series that are applicable to them.

### Category X Axis

The Category X Axis treats the data as a sequence of category data items. Labels on this axis are placed along the X-Axis, according to their position in the sequence. This type of axis can display almost any type of data including strings and numbers.

This type of axis is compatible with the category, financial indicator, and financial series types.

The following code snippet demonstrates how to add a Category X Axis to the `IgxDataChart` control:

### Category Y Axis

The Category Y Axis treats the data as a sequence of category data items. Labels on this axis are placed along the Y-Axis, according to their position in the sequence. This type of axis can display almost any type of data including strings and numbers.

This type of axis is compatible with the bar series type of category series.

The following code snippet demonstrates how to add a Category Y Axis to the `IgxDataChart` control:

### Category DateTime X Axis

The Category DateTime X Axis treats the data as a sequence of category data items that are sorted by date. Labels on this axis are placed along the X-Axis, according to the value in a data column that is mapped using the `DateTimeMemberPath` property of this axis.

This type of axis is compatible with the category, financial indicator, and financial series types.

The following code snippet demonstrates how to add a Category DateTime X Axis to the `IgxDataChart` control:

### Numeric X Axis

The Numeric X Axis treats the data as continously varying numerical data items. Labels on this axis are placed along the X-Axis. Location of labels varies according to the value in a data column that is mapped using their corresponding value-mapping properties.

This type of axis is compatible with the scatter series types. In these series types, the data column mapping will be done using the `XMemberPath` property. It is also compatible with the bar series type of category series, in which the `ValueMemberPath` property will be used to map the data column.

The following code snippet demonstrates how to add a Numeric X Axis to the `IgxDataChart` control:

### Numeric Y Axis

The Numeric Y Axis treats the data as continuously varying numerical data items. Labels on this axis are placed along the Y-axis. Location of labels varies according to the value in a data column that is mapped using their corresponding value-mapping properties.

This type of axis is compatible with the scatter series types. In these series types, the data column mapping will be done using the `XMemberPath` property. It is also compatible with the category series types, in which the `ValueMemberPath` property will be used to map the data column.

The following code snippet demonstrates how to add a Numeric Y Axis to the `IgxDataChart` control:

### Time X Axis

The Time X Axis treats the data as a sequence of category data items that are sorted by date. Labels on this axis are placed along the X-Axis, according to the value in a data column that is mapped using the `DateTimeMemberPath` property of this axis.

This type of axis is compatible with the category, financial indicator, and financial series types.

The Time X Axis also supports the ability to exclude intervals of data with `Breaks`. As a result, labels will not appear at the excluded interval. For example, working/non-working, holidays, or weekends.

The following code snippet demonstrates how to add a Time X Axis to the `IgxDataChart` control:

### Ordinal Time X Axis

The main difference between the Ordinal Time X Axis and the Time X Axis is that in the ordinal axis, the dates displayed are assumed to be equidistant. The Time X Axis currently sorts and aligns the dates according to a chronological timescale.

The following code snippet demonstrates how to add a Ordinal Time X Axis to the `IgxDataChart` control:

### Percent Change Y Axis

The Percent Change Y Axis works such that it takes the first point in your series as a reference value. Each value after the first value is scaled according to what percent increase or decrease it is compared to the reference value.

This axis type is a Numeric Y Axis, and so will support the same series types. For category series, the reference value will correspond to the `ValueMemberPath` for those series. For scatter series, the reference value will correspond to the `YMemberPath` of those series. For financial and financial indicators, the reference value will correspond to the first "Open" value.

The following code snippet demonstrates how to add a Percent Change Y Axis to the `IgxDataChart` control:
