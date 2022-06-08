---
title: Angular Chart Data Legend | Data Visualization Tools | Infragistics
_description: Use Infragistics Ignite UI for Angular chart with the data legend!
_keywords: Angular charts, chart legend, legend, legend types, Ignite UI for Angular, Infragistics
mentionedTypes: ["XamCategoryChart", "DataLegend", "Series"]
namespace: Infragistics.Controls.Charts
---

# Angular Data Legend

In Ignite UI for Angular, the `DataLegend` is a component that works much like the [`IgxLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlegendcomponent.html), but it shows values of series and provides many configuration properties for filtering series rows and values columns, styling and formatting values. This legend updates when moving the mouse inside of the plot area of the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) and has a persistent state that remembers the last hovered point when the user's mouse pointer exits the plot area. It displays this content using a set of three type of rows and four types of columns.

## Angular Data Legend Rows

The rows of the `DataLegend` include the header row, series row(s), and the summary row.

The header row displays the axis label of the point that is hovered, and can be changed using the `HeaderText` property.

The series row can actually be a set of rows corresponding to each series plotted in the chart. These rows will display the legend badge, series title, actual/abbreviated value of the the series, and abbreviation symbol and unit, if specified.

Finally, there is a summary row that displays the total of all series values. The default summary title can be changed using the `SummaryText` property of the legend. Also, you can use the `SummaryType` property to customize whether you display the Total, Min, Max, or Average of series values in the summary row.

## Angular Data Legend Columns

The columns of the `DataLegend` from left to right include the title column, value column, and units column.

The title column displays legend badges and series titles, which come from the [`title`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html#title) property of the different [`IgxSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html) plotted in the chart.

The value column displays series values as abbreviated text which can be formatted using the `ValueFormatAbbreviation` property to apply the same abbreviation for all numbers by setting this property to `Auto` or `Shared`. Alternatively, a user can select other abbreviations such as `Independent`, `Kilo`, `Million`, etc. Procession of abbreviated values is controlled using the `ValueFormatMinFractions` and `ValueFormatMaxFractions` for minimum and maximum digits, respectively.

The units column displays an abbreviation symbol and/or unit text, which can be set either on the `DataLegend` by setting the `UnitText` for all columns or using the the following properties on each series in the chart:

-   Category Series (e.g. ColumnSeries)

    -   ValueMemberAsLegendUnit="K"

-   Financial Price Series:

    -   OpenMemberAsLegendUnit="K"
    -   LowMemberAsLegendUnit="K"
    -   HighMemberAsLegendUnit="K"
    -   CloseMemberAsLegendUnit="K"

-   Range Series:
    -   LowMemberAsLegendUnit="K"
    -   HighMemberAsLegendUnit="K"
-   Radial Series:

    -   ValueMemberAsLegendUnit="K"
    -   AngleMemberAsLegendUnit="K"

-   Polar Series:
    -   RadiusMemberAsLegendUnit="K"
    -   AngleMemberAsLegendUnit="K"

## Angular Data Legend Styling

The `DataLegend` provides properties for styling each type of column. Each of these properties begins with Title, Label, Value, or Units, and you can style the text's color, font, and margin. For example, if you wanted to set the text color of each of these, you would set the `TitleTextColor`, `LabelTextColor`, `ValueTextColor`, and `UnitsTextColor` properties.

## Angular Data Legend Value Formatting

The `DataLegend` provides automatic abbreviation of large numbers using its `ValueFormatAbbreviation` property. This adds a multiplier in the units column such as kilo, million, billion, etc.

You can customize the number of fractional digits that are displayed by setting the `ValueFormatMinFractions` and `ValueFormatMaxFractions`. This will allow you to determine the minimum and maximum number of digits that appear after the decimal point, respectively.

## Angular Data Legend Value Mode

You have the ability to change the default decimal display of values within the `DataLegend` to be currency by changing the `ValueFormatMode` property of the control. The `DataLegend` also exposes the ability to modify the culture of the displayed currency symbol by using its `ValueFormatCulture` property and setting it to its corresponding culture tag. For example, the following sample demonstrates a chart with the `ValueFormatCulture` set to "en-GB":

## Angular Data Legend Styling Events

The `DataLegend` has three events that fire when rendering their corresponding row. These events are listed below with a description of what they are designed to be used for:

-   `StyleHeaderRow`: This event fires once when rendering the header row.
-   `StyleSeriesRow`: This event fires once for each series row which allows conditional styling of the values of the series.
-   `StyleSummaryRow`: This event fires once when rendering the summary row.

Each of the above events exposes a [`IgxDataLegendStylingRowEventArgs`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendstylingroweventargs.html) parameter as its arguments, which lets you customize each item's text, text color, and the overall visibility of the row. The event arguments also expose event-specific properties. For example, since the `StyleSeriesRow` event fires for each series, the event arguments will return the series index and series title for the row that represents the series.
