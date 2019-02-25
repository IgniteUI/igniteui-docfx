---
title: Grid Toolbar Component - Native Angular | Ignite UI for Angular
_description: With the Ignite UI for Angular Grid Toolbar component you can have a centralized location for IgxGrid features UI controls.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Component, Angular Grid, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid, Angular Data Grid Toolbar, Grid Toolbar, Angular Grid Toolbar, excel export, grid column hiding chooser, grid column pinning chooser
---

### Hierarchical Grid Toolbar

The Hierarchical Grid in Ignite UI for Angular provides an [`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html) which is essentially a container for **UI** operations. The toolbar is located at the top of the Hierarchical Grid and it matches the Hierarchical Grid's horizontal size. The toolbar container hosts different UI controls which are related to some of the Hierarchical Grid's features - column hiding, column pinning, excel exporting, etc.

#### Demo




<div class="sample-container loading" style="height:420px">
    <iframe id="hierarchical-grid-toolbar-sample-1-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-toolbar-title' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-toolbar-sample-1-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>


The toolbar is shown using the Hierarchical Grid's [`showToolbar`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#showtoolbar) property - just set it to **true**. The toolbar supports a textual title which is left aligned and its content is set using the Hierarchical Grid's [`toolbarTitle`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#toolbartitle) property. The following code snippet demonstrates how to enable a toolbar and set its title:




```html
<igx-hierarchical-grid #hierarchicalGrid class="hgrid" [data]="localdata" [showToolbar]="true" toolbarTitle="Singers" 
     [height]="'500px'" [width]="'800px'">
</igx-hierarchical-grid>
```


#### Features

The toolbar can be configured to allow column hiding, column pinning and exporting data to MS Excel and CSV. 
You can enable each feature independently by setting its dedicated boolean property to true:
- for column hiding set [`columnHiding`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#columnhiding) to **true**
- for column pinning set [`columnPinning`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#columnpinning) to **true**
- for MS Excel export set the Hierarchical Grid's [`exportExcel`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#exportexcel) property to **true**
- for CSV export set the Hierarchical Grid's [`exportCsv`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#exportcsv) property to **true**


> [!NOTE]
> When exporting the Hierarchical Grid or any of its child grids down the hierarchy, the exported data will be a flat collection of rows
> that belong to the respective grid (the child grids will not be included in the exported data).


There are also properties for configuring each button's text and they are listed in the API section below.




<div class="sample-container loading" style="height:420px">
    <iframe id="hierarchical-grid-toolbar-sample-2-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-toolbar-options' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-toolbar-sample-2-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>


The following code snippet demonstrates how to enable all features of the toolbar:




```html
 <igx-hierarchical-grid #hierarchicalGrid class="hgrid" [data]="localdata" [showToolbar]="true" toolbarTitle="Singers" 
    [columnHiding]="true" [columnPinning]="true" [height]="'500px'" [width]="'100%'">
...
</igx-hierarchical-grid>
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

#### Custom Content Template

If you need to add some application specific UI to the toolbar (like custom buttons for example) you may create an ng-template and mark it with the [`igxToolbarCustomContent`]({environment:angularApiUrl}/classes/igxgridtoolbarcustomcontentdirective.html) directive. The following code snippet demonstrates how to define such custom template:

```html
<igx-hierarchical-grid [showToolbar]="true" ...>

    ...

    <ng-template igxToolbarCustomContent let-hierarchicalGrid="grid">
        <button igxButton="flat" igxRipple igxRippleCentered="true" (click)="hierarchicalGrid.clearSort()">
            <igx-icon fontSet="material">clear</igx-icon>
            Clear Sort
        </button>
    </ng-template>
</igx-hierarchical-grid>
```

> [!NOTE]
> The [`igxToolbarCustomContent`]({environment:angularApiUrl}/classes/igxgridtoolbarcustomcontentdirective.html) directive's context contains two properties:
> `grid` - a reference to the [`IgxHierarchicalGridComponent`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html) containing the toolbar and
> `toolbar` - a reference to the [`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html)

The following sample demonstrates how to add an additional button to the toolbar to clear the sorting set by clicking on the columns' headers:




<div class="sample-container loading" style="height:420px">
    <iframe id="hierarchical-grid-toolbar-sample-3-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-toolbar-custom' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-toolbar-sample-3-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider"></div>


### API References

The Grid Toolbar service has a few more APIs to explore, which are listed below.

[`IgxGridToolbarComponent`]({environment:angularApiUrl}/classes/igxgridtoolbarcomponent.html)

[`IgxHierarchicalGridComponent`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html) properties:
* [`toolbar`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#toolbar)
* [`showToolbar`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#showtoolbar)
* [`toolbarTitle`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#toolbartitle)
* [`columnHiding`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#columnhiding)
* [`columnHidingTitle`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#columnhidingtitle)
* [`hiddenColumnsText`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#hiddencolumnstext)
* [`columnPinning`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#columnpinning)
* [`columnPinningTitle`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#columnpinningtitle)
* [`pinnedColumnsText`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#pinnedcolumnstext)
* [`exportExcel`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#exportexcel)
* [`exportCsv`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#exportcsv)
* [`exportText`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#exporttext)
* [`exportExcelText`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#exportexceltext)
* [`exportCsvText`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#exportcsvtext)

[`IgxHierarchicalGridComponent`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html) events:
* [`onToolbarExporting`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#ontoolbarexporting)

Styles:

* [`IgxHierarchicalGridComponent Styles`]({environment:sassApiUrl}/index.html#function-igx-grid-theme)

### Additional Resources

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)