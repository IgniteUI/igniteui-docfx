---
title: Export to Excel Component - Native Angular | Ignite UI for Angular
_description: Users can export their data for editing or offline presentation can do so in Excel format with the Export to Excel Ignite UI for Angular component.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Controls, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Grid, Angular Data Grid, Angular Grid Control, Angular Grid Component, Excel Export, Angular Excel Component, Angular Export Excel
---

## Excel Exporter

<p class="highlight">
The IgniteUI Excel Exporter service can export data in Microsoft® Excel® format from both raw data (array) or from an `IgxGrid`. The exporting functionality is encapsulated in the `IgxExcelExporterService` class and the data is exported in MS Excel table format. This format allows features like filtering, sorting, etc.</p>
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

To start using the IgniteUI Excel Exporter first import the **IgxExcelExporterService** in the **app.module.ts** file and add the service to the `providers` array:

```typescript
// app.module.ts

...
import { IgxExcelExporterService } from "igniteui-angular/services/index";

@NgModule({
  providers: [ IgxExcelExporterService ]
})

export class AppModule {}
```

To initiate an export process you may use the handler of a button in your component's template.

```html
<button (click)="exportButtonHandler()">Export Data to Excel</button>
```

You may access the exporter service by defining an argument of type `IgxExcelExporterService` in the component's constructor and the Angular framework will provide an instance of the service. To export some data in MS Excel format you need to invoke the exporter service's `exportData` method. This method accepts as a first argument the data you want to export and the second argument is of type `IgxExcelExporterOptions` and allows you to configure the export process.

Here is the code which will execute the export process in the component's typescript file:

```typescript
// component.ts

...
import { IgxExcelExporterService, IgxExcelExporterOptions } from "igniteui-angular/services/index";
...

public localData = [
  { Name: "Eric Ridley", Age: "26" },
  { Name: "Alanis Brook", Age: "22" },
  { Name: "Jonathan Morris", Age: "23" }
];

constructor(private excelExportService: IgxExcelExporterService) {
}

public exportButtonHandler() {
  this.excelExportService.exportData(this.localData, new IgxExcelExporterOptions("ExportedDataFile"));
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

@ViewChild("igxGrid1") public igxGrid1: IgxGridComponent;

public localData = [
  { Name: "Eric Ridley", Age: "26" },
  { Name: "Alanis Brook", Age: "22" },
  { Name: "Jonathan Morris", Age: "23" }
];

constructor(private excelExportService: IgxExcelExporterService) {
}

public exportButtonHandler() {
  this.excelExportService.export(this.igxGrid1, new IgxExcelExporterOptions("ExportedDataFile"));
}

```

<div class="sample-container loading" style="height: 300px;">
    <iframe id="excel-export-sample-iframe2" src="{environment:demosBaseUrl}/export-excel-sample-1"
        width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="excel-export-sample-iframe2"
    data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>



### Customizing the Exported Content

In the above examples the Excel Exporter service was exporting all available data. There are situations in which you may want to skip exporting a row or even an entire column. To achieve this you may hook to the `onColumnExport` and/or `onRowExport` events which are fired respectively for each column and/or each row and cancel the respective event by setting the event argument object's `cancel` property to `true`.

The following example will exclude a column from the export if its header is "Age" and if its index is 1:

```typescript
// component.ts

this.excelExportService.onColumnExport.subscribe((args: IColumnExportingEventArgs) => {
  if (args.header == "Age" && args.columnIndex == 1) {
      args.cancel = true;
  }
});
this.excelExportService.export(this.igxGrid1, new IgxExcelExporterOptions("ExportedDataFile"));
```

When you are exporting data from `IgxGrid` the export process takes in account features like row filtering and column hiding and exports only the data visible in the grid. You can configure the exporter service to include filtered rows or hidden columns by setting properties on the `IgxExcelExporterOptions` object. These properties are described in the table below.

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
| `ignorePinning` | boolean | Specifies if column pinning should be ignored. If ignoreColumnsOrder is set to true, this option will always be considered as set to true. |
| `ignoreColumnsOrder` | boolean | Specifies if the exporter should ignore the current column order in the grid. |
| `ignoreColumnsVisibility` | boolean | Specifies whether hidden columns should be exported. |
| `ignoreFiltering` | boolean | Specifies whether filtered out rows should be exported. |
| `ignoreSorting` | boolean | Specifies whether the exported data should be sorted as in the grid. |
| `exportAsTable` | boolean | Specifies whether the exported data should be formatted as Excel table. (True by default) |
| `columnWidth` | number | Specifies the width of the columns in the exported excel file. If left unspecified or 0, the width of the largest string in the column will be used. |
| `rowHeight` | number | Specifies the height of the rows in the exported excel file. If left unspecified or 0, the default height of the excel rows will be used. |

<div class="divider"></div>

#### Outputs

The following outputs are available on the **IgxExcelExporterService** component:
| Name | Type | Description |
| :--- | :--- | :--- |
| `onColumnExport` | EventEmitter<`IColumnExportingEventArgs`> | Emitted when an excel column is being exported. |
| `onRowExport` | EventEmitter<`IRowExportingEventArgs`> | Emitted when an excel row is being exported. |
| `onExportEnded` | EventEmitter<`IExcelExportEndedEventArgs`> | Emitted when the excel file has been exported. |

<div class="divider"></div>

### Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
