---
title: Export to PDF Component - Native Angular | Ignite UI for Angular
_description: Users can export their data for offline presentation can do so in PDF format with the Export to PDF Ignite UI for Angular component.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Controls, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Grid, Angular Data Grid, Angular Grid Control, Angular Grid Component, PDF Export, Angular PDF Component, Angular Export PDF
_license: commercial
---

# PDF Exporter

<p class="highlight">

The Ignite UI for Angular PDF Exporter service provides powerful functionality to export data in PDF format from various sources, including raw data arrays and advanced grid components such as [**IgxGrid**](grid/grid.md), [**IgxTreeGrid**](treegrid/tree-grid.md), [**IgxHierarchicalGrid**](hierarchicalgrid/hierarchical-grid.md), and [**IgxPivotGrid**](pivotGrid/pivot-grid.md). The exporting functionality is encapsulated in the [`IgxPdfExporterService`]({environment:angularApiUrl}/classes/igxpdfexporterservice.html) class, which enables seamless data export to PDF format with comprehensive features including multi-page document support, automatic page breaks, and customizable formatting options.
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

To start using the Ignite UI PDF Exporter, first import the [`IgxPdfExporterService`]({environment:angularApiUrl}/classes/igxpdfexporterservice.html) into your component:

```typescript
import { IgxPdfExporterService } from 'igniteui-angular/grids/core';

// import { IgxPdfExporterService } from '@infragistics/igniteui-angular/grids/core'; for licensed package

@Component({
  ...
})
export class AppComponent { ... }
```

To initiate an export process, you can use a button click handler in your component's template.

```html
<button (click)="exportButtonHandler()">Export Data to PDF</button>
```

You can access the [`IgxPdfExporterService`]({environment:angularApiUrl}/classes/igxpdfexporterservice.html) by using the `inject` function. To export data in PDF format, you need to invoke the exporter service's [`exportData`]({environment:angularApiUrl}/classes/igxpdfexporterservice.html#exportdata) method. This method accepts the data you want to export as its first argument, and an [`IgxPdfExporterOptions`]({environment:angularApiUrl}/classes/igxpdfexporteroptions.html) instance as its second argument, which allows you to configure the export process.

Here is the code that will execute the export process in the component's TypeScript file:

```typescript
// component.ts

...
import { Component, inject, signal } from '@angular/core';
import { IgxPdfExporterService, IgxPdfExporterOptions } from 'igniteui-angular/grids/core';

// import { IgxPdfExporterService, IgxPdfExporterOptions } from '@infragistics/igniteui-angular/grids/core'; for licensed package
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

In the above examples, the PDF Exporter service exports all available data. However, there are situations where you may want to skip exporting a row or an entire column. To achieve this, you can subscribe to the [`columnExporting`]({environment:angularApiUrl}/classes/igxpdfexporterservice.html#columnexporting) and/or [`rowExporting`]({environment:angularApiUrl}/classes/igxpdfexporterservice.html#rowexporting) events, which are fired for each column and/or each row respectively. You can then cancel the export by setting the event argument object's [`cancel`]({environment:angularApiUrl}/interfaces/irowexportingeventargs.html#cancel) property to `true`.

The following example excludes a column from the export if its header is "Age" and its index is 1:

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
- **showTableBorders**: Determines whether to display table borders. Default is `true`.
- **fontSize**: Sets the font size for the table content. Default is `10`.
- **customFont**: Specifies a custom TrueType font (TTF) for Unicode character support. Required when exporting data containing non-Latin characters.

The following example demonstrates how to configure these options:

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

### Custom Font Configuration for Unicode Support

By default, the PDF exporter uses the built-in Helvetica font, which only supports basic Latin characters. If your data contains non-Latin characters (such as Cyrillic, Chinese, Japanese, Arabic, Hebrew, or special symbols), you must provide a custom TrueType font (TTF) using the `customFont` property.

The font data must be provided as a Base64-encoded string of the TTF file contents. You can optionally provide a separate bold variant for header styling.

#### Converting TTF Files to Base64

To convert a TTF file to Base64, use Node.js:

```javascript
const fs = require('fs');
const fontData = fs.readFileSync('path/to/font.ttf');
const base64 = fontData.toString('base64');
fs.writeFileSync('font-base64.ts', `export const MY_FONT = '${base64}';`);
```

Alternatively, you can use an online Base64 encoder tool to convert your TTF file.

#### Example: Basic Custom Font Usage

```typescript
// fonts/noto-sans.ts
export const NOTO_SANS_REGULAR = 'AAEAAAATAQAABAAwR0...[base64-encoded font data]...';

// component.ts
import { NOTO_SANS_REGULAR } from './fonts/noto-sans';

public exportButtonHandler() {
  const options = new IgxPdfExporterOptions('ExportedDataFile');
  options.customFont = {
    name: 'NotoSans',
    data: NOTO_SANS_REGULAR
  };

  this.pdfExportService.exportData(this.localData, options);
}
```

#### Example: Custom Font with Bold Variant

```typescript
// fonts/noto-sans.ts
export const NOTO_SANS_REGULAR = 'AAEAAAATAQAABAAwR0...[base64-encoded regular font]...';
export const NOTO_SANS_BOLD = 'BBFAAAAUBQAACAAxS1...[base64-encoded bold font]...';

// component.ts
import { NOTO_SANS_REGULAR, NOTO_SANS_BOLD } from './fonts/noto-sans';

public exportButtonHandler() {
  const options = new IgxPdfExporterOptions('ExportedDataFile');
  options.customFont = {
    name: 'NotoSans',
    data: NOTO_SANS_REGULAR,
    bold: {
      name: 'NotoSans-Bold',
      data: NOTO_SANS_BOLD
    }
  };

  this.pdfExportService.export(this.igxGrid1, options);
}
```

#### Recommended Fonts for Unicode Support

The following fonts provide excellent Unicode coverage:

- **Noto Sans**: Covers most Unicode scripts — [Google Fonts](https://fonts.google.com/noto/specimen/Noto+Sans)
- **Arial Unicode MS**: Comprehensive Unicode character support
- **Source Han Sans**: Excellent CJK (Chinese, Japanese, Korean) support

### Demo

<code-view style="height: 660px;"
           data-demos-base-url="{environment:demosBaseUrl}"
           explicit-editor="stackblitz"
           iframe-src="{environment:demosBaseUrl}/services/export-pdf-custom-font/" alt="Angular PDF Exporter Custom Font Example">
</code-view>

<div class="divider--half"></div>

## Known Limitations

| Limitation | Description |
|---|---|
| Wide PDF layouts | Very wide grids can force PDF columns to shrink to fit the page. Apply explicit column widths or hide low‑priority fields before exporting to keep the document legible. |

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