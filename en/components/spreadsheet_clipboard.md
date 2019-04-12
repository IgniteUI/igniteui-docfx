---
title: Angular Spreadsheet | Grid Controls | Ignite UI for Angular | Clipboard | Infragistics |
_description: Use the Spreadsheet control to embed Excel document creation and editing experiences right into your application.
_keywords: Spreadsheet, Ignite UI for Angular, Infragistics
---

## Working with Clipboard

This topic explains how to perform clipboard operations on the Ignite UI for Angular spreadsheet component.

### Demo

<div class="sample-container" style="height: 500px">
    <iframe id="spreadsheet-clipboard-sample-iframe" src='{environment:demosBaseUrl}/spreadsheet/spreadsheet-clipboard' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>

<div class="divider--half"></div>

### Dependencies

Before making use of the clipboard you will want to import the SpreadsheetAction

```typescript
import { IgxSpreadsheetComponent } from "igniteui-angular-spreadsheet/ES5/igx-spreadsheet-component";
import { SpreadsheetAction } from "igniteui-angular-spreadsheet/ES5/SpreadsheetAction";
```

<div class="divider--half"></div>

### Usage

The following snippt shows how you can setup the data validation rules

```typescript
@ViewChild("spreadsheet", { read: IgxSpreadsheetComponent })
public spreadsheet: IgxSpreadsheetComponent;

---

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
