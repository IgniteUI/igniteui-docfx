@@if (igxName === 'IgxGrid') {
---
title: Angular Grid Row Selection | Ignite UI for Angular | infragistics 
_description: Check how easy it is to use Row and Multi-cell data select of the Ignite UI for Angular Material table by using angular events, API or with mouse interactions.
_keywords: data select, igniteui for angular, infragistics
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Tree Grid Row Selection | Ignite UI for Angular | infragistics 
_description: Check how easy it is to use Row and Multi-cell data select of the Ignite UI for Angular Material table by using angular events, API or with mouse interactions.
_keywords: data select, igniteui for angular, infragistics
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular Hierarchical Grid Row Selection | Ignite UI for Angular | infragistics 
_description: Check how easy it is to use Row and Multi-cell data select of the Ignite UI for Angular Material table by using angular events, API or with mouse interactions.
_keywords: data select, igniteui for angular, infragistics
---
}

### @@igComponent Row Selection

With row selection in Ignite UI for Angular, there is row selector column that precedes all other columns within the row. When a user clicks on the row selector, the row will either become selected or deselected, enabling the user to select multiple rows of data.

#### Demo

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:700px">
    <iframe id="grid-selection-iframe" src='{environment:demosBaseUrl}/grid/grid-selection' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-selection-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:700px">
    <iframe id="treegrid-selection-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-selection' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-selection-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:710px">
    <iframe id="hierarchical-grid-selection-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-selection' width="100%" height="100%" seamless frameborder="0" class="lazyload"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-selection-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}

### Setup
In order to setup row selection in the [`@@igSelector`]({environment:angularApiUrl}/classes/@@igTypeDoc.html), you just need to set **rowSelection** property. This property accepts **GridSelectionMode** enumeration. **GridSelectionMode** expose the following tree modes: **none**, **single** and **multiple**. Below we will take a look in each of them in more details.

#### None Selection

In the [`@@igSelector`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) by default row selection is disabled, otherwise *([rowSelection]="'none'")*. So you can **not** select or deselect row through interaction with @@igComponent UI, the only way to complete these actions is to use the provided API methods.

#### Single Selection

Single row selection can be now easily setup, the only thing you need to do, is to set `[rowSelection] = '"single"'` property. This gives you the opportunity to **select only one row within a grid**. You can select a row by click over some cell or pressing *space* key when you focus a cell of the row, and of course you can select a row by clicking on row selector field. When row is selected or deselected **onRowSelectionChange** event is emitted.

@@if (igxName === 'IgxGrid') {
```html
<!-- selectionExample.component.html -->

<igx-grid #grid1 [data]="remote | async" [rowSelection]="'single'" (onRowSelectionChange)="handleRowSelection($event)"
    [width]="'800px'" [height]="'600px'" [allowFiltering]="true">
        ...
</igx-grid>
```
```typescript
/* selectionExample.component.ts */

public handleRowSelection(args) {
    if (args.added.lenght && args.added[0] === 3) {
        args.cancel = true;
    }
}
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<!-- selectionExample.component.html -->

<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [autoGenerate]="false" [height]="'530px'" width="100%"
            [rowSelection]="'single'" [allowFiltering]="true" (onRowSelectionChange)="handleRowSelection($event)">
    ...
</igx-tree-grid>
```
```typescript
/* selectionExample.component.ts */

public handleRowSelection(event) {
    if (args.added.lenght && args.added[0] === 3) {
        args.cancel = true;
    }
}
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false"
        [height]="'600px'" [width]="'100%'" [rowSelection]="'single'"
        (onRowSelectionChange)="handleRowSelection($event)" #hierarchicalGrid>
    ...
</igx-hierarchical-grid>
```
```typescript
/* selectionExample.component.ts */

    public handleRowSelection(event) {
    if (args.added.lenght && args.added[0] === 3) {
        args.cancel = true;
    }
    }
```
}

#### Multiple Selection

To enable multiple row selection in [`@@igSelector`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) just set [`rowSelection`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowSelection) property to `multiple`. This will enable a row selector field on each row and in the @@igComponent header. The row selector allows users to select multiple rows, with the selection persisting through scrolling, paging, and data operations such as sorting and filtering. The row also can be selected when you click over some cell or press *space* key when cell is focused. If you have selected one row and click over some other holding *shift* key, this will select the whole range of rows. In this selection mode when you click over single row, the previous selected rows are deselected. If you *click* and hold *ctrl* key, the row will be selected and the previous selection will be preserved.

@@if (igxName === 'IgxGrid') {
```html
<!-- selectionExample.component.html -->

<igx-grid #grid1 [data]="remote | async" [primaryKey]="'ProductID'" [rowSelection]="'multiple'" (onRowSelectionChange)="handleRowSelection($event)"
    [width]="'800px'" [height]="'600px'" [allowFiltering]="true">
    ...
</igx-grid>
```

}
@@if (igxName === 'IgxTreeGrid') {
```html
<!-- selectionExample.component.html -->

<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [height]="'530px'" width="100%" [rowSelection]="'multiple'" [allowFiltering]="true" (onRowSelectionChange)="handleRowSelection($event)">
    ...
</igx-tree-grid>
```

}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false"
        [height]="'600px'" [width]="'100%'" [rowSelection]="'multiple'"
        (onRowSelectionChange)="handleRowSelection($event)" #hierarchicalGrid>
    ...
</igx-hierarchical-grid>
```
}

**Notes**
@@if (igxName !== 'IgxTreeGrid') {
* In order to have proper row selection and cell selection, while @@igComponent has remote virtualization, [`primaryKey`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#primarykey) should be provided.
}
@@if (igxName !== 'IgxTreeGrid') {
* When @@igComponent has remote virtualization then clicking the header checkbox will select/deselect all records that are currently in the grid. When new data is loaded in the @@igComponent on demand newly added rows will not be selected and it is a limitation, so you should handle that behaviour by yourself and you can select this rows by using the provided API methods.
}
* Row selection will trigger [`onRowSelectionChange`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onrowselectionchange) event. This event gives you information about the *new selection*, *old selection*, the rows that has been *added* and *removed* from the old selection. Also the event is *cancellable*, so this allows you to prevent selection.
* When row selection is enabled row selectors are displayed, but if you don't want to show them, you can set `[hideRowSelectors] = true`.
* When you switch between row selection modes runtime, this will clear prevoius row selection state.


### Api usage

#### Select rows programmatically

The below code example can be used to select one or multiple rows simultaneously (via [`primaryKey`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#primarykey)); Also as a second parametar of this method you can pass a boolean property, which correspond to whether the previous row selection will be cleared or not. By default the previous selection will be preserved.

@@if (igxName === 'IgxGrid' || igxName === 'IgxTreeGrid') {
```html
<!-- selectionExample.component.html -->

<@@igSelector ... [primaryKey]="'ID'">
...
</@@igSelector>
...
<button (click)="this.@@igObjectRef.selectRows([1,2,5], true)">Select 1,2 and 5</button> // select rows and clear previous selection state
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<!-- selectionExample.component.html -->

<@@igSelector ... [primaryKey]="'artist'">
...
</@@igSelector>
...
<button (click)="this.@@igObjectRef.selectRows([1,2,5], false)">Select 1,2 and 5</button> // select rows and preserve previous selection state
```
}

This will add the rows which correspond to the data entries with IDs 1, 2 and 5 to the @@igComponent selection.

#### Deselect rows
If you need to deselect row programmatically, you can use `deselectRows(rowIds: [])` method.

```html
<!-- selectionExample.component.html -->

<@@igSelector ... [primaryKey]="'ID'">
...
</@@igSelector>
...
<button (click)="this.@@igObjectRef.deselectRows([1,2,5])">Deselect 1,2 and 5</button>
```

#### Row selection event
When there is some change in the row selection **`onRowSelectionChange`** event is emitted. **`onRowSelectionChange`** expose the following arguments:
- `oldSelection`  - array of row ids that contains the previous state of the row selection.
- `newSelection` - array of row ids that match the new state of the row selection.
- `added` - array of row ids that are currently added to the selection.
- `removed` - array of row ids that are currently removed according old selection state.
- `event` - the original event that trigger row selection change.
- `cancel` -  allows you the prevent the row selection change.
@@if (igxName === 'IgxHierarchicalGrid') {
- `owner` - if the event is triggered from child grid, this will give you reference to the component, from which the event is emitted.
}

```html
<!-- selectionExample.component.html -->

<@@igSelector (onRowSelectionChange)="handleRowSelectionChange($event)">
...
</@@igSelector>
```
```typescript
/* selectionExample.component.ts */

public handleRowSelectionChange(args) {
    args.cancel = true; // this will cancel the row selection
}

```

#### Select all rows
Another usefull API method that [`@@igSelector`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) provides is `selectAll(onlyFilteredData)`. This method by default will select all data rows, but if filtering is applied will select only the rows that match the filter criteria. But if you call the method with *false* parameter `selectAll(false)` will always select all data in the grid, no matter whether filtering is applied.
> **Note** Keep in mind that `selectAll()` will not select the rows that are deleted.

#### Delect all rows
[`@@igSelector`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) provides `deselectAll(onlyFilteredData)` method, which by default will deselect all data rows, but if filtering is applied will deselect only the rows that match the filter criteria. But if you call the method with *false* parameter `deselectAll(false)` will always clear row selection state no matter whether filtering is applied.

#### How to get selected rows
If you need to see which rows are currently selected, you can get their row ids with `selectedRows()` method.

```typescript

public getSelectedRows(args) {
    const currentSelection = this.@@igObjectRef.selectedRows(); // return array of row ids
}
```

### Styling Guidelines TODO

The theme engine exposes properties that allows us to style ...

### API References

* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
@@if (igxName !== 'IgxTreeGrid') {* [IgxGridRowComponent API]({environment:angularApiUrl}/classes/igxgridrowcomponent.html)}@@if (igxName === 'IgxTreeGrid') {* [IgxTreeGridRowComponent API]({environment:angularApiUrl}/classes/igxtreegridrowcomponent.html)}
* [IgxGridCellComponent API]({environment:angularApiUrl}/classes/igxgridcellcomponent.html)
* [@@igxNameComponent Styles]({environment:sassApiUrl}/index.html#function-igx-grid-theme)

### Additional Resources
<div class="divider--half"></div>

* [@@igComponent overview](@@igMainTopic.md)
* [Selection](selection.md)
* [Cell selection](cell_selection.md)
* [Paging](paging.md)
* [Filtering](filtering.md)
* [Sorting](sorting.md)
* [Summaries](summaries.md)
* [Column Moving](column_moving.md)
* [Column Pinning](column_pinning.md)
* [Column Resizing](column_resizing.md)
* [Virtualization and Performance](virtualization.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
