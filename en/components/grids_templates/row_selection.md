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

# @@igComponent Row Selection

With row selection in Ignite UI for Angular, there is row selector column that precedes all other columns within the row. When a user clicks on the row selector, the row will either become selected or deselected, enabling the user to select multiple rows of data.

### Demo

@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:700px">
    <iframe id="grid-selection-iframe" src='{environment:demosBaseUrl}/grid/grid-selection' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-selection-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-selection-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:700px">
    <iframe id="treegrid-selection-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-selection' width="100%" height="100%" seamless frameborder="0" class="lazyload" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-selection-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-selection-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:710px">
    <iframe id="hierarchical-grid-selection-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-selection' width="100%" height="100%" seamless frameborder="0" class="lazyload" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-selection-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-selection-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}

## Setup
In order to setup row selection in the [`@@igSelector`]({environment:angularApiUrl}/classes/@@igTypeDoc.html), you just need to set the **rowSelection** property. This property accepts **GridSelectionMode** enumeration. **GridSelectionMode** exposes the following tree modes: **none**, **single** and **multiple**. Below we will take a look at each of them in more detail.

### None Selection

In the [`@@igSelector`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) by default row selection is disabled, otherwise *([rowSelection]="'none'")*. So you can **not** select or deselect a row through interaction with the @@igComponent UI, the only way to complete these actions is to use the provided API methods.

### Single Selection

Single row selection can now be easily set up, the only thing you need to do, is to set `[rowSelection] = '"single"'` property. This gives you the opportunity to **select only one row within a grid**. You can select a row by clicking on a cell or pressing the *space* key when you focus on a cell of the row, and of course you can select a row by clicking on the row selector field. When row is selected or deselected **onRowSelectionChange** event is emitted.

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
    if (args.added.length && args.added[0] === 3) {
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
    if (args.added.length && args.added[0] === 3) {
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

### Multiple Selection

To enable multiple row selection in the [`@@igSelector`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) just set the [`rowSelection`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowSelection) property to `multiple`. This will enable a row selector field on each row and in the @@igComponent header. The row selector allows users to select multiple rows, with the selection persisting through scrolling, paging, and data operations, such as sorting and filtering. The row also can be selected by clicking on a cell or by pressing the *space* key when a cell is focused. If you have selected one row and click on another while holding the *shift* key, this will select the whole range of rows. In this selection mode, when you click on a single row, the previous selected rows will be deselected. If you *click* while holding the *ctrl* key, the row will be toggled and the previous selection will be preserved.

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
* In order to have proper row selection and cell selection, while @@igComponent has remote virtualization, a [`primaryKey`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#primarykey) should be provided.
}
@@if (igxName !== 'IgxTreeGrid') {
* When the @@igComponent has remote virtualization, then clicking the header checkbox will select/deselect all records that are currently in the grid. When new data is loaded in the @@igComponent on demand, newly added rows will not be selected and it is a limitation, so you should handle that behavior by yourself and you can select these rows by using the provided API methods.
}
* Row selection will trigger [`onRowSelectionChange`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onrowselectionchange) event. This event gives you information about the *new selection*, *old selection*, the rows that have been *added* and *removed* from the old selection. Also the event is *cancellable*, so this allows you to prevent selection.
* When row selection is enabled row selectors are displayed, but if you don't want to show them, you can set `[hideRowSelectors] = true`.
* When you switch between row selection modes at runtime, this will clear the previous row selection state.


## API usage

### Select rows programmatically

The below code example can be used to select one or multiple rows simultaneously (via [`primaryKey`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#primarykey)); Also, as a second parameter of this method, you can pass a boolean property which corresponds to whether the previous row selection will be cleared or not. By default the previous selection will be preserved.

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

### Deselect rows
If you need to deselect rows programmatically, you can use the `deselectRows(rowIds: [])` method.

```html
<!-- selectionExample.component.html -->

<@@igSelector ... [primaryKey]="'ID'">
...
</@@igSelector>
...
<button (click)="this.@@igObjectRef.deselectRows([1,2,5])">Deselect 1,2 and 5</button>
```

### Row selection event
When there is some change in the row selection **`onRowSelectionChange`** event is emitted. **`onRowSelectionChange`** exposes the following arguments:
- `oldSelection`  - array of row IDs that contains the previous state of the row selection.
- `newSelection` - array of row IDs that match the new state of the row selection.
- `added` - array of row IDs that are currently added to the selection.
- `removed` - array of row IDs that are currently removed according old selection state.
- `event` - the original event that triggered row selection change.
- `cancel` -  allows you the prevent the row selection change.
@@if (igxName === 'IgxHierarchicalGrid') {
- `owner` - if the event is triggered from a child grid, this will give you a reference to the component, from which the event is emitted.
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

### Select all rows
Another useful API method that [`@@igSelector`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) provides is `selectAll(onlyFilteredData)`. By default this method will select all data rows, but if filtering is applied, it will select only the rows that match the filter criteria. But if you call the method with *false* parameter, `selectAll(false)` will always select all data in the grid, even if filtering is applied.
> **Note** Keep in mind that `selectAll()` will not select the rows that are deleted.

### Deselect all rows
[`@@igSelector`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) provides `deselectAll(onlyFilteredData)` method, which by default will deselect all data rows, but if filtering is applied will deselect only the rows that match the filter criteria. But if you call the method with *false* parameter, `deselectAll(false)` will always clear all row selection state even if filtering is applied.

### How to get selected rows
If you need to see which rows are currently selected, you can get their row IDs with the `selectedRows` getter.

```typescript

public getSelectedRows() {
    const currentSelection = this.@@igObjectRef.selectedRows; // return array of row IDs
}
```

Additionally, assigning row IDs to `selectedRows` will allow you to change the grid's selection state.

@@if (igxName === 'IgxGrid') {
```typescript
public mySelectedRows = [1, 2, 3]; // an array of row IDs
```
```html
<igx-grid primaryKey="ProductID" rowSelection="multiple" [mySelectedRows]="selectedRows" [data]="data">
    <igx-column [field]="'ProductID'"></igx-column>
    <igx-column [field]="'ProductName'"></igx-column>
    <igx-column [field]="'UnitsInStock'"></igx-column>
</igx-grid>
```
}

@@if (igxName === 'IgxTreeGrid') {
```typescript
public mySelectedRows = ['Johnathan Winchester', 'Ana Sanders']; // an array of row IDs
```
```html
<igx-tree-grid primaryKey="ID" rowSelection="multiple" [selectedRows]="mySelectedRows" [data]="data">
    <igx-column [field]="'Name'"></igx-column>
    <igx-column [field]="'Title'"></igx-column>
</igx-tree-grid>
```
}


@@if (igxName === 'IgxHierarchicalGrid') {
```typescript
// arrays of row IDs
public mySelectedRows = ['Naomi Yepes', 'Ahmad Nazeri'];
public childSelectedRows = ['Initiation', 'Emergency'];
```
```html
<igx-hierarchical-grid primaryKey="Artist" rowSelection="multiple" [selectedRows]="mySelectedRows" [data]="data">
    <igx-column field="Artist"></igx-column>
    <igx-row-island [key]="'Albums'" rowSelection="multiple">
        <igx-column field="Album"></igx-column>
        <igx-column field="LaunchDate"></igx-column>
    </igx-row-island>
</igx-hierarchical-grid>
```
}

### Row selector templates
You can template header and row selectors in the @@igComponent and also access their contexts which provide useful functionality for different scenarios.

By default, the @@igComponent **handles all row selection interactions** on the row selector's parent container or on the row itself, leaving just the state visualization for the template. Overriding the base functionality should generally be done using the [`onRowSelectionChange` event](#row-selection-event). In case you implement a custom template with a `click` handler which overrides the base functionality, you should stop the event's propagation to preserve the correct row state.

#### Row template
To create a custom row selector template,  within the `@@igSelector`, declare an `<ng-template>` with `igxRowSelector` directive. From the template you can access the implicitly provided context variable, with properties that give you information about the row's state.

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

The `rowID` property can be used to get a reference of an `@@igSelector` row. This is useful when you implement a `click` handler on the row selector element.
```html
<ng-template igxRowSelector let-rowContext>
    <igx-checkbox (click)="onSelectorClick($event, rowContext.rowID)"></igx-checkbox>
</ng-template>
```
In the above example we are using an `igx-checkbox` and we bind `rowContext.selected` to its `checked` property. See this in action in our [`Row Numbering Demo`](#row-numbering-demo).

@@if (igxName === 'IgxHierarchicalGrid') {
> [!NOTE]
The `rowContext.select()` and `rowContext.deselect()` methods are exposed in the template context of an `@@igSelector`. They make it easier to toggle the current row, especially in a child grid, when you implement a click handler that overrides the base functionality.
}

### Header template 
To create a custom header selector template, within the @@igComponent, declare an `<ng-template>` with `igxHeadSelector` directive. From the template you can access the implicitly provided context variable, with properties that give you information about the header's state.

The `selectedCount` property shows you how many rows are currently selected while `totalCount` shows you how many rows there are in the @@igComponent in total.
```html
<ng-template igxHeadSelector let-headContext>
    {{ headContext.selectedCount }} / {{ headContext.totalCount  }}
</ng-template>
```

The `selectedCount` and `totalCount` properties can be used to determine if the head selector should be checked or partially checked (indeterminate).
@@if (igxName === 'IgxGrid') {
```html
<igx-grid #grid [data]="gridData" primaryKey="ProductID" rowSelection="multiple">
    <!-- ... -->
    <ng-template igxHeadSelector let-headContext>
        <igx-checkbox
            [checked]=" headContext.selectedCount > 0 && headContext.selectedCount === headContext.totalCount"
            [indeterminate]="headContext.selectedCount > 0 && headContext.selectedCount !== headContext.totalCount">
        </igx-checkbox>
    </ng-template>
</igx-grid>
```
}

@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid #tGrid [data]="tGridData" primaryKey="ProductID" childDataKey="Products">
    <!-- ... -->
    <ng-template igxHeadSelector let-headContext>
        <igx-checkbox
            [checked]="headContext.selectedCount > 0 && headContext.selectedCount === headContext.totalCount"
            [indeterminate]="headContext.selectedCount > 0 && headContext.selectedCount !== headContext.totalCount">
        </igx-checkbox>
    </ng-template>
</igx-tree-grid>
```
}

@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid #hGrid [data]="hGridData" primaryKey="ProductID">
    <ng-template igxHeadSelector let-headContext>
        <igx-checkbox
            [checked]="headContext.selectedCount > 0 && headContext.selectedCount === headContext.totalCount"
            [indeterminate]="headContext.selectedCount > 0 && headContext.selectedCount !== headContext.totalCount">
        </igx-checkbox>
    </ng-template>

    <igx-row-island [key]="'ProductInfo'">
        <ng-template igxHeadSelector let-childHeadContext>
            <!-- header template goes here -->
        </ng-template>
        <ng-template igxRowSelector let-childRowContext>
            <!-- row template goes here -->
        </ng-template>
    </igx-row-island>
</igx-hierarchical-grid>
```
Each hierarchy level in an `@@igSelector` can have its own row and header templating.
}

@@if (igxName === 'IgxHierarchicalGrid') {
> [!NOTE]
The `headContext.selectAll()` and `headContext.deselectAll()` methods are exposed in the template context of an `@@igSelector`. They make it easier to toggle all rows, especially in a child grid, when you implement a click handler that overrides the base functionality.
}

### Row Numbering Demo
This demo shows the usage of custom header and row selectors. The latter uses `rowContext.index` to display row numbers and an `igx-checkbox` bound to `rowContext.selected`.
@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="grid-selection-template-numbering-iframe" src='{environment:demosBaseUrl}/grid/grid-selection-template-numbering' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-selection-template-numbering-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-selection-template-numbering-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="tree-grid-selection-template-numbers-iframe" data-src='{environment:demosBaseUrl}/tree-grid/tree-grid-selection-template-numbers' width="100%" height="100%" seamless frameborder="0" class="lazyload" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="tree-grid-selection-template-numbers-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-selection-template-numbers-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:610px">
    <iframe id="hierarchical-grid-selection-template-numbers-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-selection-template-numbers' width="100%" height="100%" seamless frameborder="0" class="lazyload" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-selection-template-numbers-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-selection-template-numbers-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}

@@if (igxName === 'IgxGrid') {
### Excel Style Row Selectors Demo
This demo uses custom templates to resemble Excel-like header and row selectors.
<div class="sample-container loading" style="height:550px">
    <iframe id="grid-selection-template-excel-iframe" src='{environment:demosBaseUrl}/grid/grid-selection-template-excel' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-selection-template-excel-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-selection-template-excel-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}

### Conditional Selection Demo
This demo prevents some rows from being selected using the `onRowSelectionChange` event and a custom template with disabled checkbox for non-selectable rows.
@@if (igxName === 'IgxGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="grid-conditional-row-selectors-iframe" src='{environment:demosBaseUrl}/grid/grid-conditional-row-selectors' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="grid-conditional-row-selectors-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-conditional-row-selectors-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<div class="sample-container loading" style="height:550px">
    <iframe id="treegrid-conditional-row-selectors-iframe" data-src='{environment:demosBaseUrl}/tree-grid/treegrid-conditional-row-selectors' width="100%" height="100%" seamless frameborder="0" class="lazyload" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="treegrid-conditional-row-selectors-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="treegrid-conditional-row-selectors-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:630px">
    <iframe id="hierarchical-grid-conditional-row-selectors-iframe" data-src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-conditional-row-selectors' width="100%" height="100%" seamless frameborder="0" class="lazyload" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="codesandbox" disabled class="codesandbox-btn" data-iframe-id="hierarchical-grid-conditional-row-selectors-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on codesandbox</button>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-conditional-row-selectors-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}

## API References

* [@@igxNameComponent API]({environment:angularApiUrl}/classes/@@igTypeDoc.html)
@@if (igxName !== 'IgxTreeGrid') {* [IgxGridRowComponent API]({environment:angularApiUrl}/classes/igxgridrowcomponent.html)}@@if (igxName === 'IgxTreeGrid') {* [IgxTreeGridRowComponent API]({environment:angularApiUrl}/classes/igxtreegridrowcomponent.html)}
* [IgxGridCellComponent API]({environment:angularApiUrl}/classes/igxgridcellcomponent.html)
* [@@igxNameComponent Styles]({environment:sassApiUrl}/index.html#function-igx-grid-theme)

## Additional Resources
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
