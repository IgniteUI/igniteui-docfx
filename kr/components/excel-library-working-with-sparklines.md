---
title: Angular Excel Library Component - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Excel Library component with Sparkline support.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Excel Library, Angular Excel Library Example, Angular Excel Library Component, Angular Excel Engine, Sparkline
_language: kr
---

# Angular Working with Sparklines

The Infragistics Excel Library has support for adding sparklines to an Excel Worksheet. These can be used to show simple visual representations of data trends across a region of cells of data in your worksheet. For example, if you wanted to see your Excel data across a particular cell region visualized as a simple column or line sparkline chart, this feature can help you to achieve that.

## Demo

<code-view style="height: 500px" alt="Angular excel library working with sparklines"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/excel/excel-library/working-with-sparklines"
                                                 github-src="excel/excel-library/working-with-sparklines">
</code-view>


<div class="divider--half"></div>

## Supported Sparklines

The following is a list of the supported predefined sparkline types.

*   Line
*   Column
*   Stacked (Win/Loss)

The following code demonstrates how to programmatically add Sparklines to a Worksheet via the sparklineGroups collection:

```ts
var workbook: Workbook;
var sheet1 = workbook.worksheets().add("Sparklines");
var sheet2 = workbook.worksheets().add("Data");
sheet1.sparklineGroups().add(SparklineType.Line, "Sparklines!A1:A1", "Data!A2:A11");
sheet1.sparklineGroups().add(SparklineType.Column, "Sparklines!B1:B1", "Data!A2:A11");
workbook.save(workbook, "Sparklines.xlsx");

```
