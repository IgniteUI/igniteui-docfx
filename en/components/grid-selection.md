---
title: Data Grid - Selection
_description: A detailed guid on how to implement and best configure the igx-grid selection property for a grid on your page.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid
---

## Data Grid

Quick to set up and very easy on the eye, row selection for Data Grid can easily be enabled and configured. Find out how to set up your grid to allow multiple or single row selection in the samples below.
<div class="divider"></div>

### Grid Demo

<div class="sample-container loading" style="height:800px">
    <iframe id="grid-selection-iframe" src='{environment:demosBaseUrl}/grid-selection' width="100%" height="90%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="grid-selection" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
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

To enable multiple row selection, the `igx-grid` incorporates the `rowSelectable` property. Setting `rowSelectable` to `true` enables a select checkbox field on each row and in the grid header. The checkbox allows users to select multiple columns, with the selection persisting through scrolling, paging, and data operations such as sorting and filtering:

```html
    <igx-grid #grid1 [data]="remote | async" [primaryKey]="'ProductID'" [rowSelectable]="selection" (onSelection)="handleRowSelection($event)"
      [width]="'800px'" [height]="'600px'">
```

*Note:* In order to have proper row selection and cell selection, while grid has remote virtualization, `primaryKey` should be defined

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
Ihe below code example can be used to select several rows simultaniously (via `primaryKey`):
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
