---
title: Angular Spreadsheet | Activation | Infragistics
_description: Learn how to use the activation feature of the  Angular spreadsheet control which is split between the cells, panes and worksheets. Check out the Ignite UI for Angular spreadsheet demos!
_keywords: Excel Spreadsheet, activation, Ignite UI for Angular, Infragistics
mentionedTypes: ['Spreadsheet']

---

# Angular Spreadsheet Activation

The Angular Spreadsheet component exposes properties that allow you to determine the currently active cell, pane, and worksheet in the control. This is helpful as it can help you to determine where the user may be navigating or editing in the control.

## Angular Spreadsheet Activation Example

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/excel/spreadsheet-activation"
           alt="Angular Spreadsheet Activation Example"
           github-src="excel/spreadsheet/activation">
</code-view>

<div class="divider--half"></div>

## Activation Overview

The activation of the Angular [`IgxSpreadsheetComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html) control is split up between the cells, panes, and worksheets of the current [`workbook`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html#workbook) of the spreadsheet. The three "active" properties are described below:

-   [`activeCell`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html#activecell): Returns or sets the active cell in the spreadsheet. To set it, you must create a new instance of [`SpreadsheetCell`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/spreadsheetcell.html) and pass in information about that cell, such as the column and row or the string address of the cell.
-   [`activePane`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html#activepane): Returns the active pane in the currently active worksheet of the spreadsheet control.
-   [`activeWorksheet`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html#activeworksheet): Returns or sets the active worksheet in the [`workbook`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html#workbook) of the spreadsheet control. This can be set by setting it to an existing worksheet in the [`workbook`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html#workbook) attached to the spreadsheet.

## Code Snippet

The following code snippet shows setting activation of the cell and worksheet in the [`IgxSpreadsheetComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html) control:

```ts
this.spreadsheet.activeWorksheet = this.spreadsheet.workbook.worksheets(1);

this.spreadsheet.activeCell = new SpreadsheetCell("C5");
```
