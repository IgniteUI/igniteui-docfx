---
title: Angular Spreadsheet | Grid Controls | Ignite UI for Angular | Hyperlinks | Infragistics |
_description: Use the Spreadsheet control to embed Excel document creation and editing experiences right into your application.
_keywords: Spreadsheet, Ignite UI for Angular, Infragistics
---

## Spreadsheet Hyperlinks

The `IgxSpreadsheet` control allows display of pre-existing hyperlinks in your Excel workbook as well as insertion of new ones that can link to websites, file directories, and even other worksheets in the workbook.

### Demo

<div class="sample-container" style="height: 500px">
    <iframe id="spreadsheet-overview-sample-iframe" src='{environment:demosBaseUrl}/spreadsheet/spreadsheet-hyperlinks' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>

<div class="divider--half"></div>

### Hyperlinks Overview

Hyperlinks are added to the `IgxSpreadsheet` control by accessing the `Hyperlinks` collection on the worksheet that you want to place the hyperlink on. This collection has an `add` method that takes a `WorksheetHyperlink` object, where you can define the cell address, the hyperlink URL to be navigated to, the display text, and a tooltip to optionally be displayed on hover.

### Dependencies

When setting up your spreadsheet control to use hyperlinks, you will need to import the `WorksheetHyperlink` class like so:

```typescript
import { WorksheetHyperlink } from "igniteui-angular-excel/ES5/WorksheetHyperlink";
```

### Code Snippet

The following code snippet demonstrates how to add a hyperlink to the currently viewed worksheet in the `IgxSpreadsheet` control:

```typescript
this.spreadsheet.activeWorksheet.hyperlinks().add(new WorksheetHyperlink("A1", "http://www.infragistics.com", "Infragistics", "Infragistics Home Page"));
```
