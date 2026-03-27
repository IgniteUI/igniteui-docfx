---
title: Cell Editing in Angular TreeGrid - Ignite UI for Angular
_description: The Grid is using in-cell editing. It has a default cell editing template, but it also lets you define your own custom templates for update-data action. Try it now!
_keywords: data manipulation, ignite ui for angular, infragistics
_license: commercial
_canonicalLink: grid/cell-editing
---




# Angular Tree Grid Cell Editing

Ignite UI for Angular Tree Grid component provides a great data manipulation capabilities and powerful API for Angular CRUD operations. By default the Tree Grid is using **in cell** editing and different editors will be shown based on the column data type, thanks to the **default cell editing template**. In addition, you can define your own custom templates for update-data actions and to override the default behavior for committing and discarding any changes.

## Angular Tree Grid cell editing and edit templates Example




<code-view style="height:950px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-editing/" alt="Angular Tree Grid cell editing and edit templates Example">
</code-view>



<div class="divider--half"></div>

> [!NOTE]
>By using `igxCellEditor` with any type of editor component, the keyboard navigation flow will be disrupted. The same applies to direct editing of the custom cell that enters edit mode. This is because the `focus` will remain on the `cell element`, not on the editor component that we've added - [`igxSelect`](../select.md), [`igxCombo`](../combo.md), etc. This is why we should take leverage of the `igxFocus` directive, which will move the focus directly in the in-cell component and will preserve `a fluent editing flow` of the cell/row.

## Cell Editing

### Editing through UI


You can enter edit mode for specific cell, when an editable cell is focused in one of the following ways:

- on double click;
- on single click - Single click will enter edit mode only if the previously selected cell was in edit mode and currently selected cell is editable. If the previously selected cell was not in edit mode, single click will select the cell without entering edit mode;
- on key press `Enter`;
- on key press `F2`;

You can exit edit mode **without committing** the changes in one of the following ways:

- on key press `Escape`;
- when you perform _sorting_, _filtering_, _searching_ and _hiding_ operations;

You can exit edit mode and **commit** the changes in one of the following ways:

- on key press `Enter`;
- on key press `F2`;
- on key press `Tab`;
- on single click to another cell - when you click on another cell in the Tree Grid, your changes will be submitted.
- operations like paging, resize, pin or move will exit edit mode and changes will be submitted.

> [!NOTE]
> The cell remains in edit mode when you scroll vertically or horizontally or click outside the Tree Grid. This is valid for both cell editing and row editing.

### Editing through API

You can also modify the cell value through the IgxTreeGrid API but only if primary key is defined:




```typescript
public updateCell() {
    this.treeGrid.updateCell(newValue, rowID, 'Age');
}
```




Another way to update cell is directly through [`update`]({environment:angularApiUrl}/classes/igxgridcell.html#update) method of [`IgxGridCell`]({environment:angularApiUrl}/classes/igxgridcell.html):




```typescript
public updateCell() {
    const cell = this.treeGrid.getCellByColumn(rowIndex, 'Age');
    // You can also get cell by rowID if primary key is defined
    // const cell = this.treeGrid.getCellByKey(rowID, 'Age');
    cell.update(9999);
}
```




### Cell Editing Templates

You can see and learn more for default cell editing templates in the [general editing topic](editing.md#editing-templates).

If you want to provide a custom template which will be applied when a cell is in edit mode, you can make use of the [`igxCellEditor` directive]({environment:angularApiUrl}/classes/igxcelltemplatedirective.html). To do this, you need to pass an `ng-template` marked with the `igxCellEditor` directive and properly bind your custom control to the [`cell.editValue`]({environment:angularApiUrl}/classes/igxgridcell.html#editValue):

```html
<igx-column field="class" header="Class" [editable]="true">
    <ng-template igxCellEditor let-cell="cell" let-value>
        <igx-select class="cell-select" [(ngModel)]="cell.editValue" [igxFocus]="true">
            <igx-select-item *ngFor="let class of classes" [value]="class">
                {{ class }}
            </igx-select-item>
        </igx-select>
    </ng-template>
</igx-column>
```

This code is used in the sample below which implements an [`IgxSelectComponent`](../select.md) in the cells of the `Race`, `Class` and `Alignment` columns.


<code-view style="height:625px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-select/" >
</code-view>

<div class="divider--half"></div>

> [!NOTE]
> Any changes made to the cell's [`editValue`]({environment:angularApiUrl}/classes/igxgridcell.html#editValue) in edit mode, will trigger the appropriate [editing event](editing.md#event-arguments-and-sequence) on exit and apply to the [transaction state](batch-editing.md) (if transactions are enabled).
> [!NOTE]
> The cell template [`igxCell`](../grid/grid.md#cell-template) controls how a column's cells are shown when outside of edit mode.
> The cell editing template directive `igxCellEditor`, handles how a column's cells in edit mode are displayed and controls the edited cell's edit value.
> [!NOTE]
>By using `igxCellEditor` with any type of editor component, the keyboard navigation flow will be disrupted. The same applies to direct editing of the custom cell that enters edit mode. This is because the `focus` will remain on the `cell element`, not on the editor component that we've added - [`igxSelect`](../select.md), [`igxCombo`](../combo.md), etc. This is why we should take leverage of the `igxFocus` directive, which will move the focus directly in the in-cell component and will preserve `a fluent editing flow` of the cell/row.


For more information on how to configure columns and their templates, you can see the documentation for [Grid Columns configuration](../grid/grid.md#angular-grid-column-configuration).



## CRUD operations

> [!NOTE]
> Please keep in mind that when you perform some **CRUD operation** all of the applied pipes like **filtering**, **sorting** and **grouping** will be re-applied and your view will be automatically updated.

The [`IgxTreeGridComponent`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html) provides a straightforward API for basic CRUD operations.

### Adding a new record

The Tree Grid component exposes the [`addRow`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#addRow) method which will add the provided data to the data source itself.




```typescript
public addNewChildRow() {
    // Adding a new record
    // Assuming we have a `getNewRecord` method returning the new row data
    // And specifying the parentRowID.
    const record = this.getNewRecord();
    this.treeGrid.addRow(record, 1);
}
```




### Updating data in the Tree Grid

Updating data in the Tree Grid is achieved through [`updateRow`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#updateRow) and [`updateCell`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#updateCell) methods but **only if primary key for the grid is defined**. You can also directly update a cell and/or a row value through their respective `update` methods.




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




### Deleting data from the Tree Grid

Please keep in mind that [`deleteRow()`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#deleteRow) method will remove the specified row only if primary key is defined.




```typescript
// Delete row through Tree Grid API
this.treeGrid.deleteRow(this.selectedCell.cellID.rowID);
// Delete row through row object
const row = this.treeGrid.getRowByIndex(rowIndex);
row.delete();
```



These can be wired to user interactions, not necessarily related to the **igx-tree-grid**; for example, a button click:

```html
<button igxButton igxRipple (click)="deleteRow($event)">Delete Row</button>
```

<div class="divider--half"></div>

### Cell validation on edit event

Using the grid's editing events we can alter how the user interacts with the grid.
In this example, we'll validate a cell based on the data entered in it by binding to the [`cellEdit`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#cellEdit) event. If the new value of the cell does not meet our predefined criteria, we'll prevent it from reaching the data source by cancelling the event (`event.cancel = true`). We'll also display a custom error message using [`IgxToast`](../toast.md).

The first thing we need to is bind to the grid's event:

```html
<igx-tree-grid (cellEdit)="handleCellEdit($event)"
...>
...
</igx-tree-grid>
```

The `cellEdit` emits whenever **any** cell's value is about to be committed. In our `handleCellEdit` definition, we need to make sure that we check for our specific column before taking any action:




```typescript
export class MyTreeGridEventsComponent {
    public handleCellEdit(event: IGridEditEventArgs): void {
        const column = event.column;
        if (column.field === 'Age') {
            if (event.newValue < 18) {
                event.cancel = true;
                this.toast.message = 'Employees must be at least 18 years old!';
                this.toast.open();
            }
        } else if (column.field === 'HireDate') {
            if (event.newValue > new Date().getTime()) {
                event.cancel = true;
                this.toast.message = 'The employee hire date must be in the past!';
                this.toast.open();
            }
        }
    }
}
```

Here, we are validating two columns. If the user tries to set an invalid value for an employee's **Age** (below 18) or their **Hire Date** (a future date), the editing will be cancelled (the value will not be submitted) and a toast with an error message will be displayed.



The result of the above validation being applied to our `igx-tree-grid` can be seen in the below demo:



<code-view style="height:650px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-editing-events/" >
</code-view>





## Styling

The IgxTreeGrid allows for its cells to be styled through the [`Ignite UI for Angular Theme Library`](../themes/sass/component-themes.md). The grid's [`grid-theme`]({environment:sassApiUrl}/themes#function-grid-theme) exposes a wide range of properties, which allow users to style many different aspects of the grid.

In the below steps, we are going to go over how you can style the grid's cell in edit mode and how you can scope those styles.

In order to use the [`Ignite UI Theming Library`](../themes/sass/component-themes.md), we must first import the theme `index` file in our global styles:

### Importing style library

```scss
@use "igniteui-angular/theming" as *;

// IMPORTANT: Prior to Ignite UI for Angular version 13 use:
// @import '~igniteui-angular/lib/core/styles/themes/index';
```

Now we can make use of all of the functions exposed by the Ignite UI for Angular theme engine.

### Defining a palette

After we've properly imported the index file, we create a custom palette that we can use. Let's define three colors that we like and use them to build a palette with [`palette`](../themes/palettes.md):

```scss
$white: #fff;
$blue: #4567bb;
$gray: #efefef;

$color-palette: palette(
  $primary: $white, 
  $secondary: $blue, 
  $surface: $gray
);
```

### Defining themes

We can now define the theme using our palette. The cells are styled by the [`grid-theme`]({environment:sassApiUrl}/themes#function-grid-theme), so we can use that to generate a theme for our IgxTreeGrid:

```scss
$custom-grid-theme: grid-theme(
  $cell-editing-background: $blue,
  $cell-edited-value-color: $white,
  $cell-active-border-color: $white,
  $edit-mode-color: color($color-palette, "secondary", 200)
);
```

### Applying the theme

The easiest way to apply our theme is with a `sass` `@include` statement in the global styles file:

```scss
@include grid($custom-grid-theme);
```

### Demo

In addition to the steps above, we can also style the controls that are used for the cells' editing templates: [`input-group`](../input-group.md#styling), [`datepicker`](../date-picker.md#styling) & [`checkbox`](../checkbox.md#styling)




<code-view style="height:950px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-editing-style/" >
</code-view>




>[!NOTE]
>The sample will not be affected by the selected global theme from `Change Theme`.
<div class="divider--half"></div>

## API References

- [IgxGridCell]({environment:angularApiUrl}/classes/igxgridcell.html)
- [IgxTreeGridComponent Styles]({environment:sassApiUrl}/themes#function-grid-theme)
_ [IgxTreeGridRow]({environment:angularApiUrl}/classes/igxtreegridrow.html)
- [IgxInputDirective]({environment:angularApiUrl}/classes/igxinputdirective.html)
- [IgxDatePickerComponent]({environment:angularApiUrl}/classes/igxdatepickercomponent.html)
- [IgxDatePickerComponent Styles]({environment:sassApiUrl}/themes#function-date-picker-theme)
- [IgxCheckboxComponent]({environment:angularApiUrl}/classes/igxcheckboxcomponent.html)
- [IgxCheckboxComponent Styles]({environment:sassApiUrl}/themes#function-checkbox-theme)
- [IgxOverlay]({environment:angularApiUrl}/interfaces/overlaysettings.html)
- [IgxOverlay Styles]({environment:sassApiUrl}/themes#function-overlay-theme)


## Additional Resources

<div class="divider--half"></div>

- [Build CRUD operations with igxGrid](../general/how-to/how-to-perform-crud.md)
- [Tree Grid overview](tree-grid.md)
- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)
* [Searching](search.md)
