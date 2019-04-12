---
title: Angular Spreadsheet | Grid Controls | Ignite UI for Angular | Activation | Infragistics |
_description: Use the Spreadsheet control to embed Excel document creation and editing experiences right into your application.
_keywords: Spreadsheet, Ignite UI for Angular, Infragistics
---

## Spreadsheet Activation

The `IgxSpreadsheet` control exposes properties that allow you to determine the currently active cell, pane, and worksheet in the control. This is helpful as it can help you to determine where the user may be navigating or editing in the control.

### Demo

<div class="sample-container" style="height: 500px">
    <iframe id="spreadsheet-overview-sample-iframe" src='{environment:demosBaseUrl}/spreadsheet/spreadsheet-activation' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="spreadsheet-overview-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Activation Overview

The activation of the `IgxSpreadsheet` control is split up between the cells, panes, and worksheets of the current `Workbook` of the spreadsheet. The three "active" properties are described below:

-   `ActiveCell`: Returns or sets the active cell in the spreadsheet. To set it, you must create a new instance of `SpreadsheetCell` and pass in information about that cell, such as the column and row or the string address of the cell.
-   `ActivePane`: Returns the active pane in the currently active worksheet of the spreadsheet control.
-   `ActiveWorksheet`: Returns or sets the active worksheet in the `Workbook` of the spreadsheet control. This can be set by setting it to an existing worksheet in the `Workbook` attached to the spreadsheet.

### Code Snippet

The following code snippet shows setting activation of the cell and worksheet in the `IgxSpreadsheet` control:

```typescript
this.spreadsheet.activeWorksheet = this.spreadsheet.workbook.worksheets(1);

this.spreadsheet.activeCell = new SpreadsheetCell("C5");
```
