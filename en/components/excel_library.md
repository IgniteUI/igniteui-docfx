---
title: Excel Library Component - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Excel Library component ... TODO.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Excel Library, Angular Excel Library Example, Angular Excel Library Component, Angular Excel Engine
---
## Excel Library

The Infragistics Excel Library allows you to work with spreadsheet data using familiar Microsoft® Excel® spreadsheet objects like Workbooks, Worksheets, Cells, Formulas and many more. The Infragistics Excel Library makes it easy for you to represent the data of your application in an Excel spreadsheet as well as transfer data from Excel into your application.

### Demo

<div class="sample-container" style="height: 550px">
    <iframe id="excel-library-overview-sample-iframe" src='{environment:demosBaseUrl}/excel-library-operations-on-workbooks' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="excel-library-overview-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div> 

<div class="divider--half"></div>

### Dependencies
When installing the excel package, the core package must also be installed.

-  **npm install ignite-angular-excel ignite-angular-core**

The Excel Library is exported as an `NgModule`, you need to import the `IgxExcelModule` inside your `AppModule`:

```typescript
// app.module.ts
import { IgxExcelModule } from "igniteui-angular-excel/ES5/igx-excel-module";

@NgModule({
    imports: [
        ...
        IgxExcelModule,
        ...
    ]
})
export class AppModule {}
```

### Modules – The Excel Library contains 5 modules 

-	**IgxExcelCoreModule** – This contains the object model and much of the excel infrastructure
-	**IgxExcelFunctionsModule** – This contains the majority of the custom functions for formula evaluations, such as Sum, Average, Min, Max, SumIfs, Ifs, etc. The absence of this module won’t cause any issues with formula parsing If the formula is to be calculated (e.g. you apply a formula like “=SUM(A1:A5)” and ask for the Value of the cell) then you would get a #NAME! error returned. (Note that’s not an exception throw – it’s an object that represents a particular error since formulas can result in errors).
-	**IgxExcelXlsModule** – This contains the load and save logic for xls (and related) type files – namely the Excel97to2003 related WorkbookFormats.
-	**IgxExcelXlsxModule** – This contains the load and save logic for xlsx (and related) type files – namely the Excel2007 related and StrictOpenXml WorkbookFormats.
-	**IgxExcelModule** – This references the other 4 modules and so basically ensures that all the functionality is loaded/available.

### Supported Versions of Microsoft Excel
The following is a list of the supported versions of Excel.**

-  Microsoft Excel 97

-  Microsoft Excel 2000

-  Microsoft Excel 2002

-  Microsoft Excel 2003

-  Microsoft Excel 2007

-  Microsoft Excel 2010

-  Microsoft Excel 2013

-  Microsoft Excel 2016

> [!NOTE]
> The Excel Library does not support the Excel Binary Workbook (.xlsb) format at this time.

### Load and Save Workbooks
Now that the Excel Library module is imported, next step is to load a workbook.

In order to load and save `Workbook` objects, you can utilize the load and save methods. The following code is a class that exposes various methods such as load and save.

```typescript
import { Workbook } from "igniteui-angular-excel/ES5/Workbook";
import { WorkbookSaveOptions } from "igniteui-angular-excel/ES5/WorkbookSaveOptions";
import { WorkbookFormat } from "igniteui-angular-excel/ES5/WorkbookFormat";

Workbook.load("ExcelWorkbook.xlsx", null, null);
Workbook.save(workbook, "ExcelWorkbook.xlsx);

```

<div class="divider--half"></div>
 
### Managing Heap

Due to the size of the Excel Library, it's recommended to disable the source map generation.

Modify `angular.json`:

```typescript
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
                  ...
          },
              ...
        },
        "serve": {
          "builder": "...",
          "options": {
            "vendorSourceMap": false,
            "browserTarget": "my-app:build"
          },
              ...
        },
        ...
      }
```