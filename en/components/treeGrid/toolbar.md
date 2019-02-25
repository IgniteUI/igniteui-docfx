---
title: Grid Toolbar Component - Native Angular | Ignite UI for Angular
_description: With the Ignite UI for Angular Grid Toolbar component you can have a centralized location for IgxGrid features UI controls.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Component, Angular Grid, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid, Angular Data Grid Toolbar, Grid Toolbar, Angular Grid Toolbar, excel export, grid column hiding chooser, grid column pinning chooser
---

### Tree Grid Toolbar

The Tree Grid in Ignite UI for Angular provides an [`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html) which is essentially a container for **UI** operations. The toolbar is located at the top of the Tree Grid and it matches the Tree Grid's horizontal size. The toolbar container hosts different UI controls which are related to some of the Tree Grid's features - column hiding, column pinning, excel exporting, etc.

#### Demo



<div class="sample-container loading" style="height:420px">
    <iframe id="treegrid-toolbar-sample-4-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-toolbar-4' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-toolbar-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>



The toolbar is shown using the Tree Grid's [`showToolbar`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#showtoolbar) property - just set it to **true**. The toolbar supports a textual title which is left aligned and its content is set using the Tree Grid's [`toolbarTitle`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#toolbartitle) property. The following code snippet demonstrates how to enable a toolbar and set its title:



```html
<igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="true" height="400px" width="900px"
    [showToolbar]="true"
    toolbarTitle="Tree Grid Toolbar">
</igx-tree-grid>
```



#### Features

The toolbar can be configured to allow column hiding, column pinning and exporting data to MS Excel and CSV. 
You can enable each feature independently by setting its dedicated boolean property to true:
- for column hiding set [`columnHiding`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#columnhiding) to **true**
- for column pinning set [`columnPinning`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#columnpinning) to **true**
- for MS Excel export set the Tree Grid's [`exportExcel`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#exportexcel) property to **true**
- for CSV export set the Tree Grid's [`exportCsv`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#exportcsv) property to **true**



There are also properties for configuring each button's text and they are listed in the API section below.



<div class="sample-container loading" style="height:420px">
    <iframe id="treegrid-toolbar-sample-1-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-toolbar-1' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-toolbar-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>



The following code snippet demonstrates how to enable all features of the toolbar:



```html
<igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="true" height="400px" width="900px"
    [showToolbar]="true"
    toolbarTitle="Tree Grid Toolbar"
    [columnHiding]="true"
    [columnPinning]="true"
    [exportExcel]="true"
    [exportCsv]="true"
    exportText="Export"
    exportExcelText="Export to Excel"
    exportCsvText="Export to CSV">
</igx-tree-grid>
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

In addition to simply switching on and off the toolbar features, the export process can be further configured in the [`onToolbarExporting`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#ontoolbarexporting) event which is emitted when the user initiates the export process. This event exposes both the exporter and the exporter's options.

> [!NOTE]
> By default when exporting to CSV the exporter exports using a comma separator and uses a '.csv' extension for the output file.
> You can customize these exporting parameters by subscribing to events of the exporter or changing the values of the exporter options fields.
> You can also cancel the export process by setting the cancel field of the event args to true.

The following code snippet demonstrates how to subscribe to the [`onToolbarExporting`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#ontoolbarexporting) event and cancel the default exporting process.

```html
<igx-tree-grid ... (onToolbarExporting)="toolbarExportingHandler($event)"></igx-tree-grid>
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
        
        
        // Don't export image field
        columnArgs.cancel = columnArgs.header === "Name";
        
    });
}
```

The following sample demonstrates how to customize the exported files:



<div class="sample-container loading" style="height:420px">
    <iframe id="treegrid-toolbar-sample-2-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-toolbar-2' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-toolbar-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider"></div>


#### Custom Content Template

If you need to add some application specific UI to the toolbar (like custom buttons for example) you may create an ng-template and mark it with the [`igxToolbarCustomContent`]({environment:angularApiUrl}/classes/igxgridtoolbarcustomcontentdirective.html) directive. The following code snippet demonstrates how to define such custom template:

```html
<igx-tree-grid [showToolbar]="true" ...>

    ...

    <ng-template igxToolbarCustomContent let-treeGrid="grid">
        <button igxButton="flat" igxRipple igxRippleCentered="true" (click)="treeGrid.clearSort()">
            <igx-icon fontSet="material">clear</igx-icon>
            Clear Sort
        </button>
    </ng-template>
</igx-tree-grid>
```

> [!NOTE]
> The [`igxToolbarCustomContent`]({environment:angularApiUrl}/classes/igxgridtoolbarcustomcontentdirective.html) directive's context contains two properties:
> `grid` - a reference to the [`IgxTreeGridComponent`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html) containing the toolbar and
> `toolbar` - a reference to the [`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html)

The following sample demonstrates how to add an additional button to the toolbar to clear the sorting set by clicking on the columns' headers:



<div class="sample-container loading" style="height:420px">
    <iframe id="treegrid-toolbar-sample-3-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-toolbar-3' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-toolbar-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider"></div>



### API References

The Grid Toolbar service has a few more APIs to explore, which are listed below.

[`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html)

[`IgxTreeGridComponent`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html) properties:
* [`toolbar`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#toolbar)
* [`showToolbar`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#showtoolbar)
* [`toolbarTitle`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#toolbartitle)
* [`columnHiding`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#columnhiding)
* [`columnHidingTitle`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#columnhidingtitle)
* [`hiddenColumnsText`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#hiddencolumnstext)
* [`columnPinning`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#columnpinning)
* [`columnPinningTitle`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#columnpinningtitle)
* [`pinnedColumnsText`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#pinnedcolumnstext)
* [`exportExcel`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#exportexcel)
* [`exportCsv`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#exportcsv)
* [`exportText`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#exporttext)
* [`exportExcelText`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#exportexceltext)
* [`exportCsvText`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#exportcsvtext)

[`IgxTreeGridComponent`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html) events:
* [`onToolbarExporting`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#ontoolbarexporting)

Styles:

* [`IgxTreeGridComponent Styles`]({environment:sassApiUrl}/index.html#function-igx-grid-theme)

### Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)