---
title: Spreadsheet | Grid Controls | Ignite UI for Angular | Clipboard | Infragistics |
_description: Use the Spreadsheet control to embed Excel document creation and editing experiences right into your application.
_keywords: Spreadsheet, Ignite UI for Angular, Infragistics
mentionedTypes: ['Spreadsheet']
---

## Working with Clipboard

This topic explains how to perform clipboard operations on the Ignite UI for Angular spreadsheet component.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="spreadsheet-clipboard-sample-iframe" src='{environment:dvDemosBaseUrl}/spreadsheet/spreadsheet-clipboard' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>

<div class="divider--half"></div>

### Dependencies

Before making use of the clipboard you will want to import the `SpreadsheetAction`:

<!-- Angular -->

```ts
import { IgxSpreadsheetComponent } from 'igniteui-angular-spreadsheet';
import { SpreadsheetAction } from 'igniteui-angular-spreadsheet';
```

<div class="divider--half"></div>

### Usage

The following code snippet shows how you can execute commands related to the clipboard in the [`IgxSpreadsheetComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html) control:

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
