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
    <iframe id="grid-sample-2-iframe" src='{environment:demosBaseUrl}/grid-selection' width="100%" height="90%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" class="stackblitz-btn" data-iframe-id="grid-selection" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>


### Setup

#### Single Selection

The grid single selection can be easily setup using the grid's `onSelection` event. The event emits a reference to the cell component. Conveniently, that cell component has a reference to the row component that is holding it. We can use that row component reference and push the "row" (using either its `primaryValue` property or an object reference to `row.rowData`) in the appropriate list of the selectionAPI. To make sure that only a single row is always selected, we empty the `selectionAPI` row selection list beforehand (using `deselectAllRows` method of `igx-grid`)

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
    public handleGridSelection(cell: IgxGridCellComponent) {
        this.grid1.deselectAllRows();
        this.grid1.selectRows([cell.row]);
    }

```

#### Multiple Selection

To enable multiple row selection, the `igx-grid` incorporates the `rowSelectable` property. Setting `rowSelectable` to `true` enables a select checkbox field on every row and in the grid header. The checkbox allows users to select multiple columns, with the selection persisting through paging, sorting, filtering and

```html
    <igx-grid #grid1 [data]="remote | async" [primaryKey]="'ProductID'" [rowSelectable]="selection" (onSelection)="handleRowSelection($event)"
      [width]="'800px'" [height]="'600px'">
```
