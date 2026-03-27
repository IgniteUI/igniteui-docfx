---
title: Angular Pivot Grid Export to Excel and PDF - Ignite UI for Angular
_description: With Ignite UI Excel and PDF Exporters you can make client exports more convenient & simpler. These formats allow features like filtering, sorting, etc
_keywords: data export, ignite ui for angular, infragistics
_license: commercial
_canonicalLink: grid/export-excel
---



# Angular Pivot Grid Export to Excel and PDF Service





<p class="highlight">

The Ignite UI Excel and PDF Exporter services treat the IgxPivotGrid exactly like your users see it on screen—complete with hierarchical layouts and summaries. Inject the [`IgxExcelExporterService`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html) or [`IgxPdfExporterService`]({environment:angularApiUrl}/classes/igxpdfexporterservice.html), call the appropriate [`export`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html#export)/[`export`]({environment:angularApiUrl}/classes/igxpdfexporterservice.html#export) method, and let the service generate the final document.
</p>



The sections below walk through setup, usage patterns, and tips for tailoring each export so that your users receive data that is ready to consume, no matter which file type they prefer.

<div class="divider"></div>

## Angular Excel Exporter Example

This live example demonstrates the standard Excel and PDF export workflow for the Pivot Grid—bound data, two export buttons (Excel and PDF), and the resulting `.xlsx` and `.pdf` files with preserved filtering and sorting state. Share it with stakeholders who want to preview the experience before wiring it into their application.






<code-view style="height: 600px"
           data-demos-base-url="{environment:demosBaseUrl}"
           explicit-editor="stackblitz"
           iframe-src="{environment:demosBaseUrl}/pivot-grid/pivot-grid-export/" alt="Angular Excel Exporter Example">
</code-view>



<div class="divider--half"></div>

## Exporting Pivot Grid's Data

Getting the exporters into your project takes only a few lines of code. Follow these steps and you will have reusable services that can create either Excel or PDF outputs on demand:

1. Import the [`IgxExcelExporterService`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html) and/or [`IgxPdfExporterService`]({environment:angularApiUrl}/classes/igxpdfexporterservice.html) in your root module.
2. Inject whichever exporter you need and call its `export` method when the user requests a file.

```typescript
// component.ts
import { IgxExcelExporterService, IgxPdfExporterService } from 'igniteui-angular/grids/core';
// import { IgxExcelExporterService, IgxPdfExporterService } from '@infragistics/igniteui-angular/grids/core'; for licensed package

...

private excelExportService = inject(IgxExcelExporterService);
private pdfExportService = inject(IgxPdfExporterService);

```

> [!Note]
> In v12.2.1 and later, `IgxExcelExporterService` is provided in root and does not need to be registered in the `providers` array. The PDF exporter was introduced in later versions and is available as an injectable service without any additional configuration.

To initiate an export process you may use the handler of a button in your component's template.





```html
<igx-pivot-grid #pivotGrid [data]="localData" [pivotConfiguration]="pivotConfig"></igx-pivot-grid>
<button (click)="exportButtonHandler()">Export IgxPivotGrid to Excel</button>
<button (click)="exportPdfButtonHandler()">Export IgxPivotGrid to PDF</button>
```



You may access either exporter service by defining it as a constructor dependency and letting Angular provide an instance. Calling the shared [`export`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html#export) method initiates the download while automatically respecting the component state, selected rows, and formatting rules.

Here is the code which will execute both export processes in the component's typescript file:

```typescript
// component.ts
import { IgxExcelExporterService, IgxExcelExporterOptions, IgxPdfExporterService, IgxPdfExporterOptions } from 'igniteui-angular/grids/core';
import { IgxPivotGridComponent } from 'igniteui-angular/grids/pivot-grid';

@ViewChild('pivotGrid') public pivotGrid: IgxPivotGridComponent;

private excelExportService = inject(IgxExcelExporterService);
private pdfExportService = inject(IgxPdfExporterService);

public exportButtonHandler() {
  this.excelExportService.export(this.pivotGrid, new IgxExcelExporterOptions('ExportedDataFile'));
}

public exportPdfButtonHandler() {
  this.pdfExportService.export(this.pivotGrid, new IgxPdfExporterOptions('ExportedDataFile'));
}
```

Once wired up, pressing the respective buttons downloads files named `ExportedDataFile.xlsx` or `ExportedDataFile.pdf` populated with the current Pivot Grid view. You can swap in customer-friendly file names, append timestamps, or surface a success toast so users know their export has completed.



> [!NOTE]
> Expand/collapse indicators in Excel are shown based on the hierarchy of the last dimension of the Pivot Grid.
> [!NOTE]
> The exported Pivot Grid will not be formatted as a table, since Excel tables do not support multiple row headers.





PDF exports automatically include the column header row at the top of the document, so readers retain the same context when they open or print the file.

## Customizing the Exported Content

Most teams tailor exports before sharing them: hiding internal-use columns, renaming headers, or skipping rows that only apply to administrators. Both exporter services expose events that let you intercept every row or column and decide how it should appear in the file. Subscribe to [`columnExporting`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html#columnexporting) and [`rowExporting`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html#rowexporting) to make last-minute adjustments—set `cancel = true` to omit an item or tweak the event arguments to update values on the fly.





The following example will exclude all columns from the export if their header is "Amount of Sale":

```typescript
// component.ts

this.excelExportService.columnExporting.subscribe((args: IColumnExportingEventArgs) => {
    if (args.header == 'Amount of Sale') {
        args.cancel = true;
    }
});
this.excelExportService.export(this.pivotGrid, new IgxExcelExporterOptions('ExportedDataFile'));
```



When you are exporting data from the Pivot Grid component, the services automatically respect sorting, filtering, summaries, and hidden columns so the file reflects what the user currently sees. Need the full dataset instead? Toggle the relevant flags on [`IgxExcelExporterOptions`]({environment:angularApiUrl}/classes/igxexcelexporteroptions.html) or [`IgxPdfExporterOptions`]({environment:angularApiUrl}/classes/igxpdfexporteroptions.html) to include filtered rows, hidden columns, or custom metadata.

## Known Limitations

Before shipping exports to production users, review the following platform constraints so you can set expectations and provide helpful guidance within your app.









|Limitation|Description|
|--- |--- |
|Max worksheet size|The maximum worksheet size supported by Excel is 1,048,576 rows by 16,384 columns. Consider slicing extremely large exports by date range or segment to stay within these limits.|
|Cell Styling|The Excel exporter service does not support exporting a custom style applied directly to a cell component. In such scenarios we recommend using the richer [Excel Library](../excel-library.md) for fine-grained formatting.|
|Wide PDF layouts|Very wide exports can force PDF columns to shrink to fit the page. Apply column widths or hide low-priority fields before exporting to keep the document legible.|



## API References

The Excel and PDF Exporter services have a few more APIs to explore, which are listed below.

- [IgxExcelExporterService API]({environment:angularApiUrl}/classes/igxexcelexporterservice.html)
- [IgxExcelExporterOptions API]({environment:angularApiUrl}/classes/igxexcelexporteroptions.html)
- [IgxPdfExporterService API]({environment:angularApiUrl}/classes/igxpdfexporterservice.html)
- [IgxPdfExporterOptions API]({environment:angularApiUrl}/classes/igxpdfexporteroptions.html)

Additional components that were used:

- [IgxPivotGridComponent API]({environment:angularApiUrl}/classes/igxpivotgridcomponent.html)
- [IgxPivotGridComponent Styles]({environment:sassApiUrl}/themes#function-grid-theme)

<div class="divider"></div>

## Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas. The links below connect you with samples, community answers, and the engineering team.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
