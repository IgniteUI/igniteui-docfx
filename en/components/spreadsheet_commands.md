---
title: Angular Spreadsheet | Grid Controls | Ignite UI for Angular | Commands | Infragistics |
_description: Use the Spreadsheet control to embed Excel document creation and editing experiences right into your application.
_keywords: Spreadsheet, Ignite UI for Angular, Infragistics
---

## Working with Commands

This topic explains how to perform different operations with the control using commands.

### Demo

<div class="sample-container" style="height: 500px">
    <iframe id="spreadsheet-commands-sample-iframe" src='{environment:demosBaseUrl}/spreadsheet/spreadsheet-commands' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="spreadsheet-commands-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div>

<div class="divider--half"></div>

### Dependencies

Before making use of the commands you will want to import the SpreadsheetAction

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

public zoomIn(): void {
    this.spreadsheet.executeAction(SpreadsheetAction.ZoomIn);
}

public zoomOut(): void {
    this.spreadsheet.executeAction(SpreadsheetAction.ZoomOut);
}
```
