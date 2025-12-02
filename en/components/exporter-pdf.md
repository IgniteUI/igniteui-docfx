---
title: Export to PDF Component - Native Angular | Ignite UI for Angular
_description: Users can export their data for offline presentation can do so in PDF format with the Export to PDF Ignite UI for Angular component.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Controls, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Grid, Angular Data Grid, Angular Grid Control, Angular Grid Component, PDF Export, Angular PDF Component, Angular Export PDF
_license: commercial
---

# PDF Exporter

<p class="highlight">

The Ignite UI for Angular PDF Exporter service can export data in PDF format from raw data or from the [**IgxGrid**](grid/grid.md), [**IgxTreeGrid**](treegrid/tree-grid.md), [**IgxHierarchicalGrid**](hierarchicalgrid/hierarchical-grid.md) and [**IgxPivotGrid**](pivotGrid/pivot-grid.md) components. The exporting functionality is encapsulated in the [`IgxPdfExporterService`]({environment:angularApiUrl}/classes/igxpdfexporterservice.html) class and the data is exported in PDF format with support for multi-page documents, automatic page breaks,
</p>
<div class="divider"></div>

## Angular PDF Exporter Example


<code-view style="height: 150px;"
           data-demos-base-url="{environment:demosBaseUrl}"
           explicit-editor="stackblitz"
           iframe-src="{environment:demosBaseUrl}/services/export-pdf/" alt="Angular PDF Exporter Example">
</code-view>

<div class="divider--half"></div>

## Usage

To start using the IgniteUI PDF Exporter first import the [`IgxPdfExporterService`]({environment:angularApiUrl}/classes/igxpdfexporterservice.html) in your component:

```typescript
import { IgxPdfExporterService } from 'igniteui-angular';

// import { IgxPdfExporterService } from '@infragistics/igniteui-angular'; for licensed package

@Component({
  ...
})
export class AppComponent { ... }
```

To initiate an export process you may use the handler of a button in your component's template.

```html
<button (click)="exportButtonHandler()">Export Data to PDF</button>
```

You may access [`IgxPdfExporterService`]({environment:angularApiUrl}/classes/igxpdfexporterservice.html) by using the `inject` function. To export some data in PDF format you need to invoke the exporter service's [`exportData`]({environment:angularApiUrl}/classes/igxpdfexporterservice.html#exportdata) method. This method accepts as a first argument the data you want to export and the second argument is of type [`IgxPdfExporterOptions`]({environment:angularApiUrl}/classes/igxpdfexporteroptions.html) and allows you to configure the export process.

Here is the code which will execute the export process in the component's typescript file:

```typescript
// component.ts

...
import { Component, inject, signal } from '@angular/core';
import { IgxPdfExporterService, IgxPdfExporterOptions } from 'igniteui-angular';

// import { IgxPdfExporterService, IgxPdfExporterOptions } from '@infragistics/igniteui-angular'; for licensed package
...

public localData = signal([
  { Name: 'Eric Ridley', Age: '26' },
  { Name: 'Alanis Brook', Age: '22' },
  { Name: 'Jonathan Morris', Age: '23' }
]);

private pdfExportService = inject(IgxPdfExporterService);

public exportButtonHandler() {
  this.pdfExportService.exportData(this.localData, new IgxPdfExporterOptions('ExportedDataFile'));
}

```

If all went well, you should see an export button. When pressed, it will trigger the export process and the browser will download a file named "ExportedDataFile.pdf" which contains the data from the `localData` array in PDF format.

## Customizing the Exported Content

In the above examples the PDF Exporter service was exporting all available data. There are situations in which you may want to skip exporting a row or even an entire column. To achieve this you may hook to the [`columnExporting`]({environment:angularApiUrl}/classes/igxpdfexporterservice.html#columnexporting) and/or [`rowExporting`]({environment:angularApiUrl}/classes/igxpdfexporterservice.html#rowexporting) events which are fired respectively for each column and/or each row and cancel the respective event by setting the event argument object's [`cancel`]({environment:angularApiUrl}/interfaces/irowexportingeventargs.html#cancel) property to `true`.

The following example will exclude a column from the export if its header is "Age" and if its index is 1:

```typescript
// component.ts

this.pdfExportService.columnExporting.subscribe((args: IColumnExportingEventArgs) => {
  if (args.header == 'Age' && args.columnIndex == 1) {
      args.cancel = true;
  }
});
this.pdfExportService.export(this.igxGrid1, new IgxPdfExporterOptions('ExportedDataFile'));
```

## PDF Export Options

The [`IgxPdfExporterOptions`]({environment:angularApiUrl}/classes/igxpdfexporteroptions.html) class provides several properties to customize the PDF export:

- **pageOrientation**: Specifies the page orientation (`portrait` or `landscape`). Default is `landscape`.
- **pageSize**: Specifies the page size (`a3`, `a4`, `a5`, `letter`, `legal`, etc.). Default is `a4`.
- **showTableBorders**: Specifies whether to show table borders. Default is `true`.
- **fontSize**: Specifies the font size for the table content. Default is `10`.

Here is an example of how to configure these options:

```typescript
// component.ts

public exportButtonHandler() {
  const options = new IgxPdfExporterOptions('ExportedDataFile');
  options.pageOrientation = 'portrait';
  options.pageSize = 'letter';
  options.showTableBorders = true;
  options.fontSize = 12;

  this.pdfExportService.exportData(this.localData, options);
}
```

## API References

The PDF Exporter service has a few more APIs to explore, which are listed below.

- [`IgxPdfExporterService API`]({environment:angularApiUrl}/classes/igxpdfexporterservice.html)
- [`IgxPdfExporterOptions API`]({environment:angularApiUrl}/classes/igxpdfexporteroptions.html)

Additional components that were used:

- [IgxGridComponent API]({environment:angularApiUrl}/classes/igxgridcomponent.html)
- [IgxGridComponent Styles]({environment:sassApiUrl}/themes#function-grid-theme)

<div class="divider"></div>

## Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)