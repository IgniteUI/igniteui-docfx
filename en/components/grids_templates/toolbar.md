---
title: Grid Toolbar Component - Native Angular | Ignite UI for Angular
_description: With the Ignite UI for Angular Grid Toolbar component you can have a centralized location for IgxGrid features UI controls.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Component, Angular Grid, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid, Angular Data Grid Toolbar, Grid Toolbar, Angular Grid Toolbar, excel export, grid column hiding chooser, grid column pinning chooser
---

### @@igComponent Toolbar

The @@igComponent in Ignite UI for Angular provides an [`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html) which is essentially a container for **UI** operations. The toolbar is located at the top of the @@igComponent and it matches the @@igComponent's horizontal size. The toolbar container hosts different UI controls which are related to some of the @@igComponent's features - column hiding, column pinning, excel exporting, etc.

#### Demo

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:420px">
    <iframe id="grid-toolbar-sample-1-iframe" src='{environment:demosBaseUrl}/grid/grid-toolbar-sample-1' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-toolbar-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:420px">
    <iframe id="treegrid-toolbar-sample-4-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-toolbar-4' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-toolbar-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:420px">
    <iframe id="hierarchical-grid-toolbar-sample-1-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-toolbar-title' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-toolbar-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}

The toolbar is shown using the @@igComponent's [`showToolbar`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#showtoolbar) property - just set it to **true**. The toolbar supports a textual title which is left aligned and its content is set using the @@igComponent's [`toolbarTitle`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#toolbartitle) property. The following code snippet demonstrates how to enable a toolbar and set its title:

@@if (igxName === 'IgxGrid') {
```html
<igx-grid [data]="data" [autoGenerate]="true" height="400px" width="600px"
    [showToolbar]="true"
    toolbarTitle="Grid Title">
</igx-grid>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="true" height="400px" width="900px"
    [showToolbar]="true"
    toolbarTitle="Tree Grid Toolbar">
</igx-tree-grid>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid #hierarchicalGrid class="hgrid" [data]="localdata" [showToolbar]="true" toolbarTitle="Singers" 
     [height]="'500px'" [width]="'800px'">
</igx-hierarchical-grid>
```
}

#### Features

The toolbar can be configured to allow column hiding, column pinning and exporting data to MS Excel and CSV. 
You can enable each feature independently by setting its dedicated boolean property to true:
- for column hiding set [`columnHiding`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnhiding) to **true**
- for column pinning set [`columnPinning`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnpinning) to **true**
- for MS Excel export set the @@igComponent's [`exportExcel`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#exportexcel) property to **true**
- for CSV export set the @@igComponent's [`exportCsv`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#exportcsv) property to **true**

@@if (igxName === 'IgxHierarchicalGrid') {
> [!NOTE]
> When exporting the Hierarchical Grid or any of its child grids down the hierarchy, the exported data will be a flat collection of rows
> that belong to the respective grid (the child grids will not be included in the exported data).
}

There are also properties for configuring each button's text and they are listed in the API section below.

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:420px">
    <iframe id="grid-toolbar-sample-2-iframe" src='{environment:demosBaseUrl}/grid/grid-toolbar-sample-2' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-toolbar-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:420px">
    <iframe id="treegrid-toolbar-sample-1-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-toolbar-1' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-toolbar-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:420px">
    <iframe id="hierarchical-grid-toolbar-sample-1-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-toolbar-options' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchica-grid-toolbar-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}

The following code snippet demonstrates how to enable all features of the toolbar:

@@if (igxName === 'IgxGrid') {
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
}
@@if (igxName === 'IgxTreeGrid') {
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
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
 <igx-hierarchical-grid #hierarchicalGrid class="hgrid" [data]="localdata" [showToolbar]="true" toolbarTitle="Singers" 
    [columnHiding]="true" [columnPinning]="true" [height]="'500px'" [width]="'100%'">
...
</igx-hierarchical-grid>
```
}

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
@@if (igxName !== 'IgxHierarchicalGrid') {
#### Customizing the Export

In addition to simply switching on and off the toolbar features, the export process can be further configured in the [`onToolbarExporting`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#ontoolbarexporting) event which is emitted when the user initiates the export process. This event exposes both the exporter and the exporter's options.

> [!NOTE]
> By default when exporting to CSV the exporter exports using a comma separator and uses a '.csv' extension for the output file.
> You can customize these exporting parameters by subscribing to events of the exporter or changing the values of the exporter options fields.
> You can also cancel the export process by setting the cancel field of the event args to true.

The following code snippet demonstrates how to subscribe to the [`onToolbarExporting`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#ontoolbarexporting) event and cancel the default exporting process.

```html
<@@igSelector ... (onToolbarExporting)="toolbarExportingHandler($event)"></@@igSelector>
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
        @@if (igxName === 'IgxGrid') {
        // Don't export image fields
        columnArgs.cancel = columnArgs.header === "Athlete" ||
                            columnArgs.header === "Country";
        }
        @@if (igxName === 'IgxTreeGrid') {
        // Don't export image field
        columnArgs.cancel = columnArgs.header === "Name";
        }
        @@if (igxName === 'IgxHierarchicalGrid') {
        // TODO
        }
    });
}
```

The following sample demonstrates how to customize the exported files:

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:420px">
    <iframe id="grid-toolbar-sample-3-iframe" src='{environment:demosBaseUrl}/grid/grid-toolbar-sample-3' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-toolbar-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:420px">
    <iframe id="treegrid-toolbar-sample-2-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-toolbar-2' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-toolbar-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider"></div>
}
}
#### Custom Content Template

If you need to add some application specific UI to the toolbar (like custom buttons for example) you may create an ng-template and mark it with the [`igxToolbarCustomContent`]({environment:angularApiUrl}/classes/igxgridtoolbarcustomcontentdirective.html) directive. The following code snippet demonstrates how to define such custom template:

```html
<@@igSelector [showToolbar]="true" ...>

    ...

    <ng-template igxToolbarCustomContent let-@@igObjectRef="grid">
        <button igxButton="flat" igxRipple igxRippleCentered="true" (click)="@@igObjectRef.clearSort()">
            <igx-icon fontSet="material">clear</igx-icon>
            Clear Sort
        </button>
    </ng-template>
</@@igSelector>
```

> [!NOTE]
> The [`igxToolbarCustomContent`]({environment:angularApiUrl}/classes/igxgridtoolbarcustomcontentdirective.html) directive's context contains two properties:
> `grid` - a reference to the [`@@igxNameComponent`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) containing the toolbar and
> `toolbar` - a reference to the [`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html)

The following sample demonstrates how to add an additional button to the toolbar to clear the sorting set by clicking on the columns' headers:

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:420px">
    <iframe id="grid-toolbar-sample-4-iframe" src='{environment:demosBaseUrl}/grid/grid-toolbar-sample-4' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-toolbar-sample-4-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:420px">
    <iframe id="treegrid-toolbar-sample-3-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-toolbar-3' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-toolbar-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:420px">
    <iframe id="hierarchical-grid-toolbar-sample-3-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-toolbar-custom' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-toolbar-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider"></div>
}

### API References

The Grid Toolbar service has a few more APIs to explore, which are listed below.

[`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html)

[`@@igxNameComponent`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) properties:
* [`toolbar`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#toolbar)
* [`showToolbar`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#showtoolbar)
* [`toolbarTitle`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#toolbartitle)
* [`columnHiding`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnhiding)
* [`columnHidingTitle`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnhidingtitle)
* [`hiddenColumnsText`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#hiddencolumnstext)
* [`columnPinning`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnpinning)
* [`columnPinningTitle`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#columnpinningtitle)
* [`pinnedColumnsText`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#pinnedcolumnstext)
* [`exportExcel`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#exportexcel)
* [`exportCsv`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#exportcsv)
* [`exportText`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#exporttext)
* [`exportExcelText`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#exportexceltext)
* [`exportCsvText`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#exportcsvtext)

[`@@igxNameComponent`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) events:
* [`onToolbarExporting`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#ontoolbarexporting)

Styles:

* [`@@igxNameComponent Styles`]({environment:sassApiUrl}/index.html#function-igx-grid-theme)

### Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)