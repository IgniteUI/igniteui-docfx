---
title: Grid Row Editing - Native Angular | Ignite UI for Angular
_description: Enabling row editing in the grid will allow you to edit several row's cells, before submitting all the changes to the grid at once.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Component, Angular Grid, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid, Cell Editing
---

## Grid Editing

Enabling row editing in the grid will allow you to edit several row's cells, before submitting all the changes to the grid at once. If the transaction provider is available for the grid, then all the row changes will be submitted to the pending transactions instead of directly to the data. For more information follow the [Grid Transactions](grid_transactions.md) topic.


### Demo

The following sample demonstrates how to enable row editing in the grid. Changing a cell value and then clicking or navigating to another cell on the same row will not update row value until confirmed, using the Done button, or discarded, using the Cancel one.

<div class="sample-container loading" style="height:650px">
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

Then define a grid with bound data source and [`rowEditable`]({environment:angularApiUrl}/classes/igxgridcomponent.html#rowEditable) set to true:

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
> It's not needed to enable editing for individual columns. Using the [`rowEditable`]({environment:angularApiUrl}/classes/igxgridcomponent.html#rowEditable) will mean that all rows are editable. If you want to disable editing for specific column, then you set the [`editable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#editable) column's input to `false`.
> [!NOTE]
> The column marked as the grid's [`primaryKey`]({environment:angularApiUrl}/classes/igxgridcomponent.html#primarykey) ***will not*** be automatically marked as `editable` when enabling `rowEditable`.

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
> The grid uses internally a provider [`IgxBaseTransactionService`]({environment:angularApiUrl}/classes/igxbasetransactionservice) that holds pending transactions, until submitted or cancelled.

## Navigation

When a row is in edit mode, then clicking on a cell on another row will act like the Done button is pressed - submit all the changes of the previous row. If the new cell that gets focus is editable, then the new row also enters edit mode, while if the cell is not editable, then only the previous row exits edit mode.


### Keyboard Navigation

 - `Enter` and `F2` enters row edit mode
 - `Esc` exits row edit mode and doesn't submit any of the cell changes, made while the row was in edit mode.
 - `Tab` move focus from one editable cell in the row to the next and from the right-most editable cell to the CANCEL and DONE buttons. From the DONE button to the left-most editable cell within the currently edited row.
 

## API

### Inputs

#### IgxGridComponent

* [rowEditable]({environment:angularApiUrl}/classes/igxgridcomponent.html#rowEditable)
* [rowEditMessage]({environment:angularApiUrl}/classes/igxgridrowcomponent.html#rowEditMessage)
* [rowEditButtonDone]({environment:angularApiUrl}/classes/igxgridrowcomponent.html#rowEditButtonCommit)
* [rowEditButtonCancel]({environment:angularApiUrl}/classes/igxgridrowcomponent.html#rowEditButtonDiscard)

### Outputs

#### IgxGridComponent
* [onRowEditDone]({environment:angularApiUrl}/classes/igxgridrowcomponent.html#onRowEditDone)
* [onRowEditCancel]({environment:angularApiUrl}/classes/igxgridrowcomponent.html#onRowEditCancel)

## Known Issues

### Additional Resources
<div class="divider--half"></div>

* [Grid Overview](grid.md)
* [Grid Editing](grid_editing.md)
* [Grid Transactions](grid_transactions.md)