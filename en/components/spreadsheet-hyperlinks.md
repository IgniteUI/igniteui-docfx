---
title: Angular Spreadsheet | Hyperlinks | Infragistics
_description: Use Infragistics' Angular spreadsheet control to display hyperlinks in the Excel workbook, which can link to websites, file directories and other worksheets. View Ignite UI for Angular spreadsheet tutorials!
_keywords: Excel Spreadsheet, hyperlinks, Ignite UI for Angular, Infragistics
mentionedTypes: ["Spreadsheet"]
---

# Angular Spreadsheet Hyperlinks

The Angular Spreadsheet component allows display of pre-existing hyperlinks in your Excel workbook as well as insertion of new ones that can link to websites, file directories, and even other worksheets in the workbook.

## Angular Spreadsheet Hyperlinks Example

<code-view style="height: 500px" alt="Angular Spreadsheet Hyperlinks Example"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/excel/spreadsheet/hyperlinks"
                                                 github-src="excel/spreadsheet/hyperlinks">
</code-view>


<div class="divider--half"></div>

## Hyperlinks Overview

Hyperlinks are added to the [`IgxSpreadsheetComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_spreadsheet.igxspreadsheetcomponent.html) control by accessing the `Hyperlinks` collection on the worksheet that you want to place the hyperlink on. This collection has an `Add` method that takes a [`WorksheetHyperlink`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheethyperlink.html) object, where you can define the cell address, the hyperlink URL to be navigated to, the display text, and a tooltip to optionally be displayed on hover.

## Dependencies

When setting up your Angular spreadsheet control to use hyperlinks, you will need to import the [`WorksheetHyperlink`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheethyperlink.html) class like so:

<!-- Angular -->

```ts
import { WorksheetHyperlink } from 'igniteui-angular-excel';
```

## Code Snippet

The following code snippet demonstrates how to add a hyperlink to the currently viewed worksheet in the Angular [`IgxSpreadsheetComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_spreadsheet.igxspreadsheetcomponent.html) control:

```ts
this.spreadsheet.activeWorksheet.hyperlinks().add(new WorksheetHyperlink("A1", "http://www.infragistics.com", "Infragistics", "Infragistics Home Page"));
```

## API References

*   `Hyperlinks`
*   [`IgxSpreadsheetComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_spreadsheet.igxspreadsheetcomponent.html)
*   [`WorksheetHyperlink`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheethyperlink.html)
