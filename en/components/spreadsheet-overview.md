---
title: Angular Spreadsheet Component – Ignite UI for Angular
_description: Get flexible layouts, easy customization options & convenient Excel-like interface with Ignite UI for Angular Spreadsheet. Manage tabular data the way you want!
_keywords: Excel Spreadsheet, Ignite UI for Angular, Infragistics
mentionedTypes: ['Spreadsheet']
---

# Angular Spreadsheet Overview

The Angular Spreadsheet  (Excel viewer) component is lightweight, feature-rich and supplied with all the necessary options for operating, visualizing, and editing all types of spreadsheet data – scientific, business, financial, and more. All the information can be presented in a tabular format that feels intuitive and easy to navigate across cells, panes, and worksheets. The [`IgxSpreadsheetComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html) is complemented by flexible Excel-like interface, detailed charts, and features such as activation, cell editing, conditional formatting, styling, selection, clipboard.

## Angular Spreadsheet Example

<code-view style="height: 500px" alt="Angular Spreadsheet Example"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/excel/spreadsheet/overview"
                                                 github-src="excel/spreadsheet/overview">
</code-view>


<div class="divider--half"></div>

## Functionality

*   Features

Just like in Excel spreadsheet, you can apply filtering functionality, sorting, move cells, customization in terms of cells color, keyboard shortcuts, and add the ability to even calculate formulas.

## Spreadsheet Usage

*   Performance

The spreadsheet is compatible on all modern browsers and optimized for complex and voluminous spreadsheet models, while ensuring flawless functionality and simplicity.

*   Flexible layout and easy customization

You can easily select, add, remove, switch the features you want on/off, and configure React sheets in an instant so that it all answers the needs of end-users. There are also configurable libraries, styling and formatting alternatives, visibility options, plenty of themes to choose from.

*   Convenient Excel-like interface

Just like operating data in Excel, our spreadsheet component delivers all well-known Excel clip board operations – copy, paste, cut. You won’t need extra training or new skills in order to start using it right away. It also comes with options for sorting, full keyboard navigation, values and formulas, cell dragging, column and rows editing, filtering, number formatting, resizing. The smart and fast calculation engine powers even the most complex estimations. With no dependencies on Excel.

*   Data operations

Collect and manage scientific, business, engineering, financial and educational data. Prepare and create analysis, advanced grids, reports, data input forms, budgeting, forecasting scenarios, custom spreadsheets. All of this thanks to the comprehensive API.

*   Fast and secure data processing

With our spreadsheet, processing data is 100% safe and secure…

*   Excel and CSV import & export

With the built-in Excel import/export functionality, you can instantly load and open Excel documents and view them on-demand, add changes and save them. Also, effortlessly export your completed Excel .xlsx spreadsheets.

## Dependencies

When installing the Angular spreadsheet component, the core and excel package must also be installed.

<pre style="background:#141414;color:white;display:inline-block;padding:16x;margin-top:10px;font-family:'Consolas';border-radius:5px;width:100%">
npm install --save igniteui-angular-core
npm install --save igniteui-angular-excel
npm install --save igniteui-angular-spreadsheet
</pre>

## Component Modules

The [`IgxSpreadsheetComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html) requires the following modules:

```ts
import { IgxExcelModule } from 'igniteui-angular-excel';
import { IgxSpreadsheetModule } from 'igniteui-angular-spreadsheet';

@NgModule({
    imports: [
        // ...
        IgxExcelModule,
        IgxSpreadsheetModule,
        // ...
    ]
})
export class AppModule {}
```

<div class="divider--half"></div>

## Usage

Now that the Angular spreadsheet module is imported, next is the basic configuration of the spreadsheet.

```html
<igx-spreadsheet #spreadsheet height="500px" width="100%">
</igx-spreadsheet>
```

> \[!Note]
>
> In the following code snippet, an external [ExcelUtility](excel-utility.md) class is used to save and load a [`workbook`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html#workbook).

The following demonstrates how to load a workbook into the Angular spreadsheet

```ts
import { IgxSpreadsheetComponent } from 'igniteui-angular-spreadsheet';
import { ExcelUtility } from 'ExcelUtility';

// ...

@ViewChild("spreadsheet", { read: IgxSpreadsheetComponent })
public spreadsheet: IgxSpreadsheetComponent;

ngOnInit() {
    const excelFile = '../../assets/Sample1.xlsx';
    ExcelUtility.loadFromUrl(excelFile).then((w) => {
      this.spreadsheet.workbook = w;
    });
}
```

## API References

*   [`IgxSpreadsheetComponent`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html)
*   [`workbook`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxspreadsheetcomponent.html#workbook)
