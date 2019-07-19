---
title: Spreadsheet | Grid Controls | Ignite UI for Angular | Activation | Infragistics |
_description: Use the Spreadsheet control to embed Excel document creation and editing experiences right into your application.
_keywords: Spreadsheet, Ignite UI for Angular, Infragistics
mentionedTypes: ['Spreadsheet']

---

## Spreadsheet Activation

The Angular Spreadsheet component exposes properties that allow you to determine the currently active cell, pane, and worksheet in the control. This is helpful as it can help you to determine where the user may be navigating or editing in the control.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="spreadsheet-overview-sample-iframe" src='{environment:demosBaseUrl}/spreadsheet/spreadsheet-activation' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>

<div class="divider--half"></div>

### Activation Overview

The activation of the [`IgxSpreadsheetComponent`](spreadsheet_activation.md) control is split up between the cells, panes, and worksheets of the current [`workbook`](spreadsheet_activation.md) of the spreadsheet. The three "active" properties are described below:

-   [`activeCell`](spreadsheet_activation.md): Returns or sets the active cell in the spreadsheet. To set it, you must create a new instance of [`SpreadsheetCell`](spreadsheet_activation.md) and pass in information about that cell, such as the column and row or the string address of the cell.
-   [`activePane`](spreadsheet_activation.md): Returns the active pane in the currently active worksheet of the spreadsheet control.
-   [`activeWorksheet`](spreadsheet_activation.md): Returns or sets the active worksheet in the [`workbook`](spreadsheet_activation.md) of the spreadsheet control. This can be set by setting it to an existing worksheet in the [`workbook`](spreadsheet_activation.md) attached to the spreadsheet.

### Code Snippet

The following code snippet shows setting activation of the cell and worksheet in the [`IgxSpreadsheetComponent`](spreadsheet_activation.md) control:

```ts
this.spreadsheet.activeWorksheet = this.spreadsheet.workbook.worksheets(1);

this.spreadsheet.activeCell = new SpreadsheetCell("C5");
```
