---
title: Excel Exporter
_description: The IgniteUI Excel Exporter service can export data in Microsoft Excel format.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Excel Export
---

## Excel Exporter

<p class="highlight">
The IgniteUI Excel Exporter service can export data in Microsoft® Excel® format from both raw data (array) or from an `IgxGrid`.
The exporting functionality is encapsulated in the `IgxExcelExporterService` class.</p>
<div class="divider"></div>

### Excel Exporter Demo

<div class="sample-container loading" style="height: 100px;">
    <iframe id="excel-export-sample-iframe" src="{environment:demosBaseUrl}/export-excel"
        width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="excel-export-sample-iframe"
    data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

### Usage

To start using the IgniteUI Excel Exporter first import the **IgxExcelExporterService** in the **app.module.ts** file:

```typescript
// app.module.ts

...
import { IgxExcelExporterService } from "igniteui-angular/services/index";

export class AppModule {}
```

To initiate an export process you may use the handler of a button in your component's template.

```html
<button (click)="exportButtonHandler()">Export Data to Excel</button>
```

To export some data in MS Excel format you need to instantiate the `IgxExcelExporterService` class and invoke its `exportData` method. This method accepts as a first argument the data you want to export and the second argument is of type `IgxExcelExporterOptions` and allows you to configure the export process.

Here is the code which will execute the export process in the component's typescript file:

```typescript
// component.ts

...
import { IgxExcelExporterService, IgxExcelExporterOptions } from "igniteui-angular/services/index";
...

localData = [
  { Name: "Eric Ridley", Age: "26" },
  { Name: "Alanis Brook", Age: "22" },
  { Name: "Jonathan Morris", Age: "23" }
];

exportButtonHandler() {
  let ees: IgxExcelExporterService = new IgxExcelExporterService();
  ees.ExportData(this.localData, new IgxExcelExporterOptions("ExportedDataFile"));
}

```

If all went well, you should see an export button. When pressed, it will trigger the export process and the browser will download a file named "ExportedDataFile.xlsx" which contains the data from the `localData` array in MS Excel format. 


### Exporting IgxGrid's Data

The Excel Exporter service can also export data in MS Excel format from an `IgxGrid`. The only difference is that you need to invoke the 
`IgxExcelExporterService`'s `export` method and pass the `IgxGrid` as first argument.

Here is an example:

```html
<igx-grid #igxGrid1 [data]="localData" [autoGenerate]="true"></igx-grid>
<button (click)="exportButtonHandler()">Export IgxGrid</button>
```

```typescript
// component.ts

...
import { IgxExcelExporterService, IgxExcelExporterOptions } from "igniteui-angular/services/index";
import { IgxGridComponent } from "igniteui-angular/grid/grid.component";
...

@ViewChild("igxGrid1") igxGrid1: IgxGridComponent;

localData = [
  { Name: "Eric Ridley", Age: "26" },
  { Name: "Alanis Brook", Age: "22" },
  { Name: "Jonathan Morris", Age: "23" }
];

exportButtonHandler() {
  let ees: IgxExcelExporterService = new IgxExcelExporterService();
  ees.Export(this.igxGrid1, new IgxExcelExporterOptions("ExportedDataFile"));
}

```

<div class="sample-container loading" style="height: 450px;">
    <iframe id="excel-export-sample-iframe2" src="{environment:demosBaseUrl}/export-excel-sample-1"
        width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="excel-export-sample-iframe2"
    data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>



### Customizing the Exported Content

In the above examples the Excel Exporter service was exporting all available data. There are situation in which you may want to skip exporting a row or even an entire column. To achieve this you may hook to the `onColumnExport` or `onRowExport` which are fired respectively for each column or each row and cancel the respective event by setting the event argument object's `cancel` property to `true`.

The following example will exclude a column from the export if its header is "Age" and if its index is 1:

```typescript
// component.ts

...
  let ees: IgxExcelExporterService = new IgxExcelExporterService();
  ees.onColumnExport.subscribe((args: IColumnExportingEventArgs) => {
    if (args.header == "Age" && args.columnIndex == 1) {
        args.cancel = true;
    }
  });
  ees.Export(this.igxGrid1, new IgxExcelExporterOptions("ExportedDataFile"));
```

When you are exporting data from the `IgxGrid` the export process takes in account features like row filtering and column hidding and exports only the data visible in the grid. You can configure the exporter service to include filtered rows or hidden columns by setting properties on the `IgxExcelExporterOptions` object. These properties are described in below.

### API Summary

The Excel Exporter service has a few more APIs to explore, which are listed below.

#### Inputs

The following inputs are available on the **IgxExcelExporterService** component:
| Name | Type | Description |
| :--- | :--- | :--- |
| `export` | Method | Method for exporting IgxGrid component's data into MS Excel format. |
| `exportData` | Method | Method for exporting array data into MS Excel format. |

<div class="divider--half"></div>

The following inputs are available on the **IgxExcelExporterOptions** component:
| Name | Type | Description |
| :--- | :--- | :--- |
| `fileName` | string | Provide the name of the file for the export operation. |
| `ignorePinning` | boolean | pecifies if column pinning should be ignored. If ignoreColumnsOrder is set to true, this option will always be considered as set to true. |
| `ignoreColumnsOrder` | boolean | Specifies if the exporter should ignore the current column order in the grid. |
| `ignoreColumnsVisibility` | boolean | Specifies whether hidden columns should be exported. |
| `ignoreFiltering` | boolean | Specifies whether filtered out rows should be exported. |
| `columnWidth` | number | Specifies the width of the columns in the exported excel file. If left unspecified or 0, the width of the largest string in the column will be used. |
| `rowHeight` | number | Specifies the height of the rows in the exported excel file. If left unspecified or 0, the default height of the excel rows will be used. |

<div class="divider"></div>

#### Outputs

The following outputs are available on the **IgxExcelExporterService** component:
| Name | Type | Description |
| :--- | :--- | :--- |
| `onColumnExport` | EventEmitter<`IColumnExportingEventArgs`> | Emitted when an excel column is being exported. |
| `onRowExport` | EventEmitter<`IRowExportingEventArgs`> | Emitted when an excel row is being exported. |
| `onExportEnded` | EventEmitter<`ICsvExportEndedEventArgs`> | Emitted when the excel file has been exported. |

<div class="divider"></div>

### Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
