---
title: Row Selection Component - Native Angular | Ignite UI for Angular
_description: With the Row Selection component in Ignite UI for Angular, there is a checkbox that precedes all other columns within the row, allowing the row to be either selected or deselected and enabling the user to select multiple rows of data.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Grid, Angular Table, Angular Data Grid component, Angular Data Table component, Angular Data Grid control, Angular Data Table control, Angular Grid component, Angular Table component, Angular Grid control, Angular Table control, Angular High Performance Grid, Angular High Performance Data Table, Angular Grid Row Selection, Angular Data Table Row Selection, Angular Row Selection, Angular Grid Selection, Data Grid Row Selection, Data Table Row Selection, Grid Selection
---

### Data Grid Row Selection

With row selection in Ignite UI for Angular, there is a checkbox that precedes all other columns within the row. When a user clicks on the checkbox, the row will either become selected or deselected, enabling the user to select multiple rows of data.  

#### Demo

<div class="sample-container loading" style="height:700px">
    <iframe id="grid-selection-iframe" src='{environment:demosBaseUrl}/grid/grid-selection' width="100%" height="90%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-selection-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>


### Setup

#### Single Selection

The grid single selection can be easily setup using the grid's [`onSelection`]({environment:angularApiUrl}/classes/igxgridcomponent.html#onselection) event. The event emits a reference to the cell component. That cell component has a reference to the row component that is holding it. The row component reference [`rowID`](https://www.infragistics.com/products/ignite-ui-angular/docs/typescript/classes/igxgridrowcomponent.html#rowid) getter can be used to pass a unique identifier for the row (using either [`rowData[primaryKey]`]({environment:angularApiUrl}/classes/igxgridcomponent.html#primarykey) or the [`rowData`]({environment:angularApiUrl}/classes/igxgridrowcomponent.html#rowdata) object itself) to the appropriate list of the selectionAPI. To make sure that only a single row is always selected, we empty the [`selectionAPI`]({environment:angularApiUrl}/classes/igxselectionapiservice.html) row selection list beforehand (the second argument in the [`selectRows`]({environment:angularApiUrl}/classes/igxgridcomponent.html#selectrows) method call):

```html
    <!-- in example.component.html -->
    ...
    <igx-grid #grid1 [data]="remote | async" [rowSelectable]="false" (onSelection)="handleRowSelection($event)"
      [width]="'800px'" [height]="'600px'" [allowFiltering]="true">
            ...
    </igx-grid>
    ...
```
```typescript
    /* in examplegrid.component.ts */
    public handleRowSelection(args) {
        const targetCell = args.cell as IgxGridCellComponent;
        if (!this.selection) {
            this.grid1.selectRows([targetCell.row.rowID], true);
        }
    }

```

#### Multiple Selection

To enable multiple row selection, the [`igx-grid`]({environment:angularApiUrl}/classes/igxgridcomponent.html) exposes the [`rowSelectable`]({environment:angularApiUrl}/classes/igxgridcomponent.html#rowselectable) property. Setting [`rowSelectable`]({environment:angularApiUrl}/classes/igxgridcomponent.html#rowselectable) to `true` enables a select checkbox field on each row and in the grid header. The checkbox allows users to select multiple rows, with the selection persisting through scrolling, paging, and data operations such as sorting and filtering:

```html
    <igx-grid #grid1 [data]="remote | async" [primaryKey]="'ProductID'" [rowSelectable]="selection" (onSelection)="handleRowSelection($event)"
      [width]="'800px'" [height]="'600px'" [allowFiltering]="true">
```

**Note:** In order to have proper row selection and cell selection, while grid has remote virtualization, [`primaryKey`]({environment:angularApiUrl}/classes/igxgridcomponent.html#primarykey) should be provided.

**Note:** If filtering is in place, [`selectAllRows()`]({environment:angularApiUrl}/classes/igxgridcomponent.html#selectallrows) and [`deselectAllRows()`]({environment:angularApiUrl}/classes/igxgridcomponent.html#deselectallrows) select/deselect all *filtered* rows.


**Note:** When grid has remote virtualization then clicking the header checkox will select/deselect all records. But when all records are selected through header checkbox and then a visible row has been deselected, when new data is loaded in the grid on demand, it is a limitation that the newly loaded rows are not selected.

**Note:** Cell selection will trigger [`onSelection`]({environment:angularApiUrl}/classes/igxgridcomponent.html#onselection) and not [`onRowSelectionChange`]({environment:angularApiUrl}/classes/igxgridcomponent.html#onrowselectionchange).

### Code Snippets

#### Select rows programatically
The below code example can be used to select one or multiple rows simultaniously (via [`primaryKey`]({environment:angularApiUrl}/classes/igxgridcomponent.html#primarykey)):
```html
<!-- in component.html -->
<igx-grid ... [primaryKey]="'ID'">
...
</igx-grid>
...
<button (click)="this.grid.selectRows([1,2,5])">Select 1,2 and 5</button>
```
This will add the rows which correspond to the data entries with IDs 1, 2 and 5 to the grid selection.

#### Cancel selection event
```html
<!-- in component.html -->
<igx-grid
    (onRowSelectionChange)="handleRowSelectionChange($event)"
>
...
</igx-grid>
```
```typescript
// in component.ts
public handleRowSelectionChange(args) {
    args.newSelection = args.oldSelection; // overwrites the new selection, making it so that no new row(s) are entered in the selectionAPI
    args.checked = false; // overwrites the checkbox state
}
```
### API Reference
* [IgxGridComponent API]({environment:angularApiUrl}/classes/igxgridcomponent.html)
* [IgxGridRowComponent API]({environment:angularApiUrl}/classes/igxgridrowcomponent.html)
* [IgxGridCellComponent API]({environment:angularApiUrl}/classes/igxgridcellcomponent.html)
* [IgxGridComponent Styles]({environment:sassApiUrl}/index.html#function-igx-grid-theme)

### Additional Resources
<div class="divider--half"></div>

* [Grid overview](grid.md)
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
