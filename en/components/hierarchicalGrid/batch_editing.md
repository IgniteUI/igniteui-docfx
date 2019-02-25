---
title: Grid Batch Editing - Native Angular | Ignite UI for Angular
_description: TransactionService is an injectable middleware that a component can use to accumulate changes without affecting the underlying data. The provider exposes API to access, manipulate changes (undo and redo) and discard or commit all to the data.
_keywords: Ignite UI for Angular, UI controls, Angular widgets, web widgets, UI widgets, Angular, Native Angular Components Suite, Native Angular Controls, Native Angular Components Library, Native Angular Component, Angular Grid, Angular Data Grid component, Angular Data Grid control, Angular Grid component, Angular Grid control, Angular High Performance Grid, Cell Editing, Row Editing, Batch Updating, Batch Editing, Transactions
---

### Hierarchical Grid Batch Editing


[`TransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) is an injectable middleware that a component can use to accumulate changes without affecting the underlying data. The provider exposes API to access, manipulate changes (undo and redo) and discard or commit all to the data.

The [`TransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) works with both cell editing and row editing. The transaction for the cell edit is added when the cell exits edit mode, while row transaction is created, when the row exits edit mode. But in both cases the state of the grid edits consist of all updated, added and deleted rows and their last states. Those can later be inspected, manipulated and submitted at once. Changes are collected for individual cells or rows, depending on editing mode, and accumulated per data row/record.



To use the [`TransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) with [`IgxHierarchicalGridComponent`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html) but have it accumulating separate transaction logs for each island a service factory should be provided instead. One is exported and ready for use as ['IgxHierarchicalTransactionServiceFactory']({environment:angularApiUrl}/classes/igxhierarchicaltransactionservicefactory.html).


#### Demo




<div class="sample-container loading" style="height:600px">
    <iframe id="hierarchical-grid-batch-editing-sample-iframe" src='{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-batch-editing' width="100%" height="100%" seamless frameBorder="0" onload="onSampleIframeContentLoaded(this);"></iframe>
</div>
<br/>
<div>
<button data-localize="stackblitz" disabled class="stackblitz-btn" data-iframe-id="hierarchical-grid-batch-editing-sample-iframe" data-demos-base-url="{environment:demosBaseUrl}">view on stackblitz</button>
</div>
<div class="divider--half"></div>


> [!NOTE]
> Transaction state consists of all the updated, added and deleted rows and their last states.

### Usage

To get started import the `IgxHierarchicalGridModule` in the **app.module.ts** file:

```typescript
// app.module.ts

...
import { IgxHierarchicalGridModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxHierarchicalGridModule],
    ...
})
export class AppModule {}
```

Then you need to define the igxTransactionService as provider for the Hierarchical Grid or on some of its parent components:




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

> [!NOTE]
> `IgxGridTransaction` is injection token defined by the grid.

Then define a Hierarchical Grid with bound data source and [`rowEditable`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#roweditable) set to true and bind:




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


> [!NOTE]
> Disabling [`rowEditable`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#roweditable) property will modify Hierarchical Grid to create transactions on cell change and will not expose row editing overlay in the UI.

### API References




[`igxHierarchicalTransactionServiceFactory`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservicefactory.html)


### Additional Resources

* [Hierarchical Grid Overview](hierarchical_grid.md)
* [Hierarchical Grid Editing](editing.md)
* [Hierarchical Grid Row Editing](row_editing.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)