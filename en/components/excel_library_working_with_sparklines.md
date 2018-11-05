---
title: Excel Library Component - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Excel Library component with Sparkline support.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Excel Library, Angular Excel Library Example, Angular Excel Library Component, Angular Excel Engine, Sparkline
---
## Excel Library Working with Sparklines

This topic demonstrates how to add sparklines to Excel® Worksheet (".xlsx), programmatically, using the Infragistics Excel Library to show visual representations of data trends. Sparklines serve as quick and easy solution to visualize variations in your data. Sparklines are placed in cells that can be positioned anywhere within a worksheet and compliments the data it’s adjacent to. 

### Demo
<!-- <div class="sample-container" style="height: 550px">
    <iframe id="excel-library-overview-sample-iframe" src='{environment:demosBaseUrl}/excel-library-working-with-sparklines' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="excel-library-overview-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>--> 

<div class="divider--half"></div>

### Supported Sparklines
The following is a list of the supported predefined sparkline types.

-  Line
-  Column
-  Win/Loss

The following code demonstrates how to programmtically add Sparklines to a Worksheet via the sparklineGroups collection:

```typescript
var workbook: Workbook;
var sheet1 = workbook.worksheets().add("'Sparklines");
var sheet2 = workbook.worksheets().add("Data");
sheet1.sparklineGroups().add($.ig.excel.SparklineType.Line, "Sparklines!A1:A1", "Data!A2:A11"); 
sheet1.sparklineGroups().add($.ig.excel.SparklineType.Column, "Sparklines!B1:B1", "Data!A2:A11"); 
workbook.save(workbook, "Sparklines.xlsx");

```