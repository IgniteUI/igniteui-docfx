---
title: Working with Charts
_description: The Ignite UI for Excel Library component allows for the addition of charts to show visual representations of data trends across regions of cells in a worksheet.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Excel Library, Angular Excel Library Example, Angular Excel Library Component, Angular Excel Engine
---
## Excel Library Working with Charts

This topic demonstrates how to add a worksheet chart to an Excel worksheet (".xlsx) programmatically, using the Angular Excel Library to show visual representations of data trends across regions of cells in a worksheet.

### Demo

<!--TODO add when in a sample is in Samples Browser
<!-- <div class="sample-container" style="height: 550px">
    <iframe id="excel-library-overview-sample-iframe" src='{environment:demosBaseUrl}/excel-library-overview-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="excel-library-overview-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div> -->

<div class="divider--half"></div>

### Usage
In order to add a chart to a worksheet, you must use the addChart method of the worksheet's shapes collection. In this method, you can specify the chart type that you wish to use,the top-left cell, the bottom-right cell, and the percentages of those cells that you wish for the chart to take up.

The addChart method returns the worksheet chart element to be added to the worksheet. Once you have this, you can use the setSourceData method on the chart to set a cell address of the region of worksheet cells that you wish to use as a data source, as well as whether or not you want to switch the mapping of columns and rows to the X and Y axis.

There are over 70 supported chart types, including Line, Area, Column, and Pie.

The following code demonstrates how to use the Excel charting feature:

```typescript
var chart = ws.shapes().addChart(ChartType.ColumnClustered, 
      ws.rows(0).cells(0), { x: 0, y: 0 },
      ws.rows(0).cells(headers.length - 1), { x: 100, y: 100 });

chart.setSourceData(table.wholeTableRegion.toString(), true);
```


