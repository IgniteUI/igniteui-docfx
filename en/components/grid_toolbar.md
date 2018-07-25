---
title: Grid Toolbar Component - Native Angular | Ignite UI for Angular
_description: With the Ignite UI for Angular Grid Toolbar component you can have a centralized location for IgxGrid features UI controls.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Component, Angular Grid, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid, Angular Data Grid Toolbar, Grid Toolbar, Angular Grid Toolbar, excel export, grid column hiding chooser, grid column pinning chooser
---

### Grid Toolbar

The Grid in Ignite UI for Angular supports a **toolbar** feature which is essentially a container for **UI** operations. The toolbar is located at the top of the grid and it matches the grid's horizontal size. The toolbar container hosts different UI controls which are related to some of the grid's features - column hiding, column pinning, excel exporting, etc.

#### Demo

<div class="sample-container loading" style="height:420px">
    <iframe id="grid-toolbar-sample-1-iframe" src='{environment:demosBaseUrl}/grid-toolbar-sample-1' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="grid-toolbar-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

The IgxGrid's toolbar is shown using the grid's `showToolbar` property - just set it to `true`. The toolbar supports a textual title which is left aligned and its content is set using the grid's `toolbarTitle` property. The following code snippet demonstrates how to enable a toolbar and set its title:

```html
<igx-grid [data]="data" [autoGenerate]="true" height="400px" width="600px"
    [showToolbar]="true"
    toolbarTitle="Grid Title">
</igx-grid>
```

#### Features

The IgxGrid's toolbar can be configured to allow columns hiding, columns pinning and exporting data to MS Excel and CSV. You can enable each feature independently by setting its dedicated boolean property to true:
- for column hiding set `columnHiding` to `true`
- for column pinning set `columnPinning` to `true`
- for MS Excel export set the grid's `exportExcel` property to `true`
- for CSV export set the grid's `exportCsv` property to `true`.

There are also properties for configuring each button's text and they are listed in the API section below.

<div class="sample-container loading" style="height:420px">
    <iframe id="grid-toolbar-sample-2-iframe" src='{environment:demosBaseUrl}/grid-toolbar-sample-2' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="grid-toolbar-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
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
    exportExcelText="Integration with Excel"
    exportCsvText="Export to CSV">
</igx-grid>
```

The export to MS Excel and the export to CSV features are using respectively the `IgxExcelExporterService` and `IgxCsvExporterService` as providers. If you need to use any of them you should specify them in the 'providers' array of your 'app.module.ts' file. For example the following code snippet demonstrates how to include all exporter services:

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

In addition to simply switching on and off the toolbar features, the export process can be further configured in the `onToolbarExporting` event which is emitted when the user initiates the export process. This event exposes both the exporter and the exporter's options.

> [!NOTE]
> By default when exporting to CSV the exporter exports using a comma separator and uses a '.csv' extension for the output file.
> You can customize these exporting parameters by subscribing to events of the exporter or changing the values of the exporter options fields.
> You can also cancel the export process by setting the cancel field of the event args to true.

The following code snippet demonstrates how to subscribe to the `onToolbarExporting` event and cancel the default exporting process.

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
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="grid-toolbar-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

<div class="divider"></div>

### API Summary

The Grid Toolbar service has a few more APIs to explore, which are listed below.

#### Inputs

The following inputs are available on the **IgxGrid** component:
| Name | Type | Description |
| :--- | :--- | :--- |
| `toolbar` | IgxGridToolbarComponent | A reference to the toolbar component. |
| `showToolbar` | boolean | Show or hide the grid's toolbar. |
| `toolbarTitle` | string | Sets the toolbar title. |
| `columnHiding` | boolean | Show or hide the column hiding feature. |
| `columnHidingTitle` | string | Sets the column hiding popup title's text. |
| `hiddenColumnsText` | string | Sets the column hiding feature button's text. |
| `columnPinning` | boolean | Show or hide the column pinning feature. |
| `columnPinningTitle` | string | Sets the column pinning popup title's text. |
| `pinnedColumnsText` | string | Sets the column pinning feature button's text. |
| `exportExcel` | boolean | Show or hide the option for exporting to MS Excel. |
| `exportCsv` | boolean | Show or hide the option for exporting to CSV. |
| `exportText` | string | Sets the textual content for the main export button. |
| `exportExcelText` | string | Sets the textual content for the MS Excel export button. |
| `exportCsvText` | string | Sets the textual content for the CSV export button. |

<div class="divider"></div>

The following inputs are available on the **IgxGridToolbarComponent** component:
| Name | Type | Description |
| :--- | :--- | :--- |
| `dropDownsMaxHeight` | string | Sets or gets the height for the toolbar's drop down panels. For example: '100px' or '50%'. |

<div class="divider"></div>

#### Outputs

The following outputs are available on the **IgxGrid** component:
| Name | Type | Description |
| :--- | :--- | :--- |
| `onToolbarExporting` | EventEmitter<`IGridToolbarExportEventArgs`> | Emitted when an export process is initiated by the user. |

<div class="divider"></div>

#### Event Arguments

The following fields are available on the **IGridToolbarExportEventArgs** event object:
| Name | Type | Description |
| :--- | :--- | :--- |
| `grid` | `IgxGridComponent` | A reference to the grid component which is about the be exported. |
| `exporter` | `IgxBaseExporter` | A reference to the exporter object which will be used for the export operation. |
| `options` | `IgxExporterOptionsBase` | A reference to the export options. |
| `cancel` | `boolean` | This field is set to `false` by default. If you set it to `true` the export operation with default parameters will not be started and you can provide your own export implementation. |

### Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
