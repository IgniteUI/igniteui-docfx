---
title: Grid Toolbar Component - Native Angular | Ignite UI for Angular
_description: With the Ignite UI for Angular Grid Toolbar component you can have a centralized location for IgxGrid features UI controls.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Component, Angular Grid, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid, Angular Data Grid Toolbar
---

## Grid Toolbar

The Grid in ignite UI for Angular supports a **toolbar** component which provides **UI** controls related to the grid's features. The toolbar is located at the top of the grid and it matches the grid's horizontal size. The toolbar UI controls have properties which configure their visibility and behavior.

#### Demo

[demo DIV here]

The IgxGrid's toolbar is shown using the grid's `showToolbar` property - just set it to `true`. The toolbar supports a textual title which is left aligned and its content is set using the grid's `toolbarTitle` property. The following code snippet demonstrates how to create a toolbar and set its title:

```html
<igx-grid [data]="data" [autoGenerate]="true" height="500px" width="600px"
    [showToolbar]="true"
    toolbarTitle="Grid Title">
</igx-grid>
```



The IgxGrid's toolbar can be configured to allow IgxGrid's data exporting in different formats - MS Excel and CSV. You can enable each exporting format independently by setting its dedicated boolean property to true:
- for MS Excel export set the grid's `exportExcel` property to `true`
- for CSV export set the grid's `exportCsv` property to `true`

All export operations are represented by buttons in a drop-down. The drop-down is shown when the main export button (right aligned) is pressed.
There are properties for configuring each button's text and they are listed in the API section below.

[demo DIV here]


The following code snippet demonstrates how to enable the MS Excel export and CSV export features on the toolbar and also set titles for the exporting buttons:

```html
<igx-grid [data]="data" [autoGenerate]="true" height="400px" width="600px"
    [showToolbar]="true"
    toolbarTitle="Grid Title"
    [exportExcel]="true"
    [exportCsv]="true"
    exportText="Export"
    exportExcelText="Export to Excel"
    exportCsvText="Export to CSV">
</igx-grid>
```

When the user initiate an export process the IgxGrid's `onToolbarExporting` event is emited. This event can be canceled and this allows you to configure the export process by customizing its parameters as opposite to the export with default parameters which will be executed if you do not cancel the event.

> [!NOTE]
> By default when eporting to CSV the exporter exports using a comma separator and uses a '.csv' extension for the output file.
> You can customize this exporting parameters by canceling the `onToolbarExporting` event and set new parameters to the exporter reference available in the event arguments object.

The following code snippet demonstrates how to subscribe to the `onToolbarExporting` event and cancel the default exporting process.

```html
<igx-grid ... (onToolbarExporting)="toolbarExportingHandler($event)"></igx-grid>
```


```typescript
import { IgxExcelExporterService, IgxCsvExporterService } from "igniteui-angular/services/index";

public toolbarExportingHandler(args) {
    args.cancel = true; // cancel default exporting process
    let exporter;
    switch (args.type) {
        case "excel" :
            exporter = args.exporter as IgxExcelExporterService
            // configure and perform excel export operation here
            break;
        case "csv" :
            exporter = args.exporter as IgxCsvExporterService;
            // configure and perform csv export operation here
            break;
    }
}
```








### API Summary

The Grid Toolbar service has a few more APIs to explore, which are listed below.

#### Inputs

The following inputs are available on the **IgxGrid** component:
| Name | Type | Description |
| :--- | :--- | :--- |
| `showToolbar` | boolean | Show or hide the grid's toolbar. |
| `toolbarTitle` | string | Sets the toolbar title. |
| `exportExcel` | boolean | Show or hide the option for exporting to MS Excel. |
| `exportCsv` | boolean | Show ot hide the option for exporting to CSV. |
| `exportText` | string | Sets the textual content for the main export button. |
| `exportExcelText` | string | Sets the textual content for the MS Excel export button. |
| `exportCsvText` | string | Sets the textual content for the CSV export button. |

<!--
<div class="divider--half"></div>
-->


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
| `type` | `string` | Provides the export type which is initiated ("excel" / "csv"). |
| `cancel` | `boolean` | This field is set to `false` by default. If you set it to `true` an export with default paramerers will not be started and you can provide your own export implementation. |




















### Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
