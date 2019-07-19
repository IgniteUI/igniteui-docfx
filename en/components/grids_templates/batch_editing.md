﻿@@if (igxName === 'IgxGrid') {
---
title: Angular Grid Batch Editing | Angular CRUD | Ignite UI for Angular | Infragistics
_description: Perform data manipulation without affecting the underlying data with Grid Batch Editing and with Angular CRUD using Material UI table by Ignite UI for Angular
_keywords: angular crud, ignite ui for angular, infragistics
---
}
@@if (igxName === 'IgxTreeGrid') {
---
title: Angular Tree Grid Batch Editing | Angular CRUD | Ignite UI for Angular | Infragistics
_description: Perform data manipulation without affecting the underlying data with Grid Batch Editing and with Angular CRUD using Material UI table by Ignite UI for Angular
_keywords: angular crud, ignite ui for angular, infragistics
---
}
@@if (igxName === 'IgxHierarchicalGrid') {
---
title: Angular HierarchicalGrid Grid Batch Editing | Angular CRUD | Ignite UI for Angular | Infragistics
_description: Perform data manipulation without affecting the underlying data with Grid Batch Editing and with Angular CRUD using Material UI table by Ignite UI for Angular
_keywords: angular crud, ignite ui for angular, infragistics
---
}

### @@igComponent Batch Editing and Transactions

@@if (igxName === 'IgxGrid') {
The Batch Editing feature of the igxGrid is based on the [`TransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html). You may find an overview of what is the `TransactionService` and how is it implemented in the ["igxBaseTransaction, igxTransaction and igxHierarchical transaction explained"](../transaction-explained.md) topic.

Below is a detailed example of how is Batch Editing enabled for the igxGrid component.
}
@@if (igxName === 'IgxTreeGrid') {
The Batch Editing feature of the IgxTreeGrid is based on the [`HierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html). You may find an overview of what is the `HierarchicalTransactionService` and how is it implemented in the ["igxBaseTransaction, igxTransaction and igxHierarchical transaction explained"](../transaction-how-to.md) topic.

Below is a detailed example of how is Batch Editing enabled for the IgxTreeGrid component.
}
@@if (igxName === 'IgxHierarchicalGrid') {
The Batch Editing feature of the IgxHierarchicalGrid is based on the [`HierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html). You may find an overview of what is the `HierarchicalTransactionService` and how is it implemented in the ["igxBaseTransaction, igxTransaction and igxHierarchical transaction explained"](../transaction-how-to.md) topic.

In order to use the [`HierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html) with [`IgxHierarchicalGridComponent`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html), but have it accumulating separate transaction logs for each island, a service factory should be provided instead. One is exported and ready for use as [`IgxHierarchicalTransactionServiceFactory`]({environment:angularApiUrl}/index.html#igxhierarchicaltransactionservicefactory). 

Below is a detailed example of how is Batch Editing enabled for the IgxHierarchicalGrid component.
}

#### Demo

@@if (igxName === 'IgxGrid') {
The following sample demonstrates a scenario, where the grid has the Transaction as provider and has row editing enabled. The latter will ensure that transaction will be added after the entire row edit is confirmed.

<div class="sample-container loading" style="height:650px">
    <iframe id="grid-batch-editing-sample-iframe" src='{environment:demosBaseUrl}/grid/grid-batch-editing' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="grid-batch-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {
The following sample illustrates how to enable and use Batch Editing via Transaction as provider and has row editing enabled. The latter will ensure that transaction will be added after the entire row edit is confirmed. The sample uses a flat data source.

<div class="sample-container loading" style="height:600px">
    <iframe id="tree-grid-batch-editing-sample-iframe" src='{environment:demosBaseUrl}/tree-grid/treegrid-batchediting' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="tree-grid-batch-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<div class="sample-container loading" style="height:680px">
    <iframe id="hierarchical-grid-batch-editing-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-batch-editing' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-batch-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>
}

> [!NOTE]
> Transaction state consists of all the updated, added and deleted rows, and their last states.

### Usage

To get started import the `@@igxNameModule` in the **app.module.ts** file:

```typescript
// app.module.ts

...
import { @@igxNameModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., @@igxNameModule],
    ...
})
export class AppModule {}
```

Then you need to define the igxTransactionService as a provider for the @@igComponent or for some of its parent components:

@@if (igxName === 'IgxGrid') {
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
}
@@if (igxName === 'IgxTreeGrid') {
```typescript
import { Component, ViewChild } from "@angular/core";
import { IgxGridComponent, IgxGridTransaction, IgxToggleDirective,
    IgxHierarchicalTransactionService, IgxTreeGridComponent } from "igniteui-angular";

@Component({
    providers: [{ provide: IgxGridTransaction, useClass: IgxHierarchicalTransactionService }],
    selector: "app-tree-grid-batch-editing-sample",
    styleUrls: ["tree-grid-batch-editing-sample.component.scss"],
    templateUrl: "tree-grid-batch-editing-sample.component.html"
})
export class TreeGridBatchEditingSampleComponent { }

```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```typescript
import { Component } from "@angular/core";
import { IgxHierarchicalTransactionServiceFactory } from "igniteui-angular";
@Component({
    providers: [ IgxHierarchicalTransactionServiceFactory ],
    selector: "app-hierarchical-grid-with-transactions",
    template: "<ng-content></ng-content>"
})
export class HierarchicalGridWithTransactionsComponent { }
```
}
> [!NOTE]
> `IgxGridTransaction` is an injection token defined by the grid.

Then define a @@igComponent with bound data source and [`rowEditable`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#roweditable) set to true and bind:

@@if (igxName === 'IgxGrid') {
```html
<app-grid-with-transactions>
    <igx-grid #gridRowEditTransaction [data]="data" [primaryKey]="'ProductID'" width="100%" height="500px"
        [rowEditable]="true">
        ...
    </igx-grid>
</app-grid-with-transactions>
...
<button igxButton [disabled]="!undoEnabled" (click)="undo()">Undo</button>
<button igxButton [disabled]="!redoEnabled" (click)="redo()">Redo</button>
...
<button igxButton (click)="commit()">Commit</button>
<button igxButton (click)="discard()">Discard</button>
...

```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid #treeGrid [data]="data" primaryKey="employeeID" foreignKey="PID" width ="100%" height ="500px" rowEditable=true rowSelectable=true columnHiding=true>
    ...
</igx-tree-grid>
...
    <button igxButton (click)="addRow()">Add Root Level Row</button>
    <button igxButton [disabled]="!undoEnabled" (click)="undo()">Undo</button>
    <button igxButton [disabled]="!redoEnabled" (click)="redo()">Redo</button>
    <button igxButton [disabled]="!hasTransactions" (click)="openCommitDialog()">Commit</button>
...
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<app-hierarchical-grid-with-transactions>
    <igx-hierarchical-grid #parentGridProducts [data]="data" [primaryKey]="'ProductID'" width="100%" height="500px"
        [rowEditable]="true">
        <igx-row-island #rowIslandShipments [key]="'Shipments'" [primaryKey]="'ShipmentID'" [rowEditable]="true">
        </igx-row-island>
    </igx--hierarchical-grid>
</app-hierarchical-grid-with-transactions>
...
<button igxButton [disabled]="!productsUndoEnabled" (click)="productsUndo()">Undo Products</button>
<button igxButton [disabled]="!productsRedoEnabled" (click)="productsRedo()">Redo Products</button>
<button igxButton [disabled]="!shipmentsUndoEnabled" (click)="shipmentsUndo()">Undo Shipments</button>
<button igxButton [disabled]="!shipmentsRedoEnabled" (click)="shipmentsRedo()">Redo Shipments</button>
...
<button igxButton (click)="productsCommit()">Commit Products</button>
<button igxButton (click)="productsDiscard()">Discard Products</button>
<button igxButton (click)="shipmentsCommit()">Commit Shipments</button>
<button igxButton (click)="shipmentsDiscard()">Discard Shipments</button>
...

```
}

@@if (igxName === 'IgxGrid') {
The following code demonstrates the usage of the [`transactions`]({environment:angularApiUrl}/classes/igxtransactionservice.html#) API - undo, redo, commit.

```typescript
...
export class GridBatchEditingSampleComponent {
    @ViewChild("gridRowEditTransaction", { read: IgxGridComponent }) public gridRowEditTransaction: IgxGridComponent;
    ...
    public get undoEnabled(): boolean {
        return this.gridRowEditTransaction.transactions.canUndo;
    }

    public get redoEnabled(): boolean {
        return this.gridRowEditTransaction.transactions.canRedo;
    }

    public undo() {
        this.gridRowEditTransaction.transactions.undo();
    }

    public redo() {
        this.gridRowEditTransaction.transactions.redo();
    }

    public commit() {
        this.gridRowEditTransaction.transactions.commit(this.data);
        this.toggle.close();
    }

    public discard() {
        this.gridRowEditTransaction.transactions.clear();
    }
}
```
}
@@if (igxName === 'IgxTreeGrid') {
The following code demonstrates the usage of the [`HierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html) API - undo, redo, commit.
```typescript
...
export class TreeGridBatchEditingSampleComponent {
    @ViewChild("treeGrid", { read: IgxTreeGridComponent }) public treeGrid: IgxTreeGridComponent;
    ...
    public addRow() {
        this.treeGrid.addRow({
            PID: -1,
            Title: "Junior Sales Representative",
            employeeID: this.data.length + this.nextRow++,
            firstName: "John",
            lastName: "Doe"
        });
    }

    public addChildRow(id) {
        this.treeGrid.addRow(
            {
                Title: "Sales Manager",
                employeeID: this.data.length + this.nextRow++,
                firstName: `Added `,
                lastName: "Added"
            },
            id);
    }

    public deleteRow(id) {
        this.treeGrid.deleteRow(id);
    }

    public undo() {
        this.treeGrid.transactions.undo();
    }

    public redo() {
        this.treeGrid.transactions.redo();
    }

    public commit() {
        this.treeGrid.transactions.commit(this.data);
        this.toggle.close();
    }

    public cancel() {
        this.dialog.close();
    }

    public discard() {
        this.treeGrid.transactions.clear();
        this.dialog.close();
    }

    public get undoEnabled(): boolean {
        return this.treeGrid.transactions.canUndo;
    }

    public get redoEnabled(): boolean {
       return this.treeGrid.transactions.canRedo;
    }

    public openCommitDialog() {
        this.dialog.open();
        this.dialogGrid.reflow();
    }

    public get hasTransactions(): boolean {
        return this.treeGrid.transactions.getAggregatedChanges(false).length > 0;
    }
}
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
The following code demonstrates the usage of the [`transactions`]({environment:angularApiUrl}/classes/igxtransactionservice.html#) API - undo, redo, commit.

```typescript
...
export class HierarchicalGridBatchEditingSampleComponent {
    @ViewChild("parentGridProducts", { read: IgxHierarchicalGridComponent }) public parentGridProducts: IgxHierarchicalGridComponent;
    @ViewChild("rowIslandShipments", { read: IgxRowIslandComponent }) public rowIslandShipments: IgxRowIslandComponent;
    ...
    public get productsUndoEnabled(): boolean {
        return this.parentGridProducts.transactions.canUndo;
    }
    public get productsRedoEnabled(): boolean {
        return this.parentGridProducts.transactions.canRedo;
    }
    public get shipmentsUndoEnabled(): boolean {
        return this.rowIslandShipments.transactions.canUndo;
    }
    public get shipmentsRedoEnabled(): boolean {
        return this.rowIslandShipments.transactions.canRedo;
    }
    public productsUndo() {
        this.parentGridProducts.transactions.undo();
    }
    public productsRedo() {
        this.parentGridProducts.transactions.redo();
    }
    public shipmentsUndo() {
        this.rowIslandShipments.transactions.undo();
    }
    public shipmentsRedo() {
        this.rowIslandShipments.transactions.redo();
    }
    public productsCommit() {
        this.parentGridProducts.transactions.commit(this.data);
    }
    public productsDiscard() {
        this.parentGridProducts.transactions.clear();
    }
     public shipmentsCommit() {
        this.rowIslandShipments.transactions.commit(this.data);
    }
    public shipmentsDiscard() {
        this.rowIslandShipments.transactions.clear();
    }
}
```
}

@@if (igxName === 'IgxTreeGrid') {
Deleting a parent node in the grid has some peculiarities. If you are using a hierarchical data, the children will be deleted when deleting their parent. If you are using a flat data, you may set the desired behavior using the [`cascadeOnDelete`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#cascadeondelete) property of the grid. This property indicates whether the child records should be deleted when their parent gets deleted (by default, it is set to `true`).
}

> [!NOTE]
> Disabling [`rowEditable`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#roweditable) property will modify @@igComponent to create transactions on cell change and will not expose row editing overlay in the UI.

### API References

@@if (igxName === 'IgxGrid') {
* [transactions]({environment:angularApiUrl}/classes/@@igTypeDoc.html#transactions)
* [igxTransactionService]({environment:angularApiUrl}/classes/igxtransactionservice.html)
}
@@if (igxName === 'IgxTreeGrid') {
* [HierarchicalTransactionService]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html) 
* [rowEditable]({environment:angularApiUrl}/classes/@@igTypeDoc.html#roweditable)
* [IgxTreeGridComponent]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)
* [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)
}
@@if (igxName === 'IgxHierarchicalGrid') {
* [igxHierarchicalTransactionServiceFactory]({environment:angularApiUrl}/index.html#igxhierarchicaltransactionservicefactory)
}

### Additional Resources

* [@@igComponent Overview](@@igMainTopic.md)
* [@@igComponent Editing](editing.md)
* [@@igComponent Row Editing](row_editing.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)