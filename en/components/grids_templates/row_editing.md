---
title: Angular Grid Row Editing | UI Grid | Ignite UI for Angular | Infragistics
_description: Learn how to configure in row data manipulations with Ignite UI for Angular. Intuitive grid row editing and CRUD capabilities are available with the UI grid.
_keywords: row editing, igniteui for angular, infragistics
---

## @@igComponent Row Editing

The @@igComponent provides a convenient way to perform data manipulations through inline editing and a powerful API for Angular CRUD operations. Click on a row and press **Enter key** or simply double click with the mouse on the row that needs to be modified. 

#### Demo

The following sample demonstrates how to enable row editing in the @@igComponent. Changing a cell value and then clicking or navigating to another cell on the same row won't  update the row value until confirmed by using the **Done** button, or discarded by using **Cancel** button.

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="grid-row-editing-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-row-editing' width="100%" height="100%"
    seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-row-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-row-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:590px">
    <iframe id="tree-grid-row-editing-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-row-edit' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="tree-grid-row-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-row-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
   <div class="sample-container loading" style="height:510px">
    <iframe id="hierarchical-grid-row-editing-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-row-editing' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-row-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-row-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}

> [!NOTE]
> When a row is in edit mode, then clicking on a cell on another row will act like the Done button is pressed - submit all the changes of the previous row. If the new cell that gets focus is editable, then the new row also enters edit mode, while if the cell is not editable, then only the previous row exits edit mode.

### Row Editing Usage

To get started import the `@@igxNameModule` in the **app.module.ts** file:

```typescript
// app.module.ts

...
import { @@igxNameModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., @@igxNameModule],
    ...
})
export class AppModule {}
```

Then define a @@igComponent with bound data source and [`rowEditable`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#roweditable) set to true:
@@if (igxName ==='IgxGrid') {
```html
<div class="sample-wrapper">
    <igx-grid #gridRowEditTransaction [data]="data" [primaryKey]="'ProductID'" width="100%" height="500px"
        [rowEditable]="true">
        <igx-column field="ProductID" header="Product ID" editable="false"></igx-column>
        <igx-column field="ReorderLevel" header="ReorderLever" [dataType]="'number'"></igx-column>
        <igx-column field="ProductName" header="ProductName" [dataType]="'string'"></igx-column>
        <igx-column field="UnitsInStock" header="UnitsInStock" [dataType]="'number'">
            <ng-template igxCellEditor let-cell="cell">
                <input name="units" [(ngModel)]="cell.value" style="color: black" />
            </ng-template>
        </igx-column>
        <igx-column field="OrderDate" [dataType]="'date'"></igx-column>
        <igx-column field="Discontinued" header="Discontinued" [dataType]="'boolean'"></igx-column>
    </igx-grid>
</div>
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid #treeGrid [data]="data" [primaryKey]="EmployeID" [foreignKey]="PID" width ="100%"
               height ="500px" [rowEditable]="true" [rowSelectable]="true" [columnHiding]="true">
    <igx-column *ngFor="let c of columns"
        [editable] ="c.editable"
        [field]="c.field"
        [dataType]="c.dataType"
        [header]="c.label"
        [movable]="c.movable"
        [resizable]="c.resizable"
        [sortable]="c.sortable"
        [filterable]="c.filterable">
    </igx-column>
</igx-tree-grid>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
        <igx-hierarchical-grid #hierarchicalGrid class="hgrid" [data]="localdata" [autoGenerate]="false"
        [height]="'600px'" [width]="'100%'">
            <igx-column field="Artist" [editable]="true" [dataType]="'string'"></igx-column>
            <igx-column field="HasGrammyAward" [editable]="true" [dataType]="'boolean'">
            </igx-column>
            <igx-column field="Debut" [editable]="true" [dataType]="'number'"></igx-column>
            <igx-column field="GrammyNominations" [editable]="true" [dataType]="'number'" [hasSummary]="true"></igx-column>
            <igx-column field="GrammyAwards" [editable]="true" [dataType]="'number'"
            [hasSummary]="true"></igx-column>
            <igx-column width="10%">
                <ng-template igxCell let-cell="cell">
                    <button igxButton="icon" (click)="removeRow(cell.cellID.rowIndex)">
                        <igx-icon>delete</igx-icon>
                    </button>
                </ng-template>
            </igx-column>

        <igx-row-island [key]="'Albums'" #layout1 [autoGenerate]="false">
            <igx-column field="Album" [editable]="true" [dataType]="'string'"></igx-column>
            <igx-column field="Launch Date" [editable]="true" [dataType]="'date'"></igx-column>
            <igx-column field="Billboard Review" [editable]="true" [dataType]="'number'"></igx-column>
            <igx-column field="US Billboard 200" [editable]="true" [dataType]="'number'"></igx-column>
            <igx-row-island [key]="'Songs'" [autoGenerate]="false">
                    <igx-column field="No."></igx-column>
                    <igx-column field="Title"></igx-column>
                    <igx-column field="Released"></igx-column>
                    <igx-column field="Genre"></igx-column>
            </igx-row-island>
        </igx-row-island>
    </igx-hierarchical-grid>
```
}

> [!NOTE]
> Setting primary key is mandatory for row editing operations.

> [!NOTE]
> It's not needed to enable editing for individual columns. Using the [`rowEditable`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#roweditable) property in the @@igComponent, will mean that all rows, with defined `field` property, excluding primary one, will be editable. If you want to disable editing for specific column, then you set the [`editable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#editable) column's input to `false`.

@@if (igxName === 'IgxGrid') {
```typescript
import { Component, ViewChild } from "@angular/core";
import { data } from "./data";
import { IgxGridComponent } from "igniteui-angular";

@Component({
    selector: "app-grid-row-edit",
    styleUrls: [`grid-row-editing-sample.component.css`],
    templateUrl: "grid-row-editing-sample.component.html"
})
export class GridRowEditSampleComponent {
    @ViewChild("gridRowEdit", { read: IgxGridComponent }) public gridRowEdit: IgxGridComponent;

    public data: any[];

    constructor() {
        this.data = data;
    }
}
```
}

@@if (igxName === 'IgxTreeGrid') {
```typescript
import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxTreeGridComponent } from "igniteui-angular";
import { FLAT_DATA } from "./data";

@Component({
   providers: [],
    selector: "app-tree-grid-row-editing-sample",
    styleUrls: ["tree-grid-row-editing-sample.component.scss"],
    templateUrl: "tree-grid-row-editing-sample.component.html"
})
export class TreeGridRowEditSampleComponent implements OnInit {

    public data: any[];
    public columns: any[];

    @ViewChild("treeGrid") public treeGrid: IgxTreeGridComponent;
    public ngOnInit(): void {
        this.data = FLAT_DATA;

        this.columns = [
            { field: "FirstName", label: "First Name", resizable: true, movable: true, sortable: true, filterable: true, editable: true, dataType: "string" },
            { field: "LastName", label: "Last Name", resizable: false, movable: false, sortable: false, filterable: false, editable: true, dataType: "string" },
            { field: "Title", label: "Title", resizable: true, movable: true, sortable: true, filterable: true, editable: true, dataType: "string" },
            { field: "HireDate", label: "Hire Date", resizable: true, movable: true, sortable: true, filterable: true, editable: true, dataType: "date" }
        ];
    }
}
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```typescript
import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxRowIslandComponent, IgxHierarchicalGridComponent } from "igniteui-angular";
import { SINGERS } from './data';

@Component({
    selector: "hierarchical-grid-row-editing",
    styleUrls: ["./hierarchical-grid-row-editing.component.scss"],
    templateUrl: "hierarchical-grid-row-editing.component.html"
})

export class HGridRowEditingSampleComponent implements OnInit {
    public localdata;

    @ViewChild('layout1')
    layout1: IgxRowIslandComponent;

    @ViewChild('hierarchicalGrid')
    hierarchicalGrid: IgxHierarchicalGridComponent;

    constructor() {
        this.localdata = SINGERS;
    }
}
```
}

> [!NOTE]
> The @@igComponent uses internally a provider [`IgxBaseTransactionService`]({environment:angularApiUrl}/classes/igxbasetransactionservice.html) that holds pending cell changes, until row state submitted or cancelled.

### Positioning

- Default position of the overlay will be below the row that is in edit mode

- If there is no space below the row then overlay will appear above the row.

- Once shown - top or bottom, overlay will maintain this position during scrolling, until the overlay is closed.

### Behavior

- If row is in edit mode, then editing will continue, if a cell from the same row is clicked.

- Clicking "Done" button will finish row editing and will submit changes either to the data source, or to a transaction if available. In addition row will exit edit mode.

- Clicking "Cancel" button will revert all current changes in the row and row will exit edit mode.

- If row is in edit mode, then clicking a cell from another row will finish the current row edit and will submit new row changes (the same behavior clicking "Done" button). If the new cell that gets focus is editable, then the new row also enters edit mode, while if the cell is not editable, then only the previous row exits edit mode.

- If row is in edit mode and @@igComponent is scrolled so that row goes outside the visible area, the latter will be still in edit mode. When @@igComponent is scrolled, so that the row is visible again, the row will be still in edit mode. When clicked outside the @@igComponent, the cell will also stay in edit mode.

- When perform *sorting*, *filtering*, *searching* and *hiding* operations, will revert all current changes in the row and row will exit edit mode.

- When perform *paging*, *resizing*, *pinning* and *moving* operations, will exit edit mode and will submit latest value.

- Each modified cell gets edited style until row edit is finished. This is the behavior, when @@igComponent is not provided with transactions. When transactions are available - then cell edit style is applied until all the changes are committed.


### Keyboard Navigation

- `Enter` and `F2` enters row edit mode

- `Esc` exits row edit mode and doesn't submit any of the cell changes, made while the row was in edit mode.

- `Tab` move focus from one editable cell in the row to the next and from the right-most editable cell to the CANCEL and DONE buttons. Navigation from DONE button goes to the left-most editable cell within the currently edited row.


### Feature Integration

- Any data changing operation will terminate row editing operations and will submit current row changes. This will include operations like sorting, changing grouping and filtering criteria, paging, etc.

- Summaries will be updated after row edit is finished. Same is valid for the other features like sorting, filtering, etc.

@@if (igxName === 'IgxGrid') {
- Expanding and collapsing grouped rows will not terminate editing for the current row.
}

### Customizing Row Editing Overlay

#### Customizing Text

Customizing the text of the row editing overlay is possible using the `igxRowEditTextDirective`.
The `rowChangesCount` property is exposed and it holds the count of the changed cells.

```html
<ng-template igxRowEditText let-rowChangesCount>
	Changes: {{rowChangesCount}}
</ng-template>
 ```

#### Customizing Buttons
Customizing the buttons of the row editing overlay is possible using the `igxRowEditActionsDirective`.
If you want the buttons to be part of the keyboard navigation, then each on of them should have the `igxRowEditTabStopDirective`.

 ```html
 <ng-template igxRowEditActions let-endRowEdit>
	<button igxButton igxRowEditTabStop (click)="endRowEdit(false)">Cancel</button>
	<button igxButton igxRowEditTabStop (click)="endRowEdit(true)">Apply</button>
</ng-template>
 ```

### Styling

Using the [Ignite UI for Angular Theme Library](../themes/index.md), we can greatly alter the Row Editing overlay. 
The Row Editing overlay is a composite element - its UI is comprised of a couple of other components:
    - [`igx-banner`](../banner.md) in order to render its contents
    - [`igx-button`](../button.md)s are rendered in the default template (for the `Done` and `Cancel` buttons).

In the below example, we will make use of those two components' styling options, ([button styling](../button.md#styling) & [banner-styling](../banner.md#styling)), to customize the experience of our @@igxName's Row Editing.
We will also style the current cell's editor and background to make it more distinct. You can learn more about cell styling [here](editing.md#styling).

#### Import theme

The easiest way to style the Row Editing banner is to define styles in our `app`'s global style file (typically `styles.scss`).
The first thing we need to do is import the `themes/index` file - this gives us access to all the powerful tools of the Ignite UI for Angular Sass framework:

```scss
// in styles.scss
@import '~igniteui-angular/lib/core/styles/themes/index';
```

Once we've imported the themes file, we can create custom themes.

#### Define the theme

We can now define a custom [`banner theme`]({environment:sassApiUrl}/index.html#function-igx-banner-theme) that will affect our Row Editing background and make use of one of the predefined palettes namely `$purple-palette` :

```scss
    $my-light-gray: #e3e3e3;
    $my-banner-palette: $purple-palette;

    $banner-theme: igx-banner-theme( 
        $banner-background: $my-light-gray,
        $banner-message-color: igx-color($my-banner-palette, "secondary", 600)
    );
```

Here we are using `my-banner-palette` in conjunction with [`igx-color`]({environment:sassApiUrl}/index.html#function-igx-color) (exposed by the theme library) for generating our colors.

#### Include the theme

All we have to do now is apply the theme with a Sass `@include` statement. We pass our newly defined `$banner-theme` through the [`igx-banner mixin`]({environment:sassApiUrl}/index.html#mixin-igx-banner):

```scss
@include igx-banner($banner-theme); 
```

This will apply our custom banner theme to the Row Editing overlay. However, since we defined these in the global styles file, these styles will also apply to **all** banners in our application.

#### Component styles

Since the Row Editing overlay makes use of a lot of other components' themes, styling it via the global styles can affect other parts of our application (e.g. banners, buttons, etc.). The best way to prevent that is to scope our banner theme. We can define our styles (including the [`theme/index` import](#import-theme)) in the component containing our @@igSelector.

>[!NOTE]
>If the component is using an [`Emulated`](../themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to penetrate this encapsulation using `::ng-deep` in order to style the grid.
>We wrap the statement inside of a `:host` selector to prevent our styles from affecting elements *outside of* our component:

```scss
// custom.component.scss

:host {
    ::ng-deep {
        @include igx-banner($banner-theme);
    }
}
```

With the above syntax, our custom banner theme properly applies to the grid's Row Editing overlay.

#### Custom Templates

To further customize our Row Editing overlay, we can pass a custom template so we can style the `Done` and `Cancel` buttons separately:

```html
<!-- in component.html -->
<@@igSelector>
    ...
    <ng-template igxRowEditActions let-endRowEdit>
            <div class="custom-buttons">
                <button igxButton="icon" class="custom-button" igxRowEditTabStop (click)="endRowEdit(false)">
                    <igx-icon>clear</igx-icon>
                </button>
                <button igxButton="icon" class="custom-button" igxRowEditTabStop (click)="endRowEdit(true)">
                    <igx-icon>check</igx-icon>
                </button>
            </div>
        </ng-template>
    ...
</@@igSelector>
```

After we've defined our custom buttons, we can make use of the [`igx-button-theme`]({environment:sassApiUrl}/index.html#function-igx-button-theme) to style them. You can learn more about `igx-button` styling [here](../button.md#styling). We can create a custom theme for our `Done` and `Cancel`:

```scss
// custom.component.scss
...

$button-theme: igx-button-theme(
  $palette: $purple-palette
);

...
.custom-buttons {
    @include igx-button($button-theme);
  }
```

We scope our `@include` statement in `.custom-buttons` so that it is only applied to the `Done`and `Cancel` buttons.

#### Demo

After styling the banner and buttons, we also define a custom style for [the cell in edit mode](editing.md#styling). The result of all the combined styles can be seen below:

@@if (igxName === 'IgxGrid'){
<div class="sample-container loading" style="height:560px">
    <iframe id="grid-row-edit-style-iframe" data-src='{environment:demosBaseUrl}/grid/grid-row-edit-style' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-row-edit-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-row-edit-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}

@@if (igxName === 'IgxHierarchicalGrid'){
<div class="sample-container loading" style="height:560px">
    <iframe id="hierarchical-grid-row-edit-style-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-row-edit-style' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>  
<div>
<button data-localize="codesandbox" class="codesandbox-btn" data-iframe-id="hierarchical-grid-row-edit-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox
    </button>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="hierarchical-grid-row-edit-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz
    </button>
</div>
}


@@if (igxName === 'IgxTreeGrid'){
<div class="sample-container loading" style="height:560px">
    <iframe id="treegrid-row-edit-style-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-row-edit-style' width="100%" height="100%" seamless frameBorder="0" class="lazyload no-theming"></iframe>
</div>
<br/>  
<div>
<button data-localize="codesandbox" class="codesandbox-btn" data-iframe-id="treegrid-row-edit-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox
    </button>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="treegrid-row-edit-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz
    </button>
</div>
}

### API References

* [rowEditable]({environment:angularApiUrl}/classes/@@igTypeDoc.html#roweditable)
* [onRowEditEnter]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onroweditenter)
* [onRowEdit]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onrowedit)
* [rowEditDone]({environment:angularApiUrl}/classes/@@igTypeDoc.html#roweditdone)
* [onRowEditCancel]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onroweditcancel)
* [endEdit]({environment:angularApiUrl}/classes/@@igTypeDoc.html#endedit)
* [field]({environment:angularApiUrl}/classes/igxcolumncomponent.html#field)
* [editable]({environment:angularApiUrl}/classes/igxcolumncomponent.html#editable)
* [primaryKey]({environment:angularApiUrl}/classes/@@igTypeDoc.html#primarykey)
* [@@igxNameComponent]({environment:angularApiUrl}/classes/@@igTypeDoc.html)

### Additional Resources
<div class="divider--half"></div>

* [@@igComponent Overview](@@igMainTopic.md)
* [@@igComponent Editing](editing.md)
* [@@igComponent Transactions](batch_editing.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)