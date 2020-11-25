---
title: Angular Spreadsheet | Chart Adapter | Infragistics
_description: Display charts such as column, line and area, in the Infragistics' Angular spreadsheet control. Learn how to integrate charts in Ignite UI for Angular spreadsheet!
_keywords: Excel Spreadsheet, chart adapter, Ignite UI for Angular, Infragistics
mentionedTypes: ['Spreadsheet', 'Worksheet', 'WorksheetShapeCollection', 'WorksheetChart']
---

# Angular Spreadsheet Chart Adapter

The Angular Spreadsheet component allows displaying charts in your [`IgxSpreadsheetComponent`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html).

## Angular Spreadsheet Chart Adapter Example

<div class="sample-container loading" style="height: 500px">
    <iframe id="spreadsheet-adapter-iframe" src='{environment:dvDemosBaseUrl}/excel/spreadsheet-adapter-chart' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);" alt="Angular Spreadsheet Chart Adapter Example"></iframe>
</div>


<div class="divider--half"></div>

## Chart Adapter Overview

Using [`chartAdapter`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html#chartadapter) you can display the charts in the spreadsheet. The spreadsheet chart adapters creates and initializes chart elements for the spreadsheet based on a Infragistics.Documents.Excel.WorksheetChart instance.

In order to add a WorksheetChart to a worksheet, you must use the [`addChart`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheetshapecollection.html#addchart) method of the worksheet’s Shapes collection.You can find more detail of adding charts in Excel below.

Here are the steps by step description :

1.  Add the SpreadsheetChartAdapterModule reference to your project
2.  Create an instance of a SpreadsheetChartAdapter class assigning it to the Spreadsheet
3.  Run your app and load a worksheet containing a chart.

## Supported Charts Types

There are over 35 chart types supported by the Spreadsheet ChartAdapters including, Line, Area, Column, and Doughnut. See the full list here:

-   Column Charts
    -   Clustered column
    -   Stacked column
    -   100% stacked column
-   Line Charts
    -   Line
    -   Line with Markers
    -   Stacked line
    -   Stacked line with markers
    -   100% stacked line
    -   100% stacked line with markers
-   Pie Charts
-   Doughnut Charts
-   Bar Charts
    -   Clustered bar
    -   Stacked bar
    -   100% stacked bar
    -   Area Charts
    -   Area
    -   Stacked area
    -   100% stacked area
-   XY (Scatter) and Bubble Charts
    -   Scatter (with Marker only)
    -   Scatter with smooth lines
    -   Scatter with smooth lines and markers
    -   Scatter with straight lines
    -   Scatter with straight lines and markers
    -   Bubble (without effects)
    -   Bubble3DEffect
-   Stock Charts
    -   High-low-close
    -   Open-high-low-close
    -   Volume-high-low-close
    -   Volume-open-high-low-close
-   Radar Charts
    -   Radar without markers
    -   Radar with markers
    -   Filled Radar
-   Combo Charts
    -   Column and line chart sharing xAxis
    -   Column and line chart and 2nd xAxis
    -   Stacked Area and Column
    -   Custom Combination

## Dependencies

> [!NOTE]
>
> In the following code snippet, an external [ExcelUtility](excel-utility.md) class is used to save and load a [`workbook`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html#workbook).

When setting up your Angular spreadsheet control to add charts, you will need to import the [`SpreadsheetChartAdapter`]({environment:dvapibaseurl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/spreadsheetchartadapter.html) class like so:

```ts
import { IgxSpreadsheetChartAdapterModule } from 'igniteui-angular-spreadsheet-chart-adapter';
import { SpreadsheetChartAdapter } from 'igniteui-angular-spreadsheet-chart-adapter';

import { ChartTitle, ChartType, FormattedString, Workbook } from 'igniteui-angular-excel';
import { ExcelUtility } from "ExcelUtility";
import { Worksheet } from 'igniteui-angular-excel';
import { WorksheetCell } from 'igniteui-angular-excel';
```

## Code Snippet

The following code snippet demonstrates how to add charts to the currently viewed worksheet in the `XamSpreadsheet` control:

```typescript
this.spreadsheet.chartAdapter = new SpreadsheetChartAdapter();

ExcelUtility.loadFromUrl(process.env.PUBLIC_URL + "/ExcelFiles/ChartData.xlsx").then((w) => {
    this.spreadsheet.workbook = w;

    const sheet: Worksheet = this.spreadsheet.workbook.worksheets(0);

    sheet.defaultColumnWidth = 500 * 20;
    sheet.rows(0).height = 150 * 20;

    const cell1: WorksheetCell = sheet.getCell("A1");
    const cell2: WorksheetCell = sheet.getCell("B1");
    const cell3: WorksheetCell = sheet.getCell("C1");
    const cell4: WorksheetCell = sheet.getCell("D1");

    const dataCellAddress = "A4:D6";

    const chart1 = sheet.shapes().addChart(ChartType.Line, cell1, { x: 0, y: 0 }, cell1, { x: 100, y: 100 });

    const title: Angular ChartTitle = new ChartTitle();
    title.text = new FormattedString("Line Chart");
    chart1.chartTitle = title;

    chart1.setSourceData(dataCellAddress, true);

    const chart2 = sheet.shapes().addChart(ChartType.ColumnClustered, cell2, { x: 0, y: 0 }, cell2, { x: 100, y: 100 });

    const title2: ChartTitle = new ChartTitle();
    title2.text = new FormattedString("Column Chart");
    chart2.chartTitle = title2;

    chart2.setSourceData(dataCellAddress, true);

    const chart3 = sheet.shapes().addChart(ChartType.Area, cell3, { x: 0, y: 0 }, cell3, { x: 100, y: 100 });

    const title3: ChartTitle = new ChartTitle();
    title3.text = new FormattedString("Area Chart");
    chart3.chartTitle = title3;

    chart3.setSourceData(dataCellAddress, true);

    const chart4 = sheet.shapes().addChart(ChartType.Pie, cell4, { x: 0, y: 0 }, cell4, { x: 100, y: 100 });

    const title4: ChartTitle = new ChartTitle();
    title4.text = new FormattedString("Pie Chart");
    chart4.chartTitle = title4;

    chart4.setSourceData(dataCellAddress, true);
});
```
