---
title: Angular Excel Library| Working with Sparklines | Infragistics
_description: Use sparkline charts in Infragistics' Angular excel library to visual data trends across a region of cells in your worksheet. View Ignite UI for Angular excel engine tutorials!
_keywords: Excel library, sparkline chart, Ignite UI for Angular, Infragistics
mentionedTypes: ['Workbook']
---

# Angular Working with Sparklines

The Infragistics Angular Excel Library has support for adding sparklines to an Excel Worksheet. These can be used to show simple visual representations of data trends across a region of cells of data in your worksheet. For example, if you wanted to see your Excel data across a particular cell region visualized as a simple column or line sparkline chart, this feature can help you to achieve that.

## Angular Working with Sparklines Example

<code-view style="height: 500px" 
           data-demos-base-url="{environment:dvDemosBaseUrl}" 
           iframe-src="{environment:dvDemosBaseUrl}/excel/excel-library-working-with-sparklines" 
           alt="Angular Working with Sparklines Example" 
           github-src="excel/excel-library/working-with-sparklines">
</code-view>

<div class="divider--half"></div>

## Supported Sparklines

The following is a list of the supported predefined sparkline types.

-   Line
-   Column
-   Stacked (Win/Loss)

The following code demonstrates how to programmatically add Sparklines to a Worksheet via the sparklineGroups collection:

```ts
var workbook: Workbook;
var sheet1 = workbook.worksheets().add("Sparklines");
var sheet2 = workbook.worksheets().add("Data");
sheet1.sparklineGroups().add(SparklineType.Line, "Sparklines!A1:A1", "Data!A2:A11");
sheet1.sparklineGroups().add(SparklineType.Column, "Sparklines!B1:B1", "Data!A2:A11");
workbook.save(workbook, "Sparklines.xlsx");
```
