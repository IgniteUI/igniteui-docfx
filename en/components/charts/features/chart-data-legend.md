---
title: Angular Chart Data Legend | Data Visualization Tools | Infragistics
_description: Use Infragistics Ignite UI for Angular chart with the data legend!
_keywords: Angular charts, chart legend, legend, legend types, Ignite UI for Angular, Infragistics
mentionedTypes: ["XamCategoryChart", "XamDataLegend", "Series", "DataLegendSummaryType", "DataAbbreviationMode" ]
namespace: Infragistics.Controls.Charts
---

# Angular Data Legend

In Ignite UI for Angular, the [`IgxDataLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html) is highly-customizable version of the [`IgxLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxlegendcomponent.html), that shows values of series and provides many configuration properties for filtering series rows and values columns, styling and formatting values. This legend updates when moving the mouse inside of the plot area of the [`IgxCategoryChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxcategorychartcomponent.html), [`IgxFinancialChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxfinancialchartcomponent.html), and [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatachartcomponent.html). Also, it has a persistent state that remembers the last hovered point when the user's mouse pointer exits the plot area. It displays this content using a set of three type of rows (header, series, summary) and four types of columns (title, label, value, unit).

## Angular Data Legend Rows

The rows of the [`IgxDataLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html) include the header row, series row(s), and the summary row. The header row displays the axis label of the point that is hovered, and can be changed using the [`headerText`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#headerText) property.

<code-view style="height: 450px" alt="Angular Category Chart Data Legend Example"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/data-legend"
                                                 github-src="charts/category-chart/data-legend">
</code-view>


### Header Row

The header row displays the current label of x-axis when hovering mouse over category series and financial series. You can use [`headerFormatDate`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#headerFormatDate) and [`headerFormatTime`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#headerFormatTime) properties to format date and time in the [`IgxDataLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html) if the x-axis shows dates. For other types of series, the [`IgxDataLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html) does not render the header row.

### Series Row

The series row represents each series plotted in the chart. These rows will display the legend badge, series title, actual/abbreviated value of the the series, and abbreviation symbol or unit of measurement, if specified. You can filter series rows by setting [`includedSeries`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#includedSeries) or [`excludedSeries`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#excludedSeries) properties to a collection of series' indexes (1, 2, 3) or series' titles (Tesla, Microsoft).

### Summary Row

Finally, there is a summary row that displays the total of all series values. The default summary title can be changed using the [`summaryTitleText`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#summaryTitleText) property of the legend. Also, you can use the [`summaryType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#summaryType) property to customize whether you display the [`Total`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_core.datalegendsummarytype.html#Total), [`Min`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_core.datalegendsummarytype.html#Min), [`Max`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_core.datalegendsummarytype.html#Max), or [`Average`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_core.datalegendsummarytype.html#Average) of series values in the summary row.

## Angular Data Legend Columns

The columns of the [`IgxDataLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html) include the series title, label, value of data column, and optional unit associated with the value. Some series in the chart can have multiple columns for label, value, and units. For example, financial price series has **High**, **Low**, **Open**, and **Close** data columns which can be filtered in the [`IgxDataLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html) using the [`includedColumns`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#includedColumns) or [`excludedColumns`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#excludedColumns) properties.

<code-view style="height: 450px" alt="Angular Financial Chart Data Legend Example"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart/data-legend"
                                                 github-src="charts/financial-chart/data-legend">
</code-view>


Setting values on the [`includedColumns`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#includedColumns) and [`excludedColumns`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#excludedColumns) properties, depends on type of series and how many data columns they support. For example, you can set [`includedColumns`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#includedColumns) property to a collection of **Open** and **Close** strings and the legend will show only open and close values for stock prices when the chart is plotting financial series. The following table lists all column names that can be use to filter columns in data legend.

|  Type of Series  | Column Names |
| -----------------|-------------- |
| Category Series  | Value |
| Radial Series    | Value |
| Polar Series     | Radius, Angle |
| Bubble Series    | X, Y, Radius |
| Scatter Series   | X, Y |
| Range Series     | High, Low |
| Financial Series | High, Low, Open, Close, Change, TypicalPrice, Volume |

Where the **TypicalPrice** and percentage **Change** of OHLC prices are automatically calculated by financial series so you do not need to include them in your data sources.

### Title Column

The title column displays legend badges and series titles, which come from the [`title`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html#title) property of the different [`IgxSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html) plotted in the chart.

### Label Column

The label column displays short name on the left side of value column, e.g. "O" for **Open** stock price. You can toggle visibility of this column using the [`labelDisplayMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#labelDisplayMode) property.

### Value Column

The value column displays values of series as abbreviated text which can be formatted using the [`valueFormatAbbreviation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#valueFormatAbbreviation) property to apply the same abbreviation for all numbers by setting this property to [`Shared`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_core.dataabbreviationmode.html#Shared). Alternatively, a user can select other abbreviations such as [`Independent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_core.dataabbreviationmode.html#Independent), [`Kilo`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_core.dataabbreviationmode.html#Kilo), [`Million`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_core.dataabbreviationmode.html#Million), etc. Precision of abbreviated values is controlled using the [`valueFormatMinFractions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#valueFormatMinFractions) and [`valueFormatMaxFractions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#valueFormatMaxFractions) for minimum and maximum digits, respectively.

### Unit Column

The unit column displays an abbreviation symbol on the right side of value column. The unit symbol depends on the [`valueFormatAbbreviation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#valueFormatAbbreviation) property, e.g. "M" for the [`Million`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/enums/igniteui_angular_core.dataabbreviationmode.html#Million) abbreviation.

### Customizing Columns

You can customize text displayed in the **Label** and **Unit** columns using  properties that end with **MemberAsLegendLabel** and **MemberAsLegendUnit**  on each series. The following table shows some possible customizations of the **Label** and **Unit** columns.

|  Type of Series | Series Properties |
| ------|---- |
| Category Series | ValueMemberAsLegendLabel="$" <br> ValueMemberAsLegendUnit="M" |
| Radial Series | ValueMemberAsLegendLabel="Distance:" <br> ValueMemberAsLegendUnit="KM" |
| Polar Series | RadiusMemberAsLegendLabel="Radius:" <br> RadiusMemberAsLegendUnit="KM" <br> AngleMemberAsLegendLabel="Angle:" <br> AngleMemberAsLegendUnit="°" |
| Range Series | HighMemberAsLegendLabel="H:" <br> HighMemberAsLegendUnit="K" <br> LowMemberAsLegendLabel="L:" <br> LowMemberAsLegendUnit="K" |
| Financial Series | OpenMemberAsLegendLabel="O:" <br> OpenMemberAsLegendUnit="K" <br> HighMemberAsLegendLabel="H:" <br> HighMemberAsLegendUnit="K" <br> LowMemberAsLegendLabel="L:" <br> LowMemberAsLegendUnit="K" <br> CloseMemberAsLegendLabel="C:" <br> CloseMemberAsLegendUnit="K" <br> |

Also, you can use the `UnitText` property on the [`IgxDataLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html) to change text displayed in all Unit columns.

## Layout Mode

Legend items can be positioned in a vertical or table structure via the [`layoutMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#layoutMode) property. The default value is `Table`, which retains the same look and feel as seen in previous releases.

eg.

<img src="../../../images/general/layout_mode.png" />

## Angular Data Legend Styling

The [`IgxDataLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html) provides properties for styling each type of column. Each of these properties begins with **Title**, **Label**, **Value**, or **Units**. You can style the text's color, font, and margin. For example, if you wanted to set the text color of all columns, you would set the [`titleTextColor`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#titleTextColor), [`labelTextColor`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#labelTextColor), [`valueTextColor`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#valueTextColor), and [`unitsTextColor`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#unitsTextColor) properties. The following example demonstrates a utilization of the styling properties mentioned above:

<code-view style="height: 450px" alt="Angular Data Legend Styling Example"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart/data-legend-styling-props"
                                                 github-src="charts/financial-chart/data-legend-styling-props">
</code-view>


## Angular Data Legend Value Formatting

The [`IgxDataLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html) provides automatic abbreviation of large numbers using its [`valueFormatAbbreviation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#valueFormatAbbreviation) property. This adds a multiplier in the units column such as kilo, million, billion, etc. You can customize the number of fractional digits that are displayed by setting the [`valueFormatMinFractions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#valueFormatMinFractions) and [`valueFormatMaxFractions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#valueFormatMaxFractions). This will allow you to determine the minimum and maximum number of digits that appear after the decimal point, respectively.
The following example demonstrates how to use those properties:

<code-view style="height: 450px" alt="Angular Data Legend Formatting Decimals Example"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart/data-legend-formatting-decimals"
                                                 github-src="charts/category-chart/data-legend-formatting-decimals">
</code-view>


## Angular Data Legend Value Mode

You have the ability to change the default decimal display of values within the [`IgxDataLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html) to a currency by changing the [`valueFormatMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#valueFormatMode) property. Also, you can change the culture of the displayed currency symbol by setting the [`valueFormatCulture`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#valueFormatCulture) property a culture tag. For example, the following example data legend with the [`valueFormatCulture`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#valueFormatCulture) set to "en-GB" to display British Pounds (£) symbol:

<code-view style="height: 450px" alt="Angular Formatting Currency Example"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart/data-legend-formatting-currency"
                                                 github-src="charts/financial-chart/data-legend-formatting-currency">
</code-view>


## Angular Data Legend Grouping

[`dataLegendGroup`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxseriescomponent.html#dataLegendGroup) can be set, on all types of series, to a string that will categorize a group of series in Data Legend. Each group will have its own summary row displayed before another group of series is displayed:
By default, DataLegend will hide names of groups, but you can display group names by setting the [`groupRowVisible`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#groupRowVisible) property to true.

<code-view style="height: 450px" alt="Angular Data Legend Grouping"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/data-legend-grouping"
                                                 github-src="charts/data-chart/data-legend-grouping">
</code-view>


## Angular Data Legend Styling & Events

Several properties are exposed including grouping portions of the legend.

*   `GroupRowMargin`
*   `GroupTextMargin`
*   [`groupTextColor`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#groupTextColor)
*   `GroupTextFontSize`
*   `GroupTextFontFamily`
*   `GroupTextFontStyle`
*   `GroupTextFontStretch`
*   `GroupTextFontWeight`
*   `HeaderTextMargin`
*   [`headerTextColor`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#headerTextColor)
*   `HeaderTextFontSize`
*   `HeaderTextFontFamily`
*   `HeaderTextFontStyle`
*   `HeaderTextFontStretch`
*   `HeaderTextFontWeight`

The [`IgxDataLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html) has several events that fire when rendering their corresponding row, even during mouse interactions where the values are updating. These events are listed below with a description of what they are designed to be used for:

*   `StyleGroupRow`: This event fires for each group to style text displayed in group rows.
*   `StyleHeaderRow`: This event fires when rendering the header row.
*   `StyleSeriesRow`: This event fires once for each series row, which allows conditional styling of the values of the series.
*   `StyleSeriesColumn`: This event fires once for each series column, which allows conditional styling of the different columns for the series in the chart.
*   `StyleSummaryRow`: This event fires once when rendering the summary row.
*   `StyleSummaryColumn`: This event fires once when rendering the summary column.

Some of the events exposes a [`IgxDataLegendStylingRowEventArgs`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendstylingroweventargs.html) parameter as its arguments, which lets you customize each item's text, text color, and the overall visibility of the row. The event arguments also expose event-specific properties. For example, since the `StyleSeriesRow` event fires for each series, the event arguments will return the series index and series title for the row that represents the series.

`StyleSummaryColumn` and `SeriesStyleColumn` events expose a [`IgxDataLegendStylingColumnEventArgs`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendstylingcolumneventargs.html) parameter as its arguments, for customizing each field in the series. The event arguments also expose event-specific properties such as column index and value member related properies about the columns.

<code-view style="height: 450px" alt="Angular Data Legend Styling"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/charts/data-chart/data-legend-styling"
                                                 github-src="charts/data-chart/data-legend-styling">
</code-view>


## API References

*   [`excludedColumns`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#excludedColumns)
*   [`excludedSeries`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#excludedSeries)
*   [`headerFormatDate`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#headerFormatDate)
*   [`headerFormatTime`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#headerFormatTime)
*   [`headerText`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#headerText)
*   [`includedColumns`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#includedColumns)
*   [`includedSeries`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#includedSeries)
*   [`labelDisplayMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#labelDisplayMode)
*   [`labelTextColor`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendstylingcolumneventargs.html#labelTextColor)
*   `StyleHeaderRow`:
*   `StyleSeriesColumn`:
*   `StyleSeriesRow`
*   `StyleSeriesRow`:
*   `StyleSummaryColumn`:
*   `StyleSummaryRow`:
*   [`summaryTitleText`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#summaryTitleText)
*   [`summaryType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#summaryType)
*   [`titleTextColor`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#titleTextColor)
*   `UnitText`
*   [`unitsTextColor`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendstylingcolumneventargs.html#unitsTextColor)
*   [`valueFormatAbbreviation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#valueFormatAbbreviation)
*   [`valueFormatCulture`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#valueFormatCulture)
*   [`valueFormatMaxFractions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#valueFormatMaxFractions)
*   [`valueFormatMaxFractions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#valueFormatMaxFractions)
*   [`valueFormatMinFractions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#valueFormatMinFractions)
*   [`valueFormatMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendcomponent.html#valueFormatMode)
*   [`valueTextColor`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_charts.igxdatalegendstylingcolumneventargs.html#valueTextColor)
