---
title: Angular Chart Data Legend | Data Visualization Tools | Infragistics
_description: Use Infragistics Ignite UI for Angular chart with the data legend!
_keywords: Angular charts, chart legend, legend, legend types, Ignite UI for Angular, Infragistics
mentionedTypes: ["XamCategoryChart", "XamDataLegend", "Series"]
namespace: Infragistics.Controls.Charts
---

# Angular Data Legend

In Ignite UI for Angular, the [`IgxDataLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html) is a component that works much like the [`IgxLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxlegendcomponent.html), but it shows values of series and provides many configuration properties for filtering series rows and values columns, styling and formatting values. This legend updates when moving the mouse inside of the plot area of the [`IgxDataChartComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatachartcomponent.html) and has a persistent state that remembers the last hovered point when the user's mouse pointer exits the plot area. It displays this content using a set of three type of rows and four types of columns.

## Angular Data Legend Rows

The rows of the [`IgxDataLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html) include the header row, series row(s), and the summary row.

The header row displays the axis label of the point that is hovered, and can be changed using the [`headerText`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html#headertext) property.

The series row can actually be a set of rows corresponding to each series plotted in the chart. These rows will display the legend badge, series title, actual/abbreviated value of the the series, and abbreviation symbol and unit, if specified.

Finally, there is a summary row that displays the total of all series values. The default summary title can be changed using the [`summaryTitleText`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html#summarytitletext) property of the legend. Also, you can use the [`summaryType`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html#summarytype) property to customize whether you display the Total, Min, Max, or Average of series values in the summary row.

The following example demonstrates the [`IgxDataLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html) with a summary applied:

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-data-legend"
           alt="Angular Category Chart Data Legend Example"
           github-src="charts/category-chart/data-legend">
</code-view>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
      <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-angular-examples/tree/master/samples/charts/category-chart/data-legend?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/app.component.html" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0rem; max-width: 100%;" alt="Code Sandbox" src="https://static.infragistics.com/xplatform/images/browsers/open-sandbox.png"/>
        </a>
        <a target="_blank" href="https://stackblitz.com/github/IgniteUI/igniteui-angular-examples/tree/master/samples/charts/category-chart/data-legend?file=src%2Fapp.component.html" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0rem; max-width: 100%;" alt="Stackblitz" src="https://static.infragistics.com/xplatform/images/browsers/open-stackblitz.png"/>
        </a>
    </body>
</html>

## Angular Data Legend Columns

The columns of the [`IgxDataLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html) include the title, label, value, and units columns. Each series in the chart can have multiple columns for label, value, and units depending on the [`includedColumns`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html#includedcolumns) or [`excludedColumns`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html#excludedcolumns) collections of the legend.

The title column displays legend badges and series titles, which come from the [`title`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html#title) property of the different [`IgxSeriesComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxseriescomponent.html) plotted in the chart.

The label column displays the name or abbreviation of the different property paths in the [`includedColumns`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html#includedcolumns) or [`excludedColumns`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html#excludedcolumns) collections of the legend.

The value column displays series values as abbreviated text which can be formatted using the [`valueFormatAbbreviation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html#valueformatabbreviation) property to apply the same abbreviation for all numbers by setting this property to `Auto` or `Shared`. Alternatively, a user can select other abbreviations such as `Independent`, `Kilo`, `Million`, etc. Precision of abbreviated values is controlled using the [`valueFormatMinFractions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html#valueformatminfractions) and [`valueFormatMaxFractions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html#valueformatmaxfractions) for minimum and maximum digits, respectively.

The units column displays an abbreviation symbol and/or unit text, which can be set either on the [`IgxDataLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html) by setting the `UnitText` for all columns or using the the following properties on each series in the chart:

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

The columns included in the [`includedColumns`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html#includedcolumns) and [`excludedColumns`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html#excludedcolumns) collections generally correspond to the value paths of your underlying data items, but the financial series has the option to include some special ones in addition to the `High`, `Low`, `Open`, and `Close` paths that are required for the financial series to plot correctly. You have the ability to show `TypicalPrice`, `Change`, and `Volume` options within the legend.

The following example demonstrates a [`IgxDataLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html) with added columns of Open, High, Low, Close, and Change:

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-data-legend"
           alt="Angular Financial Chart Data Legend Example"
           github-src="charts/financial-chart/data-legend">
</code-view>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
      <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-angular-examples/tree/master/samples/charts/financial-chart/data-legend?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/app.component.html" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0rem; max-width: 100%;" alt="Code Sandbox" src="https://static.infragistics.com/xplatform/images/browsers/open-sandbox.png"/>
        </a>
        <a target="_blank" href="https://stackblitz.com/github/IgniteUI/igniteui-angular-examples/tree/master/samples/charts/financial-chart/data-legend?file=src%2Fapp.component.html" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0rem; max-width: 100%;" alt="Stackblitz" src="https://static.infragistics.com/xplatform/images/browsers/open-stackblitz.png"/>
        </a>
    </body>
</html>

## Angular Data Legend Styling

The [`IgxDataLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html) provides properties for styling each type of column. Each of these properties begins with Title, Label, Value, or Units, and you can style the text's color, font, and margin. For example, if you wanted to set the text color of each of these, you would set the [`titleTextColor`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html#titletextcolor), [`labelTextColor`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html#labeltextcolor), [`valueTextColor`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html#valuetextcolor), and [`unitsTextColor`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html#unitstextcolor) properties.

The following example demonstrates a utilization of the styling properties mentioned above:

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-data-legend-styling-props"
           alt="Angular Data Legend Styling Example"
           github-src="charts/financial-chart/data-legend-styling-props">
</code-view>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
      <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-angular-examples/tree/master/samples/charts/financial-chart/data-legend-styling-props?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/app.component.html" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0rem; max-width: 100%;" alt="Code Sandbox" src="https://static.infragistics.com/xplatform/images/browsers/open-sandbox.png"/>
        </a>
        <a target="_blank" href="https://stackblitz.com/github/IgniteUI/igniteui-angular-examples/tree/master/samples/charts/financial-chart/data-legend-styling-props?file=src%2Fapp.component.html" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0rem; max-width: 100%;" alt="Stackblitz" src="https://static.infragistics.com/xplatform/images/browsers/open-stackblitz.png"/>
        </a>
    </body>
</html>

## Angular Data Legend Value Formatting

The [`IgxDataLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html) provides automatic abbreviation of large numbers using its [`valueFormatAbbreviation`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html#valueformatabbreviation) property. This adds a multiplier in the units column such as kilo, million, billion, etc.

You can customize the number of fractional digits that are displayed by setting the [`valueFormatMinFractions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html#valueformatminfractions) and [`valueFormatMaxFractions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html#valueformatmaxfractions). This will allow you to determine the minimum and maximum number of digits that appear after the decimal point, respectively.

The following example demonstrates a [`IgxDataLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html) with the [`valueFormatMinFractions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html#valueformatminfractions) and [`valueFormatMaxFractions`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html#valueformatmaxfractions) set:

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/category-chart-data-legend-formatting-decimals"
           alt="Angular Data Legend Formatting Decimals Example"
           github-src="charts/category-chart/data-legend-formatting-decimals">
</code-view>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
      <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-angular-examples/tree/master/samples/charts/category-chart/data-legend-formatting-decimals?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/app.component.html" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0rem; max-width: 100%;" alt="Code Sandbox" src="https://static.infragistics.com/xplatform/images/browsers/open-sandbox.png"/>
        </a>
        <a target="_blank" href="https://stackblitz.com/github/IgniteUI/igniteui-angular-examples/tree/master/samples/charts/category-chart/data-legend-formatting-decimals?file=src%2Fapp.component.html" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0rem; max-width: 100%;" alt="Stackblitz" src="https://static.infragistics.com/xplatform/images/browsers/open-stackblitz.png"/>
        </a>
    </body>
</html>

## Angular Data Legend Value Mode

You have the ability to change the default decimal display of values within the [`IgxDataLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html) to be currency by changing the [`valueFormatMode`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html#valueformatmode) property of the control. The [`IgxDataLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html) also exposes the ability to modify the culture of the displayed currency symbol by using its [`valueFormatCulture`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html#valueformatculture) property and setting it to its corresponding culture tag.

For example, the following example demonstrates a chart with the [`valueFormatCulture`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html#valueformatculture) set to "en-GB":

<code-view style="height: 450px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/charts/financial-chart-data-legend-formatting-currency"
           alt="Angular Formatting Currency Example"
           github-src="charts/financial-chart/data-legend-formatting-currency">
</code-view>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
      <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-angular-examples/tree/master/samples/charts/financial-chart/data-legend-formatting-currency?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/app.component.html" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0rem; max-width: 100%;" alt="Code Sandbox" src="https://static.infragistics.com/xplatform/images/browsers/open-sandbox.png"/>
        </a>
        <a target="_blank" href="https://stackblitz.com/github/IgniteUI/igniteui-angular-examples/tree/master/samples/charts/financial-chart/data-legend-formatting-currency?file=src%2Fapp.component.html" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0rem; max-width: 100%;" alt="Stackblitz" src="https://static.infragistics.com/xplatform/images/browsers/open-stackblitz.png"/>
        </a>
    </body>
</html>

## Angular Data Legend Styling Events

The [`IgxDataLegendComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendcomponent.html) has three events that fire when rendering their corresponding row. These events are listed below with a description of what they are designed to be used for:

-   `StyleHeaderRow`: This event fires once when rendering the header row.
-   `StyleSeriesRow`: This event fires once for each series row, which allows conditional styling of the values of the series.
-   `StyleSeriesColumn`: This event fires once for each series column, which allows conditional styling of the different columns for the series in the chart.
-   `StyleSummaryRow`: This event fires once when rendering the summary row.
-   `StyleSummaryColumn`: This event fires once when rendering the summary column.

Each of the above events exposes a [`IgxDataLegendStylingRowEventArgs`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxdatalegendstylingroweventargs.html) parameter as its arguments, which lets you customize each item's text, text color, and the overall visibility of the row. The event arguments also expose event-specific properties. For example, since the `StyleSeriesRow` event fires for each series, the event arguments will return the series index and series title for the row that represents the series.
