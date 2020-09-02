---
title: Angular Spreadsheet | Clipboard Operations | Infragistics
_description: Use clipboard operations such as copy, cut and paste within Infragistics' Angular spreadsheet control. View Infragistics Ignite UI for Angular spreadsheet demos today!
_keywords: Spreadsheet, clipboard operations, Ignite UI for Angular, Infragistics
mentionedTypes: ['Spreadsheet', 'SpreadsheetAction', 'SpreadsheetCommandType', 'Command']
---

# Angular Working with Clipboard

This topic explains how to perform clipboard operations on the Ignite UI for Angular spreadsheet component.

## Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="spreadsheet-clipboard-sample-iframe" src='{environment:dvDemosBaseUrl}/excel/spreadsheet-clipboard' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>


<div class="divider--half"></div>

## Dependencies

Before making use of the clipboard you will want to import the `SpreadsheetAction` enumeration:

<!-- Angular -->

```ts
import { IgxSpreadsheetComponent } from 'igniteui-angular-spreadsheet';
import { SpreadsheetAction } from 'igniteui-angular-spreadsheet';
```

<div class="divider--half"></div>

## Usage

The following code snippet shows how you can execute commands related to the clipboard in the Angular [`IgxSpreadsheetComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html) control:

```ts
public cut(): void {
    this.spreadsheet.executeAction(SpreadsheetAction.Cut);
}

public copy(): void {
    this.spreadsheet.executeAction(SpreadsheetAction.Copy);
}

public paste(): void {
    this.spreadsheet.executeAction(SpreadsheetAction.Paste);
}
```
