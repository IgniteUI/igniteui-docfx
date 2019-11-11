---
title: Excel Library| Data Spreadsheet | Ignite UI for Angular | Infragistics
_description: Use the Excel Library to work with spreadsheet data using Microsoft Excel features. Easily transfer data from excel to your application.
_keywords: Excel library, Ignite UI for Angular, Infragistics
mentionedTypes: ['Workbook']
---

## Working with Sparklines

The Infragistics Angular Excel Library has support for adding sparklines to an Excel Worksheet. These can be used to show simple visual representations of data trends across a region of cells of data in your worksheet. For example, if you wanted to see your Excel data across a particular cell region visualized as a simple column or line sparkline chart, this feature can help you to achieve that.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="excel-library-overview-sample-iframe" src='{environment:dvDemosBaseUrl}/excel-library/working-with-sparklines' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>

<div class="divider--half"></div>

### Supported Sparklines

The following is a list of the supported predefined sparkline types.

-   Line
-   Column
-   Stacked (Win/Loss)

The following code demonstrates how to programmtically add Sparklines to a Worksheet via the sparklineGroups collection:

```ts
var workbook: Workbook;
var sheet1 = workbook.worksheets().add("Sparklines");
var sheet2 = workbook.worksheets().add("Data");
sheet1.sparklineGroups().add(SparklineType.Line, "Sparklines!A1:A1", "Data!A2:A11");
sheet1.sparklineGroups().add(SparklineType.Column, "Sparklines!B1:B1", "Data!A2:A11");
workbook.save(workbook, "Sparklines.xlsx");
```

```ts
 let workbook: Workbook;
 let sheet1 = workbook.worksheets().add("Sparklines");
 let sheet2 = workbook.worksheets().add("Data");
 sheet1.sparklineGroups().add(SparklineType.Line, "Sparklines!A1:A1", "Data!A2:A11");
 sheet2.sparklineGroups().add(SparklineType.Column, "Sparklines!B1:B1", "Data!A2:A11");
 workbook.save(workbook, "Sparklines.xlsx");
 
```
