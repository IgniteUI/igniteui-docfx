---
title: Grid Transactions - Native Angular | Ignite UI for Angular
_description: TransactionService is an injectable middleware that a component can use to accumulate changes without affecting the underlying data. The provider exposes API to access, manipulate changes (undo and redo) and discard or commit all to the data.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Component, Angular Grid, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid, Cell Editing, Row Editing, Batch Updating, Batch Editing, Transactions
---

## Grid Transactions

[`TransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) is an injectable middleware that a component can use to accumulate changes without affecting the underlying data. The provider exposes API to access, manipulate changes (undo and redo) and discard or commit all to the data.

The [`TransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) works with both cell editing and row editing. The transaction for the cell edit is added when the cell exits edit mode, while row transaction is created, when the row exits edit mode. But in both cases the state of the grid edits consist of all updated, added and deleted rows and their last states. Those can later be inspected, manipulated and submitted at once. Changes are collected for individual cells or rows, depending on editing mode, and accumulated per data row/record.

### Demo

The following sample demonstrates a scenario, where the grid has the Transaction as provider and has row editing enabled. This will ensure that transaction will be added after the entire row edit is confirmed.

<div class="sample-container loading" style="height:550px">
    <iframe id="grid-transaction-sample-iframe" src='{environment:demosBaseUrl}/grid-transaction' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-transaction-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

> [!NOTE]
> Transaction state consists of all the updated, added and deleted rows and their last states.

## Usage
To get started import the [`IgxGridModule`]({environment:angularApiUrl}/classes/igxgridmodule.html) in the **app.module.ts** file:

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

Then you need to define the igxTransactionService as provider for the grid:

```typescript
import { Component } from "@angular/core";
import { IgxGridTransaction, IgxTransactionService } from "igniteui-angular";

@Component({
    providers: [{ provide: IgxGridTransaction, useClass: IgxTransactionService }],
    selector: "app-grid-with-transactions",
    template: "<ng-content></ng-content>"
})
export class GridWithTransactionsComponent { }

```

Note: `IgxGridTransaction` is injection token defined by the grid.

Then define a grid with bound data source and [`rowEditable`]({environment:angularApiUrl}/classes/igxgridcomponent.html#roweditable) set to true:

```html
<app-grid-with-transactions>
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
</app-grid-with-transactions>
```

The following code demonstrates the usage of the [`transactions`]({environment:angularApiUrl}/classes/igxtransactionservice.html#) API - undo, redo, commit.

```typescript
import { Component, ViewChild } from "@angular/core";
import { data } from "./data";

import { IgxGridComponent, IgxToggleDirective, Transaction } from "igniteui-angular";

@Component({
    selector: "app-grid-row-edit",
    styleUrls: [`grid-transaction-sample.component.css`],
    templateUrl: "grid-transaction-sample.component.html"
})
export class GridTransactionSampleComponent {
    @ViewChild("gridRowEditTransaction", { read: IgxGridComponent }) public gridRowEditTransaction: IgxGridComponent;
    @ViewChild(IgxToggleDirective) public toggle: IgxToggleDirective;

    public currentActiveGrid: { id: string, transactions: any[] } = { id: "", transactions: [] };

    public data: any[];
    private addProductId: number;

    constructor() {
        this.data = data;
        this.addProductId = this.data.length + 1;
    }

    public addRow(gridID) {
        const currentGrid: IgxGridComponent = this.gridRowEditTransaction;
        currentGrid.addRow({
            CategoryID: this.getRandomInt(1, 10),
            Discontinued: this.getRandomInt(1, 10) % 2 === 0,
            OrderDate: new Date(this.getRandomInt(2000, 2050), this.getRandomInt(0, 11), this.getRandomInt(1, 25))
            .toISOString().slice(0, 10),
            ProductID: this.addProductId++,
            ProductName: "Product with index " + this.getRandomInt(0, 20),
            QuantityPerUnit: (this.getRandomInt(1, 10) * 10).toString() + " pcs.",
            ReorderLevel: this.getRandomInt(10, 20),
            SupplierID: this.getRandomInt(1, 20),
            UnitPrice: this.getRandomInt(10, 1000),
            UnitsInStock: this.getRandomInt(1, 100),
            UnitsOnOrder: this.getRandomInt(1, 20)
        });
        this.refresh();
    }

    public deleteRow(event, gridID, rowID) {
        this.gridRowEditTransaction.deleteRow(rowID);
    }

    public undo(gridID) {
        this.gridRowEditTransaction.transactions.undo();
        this.refresh();
    }

    public redo(gridID) {
        this.gridRowEditTransaction.transactions.redo();
        this.refresh();
    }

    public openCommitDialog(gridID) {
        this.toggle.open();
    }
    public commit() {
        this.gridRowEditTransaction.transactions.commit(this.data);
        this.toggle.close();
    }
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    private refresh(): void {
        const grid = this.gridRowEditTransaction;
        (grid as any)._pipeTrigger++;
        (grid as any).cdr.markForCheck();
    }
}

```
> [!NOTE]
> Disabling [`rowEditable`]({environment:angularApiUrl}/classes/igxgridcomponent.html#roweditable) property will modify grid to create transactions on cell change.

## API

* [`igxTransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html)

### Methods


* [`aggregatedState`]({environment:angularApiUrl}/classes/igxtransactionservice.html#aggregatedstate)
* [`getAggregatedValue`]({environment:angularApiUrl}/classes/igxtransactionservice.html#getaggregatedvalue)
* [`getState`]({environment:angularApiUrl}/classes/igxtransactionservice.html#getstate)
* [`add`]({environment:angularApiUrl}/classes/igxtransactionservice.html#add)
* [`getTransactionLog`]({environment:angularApiUrl}/classes/igxtransactionservice.html#gettransactionlog)
* [`clear`]({environment:angularApiUrl}/classes/igxtransactionservice.html#clear)
* [`commit`]({environment:angularApiUrl}/classes/igxtransactionservice.html#commit)
* [`undo`]({environment:angularApiUrl}/classes/igxtransactionservice.html#undo)
* [`redo`]({environment:angularApiUrl}/classes/igxtransactionservice.html#redo)

### Additional Resources

* [Grid Overview](grid.md)
* [Grid Editing](grid_editing.md)
* [Grid Row Editing](grid_row_editing.md)