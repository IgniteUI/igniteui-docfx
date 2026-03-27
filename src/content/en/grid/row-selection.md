---
title: Angular Grid Select Row - Ignite UI for Angular
_description: Enable row selection to improve UX and let users manage single or multiple rows. See how easy it is to configure Row data select with Ignite UI.
_keywords: data select, igniteui for angular, infragistics
_license: commercial
---





# Angular Grid Row Selection

With row selection in Ignite UI for Angular, there is row selector column that precedes all other columns within the row. When a user clicks on the row selector, the row will either become selected or deselected, enabling the user to select multiple rows of data.

## Angular Row Selection Example



The sample below demonstrates the three types of Grid's **row selection** behavior. Use the buttons below to enable each of the available selection modes. A brief description will be provided on each button interaction through a snackbar message box. Use the switch button to _hide_ or _show_ the row selector checkbox.


To get newly selected elements you can use **event.newSelection**:

```ts
public handleRowSelection(event: IRowSelectionEventArgs) {
    this.selectedRowsCount = event.newSelection.length;
    this.selectedRowIndex = event.newSelection[0];
    this.snackbarRowCount.open();
    this.snackbar.close();
    this.logAnEvent(`=> 'rowSelectionChanging' with value: ` + JSON.stringify(event.newSelection));
}
```

<code-view style="height:700px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-selection/" alt="Angular Row Selection Example">
</code-view>

<div class="divider--half"></div>




## Setup

In order to setup row selection in the [`igx-grid`]({environment:angularApiUrl}/classes/igxgridcomponent.html), you just need to set the **rowSelection** property. This property accepts **GridSelectionMode** enumeration. **GridSelectionMode** exposes the following three modes: **none**, **single** and **multiple**. Below we will take a look at each of them in more detail.

### None Selection

In the [`igx-grid`]({environment:angularApiUrl}/classes/igxgridcomponent.html) by default row selection is disabled, otherwise _([rowSelection]="'none'")_. So you can **not** select or deselect a row through interaction with the Grid UI, the only way to complete these actions is to use the provided API methods.

### Single Selection

Single row selection can now be easily set up, the only thing you need to do, is to set `[rowSelection] = '"single"'` property. This gives you the opportunity to **select only one row within a grid**. You can select a row by clicking on a cell or pressing the _space_ key when you focus on a cell of the row, and of course you can select a row by clicking on the row selector field. When row is selected or deselected **rowSelectionChanging** event is emitted.



```html
<!-- selectionExample.component.html -->

<igx-grid [data]="remote | async" [rowSelection]="'single'" [autoGenerate]="true"
          (rowSelectionChanging)="handleRowSelection($event)" [allowFiltering]="true">
</igx-grid>
```

```typescript
/* selectionExample.component.ts */

public handleRowSelection(args) {
    if (args.added.length && args.added[0] === 3) {
        args.cancel = true;
    }
}
```





### Multiple Selection

To enable multiple row selection in the [`igx-grid`]({environment:angularApiUrl}/classes/igxgridcomponent.html) just set the [`rowSelection`]({environment:angularApiUrl}/classes/igxgridcomponent.html#rowSelection) property to `multiple`. This will enable a row selector field on each row and in the Grid header. The row selector allows users to select multiple rows, with the selection persisting through scrolling, paging, and data operations, such as sorting and filtering. The row also can be selected by clicking on a cell or by pressing the _space_ key when a cell is focused. If you have selected one row and click on another while holding the _shift_ key, this will select the whole range of rows. In this selection mode, when you click on a single row, the previous selected rows will be deselected. If you _click_ while holding the _ctrl_ key, the row will be toggled and the previous selection will be preserved.



```html
<!-- selectionExample.component.html -->

<igx-grid [data]="remote | async" [primaryKey]="'ProductID'" [rowSelection]="'multiple'"
        (rowSelectionChanging)="handleRowSelection($event)" [allowFiltering]="true" [autoGenerate]="true">
</igx-grid>
```






```ts
<!-- selectionExample.component.ts -->

 public handleRowSelection(event: IRowSelectionEventArgs) {
    // use event.newSelection to retrieve primary key/row data of latest selected row
    this.selectedRowsCount = event.newSelection.length;
    this.selectedRowIndex = event.newSelection[0];
 }
```

**Notes**


- In order to have proper row selection and cell selection, while Grid has remote virtualization, a [`primaryKey`]({environment:angularApiUrl}/classes/igxgridcomponent.html#primarykey) should be provided.


- When the Grid has remote virtualization, then clicking the header checkbox will select/deselect all records that are currently in the grid. When new data is loaded in the Grid on demand, newly added rows will not be selected and it is a limitation, so you should handle that behavior by yourself and you can select these rows by using the provided API methods.

- Row selection will trigger [`rowSelectionChanging`]({environment:angularApiUrl}/classes/igxgridcomponent.html#rowSelectionChanging) event. This event gives you information about the _new selection_, _old selection_, the rows that have been _added_ and _removed_ from the old selection. Also the event is _cancellable_, so this allows you to prevent selection.
- When row selection is enabled row selectors are displayed, but if you don't want to show them, you can set `[hideRowSelectors] = true`.
- When you switch between row selection modes at runtime, this will clear the previous row selection state.


## API usage

### Select rows programmatically

The code snippet below can be used to select one or multiple rows simultaneously (via [`primaryKey`]({environment:angularApiUrl}/classes/igxgridcomponent.html#primaryKey)); Additionally, the second parameter of this method is a boolean property through which you may choose whether the previous row selection will be cleared or not. The previous selection is preserved by default.



```html
<!-- selectionExample.component.html -->

<igx-grid ... [primaryKey]="'ID'">
...
</igx-grid>
...
<button (click)="this.grid.selectRows([1,2,5], true)">Select 1,2 and 5</button> // select rows and clear previous selection state
```




This will add the rows which correspond to the data entries with IDs 1, 2 and 5 to the Grid selection.

### Deselect rows

If you need to deselect rows programmatically, you can use the `deselectRows(rowIds: [])` method.

```html
<!-- selectionExample.component.html -->

<igx-grid ... [primaryKey]="'ID'">
...
</igx-grid>
...
<button (click)="this.grid.deselectRows([1,2,5])">Deselect 1,2 and 5</button>
```

### Row selection event

When there is some change in the row selection **[`rowSelectionChanging`]({environment:angularApiUrl}/classes/igxgridcomponent.html#rowSelectionChanging)** event is emitted. **`rowSelectionChanging`** exposes the following arguments:

- `oldSelection`  - array of row's data that contains the previous state of the row selection.
- `newSelection` - array of row's data that match the new state of the row selection.
- `added` - array of row's data that are currently added to the selection.
- `removed` - array of row's data that are currently removed according old selection state.
- `event` - the original event that triggered row selection change.
- `cancel` -  allows you the prevent the row selection change.


#### Row selection event in remote data scenarios

In remote data scenarios, when the grid has a `primaryKey` set, [`rowSelectionChanging.oldSelection`]({environment:angularApiUrl}/interfaces/IRowSelectionEventArgs.html#oldSelection) event argument will not contain the full row data object for the rows that are currently out of the data view. In this case, `rowSelectionChanging.oldSelection` object will contain only one property, which is the `primaryKey` field. For the rest of the rows, currently in the data view, `rowSelectionChanging.oldSelection` will contain the whole row data.

```html
<!-- selectionExample.component.html -->

<igx-grid (rowSelectionChanging)="handleRowSelectionChange($event)">
...
</igx-grid>
```

```typescript
/* selectionExample.component.ts */

public handleRowSelectionChange(args) {
    args.cancel = true; // this will cancel the row selection
}

```

### Select all rows

Another useful API method that [`igx-grid`]({environment:angularApiUrl}/classes/igxgridcomponent.html) provides is `selectAll(onlyFilteredData)`. By default this method will select all data rows, but if filtering is applied, it will select only the rows that match the filter criteria. But if you call the method with _false_ parameter, `selectAll(false)` will always select all data in the grid, even if filtering is applied.
>[!NOTE]
> Keep in mind that `selectAll()` will not select the rows that are deleted.

### Deselect all rows

[`igx-grid`]({environment:angularApiUrl}/classes/igxgridcomponent.html) provides `deselectAll(onlyFilteredData)` method, which by default will deselect all data rows, but if filtering is applied will deselect only the rows that match the filter criteria. But if you call the method with _false_ parameter, `deselectAll(false)` will always clear all row selection state even if filtering is applied.

### How to get selected rows

If you need to see which rows are currently selected, you can get their row IDs with the `selectedRows` getter.

```typescript

public getSelectedRows() {
    const currentSelection = this.grid.selectedRows; // return array of row IDs
}
```

Additionally, assigning row IDs to `selectedRows` will allow you to change the grid's selection state.



```typescript
public mySelectedRows = [1, 2, 3]; // an array of row IDs
```

```html
<igx-grid primaryKey="ProductID" rowSelection="multiple" [autoGenerate]="false" [mySelectedRows]="selectedRows" [data]="data">
    <igx-column [field]="'ProductID'"></igx-column>
    <igx-column [field]="'ProductName'"></igx-column>
    <igx-column [field]="'UnitsInStock'"></igx-column>
</igx-grid>
```








### Row selector templates

You can template header and row selectors in the Grid and also access their contexts which provide useful functionality for different scenarios.

By default, the Grid **handles all row selection interactions** on the row selector's parent container or on the row itself, leaving just the state visualization for the template. Overriding the base functionality should generally be done using the [`rowSelectionChanging` event](#row-selection-event). In case you implement a custom template with a `click` handler which overrides the base functionality, you should stop the event's propagation to preserve the correct row state.

#### Row template

To create a custom row selector template,  within the `igx-grid`, declare an `<ng-template>` with `igxRowSelector` directive. From the template you can access the implicitly provided context variable, with properties that give you information about the row's state.

The `selected` property shows whether the current row is selected or not while the `index` property can be used to access the row index.

```html
<ng-template igxRowSelector let-rowContext>
    {{ rowContext.index }}
    <igx-checkbox
        [checked]="rowContext.selected"
        [readonly]="true"
    ></igx-checkbox>
</ng-template>
```

The `rowID` property can be used to get a reference of an `igx-grid` row. This is useful when you implement a `click` handler on the row selector element.

```html
<ng-template igxRowSelector let-rowContext>
    <igx-checkbox (click)="onSelectorClick($event, rowContext.key)"></igx-checkbox>
</ng-template>
```

In the above example we are using an `igx-checkbox` and we bind `rowContext.selected` to its `checked` property. See this in action in our [`Row Numbering Demo`](#row-numbering-demo).



### Header template

To create a custom header selector template, within the Grid, declare an `<ng-template>` with `igxHeadSelector` directive. From the template you can access the implicitly provided context variable, with properties that give you information about the header's state.

The `selectedCount` property shows you how many rows are currently selected while `totalCount` shows you how many rows there are in the Grid in total.

```html
<ng-template igxHeadSelector let-headContext>
    {{ headContext.selectedCount }} / {{ headContext.totalCount  }}
</ng-template>
```

The `selectedCount` and `totalCount` properties can be used to determine if the head selector should be checked or indeterminate (partially selected).


```html
<igx-grid [data]="gridData" primaryKey="ProductID" rowSelection="multiple">
    <!-- ... -->
    <ng-template igxHeadSelector let-headContext>
        <igx-checkbox
            [checked]=" headContext.selectedCount > 0 && headContext.selectedCount === headContext.totalCount"
            [indeterminate]="headContext.selectedCount > 0 && headContext.selectedCount !== headContext.totalCount">
        </igx-checkbox>
    </ng-template>
</igx-grid>
```









### Row Numbering Demo

This demo shows the usage of custom header and row selectors. The latter uses `rowContext.index` to display row numbers and an `igx-checkbox` bound to `rowContext.selected`.


<code-view style="height:550px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-selection-template-numbering/" >
</code-view>

<div class="divider--half"></div>






### Excel Style Row Selectors Demo

This demo uses custom templates to resemble Excel-like header and row selectors.

<code-view style="height:550px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-selection-template-excel/" >
</code-view>

<div class="divider--half"></div>


### Conditional Selection Demo

This demo prevents some rows from being selected using the `rowSelectionChanging` event and a custom template with disabled checkbox for non-selectable rows.


<code-view style="height:550px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-conditional-row-selectors/" >
</code-view>

<div class="divider--half"></div>




## API References

- [IgxGridComponent API]({environment:angularApiUrl}/classes/igxgridcomponent.html)
_[IgxGridRow API]({environment:angularApiUrl}/classes/igxgridrow.html)
- [IgxGridCell API]({environment:angularApiUrl}/classes/igxgridcell.html)
- [IgxGridComponent Styles]({environment:sassApiUrl}/themes#function-grid-theme)

## Additional Resources

<div class="divider--half"></div>

- [Grid overview](grid.md)
- [Selection](selection.md)
- [Cell selection](cell-selection.md)
- [Paging](paging.md)
- [Filtering](filtering.md)
- [Sorting](sorting.md)
- [Summaries](summaries.md)
- [Column Moving](column-moving.md)
- [Column Pinning](column-pinning.md)
- [Column Resizing](column-resizing.md)
- [Virtualization and Performance](virtualization.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
