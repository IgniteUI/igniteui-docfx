@@if (igxName === 'IgxGrid') {
---
title: Angular Grid Cell Editing | Data Manipulation | Ignite UI for Angular | Infragistics
_description: Configure in cell data manipulation with feature rich Angular UI grid, try the update data features and Angular CRUD by using the Ignite UI for Angular grid cell editing
_keywords: data manipulation, ignite ui for angular, infragistics
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular TreeGrid Cell Editing | Data Manipulation | Ignite UI for Angular
_description: Configure in cell data manipulation with feature rich Angular UI grid, try the update data features and Angular CRUD by using the Ignite UI for Angular tree grid cell editing
_keywords: data manipulation, ignite ui for angular, infragistics
_canonicalLink: grid/cell-editing
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular HierarchicalGrid Cell Editing | Data Manipulation | Ignite UI for Angular
_description: Configure in cell data manipulation with feature rich Angular UI grid, try the update data features and Angular CRUD by using the Ignite UI for Angular hierarchical grid cell editing
_keywords: data manipulation, ignite ui for angular, infragistics
_canonicalLink: grid/cell-editing
---
}

# @@igComponent cell editing and edit templates

Ignite UI for Angular @@igComponent component provides a great data manipulation capabilities and powerful API for Angular CRUD operations. By default the @@igComponent is using **in cell** editing and different editors will be shown based on the column data type, thanks to the **default cell editing template**. In addition, you can define your own custom templates for update-data actions and to override the default behavior for committing and discarding any changes.

## Angular @@igComponent cell editing and edit templates Example

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:650px">
    <iframe id="grid-editing-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-editing' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);" alt="Angular @@igComponent cell editing and edit templates Example"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:950px">
    <iframe id="treegrid-editing-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-editing' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);" alt="Angular @@igComponent cell editing and edit templates Example"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:660px">
    <iframe id="hierarchical-grid-editing-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-editing' width="100%" height="100%" seamless="" frameborder="0" onload="onSampleIframeContentLoaded(this);" alt="Angular @@igComponent cell editing and edit templates Example"></iframe>
</div>
<p style="margin: 0;padding-top: 0.5rem">Like this sample? Get access to our complete Angular toolkit and start building your own apps in minutes. <a class="no-external-icon mchNoDecorate trackCTA" target="_blank" href="https://www.infragistics.com/products/ignite-ui-angular/download" data-xd-ga-action="Download" data-xd-ga-label="Ignite UI for Angular">Download it for free.</a></p>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
<div class="divider--half"></div>

## Cell Editing

### Editing through UI


You can enter edit mode for specific cell, when an editable cell is focused in one of the following ways:
 - on double click;
 - on single click - Single click will enter edit mode only if the previously selected cell was in edit mode and currently selected cell is editable. If the previously selected cell was not in edit mode, single click will select the cell without entering edit mode;
 - on key press `Enter`;
 - on key press `F2`;

You can exit edit mode **without committing** the changes in one of the following ways:
 - on key press `Escape`;
 - when you perform *sorting*, *filtering*, *searching* and *hiding* operations;

You can exit edit mode and **commit** the changes in one of the following ways:
 - on key press `Enter`;
 - on key press `F2`;
 - on key press `Tab`;
 - on single click to another cell - when you click on another cell in the @@igComponent, your changes will be submitted.
 - operations like paging, resize, pin or move will exit edit mode and changes will be submitted.

> [!NOTE]
> The cell remains in edit mode when you scroll vertically or horizontally or click outside the @@igComponent. This is valid for both cell editing and row editing.

### Editing through API

You can also modify the cell value through the @@igxName API but only if primary key is defined:

@@if (igxName === 'IgxGrid') {
```typescript
...
    public updateCell() {
        this.grid1.updateCell(newValue, rowID, 'ReorderLevel');
    }
...
```
}
@@if (igxName === 'IgxTreeGrid') {
```typescript
...
    public updateCell() {
        this.treeGrid.updateCell(newValue, rowID, 'Age');
    }
...
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```typescript
...
    public updateCell() {
        this.hierarchicalGrid.updateCell(newValue, rowID, 'Age');
    }
...
```
}

Another way to update cell is directly through [`update`]({environment:angularApiUrl}/classes/igxgridcellcomponent.html#update) method of [`IgxGridCellComponent`]({environment:angularApiUrl}/classes/igxgridcellcomponent.html):

@@if (igxName === 'IgxGrid') {
```typescript
...
    public updateCell() {
        const cell = this.grid1.getCellByColumn(rowIndex, 'ReorderLevel');
        // You can also get cell by rowID if primary key is defined
        // cell = this.grid1.getCellByKey(rowID, 'ReorderLevel');
        cell.update(70);
    }
...
```
}
@@if (igxName === 'IgxTreeGrid') {
```typescript
...
    public updateCell() {
        const cell = this.treeGrid.getCellByColumn(rowIndex, 'Age');
        // You can also get cell by rowID if primary key is defined
        // const cell = this.treeGrid.getCellByKey(rowID, 'Age');
        cell.update(9999);
    }
...
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```typescript
...
    public updateCell() {
        const cell = this.hierarchicalGrid.getCellByColumn(rowIndex, 'ReorderLevel');
        // You can also get cell by rowID if primary key is defined
        // cell = this.hierarchicalGrid.getCellByKey(rowID, 'ReorderLevel');
        cell.update(70);
    }
...
```
}

Please notice that if the cell you want to update, via reference to [`IgxGridCellComponent`]({environment:angularApiUrl}/classes/igxgridcellcomponent.html), is outside @@igComponent's display container the new value will not be submitted.

### Cell Editing Templates

You can see and learn more for default cell editing templates in the [general editing topic](editing.md#editing-templates).

If you want to provide a custom template which will be applied when a cell is in edit mode, you can make use of the [`igxCellEditor` directive]({environment:angularApiUrl}/classes/igxcelltemplatedirective.html). To do this, you need to pass an `ng-template` with the `igxCellEditor` directive and properly bind your custom control to the [`cell.editValue`]({environment:angularApiUrl}/classes/igxcellcomponent.html#editvalue):

```html
<igx-column field="class" header="Class" [editable]="true" [filterable]="false" width="20%">
    <ng-template igxCellEditor let-cell="cell" let-value>
        <igx-select [(ngModel)]="cell.editValue" width="100%" [igxFocus]="true" [type]="'search'">
            <igx-select-item *ngFor="let class of classes" [value]="class">
                {{ class }}</igx-select-item>
        </igx-select>
    </ng-template>
</igx-column>
```
This code is used in the sample below which implements an [`IgxSelectComponent`](../select.md) component in the cells of the `Race`, `Class` and `Alignment` columns.

<div class="sample-container loading" style="height:625px">
    <iframe id="grid-select-amino-iframe" data-src='{environment:demosBaseUrl}/grid/grid-select' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-select-amino-iframe" data-demos-base-url="{environment:lobDemosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-select-amino-iframe" data-demos-base-url="{environment:lobDemosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

> [!WARNING]
> Due to limitations the property `type` of the [`IgxSelectComponent`](../select.md) component can only be set to `border` and `search`.

> [!NOTE]
> Any changes made to the cell's [`editValue`]({environment:angularApiUrl}/classes/igxcellcomponent.html#editvalue) in edit mode, will trigger the appropriate [editing event](#editing-events) on exit and apply to the [transaction state](batch-editing.md) (if transactions are enabled).

> [!NOTE]
> The cell template [`igxCell`](../grid/grid.md#cell-template) controls how a column's cells are shown when outside of edit mode.
> The cell editing template directive `igxCellEditor`, handles how a column's cells in edit mode are displayed and controls the edited cell's edit value.


For more information on how to configure columns and their templates, you can see the documentation for [Grid Columns configuration](grid.md#columns-configuration).

## CRUD operations

> [!NOTE]
> Please keep in mind that when you perform some **CRUD operation** all of the applied pipes like **filtering**, **sorting** and **grouping** will be re-applied and your view will be automatically updated.

The [`@@igxNameComponent`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) provides a straightforward API for basic CRUD operations.

### Adding a new record

The @@igComponent component exposes the [`addRow`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#addrow) method which will add the provided data to the data source itself.

@@if (igxName === 'IgxGrid') {
```typescript
// Adding a new record
// Assuming we have a `getNewRecord` method returning the new row data.
const record = this.getNewRecord();
this.grid.addRow(record);
```
}
@@if (igxName === 'IgxTreeGrid') {
```typescript
public addNewChildRow() {
    // Adding a new record
    // Assuming we have a `getNewRecord` method returning the new row data
    // And specifying the parentRowID.
    const record = this.getNewRecord();
    this.treeGrid.addRow(record, 1);
    }
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```typescript
public addRow() {
    // Adding a new record
    // Assuming we have a `getNewRecord` method returning the new row data
    const record = this.getNewRecord();
    this.hierarchicalGrid.addRow(record, 1);
    }
```
}

### Updating data in the @@igComponent

Updating data in the @@igComponent is achieved through [`updateRow`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#updaterow) and [`updateCell`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#updatecell) methods but **only if primary key for the grid is defined**. You can also directly update a cell and/or a row value through their respective `update` methods.

@@if (igxName === 'IgxGrid') {
```typescript
// Updating the whole row
this.grid.updateRow(newData, this.selectedCell.cellID.rowID);

// Just a particular cell through the Grid API
this.grid.updateCell(newData, this.selectedCell.cellID.rowID, this.selectedCell.column.field);

// Directly using the cell `update` method
this.selectedCell.update(newData);

// Directly using the row `update` method
const row = this.grid.getRowByKey(rowID);
row.update(newData);
```
}
@@if (igxName === 'IgxTreeGrid') {
```typescript
// Updating the whole row
this.treeGrid.updateRow(newData, this.selectedCell.cellID.rowID);

// Just a particular cell through the Tree Grid API
this.treeGrid.updateCell(newData, this.selectedCell.cellID.rowID, this.selectedCell.column.field);

// Directly using the cell `update` method
this.selectedCell.update(newData);

// Directly using the row `update` method
const row = this.treeGrid.getRowByKey(rowID);
row.update(newData);
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```typescript
// Updating the whole row
this.hierarchicalGrid.updateRow(newData, this.selectedCell.cellID.rowID);

// Just a particular cell through the Grid API
this.hierarchicalGrid.updateCell(newData, this.selectedCell.cellID.rowID, this.selectedCell.column.field);

// Directly using the cell `update` method
this.selectedCell.update(newData);

// Directly using the row `update` method
const row = this.hierarchicalGrid.getRowByKey(rowID);
row.update(newData);
```
}

### Deleting data from the @@igComponent

Please keep in mind that [`deleteRow()`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#deleterow) method will remove the specified row only if primary key is defined.

@@if (igxName === 'IgxGrid') {
```typescript
// Delete row through Grid API
this.grid.deleteRow(this.selectedCell.cellID.rowID);
// Delete row through row object
const row = this.grid.getRowByIndex(rowIndex);
row.delete();
```
}
@@if (igxName === 'IgxTreeGrid') {
```typescript
// Delete row through Tree Grid API
this.treeGrid.deleteRow(this.selectedCell.cellID.rowID);
// Delete row through row object
const row = this.treeGrid.getRowByIndex(rowIndex);
row.delete();
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```typescript
// Delete row through Grid API
this.hierarchicalGrid.deleteRow(this.selectedCell.cellID.rowID);
// Delete row through row object
const row = this.hierarchicalGrid.getRowByIndex(rowIndex);
row.delete();
```
}
These can be wired to user interactions, not necessarily related to the **@@igSelector**; for example, a button click:
```html
<button igxButton igxRipple (click)="deleteRow($event)">Delete Row</button>
```

<div class="divider--half"></div>

### Cell validation on edit event
Using the grid's editing events we can alter how the user interacts with the grid.
In this example, we'll validate a cell based on the data entered in it by binding to the [`onCellEdit`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#oncelledit) event. If the new value of the cell does not meet our predefined criteria, we'll prevent it from reaching the data source by cancelling the event (`event.cancel = true`). We'll also display a custom error message using [`IgxToast`](../toast.md).

The first thing we need to is bind to the grid's event:

```html
<@@igSelector (onCellEdit)="handleCellEdit($event)"
...>
...
</@@igSelector>
```

The `onCellEdit` emits whenever **any** cell's value is about to be committed. In our `handleCellEdit` definition, we need to make sure that we check for our specific column before taking any action:

@@if (igxName === 'IgxGrid') {
```typescript
export class MyGridEventsComponent {
    ...
    public handleCellEdit(event: IGridEditEventArgs): void {
        const column = event.column;
        if (column.field === "Ordered") {
            const rowData = event.rowData;
            if (!rowData) {
                return;
            }
            if (event.newValue > rowData.UnitsInStock) {
                event.cancel = true;
                this.toast.show();
            }
        }
    }
}
```
If the value entered in a cell under the **Ordered** column is larger than the available amount (the value under **Units in Stock**), the editing will be cancelled and a toast with an error message will be displayed.
}
@@if (igxName === 'IgxTreeGrid') {
```typescript
export class MyTreeGridEventsComponent {
    ...
    public handleCellEdit(event: IGridEditEventArgs): void {
        const column = event.column;
        if (column.field === "Age") {
            if (event.newValue < 18) {
                event.cancel = true;
                this.toast.message = "Employees must be at least 18 years old!";
                this.toast.show();
            }
        } else if (column.field === "HireDate") {
            if (event.newValue > new Date().getTime()) {
                event.cancel = true;
                this.toast.message = "The employee hire date must be in the past!";
                this.toast.show();
            }
        }
    }
}
```
Here, we are validating two columns. If the user tries to set an invalid value for an employee's **Age** (below 18) or their **Hire Date** (a future date), the editing will be cancelled (the value will not be submitted) and a toast with an error message will be displayed.
}
@@if (igxName === 'IgxHierarchicalGrid') {
```typescript
export class MyHGridEventsComponent {
    ...
    public handleCellEdit(event: IGridEditEventArgs) {
        const today = new Date();
        const column = event.column;
        if (column.field === "Debut") {
            if (event.newValue > today.getFullYear()) {
                this.toast.message = "The debut date must be in the past!";
                this.toast.show();
                event.cancel = true;
            }
        } else if (column.field === "LaunchDate") {
            if (event.newValue > new Date()) {
                this.toast.message = "The launch date must be in the past!";
                this.toast.show();
                event.cancel = true;
            }
        }
    }
}
```
Here, we are validating two columns. If the user tries to change an artist's **Debut** year or an album's **Launch Date**, the grid will not allow any dates that are greater than today.
}

The result of the above validation being applied to our `@@igSelector` can be seen in the below demo:
@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:650px">
    <iframe id="grid-editing-events-iframe" src='{environment:demosBaseUrl}/grid/grid-editing-events' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-editing-events-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-editing-events-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:650px">
    <iframe id="treegrid-editing-events-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-editing-events' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-editing-events-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-editing-events-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:650px">
    <iframe id="hierarchical-grid-editing-events-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-editing-events' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-editing-events-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-editing-events-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}


## Styling

The @@igxName allows for its cells to be styled through the [Ignite UI for Angular Theme Library](../themes/component-themes.md). The grid's [theme]({environment:sassApiUrl}/index.html#function-igx-grid-theme) exposes a wide range of properties, which allow users to style many different aspects of the grid.

In the below steps, we are going to go over how you can style the grid's cell in edit mode and how you can scope those styles.

In order to use the [Ignite UI Theming Library](../themes/component-themes.md), we must first import the theme `index` file in our global styles:

### Importing style library

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
...
```
Now we can make use of all of the functions exposed by the Ignite UI for Angular theme engine.

### Defining a palette

After we've properly imported the index file, we create a custom palette that we can use. Let's define two colors that we like and use them to build a palette with [`igx-palette`](../themes/palette.md):

```scss
$white: #fff;
$blue: #4567bb;

$color-palette: igx-palette($primary: $white, $secondary: $blue);
```

### Defining themes

We can now define the theme using our palette. The cells are styled by the [`igx-grid-theme`]({environment:sassApiUrl}/index.html#function-igx-grid-theme), so we can use that to generate a theme for our @@igxName:

```scss
$custom-grid-theme: igx-grid-theme(
    $cell-editing-background: $blue,
    $cell-edited-value-color: $white,
    $cell-active-border-color: $white,
    $edit-mode-color: igx-color($color-palette, "secondary", 200)
);
```

### Applying the theme

The easiest way to apply our theme is with a `sass` `@include` statement in the global styles file:

```scss
@include igx-grid($custom-grid-theme);
```

This way, the theme will apply to **all** grids in our application. If we wish to apply this custom styling only to a specific component, we need to scope the theme.

### Scoped component theme

In order for the custom theme to affect only our specific component, we can move all of the styles we just defined from the global styles file to our custom component's style file (including the [import](#importing-style-library) of the `index` file).

This way, due to Angular's [`ViewEncapsulation`](https://angular.io/api/core/Component#encapsulation), our styles will be applied only to our custom component.

 >[!NOTE]
 >If the component is using an [`Emulated`](../themes/component-themes.md#view-encapsulation) ViewEncapsulation, it is necessary to penetrate this encapsulation using `::ng-deep` in order to style the grid.
 >[!NOTE]
 >We wrap the statement inside of a `:host` selector to prevent our styles from affecting elements *outside of* our component:

```scss
:host {
    ::ng-deep {
            @include igx-grid($custom-grid-theme);
        }
    }
}
```

### Styling Demo

In addition to the steps above, we can also style the controls that are used for the cells' editing templates: [`igx-input-group`](../input-group.md#styling), [`igx-datepicker`](../date-picker.md#styling) & [`igx-checkbox`](../checkbox.md#styling)

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:650px">
    <iframe id="grid-editing-style-iframe" data-src='{environment:demosBaseUrl}/grid/grid-editing-style' width="100%" height="100%" seamless frameborder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-editing-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-editing-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:950px">
    <iframe id="treegrid-editing-style-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-editing-style' width="100%" height="100%" seamless frameborder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-editing-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-editing-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:660px">
    <iframe id="hierarchical-grid-editing-style-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-editing-style' width="100%" height="100%" seamless frameborder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-editing-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-editing-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
<div class="divider--half"></div>

## API References

* [IgxGridCellComponent]({environment:angularApiUrl}/classes/igxgridcellcomponent.html)
* [@@igxNameComponent Styles]({environment:sassApiUrl}/index.html#function-igx-grid-theme)
@@if (igxName !== 'IgxTreeGrid') {* [IgxGridRowComponent]({environment:angularApiUrl}/classes/igxgridrowcomponent.html)}@@if (igxName === 'IgxTreeGrid') {* [IgxTreeGridRowComponent]({environment:angularApiUrl}/classes/igxtreegridrowcomponent.html)}
* [IgxInputDirective]({environment:angularApiUrl}/classes/igxinputdirective.html)
* [IgxDatePickerComponent]({environment:angularApiUrl}/classes/igxdatepickercomponent.html)
* [IgxDatePickerComponent Styles]({environment:sassApiUrl}/index.html#function-igx-date-picker-theme)
* [IgxCheckboxComponent]({environment:angularApiUrl}/classes/igxcheckboxcomponent.html)
* [IgxCheckboxComponent Styles]({environment:sassApiUrl}/index.html#function-igx-checkbox-theme)
* [IgxOverlay]({environment:angularApiUrl}/interfaces/overlaysettings.html)
* [IgxOverlay Styles]({environment:sassApiUrl}/index.html#function-igx-overlay-theme)


## Additional Resources
<div class="divider--half"></div>

* [@@igComponent overview](@@igMainTopic.md)
* [Virtualization and Performance](virtualization.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Pinning](column-pinning.md)
* [Column Resizing](column-resizing.md)
* [Selection](selection.md)
@@if (igxName !== 'IgxHierarchicalGrid') {* [Searching](search.md)}