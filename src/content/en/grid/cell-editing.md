---
title: Cell Editing in Angular Data Grid - Ignite UI for Angular
_description: The Grid is using in-cell editing. It has a default cell editing template, but it also lets you define your own custom templates for update-data action. Try it now!
_keywords: data manipulation, ignite ui for angular, infragistics, excel editing
_license: commercial
---





# Angular Grid Cell Editing

Ignite UI for Angular Grid component provides a great data manipulation capabilities and powerful API for Angular CRUD operations. By default the Grid is using **in cell** editing and different editors will be shown based on the column data type, thanks to the **default cell editing template**. In addition, you can define your own custom templates for update-data actions and to override the default behavior for committing and discarding any changes.

## Angular Grid cell editing and edit templates Example



<code-view style="height:650px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-editing/" alt="Angular Grid cell editing and edit templates Example">
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
- on single click to another cell - when you click on another cell in the Grid, your changes will be submitted.
- operations like paging, resize, pin or move will exit edit mode and changes will be submitted.

> [!NOTE]
> The cell remains in edit mode when you scroll vertically or horizontally or click outside the Grid. This is valid for both cell editing and row editing.

### Editing through API

You can also modify the cell value through the IgxGrid API but only if primary key is defined:



```typescript
public updateCell() {
    this.grid1.updateCell(newValue, rowID, 'ReorderLevel');
}
```





Another way to update cell is directly through [`update`]({environment:angularApiUrl}/classes/igxgridcell.html#update) method of [`IgxGridCell`]({environment:angularApiUrl}/classes/igxgridcell.html):



```typescript
public updateCell() {
    const cell = this.grid1.getCellByColumn(rowIndex, 'ReorderLevel');
    // You can also get cell by rowID if primary key is defined
    // cell = this.grid1.getCellByKey(rowID, 'ReorderLevel');
    cell.update(70);
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



### Grid Excel Style Editing


Using Excel Style Editing allows the user to navigate trough the cells just as he would using the Excel, and ever so quickly edit them.

Implementing this custom functionality can be done by utilizing the events of the grid. First we hook up to the grid's keydown events, and from there we can implement two functionalities:

- Constant edit mode

```typescript
public keydownHandler(event) {
  const key = event.keyCode;
  const grid = this.grid;
  const activeElem = grid.navigation.activeNode;

  if(
    (key >= 48 && key <= 57) ||
    (key >= 65 && key <= 90) ||
    (key >= 97 && key <= 122)){
        // Number or Alphabet upper case or Alphabet lower case
        const columnName = grid.getColumnByVisibleIndex(activeElem.column).field;
        const cell = grid.getCellByColumn(activeElem.row, columnName);
        if (cell && !cell.editMode) {
            cell.editMode = true;
            cell.editValue = event.key;
            this.shouldAppendValue = true;
        } else if (cell && cell.editMode && this.shouldAppendValue) {
            event.preventDefault();
            cell.editValue = cell.editValue + event.key;
            this.shouldAppendValue = false;
        }
    }
}
```

- `Enter`/ `Shift+Enter` navigation

```typescript
if (key == 13) {
    let thisRow = activeElem.row;
    const column = activeElem.column;
    const rowInfo = grid.dataView;

    // to find the next eiligible cell, we will use a custom method that will check the next suitable index
    let nextRow = this.getNextEditableRowIndex(thisRow, rowInfo, event.shiftKey);

    // and then we will navigate to it using the grid's built in method navigateTo
    this.grid.navigateTo(nextRow, column, (obj) => {
        obj.target.activate();
        this.grid.clearCellSelection();
        this.cdr.detectChanges();
    });
}
```

Key parts of finding the next eligible index would be:

```typescript
//first we check if the currently selected cell is the first or the last
if (currentRowIndex < 0 || (currentRowIndex === 0 && previous) || (currentRowIndex >= dataView.length - 1 && !previous)) {
return currentRowIndex;
}
// in case using shift + enter combination, we look for the first suitable cell going up the field
if(previous){
return  dataView.findLastIndex((rec, index) => index < currentRowIndex && this.isEditableDataRecordAtIndex(index, dataView));
}
// or for the next one down the field
return dataView.findIndex((rec, index) => index > currentRowIndex && this.isEditableDataRecordAtIndex(index, dataView));
```

Please check the full sample for further reference:

### Angular Grid Excel Style Editing Sample

<code-view style="height:550px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-editing-excel-style/" alt="Angular Grid Excel Style Editing Example">
</code-view>


Main benefits of the above approach include:

- Constant edit mode: typing while a cell is selected will immediately enter edit mode with the value typed, replacing the existing one
- Any non-data rows are skipped when navigating with `Enter`/`Shift+Enter`. This allows users to quickly cycle through their values.



## CRUD operations

> [!NOTE]
> Please keep in mind that when you perform some **CRUD operation** all of the applied pipes like **filtering**, **sorting** and **grouping** will be re-applied and your view will be automatically updated.

The [`IgxGridComponent`]({environment:angularApiUrl}/classes/igxgridcomponent.html) provides a straightforward API for basic CRUD operations.

### Adding a new record

The Grid component exposes the [`addRow`]({environment:angularApiUrl}/classes/igxgridcomponent.html#addRow) method which will add the provided data to the data source itself.



```typescript
// Adding a new record
// Assuming we have a `getNewRecord` method returning the new row data.
const record = this.getNewRecord();
this.grid.addRow(record);
```





### Updating data in the Grid

Updating data in the Grid is achieved through [`updateRow`]({environment:angularApiUrl}/classes/igxgridcomponent.html#updateRow) and [`updateCell`]({environment:angularApiUrl}/classes/igxgridcomponent.html#updateCell) methods but **only if primary key for the grid is defined**. You can also directly update a cell and/or a row value through their respective `update` methods.



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





### Deleting data from the Grid

Please keep in mind that [`deleteRow()`]({environment:angularApiUrl}/classes/igxgridcomponent.html#deleteRow) method will remove the specified row only if primary key is defined.



```typescript
// Delete row through Grid API
this.grid.deleteRow(this.selectedCell.cellID.rowID);
// Delete row through row object
const row = this.grid.getRowByIndex(rowIndex);
row.delete();
```




These can be wired to user interactions, not necessarily related to the **igx-grid**; for example, a button click:

```html
<button igxButton igxRipple (click)="deleteRow($event)">Delete Row</button>
```

<div class="divider--half"></div>

### Cell validation on edit event

Using the grid's editing events we can alter how the user interacts with the grid.
In this example, we'll validate a cell based on the data entered in it by binding to the [`cellEdit`]({environment:angularApiUrl}/classes/igxgridcomponent.html#cellEdit) event. If the new value of the cell does not meet our predefined criteria, we'll prevent it from reaching the data source by cancelling the event (`event.cancel = true`). We'll also display a custom error message using [`IgxToast`](../toast.md).

The first thing we need to is bind to the grid's event:

```html
<igx-grid (cellEdit)="handleCellEdit($event)"
...>
...
</igx-grid>
```

The `cellEdit` emits whenever **any** cell's value is about to be committed. In our `handleCellEdit` definition, we need to make sure that we check for our specific column before taking any action:



```typescript
export class MyGridEventsComponent {
    public handleCellEdit(event: IGridEditEventArgs): void {
        const column = event.column;
        if (column.field === 'Ordered') {
            const rowData = event.rowData;
            if (!rowData) {
                return;
            }
            if (event.newValue > rowData.UnitsInStock) {
                event.cancel = true;
                this.toast.open();
            }
        }
    }
}
```

If the value entered in a cell under the **Ordered** column is larger than the available amount (the value under **Units in Stock**), the editing will be cancelled and a toast with an error message will be displayed.




The result of the above validation being applied to our `igx-grid` can be seen in the below demo:


<code-view style="height:650px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-editing-events/" >
</code-view>






## Styling

The IgxGrid allows for its cells to be styled through the [`Ignite UI for Angular Theme Library`](../themes/sass/component-themes.md). The grid's [`grid-theme`]({environment:sassApiUrl}/themes#function-grid-theme) exposes a wide range of properties, which allow users to style many different aspects of the grid.

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

We can now define the theme using our palette. The cells are styled by the [`grid-theme`]({environment:sassApiUrl}/themes#function-grid-theme), so we can use that to generate a theme for our IgxGrid:

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



<code-view style="height:650px"
           no-theming
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-editing-style/" >
</code-view>





>[!NOTE]
>The sample will not be affected by the selected global theme from `Change Theme`.
<div class="divider--half"></div>

## API References

- [IgxGridCell]({environment:angularApiUrl}/classes/igxgridcell.html)
- [IgxGridComponent Styles]({environment:sassApiUrl}/themes#function-grid-theme)
_[IgxGridRow]({environment:angularApiUrl}/classes/igxgridrow.html)
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
- [Grid overview](grid.md)
- [Virtualization and Performance](virtualization.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Selection](selection.md)
* [Searching](search.md)
