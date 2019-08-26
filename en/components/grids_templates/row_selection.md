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

With row selection in Ignite UI for Angular, there is a checkbox that precedes all other columns within the row. When a user clicks on the checkbox, the row will either become selected or deselected, enabling the user to select multiple rows of data.

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

#### None Selection

In the [`@@igSelector`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) by default row selection is disabled *([rowSelection]="'none'")*. So you can **not** select or deselect row through interaction with @@igComponent UI, the only way to complete these actions is to use the provided API methods like.

#### Single Selection

Single row selection can be now easily setup using the @@igComponent's `rowSelection` property, which accept *GridSelectionMode* enumeration. As you probably guess, the only thing you need to do is to set `[rowSelection] = '"single"'` property. This gives you the opportunity to **select only one row within a grid**. When row is selected or deselected **onRowSelectionChange** event is emitted. This event gives you information about the new selection, old selection, the rows that has been added and removed from the old selection. Also the event is cancellable, so this allows you to prevent selection.

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

To enable multiple row selection in [`@@igSelector`]({environment:angularApiUrl}/classes/@@igTypeDoc.html) you just need to set [`rowSelection`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#rowSelection) property to `multiple`. This will enable a row selector field on each row and in the @@igComponent header. The row selector allows users to select multiple rows, with the selection persisting through scrolling, paging, and data operations such as sorting and filtering. The row also can be selected when you click over some cell. If you have selected one row and click over some other holding *shift* key, this will select the whole range of rows. In this selection mode when you click over single row, the previos selected rows are deselected. If you *click* and hold *ctrl* key, the row will be selected and the previos selection will be preserved.

@@if (igxName === 'IgxGrid') {
```html
<!-- selectionExample.component.html -->

<igx-grid #grid1 [data]="remote | async" [primaryKey]="'ProductID'" [rowSelectable]="selection" (onSelection)="handleRowSelection($event)"
    [width]="'800px'" [height]="'600px'" [allowFiltering]="true">
    ...
</igx-grid>
```

```typescript
/* selectionExample.component.ts */

public selection = true;
```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<!-- selectionExample.component.html -->

<igx-tree-grid #treeGrid [data]="data" primaryKey="ID" foreignKey="ParentID" [height]="'530px'" width="100%" [autoGenerate]="false" [rowSelectable]="selection" [allowFiltering]="true" (onSelection)="handleRowSelection($event)">
    ...
</igx-tree-grid>
```

```typescript
/* selectionExample.component.ts */

public selection = true;
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<igx-hierarchical-grid class="hgrid" [data]="localdata" [autoGenerate]="false"
        [height]="'600px'" [width]="'100%'" [rowSelectable]="selection"
        (onSelection)="handleRowSelection($event)" #hierarchicalGrid>
    ...
</igx-hierarchical-grid>
```
```typescript
/* selectionExample.component.ts */

public selection = true;
```
}

@@if (igxName !== 'IgxTreeGrid') {
**Note:** In order to have proper row selection and cell selection, while @@igComponent has remote virtualization, [`primaryKey`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#primarykey) should be provided.
}

**Note:** If filtering is in place, [`selectAllRows()`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#selectallrows) and [`deselectAllRows()`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#deselectallrows) select/deselect all *filtered* rows.

@@if (igxName !== 'IgxTreeGrid') {
**Note:** When @@igComponent has remote virtualization then clicking the header checkbox will select/deselect all records that are currently in the grid. But when all records are selected through header checkbox and then a visible row has been deselected, when new data is loaded in the @@igComponent on demand, it is a limitation that the newly loaded rows are not selected.
}

**Note:** Row selection will trigger [`onRowSelectionChange`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#onrowselectionchange) event.
**Note:** When row selection is enabled row selectors are displayed, but if you don't want to show them, you can set `[hideRowSelectors] = true`.


### Code Snippets

#### Select rows programmatically

The below code example can be used to select one or multiple rows simultaneously (via [`primaryKey`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#primarykey)):

@@if (igxName === 'IgxGrid' || igxName === 'IgxTreeGrid') {
```html
<!-- selectionExample.component.html -->

<@@igSelector ... [primaryKey]="'ID'">
...
</@@igSelector>
...
<button (click)="this.@@igObjectRef.selectRows([1,2,5])">Select 1,2 and 5</button>
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<!-- selectionExample.component.html -->

<@@igSelector ... [primaryKey]="'artist'">
...
</@@igSelector>
...
<button (click)="this.@@igObjectRef.selectRows([1,2,5])">Select 1,2 and 5</button>
```
}

This will add the rows which correspond to the data entries with IDs 1, 2 and 5 to the @@igComponent selection.

#### Cancel selection event
```html
<!-- selectionExample.component.html -->

<@@igSelector (onRowSelectionChange)="handleRowSelectionChange($event)">
...
</@@igSelector>
```
```typescript
/* selectionExample.component.ts */

public handleRowSelectionChange(args) {
    args.newSelection = args.oldSelection; // overwrites the new selection, making it so that no new row(s) are entered in the selectionAPI

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
