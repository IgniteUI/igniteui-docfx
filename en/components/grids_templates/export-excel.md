<!-- markdownlint-disable MD003 MD024 MD022 -->
@@if (igxName === 'IgxGrid') {
---
title: Angular Grid Export to Excel and PDF - Ignite UI for Angular
_description: With Ignite UI Excel and PDF Exporters you can make client exports more convenient & simpler. These formats allow features like filtering, sorting, etc.
_keywords: data export, ignite ui for angular, infragistics
_license: commercial
---
}
@@if (igxName === 'IgxTreeGrid') {
title: Angular Tree Grid Export to Excel and PDF - Ignite UI for Angular
_description: With Ignite UI Excel and PDF Exporters you can make client exports more convenient & simpler. These formats allow features like filtering, sorting, etc.
---
title: Angular Tree Grid Export to Excel and PDF - Ignite UI for Angular
_description: With Ignite UI Excel and PDF Exporters you can make client exports more convenient & simpler. These formats allow features like filtering, sorting, etc.
_license: commercial
_canonicalLink: grid/export-excel
---

}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Hierarchical Grid Export to Excel and PDF - Ignite UI for Angular
_description: With Ignite UI Excel and PDF Exporters you can make client exports more convenient & simpler. These formats allow features like filtering, sorting, etc.
_keywords: data export, ignite ui for angular, infragistics
_license: commercial
_canonicalLink: grid/export-excel
---

}
@@if (igxName === 'IgxPivotGrid') {
---
title: Angular Pivot Grid Export to Excel and PDF - Ignite UI for Angular
_description: With Ignite UI Excel and PDF Exporters you can make client exports more convenient & simpler. These formats allow features like filtering, sorting, etc.
_keywords: data export, ignite ui for angular, infragistics
_license: commercial
_canonicalLink: grid/export-excel
---

}

# Angular @@igComponent Export to Excel and PDF Service

@@if (igxName === 'IgxGrid' || igxName === 'IgxTreeGrid') {

<p class="highlight">

Whether your audience needs a spreadsheet for deeper analysis or a polished PDF they can share right away, the Ignite UI exporters help you deliver the right file from the @@igxName in seconds. Inject the [`IgxExcelExporterService`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html) or [`IgxPdfExporterService`]({environment:angularApiUrl}/classes/igxpdfexporterservice.html), call the respective [`export`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html#export)/[`export`]({environment:angularApiUrl}/classes/igxpdfexporterservice.html#export) method, and the component handles the rest—from honoring filters and sorting to shaping the output format.
</p>

}

@@if (igxName === 'IgxHierarchicalGrid' || igxName === 'IgxPivotGrid') {

<p class="highlight">

The Ignite UI Excel and PDF Exporter services treat the @@igxName exactly like your users see it on screen—complete with hierarchical layouts and summaries. Inject the [`IgxExcelExporterService`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html) or [`IgxPdfExporterService`]({environment:angularApiUrl}/classes/igxpdfexporterservice.html), call the appropriate [`export`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html#export)/[`export`]({environment:angularApiUrl}/classes/igxpdfexporterservice.html#export) method, and let the service generate the final document.
</p>

}

The sections below walk through setup, usage patterns, and tips for tailoring each export so that your users receive data that is ready to consume, no matter which file type they prefer.

<div class="divider"></div>

## Angular Excel Exporter Example

This live example demonstrates the standard Excel and PDF export workflow for the @@igComponent—bound data, two export buttons (Excel and PDF), and the resulting `.xlsx` and `.pdf` files with preserved filtering and sorting state. Share it with stakeholders who want to preview the experience before wiring it into their application.

@@if (igxName === 'IgxGrid') {

<code-view style="height: 800px;"
           data-demos-base-url="{environment:demosBaseUrl}"
           explicit-editor="stackblitz"
           iframe-src="{environment:demosBaseUrl}/services/export-excel-sample-1/" alt="Angular Excel Exporter Example">
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height: 350px;"
           data-demos-base-url="{environment:demosBaseUrl}"
           explicit-editor="stackblitz"
           iframe-src="{environment:demosBaseUrl}/services/export-excel-tree-grid-sample/" alt="Angular Excel Exporter Example">
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height: 600px;"
        data-demos-base-url="{environment:demosBaseUrl}"
        explicit-editor="stackblitz"
        iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-excel-export/" alt="Angular Excel Exporter Example">
</code-view>

}
@@if (igxName === 'IgxPivotGrid') {

<code-view style="height: 600px"
           data-demos-base-url="{environment:demosBaseUrl}"
           explicit-editor="stackblitz"
           iframe-src="{environment:demosBaseUrl}/pivot-grid/pivot-grid-export/" alt="Angular Excel Exporter Example">
</code-view>

}

<div class="divider--half"></div>

## Exporting @@igComponent's Data

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

@@if (igxName !== 'IgxPivotGrid') {

```html
<@@igSelector #@@igObjectRef [data]="localData" [autoGenerate]="true"></@@igSelector>
<button (click)="exportButtonHandler()">Export @@igxName to Excel</button>
<button (click)="exportPdfButtonHandler()">Export @@igxName to PDF</button>
```

}

@@if (igxName === 'IgxPivotGrid') {

```html
<@@igSelector #@@igObjectRef [data]="localData" [pivotConfiguration]="pivotConfig"></@@igSelector>
<button (click)="exportButtonHandler()">Export @@igxName to Excel</button>
<button (click)="exportPdfButtonHandler()">Export @@igxName to PDF</button>
```

}

You may access either exporter service by defining it as a constructor dependency and letting Angular provide an instance. Calling the shared [`export`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html#export) method initiates the download while automatically respecting the component state, selected rows, and formatting rules.

Here is the code which will execute both export processes in the component's typescript file:

```typescript
// component.ts
import { IgxExcelExporterService, IgxExcelExporterOptions, IgxPdfExporterService, IgxPdfExporterOptions } from 'igniteui-angular/grids/core';
import { @@igxNameComponent } from 'igniteui-angular/grids/@@igMainTopic';

@ViewChild('@@igObjectRef') public @@igObjectRef: @@igxNameComponent;

private excelExportService = inject(IgxExcelExporterService);
private pdfExportService = inject(IgxPdfExporterService);

public exportButtonHandler() {
  this.excelExportService.export(this.@@igObjectRef, new IgxExcelExporterOptions('ExportedDataFile'));
}

public exportPdfButtonHandler() {
  this.pdfExportService.export(this.@@igObjectRef, new IgxPdfExporterOptions('ExportedDataFile'));
}
```

Once wired up, pressing the respective buttons downloads files named `ExportedDataFile.xlsx` or `ExportedDataFile.pdf` populated with the current @@igComponent view. You can swap in customer-friendly file names, append timestamps, or surface a success toast so users know their export has completed.

@@if (igxName === 'IgxPivotGrid') {

> [!NOTE]
> Expand/collapse indicators in Excel are shown based on the hierarchy of the last dimension of the Pivot Grid.
> [!NOTE]
> The exported @@igComponent will not be formatted as a table, since Excel tables do not support multiple row headers.

}

@@if (igxName !== 'IgxPivotGrid') {

## Export All Data

Large, remote datasets often load page-by-page or on demand, which means the @@igComponent might not have every record available when the user clicks **Export**. To guarantee a complete workbook, hydrate the exporter with the full data collection before starting the process. The `exportData` helper bypasses the component and works directly against plain objects, so you can reuse the same routine for scheduled exports or admin-only downloads.

```ts
public exportButtonHandler() {
  this.excelExportService.exportData(this.localData, new IgxExcelExporterOptions('ExportedDataFile'));
}
```

> [!TIP]
> When offering PDF downloads for remote data, consider fetching the complete dataset first and then calling `export` so the document mirrors the user's expectations.

@@if (igxName === 'IgxGrid') {

## Export Grouped Data

Grouping is a popular way to summarize customer segments, product categories, or financial periods before sharing the results. The exporter preserves the exact grouping hierarchy that is currently applied to the @@igComponent, so your recipients see the same breakdown you do in the browser. Simply group by one or more columns and trigger the export—no extra configuration is required.

If you need flat data in the exported file, clear the grouping prior to calling `export` or handle the `rowExporting` event to reshape the output.

Example:
<code-view style="height: 800px;"
           data-demos-base-url="{environment:demosBaseUrl}"
           explicit-editor="stackblitz"
           iframe-src="{environment:demosBaseUrl}/services/export-excel-sample-1/" alt="Angular Grouped Data Excel Exporter Example">
</code-view>

}

## Export Multi Column Headers Grid

Dashboards often rely on [multi-column headers](multi-column-headers.md) to add context—think of a "Q1/Q2/Q3" band above individual month columns. The exporter mirrors this structure so spreadsheet users immediately understand the grouping logic. If your downstream workflow prefers simple column names, flip the [exporter option]({environment:angularApiUrl}/classes/igxexporteroptionsbase.html) [ignoreMultiColumnHeaders]({environment:angularApiUrl}/classes/igxexporteroptionsbase.html#ignoremulticolumnheaders) flag to `true` and the output will include only the leaf headers.

> [!NOTE]
> The exported @@igComponent will not be formatted as a table, since Excel tables do not support multiple row headers.

@@if (igxName === 'IgxHierarchicalGrid') {
> [!NOTE]
> The exported expansion state of the multi-column headers in the row islands will always be in its initial state.
}

@@if (igxName === 'IgxGrid') {
<code-view style="height: 800px;"
           data-demos-base-url="{environment:demosBaseUrl}"
           explicit-editor="stackblitz"
           iframe-src="{environment:demosBaseUrl}/grid/multi-column-headers-export/" alt="Angular Multi-Column Headers Export">
</code-view>
}

@@if (igxName === 'IgxTreeGrid') {
<code-view style="height: 800px;"
           data-demos-base-url="{environment:demosBaseUrl}"
           explicit-editor="stackblitz"
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-multi-column-headers-export/" alt="Angular Multi-Column Headers Export">
</code-view>
}

@@if (igxName === 'IgxHierarchicalGrid') {
<code-view style="height: 800px;"
           data-demos-base-url="{environment:demosBaseUrl}"
           explicit-editor="stackblitz"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-multi-column-export/" alt="Angular Multi-Column Headers Export">
</code-view>
}

## Export Grid with Frozen Column Headers

Long sheets can become hard to read once the header row scrolls out of view. Enabling frozen headers keeps key context—like "Customer" or "Invoice Total"—visible at the top of the worksheet while your users explore the data further down. Toggle the [exporter option]({environment:angularApiUrl}/classes/igxexporteroptionsbase.html) [freezeHeaders]({environment:angularApiUrl}/classes/igxexporteroptionsbase.html#freezeHeaders) flag to `true` before calling `export` and the service will handle the rest.

```typescript
public exportButtonHandler() {
    const exporterOptions = new IgxExcelExporterOptions('ExportedDataFile');
    exporterOptions.freezeHeaders = true;
    this.excelExportService.export(this.grid, exporterOptions);
}
```

}

PDF exports automatically include the column header row at the top of the document, so readers retain the same context when they open or print the file.

## Customizing the Exported Content

Most teams tailor exports before sharing them: hiding internal-use columns, renaming headers, or skipping rows that only apply to administrators. Both exporter services expose events that let you intercept every row or column and decide how it should appear in the file. Subscribe to [`columnExporting`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html#columnexporting) and [`rowExporting`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html#rowexporting) to make last-minute adjustments—set `cancel = true` to omit an item or tweak the event arguments to update values on the fly.

@@if (igxName !== 'IgxPivotGrid') {

The following example will exclude a column from the export if its header is "Age" and if its index is 1:

```typescript
// component.ts

this.excelExportService.columnExporting.subscribe((args: IColumnExportingEventArgs) => {
  if (args.header == 'Age' && args.columnIndex == 1) {
      args.cancel = true;
  }
});
this.excelExportService.export(this.@@igObjectRef, new IgxExcelExporterOptions('ExportedDataFile'));
```

}

@@if (igxName === 'IgxPivotGrid') {

The following example will exclude all columns from the export if their header is "Amount of Sale":

```typescript
// component.ts

this.excelExportService.columnExporting.subscribe((args: IColumnExportingEventArgs) => {
    if (args.header == 'Amount of Sale') {
        args.cancel = true;
    }
});
this.excelExportService.export(this.@@igObjectRef, new IgxExcelExporterOptions('ExportedDataFile'));
```

}

When you are exporting data from the @@igComponent component, the services automatically respect sorting, filtering, summaries, and hidden columns so the file reflects what the user currently sees. Need the full dataset instead? Toggle the relevant flags on [`IgxExcelExporterOptions`]({environment:angularApiUrl}/classes/igxexcelexporteroptions.html) or [`IgxPdfExporterOptions`]({environment:angularApiUrl}/classes/igxpdfexporteroptions.html) to include filtered rows, hidden columns, or custom metadata.

## Known Limitations

Before shipping exports to production users, review the following platform constraints so you can set expectations and provide helpful guidance within your app.

@@if (igxName === 'IgxGrid') {

|Limitation|Description|
|--- |--- |
|Max worksheet size|The maximum worksheet size supported by Excel is 1,048,576 rows by 16,384 columns. Consider slicing extremely large exports by date range or segment to stay within these limits.|
|Cell Styling|The Excel exporter service does not support exporting a custom style applied directly to a cell component. In such scenarios we recommend using the richer [Excel Library](../excel-library.md) for fine-grained formatting.|
|Wide PDF layouts|Very wide grids can force PDF columns to shrink to fit the page. Apply column widths or hide low-priority fields before exporting to keep the document legible.|

}

@@if (igxName === 'IgxTreeGrid') {

|Limitation|Description|
|--- |--- |
|Hierarchy levels|The exporter supports up to 8 levels of hierarchy. If you need deeper structures, flatten the data or export subsets to keep the file readable.|
|Max worksheet size|The maximum worksheet size supported by Excel is 1,048,576 rows by 16,384 columns. Consider slicing extremely large exports by date range or segment to stay within these limits.|
|Cell Styling|The Excel exporter service does not support exporting a custom style applied directly to a cell component. In such scenarios we recommend using the richer [Excel Library](../excel-library.md) for fine-grained formatting.|
|Wide PDF layouts|Very wide grids can force PDF columns to shrink to fit the page. Apply column widths or hide low-priority fields before exporting to keep the document legible.|

}

@@if (igxName === 'IgxHierarchicalGrid') {

|Limitation|Description|
|--- |--- |
|Hierarchy levels|The exporter supports up to 8 levels of hierarchy. If you need deeper structures, flatten the data or export subsets to keep the file readable.|
|Max worksheet size|The maximum worksheet size supported by Excel is 1,048,576 rows by 16,384 columns. Consider slicing extremely large exports by date range or segment to stay within these limits.|
|Exporting pinned columns|In the exported Excel file, pinned columns are not frozen but preserve their order. If freezing is critical, adjust the sheet manually after export.|
|Cell Styling|The Excel exporter service does not support exporting a custom style applied directly to a cell component. In such scenarios we recommend using the richer [Excel Library](../excel-library.md) for fine-grained formatting.|
|Wide PDF layouts|Very wide grids can force PDF columns to shrink to fit the page. Apply column widths or hide low-priority fields before exporting to keep the document legible.|

}

@@if (igxName === 'IgxPivotGrid') {

|Limitation|Description|
|--- |--- |
|Max worksheet size|The maximum worksheet size supported by Excel is 1,048,576 rows by 16,384 columns. Consider slicing extremely large exports by date range or segment to stay within these limits.|
|Cell Styling|The Excel exporter service does not support exporting a custom style applied directly to a cell component. In such scenarios we recommend using the richer [Excel Library](../excel-library.md) for fine-grained formatting.|
|Wide PDF layouts|Very wide exports can force PDF columns to shrink to fit the page. Apply column widths or hide low-priority fields before exporting to keep the document legible.|

}

## API References

The Excel and PDF Exporter services have a few more APIs to explore, which are listed below.

- [IgxExcelExporterService API]({environment:angularApiUrl}/classes/igxexcelexporterservice.html)
- [IgxExcelExporterOptions API]({environment:angularApiUrl}/classes/igxexcelexporteroptions.html)
- [IgxPdfExporterService API]({environment:angularApiUrl}/classes/igxpdfexporterservice.html)
- [IgxPdfExporterOptions API]({environment:angularApiUrl}/classes/igxpdfexporteroptions.html)

Additional components that were used:

- [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
- [@@igxNameComponent Styles]({environment:sassApiUrl}/themes#function-grid-theme)

<div class="divider"></div>

## Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas. The links below connect you with samples, community answers, and the engineering team.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
