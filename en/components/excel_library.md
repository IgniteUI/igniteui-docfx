---
title: Excel Library Component - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Excel Library component ... TODO.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Excel Library, Angular Excel Library Example, Angular Excel Library Component, Angular Excel Engine
---
## Excel Library

The Infragistics Excel Engine allows you to work with spreadsheet data using familiar Microsoft® Excel® spreadsheet objects like Workbooks, Worksheets, Cells, Formulas and many more. The Infragistics Excel Engine makes it easy for you to represent the data of your application in an Excel spreadsheet as well as transfer data from Excel into your application.

### Demo

TODO add when in a sample is in Samples Browser
<!-- <div class="sample-container" style="height: 550px">
    <iframe id="excel-library-overview-sample-iframe" src='{environment:demosBaseUrl}/excel-library-overview-sample' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
    <button data-localize="stackblitz" disabled class="stackblitz-btn"   data-iframe-id="excel-library-overview-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">View on StackBlitz
    </button>
</div> -->

<div class="divider--half"></div>

TODO info about loading type of data models/files

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

It's also possible to load a more minimal configuration of Excel Library whereby it can only load a subset of the possible ... TODO

<div class="divider--half"></div>

### Load and Save Workbooks
Now that the Excel Library module is imported, next step is to load a workbook.

In order to load and save `Workbook` object, you can utilize to load and save methods Excel. The following code is a class that exposes various methods such as load and save.

```typescript
import { Workbook } from "igniteui-angular-excel/ES5/Workbook";
import { WorkbookSaveOptions } from "igniteui-angular-excel/ES5/WorkbookSaveOptions";
import { WorkbookFormat } from "igniteui-angular-excel/ES5/WorkbookFormat";

Workbook.load("ExcelWorkbook.xlsx", null, null);
Workbook.save(workbook, "ExcelWorkbook.xlsx);

}

```

<div class="divider--half"></div>

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
> The Excel Engine does not support the Excel Binary Workbook (.xlsb) format at this time.
