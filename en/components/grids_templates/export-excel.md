@@if (igxName === 'IgxGrid') {
---
title: Angular Grid Export to Excel - Ignite UI for Angular
_description: With Ignite UI Excel Exporter you can make client Excel functionality more convenient & simpler. This format allows features like filtering, sorting, etc.
_keywords: data export, ignite ui for angular, infragistics
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Tree Grid Export to Excel - Ignite UI for Angular
_description: With Ignite UI Excel Exporter you can make client Excel functionality more convenient & simpler. This format allows features like filtering, sorting, etc.
_keywords: data export, ignite ui for angular, infragistics
_canonicalLink: grid/export-excel
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Hierarchical Grid Export to Excel - Ignite UI for Angular
_description: With Ignite UI Excel Exporter you can make client Excel functionality more convenient & simpler. This format allows features like filtering, sorting, etc.
_keywords: data export, ignite ui for angular, infragistics
_canonicalLink: grid/export-excel
---
}
@@if (igxName === 'IgxPivotGrid') {
---
title: Angular Pivot Grid Export to Excel - Ignite UI for Angular
_description: With Ignite UI Excel Exporter you can make client Excel functionality more convenient & simpler. This format allows features like filtering, sorting, etc.
_keywords: data export, ignite ui for angular, infragistics
_canonicalLink: grid/export-excel
---
}

# Angular @@igComponent Export to Excel Service

@@if (igxName === 'IgxGrid' || igxName === 'IgxTreeGrid') {

<p class="highlight">

The Excel Exporter service can export data to excel from the @@igxName. The data export functionality is encapsulated in the [`IgxExcelExporterService`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html) class and the data is exported in MS Excel table format. This format allows features like filtering, sorting, etc. To do this you need to invoke the [`IgxExcelExporterService`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html)'s [`export`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html#export) method and pass the @@igxName component as first argument to export grid easily.
</p>

}

@@if (igxName === 'IgxHierarchicalGrid' || igxName === 'IgxPivotGrid') {

<p class="highlight">

The Excel Exporter service can export data to excel from the @@igxName. The data export functionality is encapsulated in the [`IgxExcelExporterService`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html) class. To trigger the process, you need to invoke the [`IgxExcelExporterService`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html)'s [`export`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html#export) method and pass the @@igxName component as the first argument.
</p>

}

<div class="divider"></div>

## Angular Excel Exporter Example

@@if (igxName === 'IgxGrid') {

<code-view style="height: 800px;" 
           data-demos-base-url="{environment:demosBaseUrl}"
           explicit-editor="stackblitz"
           iframe-src="{environment:demosBaseUrl}/services/export-excel-sample-1" alt="Angular Excel Exporter Example">
</code-view>

}
@@if (igxName === 'IgxTreeGrid') {

<code-view style="height: 350px;" 
           data-demos-base-url="{environment:demosBaseUrl}"
           explicit-editor="stackblitz"
           iframe-src="{environment:demosBaseUrl}/services/export-excel-tree-grid-sample" alt="Angular Excel Exporter Example">
</code-view>

}
@@if (igxName === 'IgxHierarchicalGrid') {

<code-view style="height: 600px;" 
        data-demos-base-url="{environment:demosBaseUrl}"
        explicit-editor="stackblitz"
        iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-excel-export" alt="Angular Excel Exporter Example">
</code-view>

}
@@if (igxName === 'IgxPivotGrid') {

<code-view style="height: 600px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           explicit-editor="stackblitz"
           iframe-src="{environment:demosBaseUrl}/pivot-grid/pivot-grid-export" alt="Angular Excel Exporter Example">
</code-view>

}

<div class="divider--half"></div>

## Exporting @@igComponent's Data

To start using the IgniteUI Excel Exporter first import the [`IgxExcelExporterService`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html) in the app.module.ts file and add the service to the `providers` array:

```typescript
// app.module.ts
import { IgxExcelExporterService } from 'igniteui-angular';
// import { IgxExcelExporterService } from '@infragistics/igniteui-angular'; for licensed package

@NgModule({
  providers: [ IgxExcelExporterService ]
})

export class AppModule {}
```

> [!Note]
> In v12.2.1 and later, the exporter services are provided in root, which means you no longer need to declare them in the AppModule providers.

To initiate an export process you may use the handler of a button in your component's template.

@@if (igxName !== 'IgxPivotGrid') {
```html
<@@igSelector #@@igObjectRef [data]="localData" [autoGenerate]="true"></@@igSelector>
<button (click)="exportButtonHandler()">Export @@igxName to Excel</button>
```
}

@@if (igxName === 'IgxPivotGrid') {
```html
<@@igSelector #@@igObjectRef [data]="localData" [pivotConfiguration]="pivotConfig"></@@igSelector>
<button (click)="exportButtonHandler()">Export @@igxName to Excel</button>
```
}

You may access the exporter service by defining an argument of type [`IgxExcelExporterService`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html) in the component's constructor and the Angular framework will provide an instance of the service. To export some data in MS Excel format you need to invoke the exporter service's [`export`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html#export) method and pass the @@igxName component as first argument.

Here is the code which will execute the export process in the component's typescript file:

```typescript
// component.ts
import { IgxExcelExporterService, IgxExcelExporterOptions } from 'igniteui-angular';
import { @@igxNameComponent } from 'igniteui-angular';

@ViewChild('@@igObjectRef') public @@igObjectRef: @@igxNameComponent;

constructor(private excelExportService: IgxExcelExporterService) {
}

public exportButtonHandler() {
  this.excelExportService.export(this.@@igObjectRef, new IgxExcelExporterOptions('ExportedDataFile'));
}
```

If all went well, you should see the @@igxName component and a button under it. When pressing the button, it will trigger the export process and the browser will download a file named "ExportedDataFile.xlsx" which contains the data from the @@igComponent component in MS Excel format.

@@if (igxName === 'IgxPivotGrid') {

> [!NOTE]
> Expand/collapse indicators in Excel are shown based on the hierarchy of the last dimension of the Pivot Grid.

> [!NOTE]
> The exported @@igComponent will not be formatted as a table, since Excel tables do not support multiple row headers.

}

@@if (igxName !== 'IgxPivotGrid') {
## Export All Data

There are some cases when you might be using remote operations like *Paging* and the Grid won't have access to all of its data. In these cases, we recommend using the [Excel Export Service](../exporter-excel.md) and pass the whole data collection, if available. Example:

```ts
public exportButtonHandler() {
  this.excelExportService.exportData(this.localData, new IgxExcelExporterOptions('ExportedDataFile'));
}
```

@@if (igxName === 'IgxGrid') {
## Export Grouped Data

To export grouped data you just need to group the @@igComponent by one or more columns. The browser will download a file named "ExportedDataFile.xlsx" which contains the data from the @@igComponent component in MS Excel format grouped by the selected column. Example:


<code-view style="height: 800px;" 
           data-demos-base-url="{environment:demosBaseUrl}"
           explicit-editor="stackblitz" 
           iframe-src="{environment:demosBaseUrl}/services/export-excel-sample-1" alt="Angular Grouped Data Excel Exporter Example">
</code-view>

}

## Export Multi Column Headers Grid

It is now possible to export @@igComponent with defined [multi-column headers](multi-column-headers.md). All headers will be reflected in the exported excel file as they are displayed in the @@igComponent. If you want to exclude the defined multi-column headers from the exported data you can set the [exporter option]({environment:angularApiUrl}/classes/igxexporteroptionsbase.html) [ignoreMultiColumnHeaders]({environment:angularApiUrl}/classes/igxexporteroptionsbase.html#ignoremulticolumnheaders) to `true`.

> [!NOTE]
> The exported @@igComponent will not be formatted as a table, since Excel tables do not support multiple row headers.

@@if (igxName === 'IgxGrid') {
<code-view style="height: 800px;" 
           data-demos-base-url="{environment:demosBaseUrl}"
           explicit-editor="stackblitz"
           iframe-src="{environment:demosBaseUrl}/grid/multi-column-headers-export" alt="Angular Multi-Column Headers Export">
</code-view>
}

@@if (igxName === 'IgxTreeGrid') {
<code-view style="height: 800px;" 
           data-demos-base-url="{environment:demosBaseUrl}"
           explicit-editor="stackblitz" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-multi-column-headers-export" alt="Angular Multi-Column Headers Export">
</code-view>
}

@@if (igxName === 'IgxHierarchicalGrid') {
<code-view style="height: 800px;" 
           data-demos-base-url="{environment:demosBaseUrl}"
           explicit-editor="stackblitz"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-multi-column-export" alt="Angular Multi-Column Headers Export">
</code-view>
}

## Export Grid with Frozen Column Headers

By default Excel Exporter service exports the grid with scrollable (unfrozen) column headers. There are scenarios in which you may want to freeze all headers on top of the exported excel file so they always stay in view as the user scrolls through the records. To achieve this you could set the [exporter option]({environment:angularApiUrl}/classes/igxexporteroptionsbase.html) [freezeHeaders]({environment:angularApiUrl}/classes/igxexporteroptionsbase.html#freezeHeaders) to `true`.

```typescript
public exportButtonHandler() {
    const exporterOptions = new IgxExcelExporterOptions('ExportedDataFile');
    exporterOptions.freezeHeaders = true;
    this.excelExportService.export(this.grid, exporterOptions);
}
```

}

## Customizing the Exported Content

In the above examples the Excel Exporter service was exporting all available data. There are situations in which you may want to skip exporting a row or even an entire column. To achieve this you may hook to the [`columnExporting`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html#columnexporting) and/or [`rowExporting`]({environment:angularApiUrl}/classes/igxexcelexporterservice.html#rowexporting) events which are fired respectively for each column and/or each row and cancel the respective event by setting the event argument object's [`cancel`]({environment:angularApiUrl}/interfaces/irowexportingeventargs.html#cancel) property to `true`.

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

When you are exporting data from the @@igComponent component, the export process takes in account features like row filtering and column hiding and exports only the data visible in the @@igComponent. You can configure the exporter service to include filtered rows or hidden columns by setting properties on the [`IgxExcelExporterOptions`]({environment:angularApiUrl}/classes/igxexcelexporteroptions.html) object.
## Known Limitations

@@if (igxName === 'IgxGrid') {
|Limitation|Description|
|--- |--- |
|Max worksheet size|The maximum worksheet size supported by Excel is 1,048,576 rows by 16,384 columns.|
|Cell Styling|The excel exporter service does not support exporting a custom style applied to a cell component. In such scenarios we recommend using the [Excel Library](../excel-library.md).|
}

@@if (igxName === 'IgxTreeGrid') {
|Limitation|Description|
|--- |--- |
|Hierarchy levels|The excel exporter service can create up to 8 levels of hierarchy.|
|Max worksheet size|The maximum worksheet size supported by Excel is 1,048,576 rows by 16,384 columns.|
|Cell Styling|The excel exporter service does not support exporting a custom style applied to a cell component. In such scenarios we recommend using the [Excel Library](../excel-library.md).|
}

@@if (igxName === 'IgxHierarchicalGrid') {
|Limitation|Description|
|--- |--- |
|Hierarchy levels|The excel exporter service can create up to 8 levels of hierarchy.|
|Max worksheet size|The maximum worksheet size supported by Excel is 1,048,576 rows by 16,384 columns.|
|Exporting pinned columns|In the exported Excel file, the pinned columns will not be frozen but will be displayed in the same order as they appear in the grid.|
|Cell Styling|The excel exporter service does not support exporting a custom style applied to a cell component. In such scenarios we recommend using the [Excel Library](../excel-library.md).|
}

@@if (igxName === 'IgxPivotGrid') {
|Limitation|Description|
|--- |--- |
|Max worksheet size|The maximum worksheet size supported by Excel is 1,048,576 rows by 16,384 columns.|
|Cell Styling|The excel exporter service does not support exporting a custom style applied to a cell component. In such scenarios we recommend using the [Excel Library](../excel-library.md).|
}

## API References

The Excel Exporter service has a few more APIs to explore, which are listed below.

* [IgxExcelExporterService API]({environment:angularApiUrl}/classes/igxexcelexporterservice.html)
* [IgxExcelExporterOptions API]({environment:angularApiUrl}/classes/igxexcelexporteroptions.html)

Additional components that were used:

* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
* [@@igxNameComponent Styles]({environment:sassApiUrl}/index.html#function-grid-theme)

<div class="divider"></div>

## Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
