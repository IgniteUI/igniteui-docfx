---
title: Angular Spreadsheet | Grid Controls | Ignite UI for Angular | Commands | Infragistics |
_description: Use the Spreadsheet control to embed Excel document creation and editing experiences right into your application.
_keywords: Spreadsheet, Ignite UI for Angular, Infragistics
---

## Working with Commands

The Angular Spreadsheet component allows you to perform commands for activatinig different features of the spreadsheet. This topic explains how to perform different operations with the control using commands. Many of the commands will perform their action based on the active cells, rows, or worksheets. For example two such commands are ZoomIn and ZoomOut. See the SpreadsheetAction enum for a full list.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="spreadsheet-commands-sample-iframe" src='{environment:demosBaseUrl}/spreadsheet/spreadsheet-commands' width="100%" height="100%" seamless frameBorder="0" onload="onXPlatSampleIframeContentLoaded(this);"></iframe>
</div>

<div class="divider--half"></div>

### Dependencies

Before making use of the commands you will want to import the `SpreadsheetAction`

```typescript
import { IgxSpreadsheetComponent } from "igniteui-angular-spreadsheet/ES5/igx-spreadsheet-component";
import { SpreadsheetAction } from "igniteui-angular-spreadsheet/ES5/SpreadsheetAction";
```

<div class="divider--half"></div>

### Usage

The following snippet shows how you can setup the data validation rules

```typescript
@ViewChild("spreadsheet", { read: IgxSpreadsheetComponent })
public spreadsheet: IgxSpreadsheetComponent;

---

public zoomIn(): void {
    this.spreadsheet.executeAction(SpreadsheetAction.ZoomIn);
}

public zoomOut(): void {
    this.spreadsheet.executeAction(SpreadsheetAction.ZoomOut);
}
```
