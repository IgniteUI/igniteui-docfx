---
title: Grid Transactions - Native Angular | Ignite UI for Angular
_description: The Ignite UI for Angular Data Grid control provides default cell templates for editable columns which are based on the data type of the column.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Component, Angular Grid, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid, Cell Editing, Row Editing, Batch Updating, Batch Editing, Transactions
---

## Grid Transactions

The grid can use `Transaction` provider, which accumulates pending changes, that are not directly applied to the data source, and later to submit them at once. The `Transaction` works with both cell editing and row editing. The transaction for the cell edit is added when the cell exits edit mode. For row transaction is created, when the row exits edit mode. But in both cases the state of the grid edits consist of all updated, added and deleted rows and their last states.
This is done in order to be able to easily send and accept on the server all the modified row information.

### Demo

The following sample demonstrates a scenario, where the grid has the Transaction as provider and has row editing enabled. This will ensure that transaction will be added after the entire row edit is confirmed.

<div class="sample-container loading" style="height:650px">
    <iframe id="grid-transaction-sample-iframe" src='{environment:demosBaseUrl}/grid-transaction' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-transaction-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>

You can see that the transaction state consists of all the updated, added and deleted rows and their last states.

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

Then define a grid with bound data source and [`rowEditable`]({environment:angularApiUrl}/classes/igxgridcomponent.html#rowEditable) set to true:

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

The following code demonstrates the usage of the [transactions]({environment:angularApiUrl}/classes/igxgridrowcomponent.html#transactions) API - undo, redo, commit.

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

    private getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    private refresh(): void {
        const grid = this.gridRowEditTransaction;
        (grid as any)._pipeTrigger++;
        (grid as any).cdr.markForCheck();
    }
}

```

## API

### Methods

#### IgxGridComponent
* [transactions]({environment:angularApiUrl}/classes/igxgridrowcomponent.html#transactions)

#### 

## Transaction

[`aggregatedState`]({environment:angularApiUrl}/classes/igxtransaction.html#aggregatedState)
[`getAggregatedValue`]({environment:angularApiUrl}/classes/igxtransaction.html#getAggregatedValue)
[`hasState`]({environment:angularApiUrl}/classes/igxtransaction.html#hasState)
[`add`]({environment:angularApiUrl}/classes/igxtransaction.html#add)
[`getTransactionLog`]({environment:angularApiUrl}/classes/igxtransaction.html#getTransactionLog)
[`hasTransactions`]({environment:angularApiUrl}/classes/igxtransaction.html#hasTransactions)
[`commit`]({environment:angularApiUrl}/classes/igxtransaction.html#commit)
[`undo`]({environment:angularApiUrl}/classes/igxtransaction.html#undo)
[`redo`]({environment:angularApiUrl}/classes/igxtransaction.html#redo)

### Methods

* [Grid Overview](grid.md)
* [Grid Editing](grid_editing.md)
* [Grid Row Editing](grid_transactions.md)