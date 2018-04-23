---
title: Row Selection Component - Native Angular | Ignite UI for Angular
_description: With the Row Selection component in Ignite UI for Angular, there is a checkbox that precedes all other columns within the row, allowing the row to be either selected or deselected and enabling the user to select multiple rows of data.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components, Native Angular Components Library, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid, Angular Grid Row Selection, Angular Row Selection, Angular Grid Selection, Grid Row Selection, Grid Selection
---

### Data Grid Row Selection

With row selection in Ignite UI for Angular, there is a checkbox that precedes all other columns within the row. When a user clicks on the checkbox, the row will either become selected or deselected, enabling the user to select multiple rows of data.

#### Demo

<div class="sample-container loading" style="height:730px">
    <iframe id="grid-selection-iframe" src='{environment:demosBaseUrl}/grid-selection' width="100%" height="90%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="grid-selection-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>


### Setup

#### Single Selection

The grid single selection can be easily setup using the grid's `onSelection` event. The event emits a reference to the cell component. That cell component has a reference to the row component that is holding it. The row component reference `rowID` getter can be used to pass a unique identifier for the row (using either `rowData[primaryKey]` or the `rowData` object itself) to the appropriate list of the selectionAPI. To make sure that only a single row is always selected, we empty the `selectionAPI` row selection list beforehand (the second argument in the `selectRows` method call):

```html
    <!-- in example.component.html -->
    ...
    <igx-grid #grid1 [data]="remote | async" [rowSelectable]="false" (onSelection)="handleRowSelection($event)"
      [width]="'800px'" [height]="'600px'">
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

To enable multiple row selection, the `igx-grid` exposes the `rowSelectable` property. Setting `rowSelectable` to `true` enables a select checkbox field on each row and in the grid header. The checkbox allows users to select multiple rows, with the selection persisting through scrolling, paging, and data operations such as sorting and filtering:

```html
    <igx-grid #grid1 [data]="remote | async" [primaryKey]="'ProductID'" [rowSelectable]="selection" (onSelection)="handleRowSelection($event)"
      [width]="'800px'" [height]="'600px'">
```

*Note:* In order to have proper row selection and cell selection, while grid has remote virtualization, `primaryKey` should be provided.

### Methods

#### IgxGridComponent

   | Name     | Description                | Return type                                       | Parameters           |
   |----------|----------------------------|---------------------------------------------------|----------------------|
   | selectedRows | Get current selection state    | `Array<any>`- array with selected rows' ID (primaryKey or rowData)| |
   | selectRows   | Select specified rows by ID      | `void`- does not return anything | `Array<any>`, clearCurrentSelection: `boolean`    |
   | deselectRows | Deselect specified rows by ID    | `void`- does not return anything | `Array<any>` |
   | selectAllRows | Select all rows            | `void`- does not return anything |    N/A                    |
   | deselectAllRows | Select all rows          | `void`- does not return anything |    N/A                    |

*Note:* If filtering is in place, `selectAllRows()` and `deselectAllRows()` select/deselect all *filtered* rows.

### Events
|Name|Description|Parameters|
|--|--|--|
| onRowSelectionChange | Emitted when selection is changing. | { selection: `Array<any>`, row: IgxRowComponent, rowID: any|

*Note:* Cell selection will trigger onSelection and not onRowSelection.

### Code Snippets

#### Select rows programatically
Ihe below code example can be used to select one or multiple rows simultaniously (via `primaryKey`):
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

### Additional Resources
<div class="divider--half"></div>

* [Grid overview](grid.html)
* [Paging](grid_paging.html)
* [Filtering](grid_filtering.html)
* [Sorting](grid_sorting.html)
* [Summaries](grid_summaries.html)
* [Column Pinning](grid_column_pinning.html)
* [Column Resizing](grid_column_resizing.html)
* [Virtualization and Performance](grid_virtualization.html)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
