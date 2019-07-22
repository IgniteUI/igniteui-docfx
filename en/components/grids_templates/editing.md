@@if (igxName === 'IgxGrid') {
---
title: Angular Grid Editing | Data Manipulation | Ignite UI for Angular | Infragistics
_description: Configure in cell data manipulation with feature rich Angular UI grid, try the update data features and Angular CRUD by using the Ignite UI for Angular grid editing
_keywords: data manipulation, ignite ui for angular, infragistics
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular TreeGrid Editing | Data Manipulation | Ignite UI for Angular
_description: Configure in cell data manipulation with feature rich Angular UI grid, try the update data features and Angular CRUD by using the Ignite UI for Angular tree grid editing
_keywords: data manipulation, ignite ui for angular, infragistics
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular HierarchicalGrid Editing | Data Manipulation | Ignite UI for Angular
_description: Configure in cell data manipulation with feature rich Angular UI grid, try the update data features and Angular CRUD by using the Ignite UI for Angular hierarchical grid editing
_keywords: data manipulation, ignite ui for angular, infragistics
---
}

### @@igComponent cell editing and edit templates

Ignite UI for Angular @@igComponent component provides a great data manipulation capabilities and powerful API for Angular CRUD operations. By default the @@igComponent is using `in cell` editing and different editors will be shown based on the data type of the column, thanks to the default cell editing template. In addition you can define your own custom templates for update data actions and to override the default behavior for committing and discarding any changes.

#### Demo

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:650px">
    <iframe id="grid-editing-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-editing' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:950px">
    <iframe id="treegrid-editing-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-editing' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:660px">
    <iframe id="hierarchical-grid-editing-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-editing' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
<div class="divider--half"></div>

In order to be able to enter edit mode for specific cell, you should first set the column to be [`editable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#editable). If you want to use a data type specific *edit templates*, you should specify the column [`dataType`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#datatype) property. So let's now see what are the default templates for each type:

 - For `string` data type, default template is using [**igxInput**]({environment:angularApiUrl}/classes/igxinputdirective.html)
 - For `number` data type, default template is using **[igxInput]({environment:angularApiUrl}/classes/igxinputdirective.html) type="number"**, so if you try to update cell to a value which can not be parsed to a number your change is going to be discarded, and the value in the cell will be set to **0**.
 - For `date` data type, default template is using [**igx-date-picker**]({environment:angularApiUrl}/classes/igxdatepickercomponent.html)
 - For `boolean` data type, default template is using [**igx-checkbox**]({environment:angularApiUrl}/classes/igxcheckboxcomponent.html)

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
Please notice that if the cell you want to update is outside @@igComponent's display container the new value will not be submitted.

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

@@if (igxName === 'IgxGrid') {
If you want to define a custom template which will be applied when the cell is in edit mode, you can see the documentation for [Grid Columns configuration](grid.md#columns-configuration).
}

### CRUD operations

> [!NOTE]
> Please keep in mind that when you perform some **CRUD operation** all of the applied pipes like **filtering**, **sorting** and **grouping** will be re-applied and your view will be automatically updated.

The [`@@igxNameComponent`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) provides a straightforward API for basic CRUD operations.

#### Adding a new record

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

#### Updating data in the @@igComponent

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

#### Deleting data from the @@igComponent

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

### Styling

The @@igxName allows for its cells to be styled through the [IgniteUI for Angular Theme Library](../themes/component-themes.md). The grid's [theme]({environment:sassApiUrl}/index.html#function-igx-grid-theme) exposes a wide range of properties, which allow users to style many different aspects of the grid.

In the below steps, we are going to go over how you can style the grid's cell in edit mode and how you can scope those styles.

In order to use the [Ignite UI Theming Library](themes/index.md), we must first import the theme `index` file in our global styles:

#### Importing style library

```scss
@import '~igniteui-angular/lib/core/styles/themes/index';
...
```
Now we can make use of all of the functions exposed by the IgniteUI theme engine.

#### Defining a palette

After we've properly imported the index file, we create a custom palette that we can use. Let's define two colors that we like and use them to build a palette with [`igx-palette`](themes/palettes.md):

```scss
$white: #fff;
$blue: #4567bb;

$color-palette: igx-palette($primary: $white, $secondary: $blue);
```

#### Defining themes

We can now define the theme using our palette. The cells are styled by the [`igx-grid-theme`]({environment:sassApiUrl}/index.html#function-igx-grid-theme), so we can use that to generate a theme for our @@igxName:

```scss
$custom-grid-theme: igx-grid-theme(
    $cell-editing-background: $blue,
    $cell-edited-value-color: $white,
    $cell-active-border-color: $white,
    $edit-mode-color: igx-color($color-palette, "secondary", 200)
);
```

#### Applying the theme

The easiest way to apply our theme is with a `sass` `@include` statemenet in the global styles file:

```scss
@include igx-grid($custom-grid-theme); 
```

This way, the theme will apply to **all** grids in our application. If we wish to apply this custom styling only to a specific component, we need to scope the theme.

#### Scoped component theme

In order for the custom theme do affect only our specific component, we can move all of the styles we just defined from the global styles file to our custom component's style file (including the [import](#importing-style-library) of the `index` file).

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

#### Styling Demo

In addition to the steps above, we can also style the controls that are used for the cells' editing templates: [`igx-input-group`](../input_group.md#styling), [`igx-datepicker`](../date_picker.md#styling) & [`igx-checkbox`](../checkbox.md#styling)

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:650px">
    <iframe id="grid-editing-style-iframe" data-src='{environment:demosBaseUrl}/grid/grid-editing-style' width="100%" height="100%" seamless frameborder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-editing-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:950px">
    <iframe id="treegrid-editing-style-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-editing-style' width="100%" height="100%" seamless frameborder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-editing-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:660px">
    <iframe id="hierarchical-grid-editing-style-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-editing-style' width="100%" height="100%" seamless frameborder="0" class="lazyload no-theming"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-editing-style-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
}
<div class="divider--half"></div>

### API References

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


### Additional Resources
<div class="divider--half"></div>

* [@@igComponent overview](@@igMainTopic.md)
* [Virtualization and Performance](virtualization.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Pinning](column_pinning.md)
* [Column Resizing](column_resizing.md)
* [Selection](selection.md)
@@if (igxName !== 'IgxHierarchicalGrid') {* [Searching](search.md)}