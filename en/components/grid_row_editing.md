---
title: Grid Row Editing - Native Angular | Ignite UI for Angular
_description: Row editing - allows modification of several cells in the row, before submitting, at once, all those changes to the grid's data source. Leverages the pending changes functionality of the new transaction provider.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Component, Angular Grid, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid, Cell Editing
---

## Grid Row Editing

Row editing - allows modification of several cells in the row, before submitting, at once, all those changes to the grid's data source. Leverages the pending changes functionality of the new transaction provider.



### Demo

The following sample demonstrates how to enable row editing in the grid. Changing a cell value and then clicking or navigating to another cell on the same row will not update row value until confirmed, using the Done button, or discarded, using the Cancel one.

<div class="sample-container loading" style="height:550px">
    <iframe id="grid-row-editing-sample-iframe" src='{environment:demosBaseUrl}/grid-row-editing' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-row-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>

> [!NOTE]
> When a row is in edit mode, then clicking on a cell on another row will act like the Done button is pressed - submit all the changes of the previous row. If the new cell that gets focus is editable, then the new row also enters edit mode, while if the cell is not editable, then only the previous row exits edit mode.

<div class="divider--half"></div>

## Usage

To get started import the [IgxGridModule]({environment:angularApiUrl}/classes/igxgridmodule.html) in the **app.module.ts** file:

```typescript
// app.module.ts

...
import { IgxGridModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxGridModule],
    ...
})
export class AppModule {}
```

Then define a grid with bound data source and [`rowEditable`]({environment:angularApiUrl}/classes/igxgridcomponent.html#roweditable) set to true:

```html
<div class="sample-wrapper">
    <igx-grid #gridRowEditTransaction [data]="data" [primaryKey]="'ProductID'" width="100%" height="500px"
        [rowEditable]="true">
        <igx-column field="ProductID" header="Product ID" editable="false"></igx-column>
        <igx-column field="ReorderLevel" header="ReorderLever" [dataType]="'number'"></igx-column>
        <igx-column field="ProductName" header="ProductName" [dataType]="'string'"></igx-column>
        <igx-column field="UnitsInStock" header="UnitsInStock" [dataType]="'number'">
            <ng-template igxCellEditor let-cell="cell">
                <input name="units" [(ngModel)]="cell.value" style="color: black" />
            </ng-template>
        </igx-column>
        <igx-column field="OrderDate" [dataType]="'date'"></igx-column>
        <igx-column field="Discontinued" header="Discontinued" [dataType]="'boolean'"></igx-column>
    </igx-grid>
</div>
```

> [!NOTE]
> Setting primary key is mandatory for editing operations, including row editing.
> [!NOTE]
> It's not needed to enable editing for individual columns. Using the [`rowEditable`]({environment:angularApiUrl}/classes/igxgridcomponent.html#roweditable) property in the grid, will mean that all rows, with defined `field` property, excluding primary one, will be editable. If you want to disable editing for specific column, then you set the [`editable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#editable) column's input to `false`.


```typescript

import { Component, ViewChild } from "@angular/core";
import { data } from "./data";

import { IgxGridComponent } from "igniteui-angular";

@Component({
    selector: "app-grid-row-edit",
    styleUrls: [`grid-row-editing-sample.component.css`],
    templateUrl: "grid-row-editing-sample.component.html"
})
export class GridRowEditSampleComponent {
    @ViewChild("gridRowEdit", { read: IgxGridComponent }) public gridRowEdit: IgxGridComponent;

    public data: any[];

    constructor() {
        this.data = data;
    }
}

```

> [!NOTE]
> The grid uses internally a provider [`IgxBaseTransactionService`]({environment:angularApiUrl}/classes/igxbasetransactionservice.html) that holds pending cell changes, until row state submitted or cancelled.

## Positioning

- Default position of the overlay will be below the row that is in edit mode
     
- If there is no space below the row then overlay will appear above the row.
     
- Once shown - top or bottom, overlay will maintain this position during scrolling, until the overlay is closed.

## Behavior

- If row is in edit mode, then editing will continue, if a cell from the same row is clicked.

- Clicking "Done" button will finish row editing and will submit changes either to the data source, or to a transaction if available. In addition row will exit edit mode.

- Clicking "Cancel" button will revert all current changes in the row and row will exit edit mode.

- If row is in edit mode, then clicking a cell from another row will finish the current row edit and will submit new row changes (the same behavior clicking "Done" button). If the new cell that gets focus is editable, then the new row also enters edit mode, while if the cell is not editable, then only the previous row exits edit mode.

- If row is in edit mode and grid is scrolled so that row goes outside the visible area, the latter will be still in edit mode. When grid is scrolled, so that the row is visible again, the row will be still in edit mode.

- Each modified cell gets edited style until row edit is finished. This is the behavior, when grid is not provided with transactions. When transactions are available - then cell edit style is applied until all the changes are committed.


## Keyboard Navigation

- `Enter` and `F2` enters row edit mode

- `Esc` exits row edit mode and doesn't submit any of the cell changes, made while the row was in edit mode.

- `Tab` move focus from one editable cell in the row to the next and from the right-most editable cell to the CANCEL and DONE buttons. Navigation from DONE button goes to the left-most editable cell within the currently edited row.


## Feature Integration

- Any data changing operation will terminate row editing operations and will submit current row changes. This will include operations like sorting, changing grouping and filtering criteria, paging, etc.

- Summaries will be updated after row edit is finished. Same is valid for the other features like sorting, filtering, etc.

- Expanding and collapsing grouped rows will not terminate editing for the current row.


## Customizing Row Editing Overlay

### Customizing Text

Customizing the text of the row editing overlay is possible using the `igxRowEditTextDirective`.
The `rowChangesCount` property is exposed and it holds the count of the changed cells.

```html
<ng-template igxRowEditText let-rowChangesCount>
	Changes: {{rowChangesCount}}
</ng-template>
 ```

 ### Customizing Buttons
Customizing the buttons of the row editing overlay is possible using the `igxRowEditActionsDirective`.
If you want the buttons to be part of the keyboard navigation, then each on of them should have the `igxRowEditTabStopDirective`.

 ```typescript
 <ng-template igxRowEditActions let-endRowEdit>
	<button igxButton igxRowEditTabStop (click)="endRowEdit(false)">Cancel</button>
	<button igxButton igxRowEditTabStop (click)="endRowEdit(true)">Apply</button>
</ng-template>
 ```

## API References

### igxGrid Inputs

* [rowEditable]({environment:angularApiUrl}/classes/igxgridcomponent.html#roweditable)

### igxGrid Outputs

* [onRowEditDone]({environment:angularApiUrl}/classes/igxgridcomponent.html#onroweditdone)
* [onRowEditCancel]({environment:angularApiUrl}/classes/igxgridcomponent.html#onroweditcancel)

### igxGrid Methods

* [endRowEdit]({environment:angularApiUrl}/classes/igxgridcomponent.html#endrowedit)


### Additional Resources
<div class="divider--half"></div>

* [Grid Overview](grid.md)
* [Grid Editing](grid_editing.md)
* [Grid Transactions](grid_transactions.md)