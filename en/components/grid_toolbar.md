---
title: Grid Toolbar Component - Native Angular | Ignite UI for Angular
_description: With the Ignite UI for Angular Grid Toolbar component you can have a centralized location for IgxGrid features UI controls.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Component, Angular Grid, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid, Angular Data Grid Toolbar, Grid Toolbar, Angular Grid Toolbar, excel export, grid column hiding chooser, grid column pinning chooser
---

### Grid Toolbar

The Grid in Ignite UI for Angular provides an [`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html) which is essentially a container for **UI** operations. The toolbar is located at the top of the grid and it matches the grid's horizontal size. The toolbar container hosts different UI controls which are related to some of the grid's features - column hiding, column pinning, excel exporting, etc.

#### Demo

<div class="sample-container loading" style="height:420px">
    <iframe id="grid-toolbar-sample-1-iframe" src='{environment:demosBaseUrl}/grid-toolbar-sample-1' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-toolbar-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

The IgxGrid's toolbar is shown using the grid's [`showToolbar`]({environment:angularApiUrl}/classes/igxgridcomponent.html#showtoolbar) property - just set it to **true**. The toolbar supports a textual title which is left aligned and its content is set using the grid's [`toolbarTitle`]({environment:angularApiUrl}/classes/igxgridcomponent.html#toolbartitle) property. The following code snippet demonstrates how to enable a toolbar and set its title:

```html
<igx-grid [data]="data" [autoGenerate]="true" height="400px" width="600px"
    [showToolbar]="true"
    toolbarTitle="Grid Title">
</igx-grid>
```

#### Features

The IgxGrid's toolbar can be configured to allow columns hiding, columns pinning and exporting data to MS Excel and CSV. You can enable each feature independently by setting its dedicated boolean property to true:
- for column hiding set [`columnHiding`]({environment:angularApiUrl}/classes/igxgridcomponent.html#columnhiding) to **true**
- for column pinning set [`columnPinning`]({environment:angularApiUrl}/classes/igxgridcomponent.html#columnpinning) to **true**
- for MS Excel export set the grid's [`exportExcel`]({environment:angularApiUrl}/classes/igxgridcomponent.html#exportexcel) property to **true**
- for CSV export set the grid's [`exportCsv`]({environment:angularApiUrl}/classes/igxgridcomponent.html#exportcsv) property to **true**

There are also properties for configuring each button's text and they are listed in the API section below.

<div class="sample-container loading" style="height:420px">
    <iframe id="grid-toolbar-sample-2-iframe" src='{environment:demosBaseUrl}/grid-toolbar-sample-2' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-toolbar-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

The following code snippet demonstrates how to enable all features of the toolbar:

```html
<igx-grid [data]="data" [autoGenerate]="true" height="400px" width="600px"
    [showToolbar]="true"
    toolbarTitle="Grid Title"
    [columnHiding]="true"
    [columnPinning]="true"
    [exportExcel]="true"
    [exportCsv]="true"
    exportText="Export"
    exportExcelText="Export to Excel"
    exportCsvText="Export to CSV">
</igx-grid>
```

The export to MS Excel and the export to CSV features are using respectively the [`IgxExcelExporterService`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html) and [`IgxCsvExporterService`]({environment:angularApiUrl}/classes/igxcsvexporterservice.html) as providers. If you need to use any of them you should specify them in the **providers** array of your **app.module.ts** file. For example the following code snippet demonstrates how to include all exporter services:

```typescript
// app.module.ts

...
import { IgxExcelExporterService, IgxCsvExporterService } from "igniteui-angular";

@NgModule({
  providers: [ IgxExcelExporterService, IgxCsvExporterService ]
})

export class AppModule {}
```

#### Customizing the Export

In addition to simply switching on and off the toolbar features, the export process can be further configured in the [`onToolbarExporting`]({environment:angularApiUrl}/classes/igxgridcomponent.html#ontoolbarexporting) event which is emitted when the user initiates the export process. This event exposes both the exporter and the exporter's options.

> [!NOTE]
> By default when exporting to CSV the exporter exports using a comma separator and uses a '.csv' extension for the output file.
> You can customize these exporting parameters by subscribing to events of the exporter or changing the values of the exporter options fields.
> You can also cancel the export process by setting the cancel field of the event args to true.

The following code snippet demonstrates how to subscribe to the [`onToolbarExporting`]({environment:angularApiUrl}/classes/igxgridcomponent.html#ontoolbarexporting) event and cancel the default exporting process.

```html
<igx-grid ... (onToolbarExporting)="toolbarExportingHandler($event)"></igx-grid>
```

```typescript
import { IgxExcelExporterService, IgxCsvExporterService } from "igniteui-angular";

...

public toolbarExportingHandler(args) {
    // You can customize the exporting from this event
    const options: IgxExporterOptionsBase = args.options ;
    options.fileName = "Custom Title";

    if (options instanceof IgxExcelExporterOptions) {
        const excelOptions = options as IgxExcelExporterOptions;
        excelOptions.columnWidth = 10;
    } else {
        const csvOptions = options as IgxCsvExporterOptions;
        csvOptions.fileType = CsvFileTypes.TSV;
        csvOptions.valueDelimiter = "\t";
    }

    args.exporter.onColumnExport.subscribe((columnArgs: IColumnExportingEventArgs) => {
        // Don't export image fields
        columnArgs.cancel = columnArgs.header === "Avatar" ||
                            columnArgs.header === "CountryFlag";
    });
}
```

The following sample demonstrates how to customize the exported files:

<div class="sample-container loading" style="height:420px">
    <iframe id="grid-toolbar-sample-3-iframe" src='{environment:demosBaseUrl}/grid-toolbar-sample-3' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-toolbar-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

<div class="divider"></div>

### API References

The Grid Toolbar service has a few more APIs to explore, which are listed below.

[`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html)

[`IgxGridComponent`]({environment:angularApiUrl}/classes/igxgridcomponent.html) properties:
* [`toolbar`]({environment:angularApiUrl}/classes/igxgridcomponent.html#toolbar)
* [`showToolbar`]({environment:angularApiUrl}/classes/igxgridcomponent.html#showtoolbar)
* [`toolbarTitle`]({environment:angularApiUrl}/classes/igxgridcomponent.html#toolbartitle)
* [`columnHiding`]({environment:angularApiUrl}/classes/igxgridcomponent.html#columnhiding)
* [`columnHidingTitle`]({environment:angularApiUrl}/classes/igxgridcomponent.html#columnhidingtitle)
* [`hiddenColumnsText`]({environment:angularApiUrl}/classes/igxgridcomponent.html#hiddencolumnstext)
* [`columnPinning`]({environment:angularApiUrl}/classes/igxgridcomponent.html#columnpinning)
* [`columnPinningTitle`]({environment:angularApiUrl}/classes/igxgridcomponent.html#columnpinningtitle)
* [`pinnedColumnsText`]({environment:angularApiUrl}/classes/igxgridcomponent.html#pinnedcolumnstext)
* [`exportExcel`]({environment:angularApiUrl}/classes/igxgridcomponent.html#exportexcel)
* [`exportCsv`]({environment:angularApiUrl}/classes/igxgridcomponent.html#exportcsv)
* [`exportText`]({environment:angularApiUrl}/classes/igxgridcomponent.html#exporttext)
* [`exportExcelText`]({environment:angularApiUrl}/classes/igxgridcomponent.html#exportexceltext)
* [`exportCsvText`]({environment:angularApiUrl}/classes/igxgridcomponent.html#exportcsvtext)

[`IgxGridComponent`]({environment:angularApiUrl}/classes/igxgridcomponent.html) events:
* [`onToolbarExporting`]({environment:angularApiUrl}/classes/igxgridcomponent.html#ontoolbarexporting)

### Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
