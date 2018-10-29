---
title: Excel Library Component - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Excel Library component ... TODO.
_keywords: Ignite UI for Angular, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Excel Library, Angular Excel Library Example, Angular Excel Library Component, Angular Excel Engine
---
## Excel Library

The Excel Library is ... TODO.

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

**npm install ignite-angular-excel ignite-angular-core**

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

### Usage
Now that the Excel Library module is imported, next step is to bind it to data.

In order to create an `Workbook` object, you must first have data to bind it to. The following code snippet demonstrates how to create a simple data source.

```typescript
var data = ... TODO

```

The following code demonstrates how to bind the `Workbook` object to the above data.

```typescript
import { Workbook } from "igniteui-angular-excel/ES5/Workbook";
import { WorkbookFormat } from "igniteui-angular-excel/ES5/WorkbookFormat";
import { Worksheet } from "igniteui-angular-excel/ES5/Worksheet";
import { WorksheetTable } from "igniteui-angular-excel/ES5/WorksheetTable";

TODO

```

<div class="divider--half"></div>

### Integration
TODO info about integrating Excel Library with charts and grids




