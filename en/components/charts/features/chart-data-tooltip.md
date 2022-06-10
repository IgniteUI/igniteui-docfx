---
title: Angular Chart Data Tooltip | Data Visualization Tools | Infragistics
_description: Use Infragistics Ignite UI for Angular chart with the data tooltip layer!
_keywords: Angular charts, chart legend, legend, legend types, Ignite UI for Angular, Infragistics
mentionedTypes: ["XamDataChart", "Legend", "XamCategoryChart"]
namespace: Infragistics.Controls.Charts
---

# Angular Chart Data Tooltip

In Ignite UI for Angular, the **DataToolTip** displays values and titles of series as well as legend badges of series in a tooltip. In addition, it provides many configuration properties of the `DataLegend` for filtering series rows and values columns, styling, and formatting values. This tooltip type updates while moving the mouse inside of the plot area of the `XamCategoryChart`, `XamFinancialChart`, and [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) components.

## Angular Data Tooltip Properties

All properties of [`IgxDataToolTipLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatatooltiplayercomponent.html) are prefixed with **DataToolTip** and exposed on API of `XamCategoryChart` and `XamFinancialChart` components. However, you will need to create an instance of [`IgxDataToolTipLayerComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatatooltiplayercomponent.html) and add it to series collection of [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) component if you want to use it with Radial Charts, Polar Charts, Scatter Charts.

## Angular Data Tooltip Elements

The **DataToolTip** displays content using a set of three types of rows and four types of columns. 

### Angular Data Tooltip Rows

The rows of the **DataToolTip** include the header row, series row(s), and the summary row.

The header row displays the axis label of the point that is hovered, and can be changed using the `DataToolTipHeaderText` property.

The series row can actually be a set of rows corresponding to each series plotted in the chart. These rows will display the legend badge, series title, actual/abbreviated value of the the series, and abbreviation symbol and unit, if specified.

Finally, there is a summary row that displays the total of all series values. The default summary title can be changed using the `DataToolTipSummaryText` property of the legend. Also, you can use the `DataToolTipSummaryType` property to customize whether you display the Total, Min, Max, or Average of series values in the summary row.

The following example demonstrates the data tooltip with a summary applied:

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-data-tooltip"
           alt="Angular Category Chart Data Tooltip Example"
           github-src="charts/category-chart/data-tooltip">
</code-view>

### Angular Data Tooltip Columns

The columns of the `DataToolTip` include the title, label, value, and units columns. Each series in the chart can have multiple columns for label, value, and units depending on the `IncludedColumns` or `ExcludedColumns` collections of the legend.

The title column displays legend badges and series titles, which come from the [`chartTitle`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriesviewercomponent.html#charttitle) property of the different [`IgxSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html) plotted in the chart.

The label column displays the name or abbreviation of the different property paths in the `IncludedColumns` or `ExcludedColumns` collections of the tooltip.

The value column displays series values as abbreviated text which can be formatted using the `DataToolTipValueFormatAbbreviation` property to apply the same abbreviation for all numbers by setting this property to `Auto` or `Shared`. Alternatively, a user can select other abbreviations such as `Independent`, `Kilo`, `Million`, etc. Precision of abbreviated values is controlled using the `DataToolTipValueFormatMinFractions` and `DataToolTipValueFormatMaxFractions` for minimum and maximum digits, respectively.

The units column displays an abbreviation symbol and/or unit text, which can be set either on the **DataToolTip** by setting the `DataToolTipUnitText` for all columns or using the following properties on each series in the chart:

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

    -   ValueMemberAsLegendUnit="km"    

-   Polar Series:
    -   RadiusMemberAsLegendUnit="km"
    -   AngleMemberAsLegendUnit="degrees"

For each of the above-listed properties, there is a corresponding `MemberAsLegendLabel` property as well to determine the text in the label columns mentioned previously.

The columns included in the `IncludedColumns` and `ExcludedColumns` collections generally correspond to the value paths of your underlying data items, but the financial series has the option to include some special ones in addition to the `High`, `Low`, `Open`, and `Close` paths that are required for the financial series to plot correctly. You have the ability to show `TypicalPrice`, `Change`, and `Volume` options within the tooltip.    

The following example demonstrates a data tooltip with the added columns of Open, High, Low, Close, and Change:

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-data-tooltip"
           alt="Angular Financial Chart Data Tooltip Example"
           github-src="charts/financial-chart/data-tooltip">
</code-view>

## Angular Data Tooltip Styling

The **DataToolTip** provides properties for styling each type of column. Each of these properties begins with Title, Label, Value, or Units, and you can style the text's color, font, and margin. For example, if you wanted to set the text color of each of these, you would set the `DataToolTipTitleTextColor`, `DataToolTipLabelTextColor`, `DataToolTipValueTextColor`, and `DataToolTipUnitsTextColor` properties.

The following example demonstrates usage of the styling properties mentioned above:

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-data-tooltip-styling-props"
           alt="Angular Financial Chart Data Tooltip Styling Example"
           github-src="charts/financial-chart/data-tooltip-styling-props">
</code-view>

## Angular Data Tooltip Grouping & Positioning

You can set `DataToolTipGroupingMode` property to either `Grouped` or `Individual` to group content for multiple series into single tooltip or separate content for each series in multiple tooltips. In the `Grouped` mode, you can customize where the tooltip is shown by setting the `DataToolTipGroupedPositionModeX` and `DataToolTipGroupedPositionModeY` properties. This essentially allows you to customize the horizontal and vertical alignments of the tooltip and whether you want it to track to the closest series points to the mouse position or pin the tooltip to edge of plot area.

The following example demonstrates a data tooltip positioned to the top-right of the chart:

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-data-tooltip-positioning"
           alt="Angular Category Chart Data Tooltip Positioning Example"
           github-src="charts/category-chart/data-tooltip-positioning">
</code-view>

## Angular Data Tooltip Value Formatting

The **DataToolTip** provides automatic abbreviation of large numbers using its `DataToolTipValueFormatAbbreviation` property. This adds a multiplier in the units column such as kilo, million, billion, etc. You can customize the number of fractional digits that are displayed by setting the `DataToolTipValueFormatMinFractions` and `DataToolTipValueFormatMaxFractions`. This will allow you to determine the minimum and maximum number of digits that appear after the decimal point, respectively.

The following example demonstrates a **DataToolTip** with the minimum and maximum fractions set:

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-data-tooltip-formatting-decimals"
           alt="Angular Category Chart Data Tooltip Formatting Decimals Example"
           github-src="charts/category-chart/data-tooltip-formatting-decimals">
</code-view>

## Angular Data Tooltip Value Mode

You can change the default decimal display of values within the **DataToolTip** to be currency by changing the `DataToolTipValueFormatMode` property of the layer. The **DataToolTip** also exposes the ability to modify the culture of the displayed currency symbol by using its `DataToolTipValueFormatCulture` property and setting it to its corresponding culture tag. For example, the following sample demonstrates a chart with the `DataToolTipValueFormatCulture` set to "en-GB":

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-data-tooltip-formatting-currency"
           alt="Angular Financial Chart Data Tooltip Formatting Currency Example"
           github-src="charts/financial-chart/data-tooltip-formatting-currency">
</code-view>
