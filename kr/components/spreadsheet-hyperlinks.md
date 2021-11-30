---
title: Angular Spreadsheet | Grid Controls | Hyperlinks | Infragistics |
_description: Use the Spreadsheet control to embed Excel document creation and editing experiences right into your application.
_keywords: Spreadsheet, Ignite UI for Angular, Infragistics
mentionedTypes: ['Spreadsheet']
---

# Angular Spreadsheet Hyperlinks

The Angular Spreadsheet component allows display of pre-existing hyperlinks in your Excel workbook as well as insertion of new ones that can link to websites, file directories, and even other worksheets in the workbook.

## Demo

<code-view style="height: 500px"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
           iframe-src="{environment:dvDemosBaseUrl}/excel/spreadsheet-hyperlinks"
           github-src="excel/spreadsheet/hyperlinks">
</code-view>

<div class="divider--half"></div>

## Hyperlinks Overview

Hyperlinks are added to the [`IgxSpreadsheetComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html) control by accessing the `Hyperlinks` collection on the worksheet that you want to place the hyperlink on. This collection has an `Add` method that takes a [`WorksheetHyperlink`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheethyperlink.html) object, where you can define the cell address, the hyperlink URL to be navigated to, the display text, and a tooltip to optionally be displayed on hover.

## Dependencies

When setting up your spreadsheet control to use hyperlinks, you will need to import the [`WorksheetHyperlink`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/worksheethyperlink.html) class like so:

```ts
import { WorksheetHyperlink } from 'igniteui-angular-excel';
```

```ts
import { WorksheetHyperlink } from 'igniteui-react-excel';
```

## Code Snippet

The following code snippet demonstrates how to add a hyperlink to the currently viewed worksheet in the [`IgxSpreadsheetComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html) control:

```ts
this.spreadsheet.activeWorksheet.hyperlinks().add(new WorksheetHyperlink("A1", "http://www.infragistics.com", "Infragistics", "Infragistics Home Page"));
```
