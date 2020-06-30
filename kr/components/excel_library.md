---
title: Excel Library Component - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Excel Library component ... TODO.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Excel Library, Angular Excel Library Example, Angular Excel Library Component, Angular Excel Engine
---

## Excel Library

The Infragistics Excel Library allows you to work with spreadsheet data using familiar Microsoft® Excel® spreadsheet objects like Workbooks, Worksheets, Cells, Formulas and many more. The Infragistics Excel Library makes it easy for you to represent the data of your application in an Excel spreadsheet as well as transfer data from Excel into your application.

### Demo

<div class="sample-container loading" style="height: 500px">
    <iframe id="excel-library-overview-sample-iframe" src='{environment:dvDemosBaseUrl}/excel-library/operations-on-workbooks' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>

<div class="divider--half"></div>

### Dependencies

When installing the excel package, the core package must also be installed.

-   **npm install --save igniteui-angular-core**
-   **npm install --save igniteui-angular-excel**

The Excel Library is exported as an `NgModule`, you need to import the [`IgxExcelModule`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/igxexcelmodule.html) inside your `AppModule`:

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

### The Excel Library Contains 5 Modules

-   **IgxExcelCoreModule** – This contains the object model and much of the excel infrastructure
-   **IgxExcelFunctionsModule** – This contains the majority of the functions for formula evaluations, such as Sum, Average, Min, Max, etc. The absence of this module won’t cause any issues with formula parsing if the formula is to be calculated. For example, if you apply a formula like “=SUM(A1:A5)” and ask for the Value of the cell, then you would get a #NAME! error returned. This is not an exception throw – it’s an object that represents a particular error since formulas can result in errors.
-   **IgxExcelXlsModule** – This contains the load and save logic for xls (and related) type files – namely the Excel97to2003 related WorkbookFormats.
-   **IgxExcelXlsxModule** – This contains the load and save logic for xlsx (and related) type files – namely the Excel2007 related and StrictOpenXml WorkbookFormats.
-   **IgxExcelModule** – This references the other 4 modules and so basically ensures that all the functionality is loaded/available.

### Supported Versions of Microsoft Excel

The following is a list of the supported versions of Excel.\*\*

-   Microsoft Excel 97

-   Microsoft Excel 2000

-   Microsoft Excel 2002

-   Microsoft Excel 2003

-   Microsoft Excel 2007

-   Microsoft Excel 2010

-   Microsoft Excel 2013

-   Microsoft Excel 2016

> [!NOTE]
> The Excel Library does not support the Excel Binary Workbook (.xlsb) format at this time.

### Load and Save Workbooks

Now that the Excel Library module is imported, next step is to load a workbook.

> [!NOTE]
>
> In the following code snippet, an external [ExcelUtility](excel_utility.md) class is used to save and load a [`Workbook`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbook.html).

In order to load and save [`Workbook`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbook.html) objects, you can utilize the save method of the actual [`Workbook`]({environment:dvApiBaseUrl}/products/ignite-ui-angular/api/docs/typescript/latest/classes/workbook.html) object, and the static `Workbook.load` method.

```ts
import { Workbook } from "igniteui-angular-excel";
import { WorkbookSaveOptions } from "igniteui-angular-excel";
import { WorkbookFormat } from "igniteui-angular-excel";
import { ExcelUtility } from "ExcelUtility";

var workbook = ExcelUtility.load(file);
ExcelUtility.save(workbook, "fileName");
```

<div class="divider--half"></div>

### Managing Heap

Due to the size of the Excel Library, it's recommended to disable the source map generation.

Modify `angular.json` by setting the `vendorSourceMap` option under architect => build => options and under serve => options:

```ts
...
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

<!-- -->
