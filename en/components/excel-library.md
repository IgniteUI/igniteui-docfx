---
title: Angular Excel Library| Data Spreadsheet and Table | Infragistics
_description: Use Infragistics' Angular excel library to work with spreadsheet data using Microsoft Excel features.  Learn how easily you can transfer data from excel to your application using Ignite UI for Angular excel library!
_keywords: Excel library, Ignite UI for Angular, Infragistics, workbook
mentionedTypes: ["Workbook", "Worksheet", "Cell", "Formula"]
---

# Angular Excel Library Overview

The Infragistics Angular Excel Library allows you to work with spreadsheet data using familiar Microsoft® Excel® spreadsheet objects like [`workbook`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.sheet.html#workbook), [`Worksheet`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheet.html), `Cell`, [`Formula`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.formula.html) and many more. The Infragistics Angular Excel Library makes it easy for you to represent the data of your application in an Excel spreadsheet as well as transfer data from Excel into your application.

## Angular Excel Library Example

<code-view style="height: 100px" alt="Angular Excel Library Example"
           data-demos-base-url="{environment:dvDemosBaseUrl}"
                    iframe-src="{environment:dvDemosBaseUrl}/excel/excel-library/overview"
                                                 github-src="excel/excel-library/overview">
</code-view>


<div class="divider--half"></div>

<!-- Angular, React, WebComponents -->

## Dependencies

When installing the excel package, the core package must also be installed.

```cmd
npm install --save igniteui-angular-core
npm install --save igniteui-angular-excel
```

## Component Modules

The Angular excel library requires the following modules:

```ts
// app.module.ts
import { IgxExcelModule } from 'igniteui-angular-excel';

@NgModule({
    imports: [
        // ...
        IgxExcelModule,
        // ...
    ]
})
export class AppModule {}
```

## Modules Implementation

The Excel Library contains 5 modules that you can use to limit bundle size of your app:

*   **IgxExcelCoreModule** – This contains the object model and much of the excel infrastructure
*   **IgxExcelFunctionsModule** – This contains the majority of the functions for formula evaluations, such as Sum, Average, Min, Max, etc. The absence of this module won’t cause any issues with formula parsing if the formula is to be calculated. For example, if you apply a formula like “=SUM(A1:A5)” and ask for the Value of the cell, then you would get a #NAME! error returned. This is not an exception throw – it’s an object that represents a particular error since formulas can result in errors.
*   **IgxExcelXlsModule** – This contains the load and save logic for xls (and related) type files – namely the Excel97to2003 related WorkbookFormats.
*   **IgxExcelXlsxModule** – This contains the load and save logic for xlsx (and related) type files – namely the Excel2007 related and StrictOpenXml WorkbookFormats.
*   **IgxExcelModule** – This references the other 4 modules and so basically ensures that all the functionality is loaded/available.

<!-- end: Angular, React, WebComponents -->

## Supported Versions of Microsoft Excel

The following is a list of the supported versions of Excel.\*\*

*   Microsoft Excel 97

*   Microsoft Excel 2000

*   Microsoft Excel 2002

*   Microsoft Excel 2003

*   Microsoft Excel 2007

*   Microsoft Excel 2010

*   Microsoft Excel 2013

*   Microsoft Excel 2016

## Load and Save Workbooks

Now that the Excel Library module is imported, next step is to load a workbook.

<!-- Angular, React, WebComponents -->

In the following code snippet, an external [ExcelUtility](excel-utility.md) class is used to save and load a [`workbook`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.sheet.html#workbook).

<!-- end: Angular, React, WebComponents -->

In order to load and save [`workbook`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.sheet.html#workbook) objects, you can utilize the save method of the actual [`workbook`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.sheet.html#workbook) object, as well as its static `Load` method.

```ts
import { Workbook } from "igniteui-angular-excel";
import { WorkbookSaveOptions } from "igniteui-angular-excel";
import { WorkbookFormat } from "igniteui-angular-excel";
import { ExcelUtility } from "ExcelUtility";

var workbook = ExcelUtility.load(file);
ExcelUtility.save(workbook, "fileName");
```

<!--Angular -->

## Managing Heap

Due to the size of the Excel Library, it's recommended to disable the source map generation.

Modify `angular.json` by setting the `vendorSourceMap` option under architect => build => options and under serve => options:

```ts
    "architect": {
        "build": {
          "builder": "...",
          "options": {
            "vendorSourceMap": false,
            "outputPath": "dist",
            "index": "src/index.html",
            "main": "src/main.ts",
            "tsConfig": "src/tsconfig.app.json",
                  // ...
          },
              // ...
        },
        "serve": {
          "builder": "...",
          "options": {
            "vendorSourceMap": false,
            "browserTarget": "my-app:build"
          },
              // ...
        },
        // ...
      }
```

<!--end:Angular-->

## API References

*   `Load`
*   `WorkbookInProcessRuntime`
*   [`Worksheet`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.worksheet.html)
*   [`workbook`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igniteui_angular_excel.sheet.html#workbook)
