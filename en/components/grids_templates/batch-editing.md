---
title: Angular @@igComponent Batch Editing | Angular CRUD | Ignite UI for Angular | Infragistics
_description: Perform data manipulation without affecting the underlying data with @@igComponent Batch Editing and with Angular CRUD using Material UI table by Ignite UI for Angular
_keywords: angular crud, ignite ui for angular, infragistics
---

# @@igComponent Batch Editing and Transactions

@@if (igxName === 'IgxGrid') {
The Batch Editing feature of the @@igxName is based on the [`TransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html). Follow the [`Transaction Service class hierarchy`](../transaction-classes.md) topic to see an overview of the `igxTransactionService` and details how it is implemented.
}

@@if (igxName === 'IgxTreeGrid' || igxName === 'IgxHierarchicalGrid') {
The Batch Editing feature of the @@igxName is based on the [`HierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html). Follow the [`Transaction Service class hierarchy`](../transaction-classes.md) topic to see an overview of the `igxHierarchicalTransactionService` and details how it is implemented.
}
@@if (igxName === 'IgxHierarchicalGrid') {

In order to use the [`HierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html) with [`@@igxName`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html), but have it accumulating separate transaction logs for each island, a service factory should be provided instead. One is exported and ready for use as [`IgxHierarchicalTransactionServiceFactory`]({environment:angularApiUrl}/index.html#igxhierarchicaltransactionservicefactory). 
}

Below is a detailed example of how is Batch Editing enabled for the @@igComponent component.

## Angular @@igComponent Batch Editing and Transactions Example

The following sample demonstrates a scenario, where the @@igObjectRef has the Transaction as provider and has row editing enabled. The latter will ensure that transaction will be added after the entire row edit is confirmed.

@@if (igxName === 'IgxGrid') {
<code-view style="height:650px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/grid/grid-batch-editing" alt="Angular @@igComponent Batch Editing and Transactions Example">
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxTreeGrid') {
<code-view style="height:600px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-batchediting" alt="Angular @@igComponent Batch Editing and Transactions Example">
</code-view>

<div class="divider--half"></div>
}
@@if (igxName === 'IgxHierarchicalGrid') {
<code-view style="height:680px" 
           data-demos-base-url="{environment:demosBaseUrl}" 
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-batch-editing" alt="Angular @@igComponent Batch Editing and Transactions Example">
</code-view>

<div class="divider--half"></div>
}

> [!NOTE]
> Transaction state consists of all the updated, added and deleted rows, and their last states.

## Usage

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

Then you need to define the transaction service as a provider for the @@igComponent:

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
import { Component } from "@angular/core";
import { IgxGridTransaction, IgxHierarchicalTransactionService } from "igniteui-angular";

@Component({
    providers: [{ provide: IgxGridTransaction, useClass: IgxHierarchicalTransactionService }],
    selector: "app-tree-grid-with-transactions",
    template: '<ng-content></ng-content>'
})
export class TreeGridWithTransactionsComponent { }

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
@@if (igxName === 'IgxGrid') {
> [!NOTE]
> By default the `@@igxName` has `IgxGridTransaction` injection token defined in its module. This token provides [`igxBaseTransactionService`]({environment:angularApiUrl}/classes/igxbasetransactionservice.html). Providing this service allows `@@igxName` to perform row editing. To enable transactions in `@@igxName` [`igxTransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) should be provided. This could be done in the component's `providers` array. However, as each `@@igxName` needs its own transaction service, when component has several `@@igxNames` defined in its body, each `@@igxName` should be encapsulated in a component where transaction service should be provided. In the sample above `@@igxName` is wrapped in `GridWithTransactionsComponent` component. In the later [`igxTransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html) is provided in its `providers` array.
}
@@if (igxName === 'IgxTreeGrid') {
> [!NOTE]
> By default the `@@igxName` has `IgxGridTransaction` injection token defined in its module. This token provides [`igxBaseTransactionService`]({environment:angularApiUrl}/classes/igxbasetransactionservice.html). Providing this service allows `@@igxName` to perform row editing. To enable transactions in `@@igxName` [`HierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html) should be provided. This could be done in the component's `providers` array. However, as each `@@igxName` needs its own transaction service, when component has several `@@igxNames` defined in its body, each `@@igxName` should be encapsulated in a component where transaction service should be provided. In the sample above `@@igxName` is wrapped in `TreeGridWithTransactionsComponent` component. In the later [`HierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html) is provided in its `providers` array.
}
@@if (igxName === 'IgxHierarchicalGrid') {
> [!NOTE]
> By default the `@@igxName` has `IgxGridTransaction` injection token defined in its module. This token provides [`igxBaseTransactionService`]({environment:angularApiUrl}/classes/igxbasetransactionservice.html). Providing this service allows `@@igxName` to perform row editing. To enable transactions in `@@igxName` [`HierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html) should be provided. This could be done in the component's `providers` array. However, as each `@@igxName` needs its own transaction service, when component has several `@@igxNames` defined in its body, each `@@igxName` should be encapsulated in a component where transaction service should be provided. In the sample above `@@igxName` is wrapped in `HierarchicalGridWithTransactionsComponent` component. In the later [`HierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html) is provided in its `providers` array.
}
Then define a `@@igxName` with bound data source and [`rowEditable`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#roweditable) set to true and bind:

@@if (igxName === 'IgxGrid') {
```html
<app-grid-with-transactions>
    <igx-grid #grid [data]="data" [primaryKey]="'ProductID'" width="100%" height="500px"
        [rowEditable]="true">
        ...
    </igx-grid>
</app-grid-with-transactions>
...
<button igxButton [disabled]="!grid.transactions.canUndo" (click)="undo()">Undo</button>
<button igxButton [disabled]="!grid.transactions.canRedo" (click)="redo()">Redo</button>
<button igxButton [disabled]="grid.transactions.getAggregatedChanges(false).length < 1"
    (click)="openCommitDialog(dialogGrid)">Commit</button>
...

```
}
@@if (igxName === 'IgxTreeGrid') {
```html
<igx-tree-grid #treeGrid [data]="data" primaryKey="employeeID" foreignKey="PID"
    width ="100%" height ="500px" rowEditable=true>
    ...
</igx-tree-grid>
...
    <button igxButton (click)="addRow()">Add Root Level Row</button>
    <button igxButton [disabled]="!treeGrid.transactions.canUndo" (click)="undo()">Undo</button>
    <button igxButton [disabled]="!treeGrid.transactions.canRedo" (click)="redo()">Redo</button>
    <button igxButton [disabled]="treeGrid.transactions.getAggregatedChanges(false).length < 1"
        (click)="openCommitDialog()">Commit</button>
...
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
```html
<app-hierarchical-grid-with-transactions>
    <igx-hierarchical-grid #hierarchicalGrid [data]="data" [primaryKey]="'Artist'"
        [height]="'580px'" [width]="'100%'" [rowEditable]="true" >
        ...
        <igx-row-island #childGrid [key]="'Albums'" [primaryKey]="'Album'" [rowEditable]="true">
            <igx-grid-toolbar></igx-grid-toolbar>
            ...
            <ng-template igxToolbarCustomContent let-grid="grid">
                <button igxButton [disabled]="!grid.transactions.canUndo" (click)="undo(grid)">Undo</button>
                <button igxButton [disabled]="!grid.transactions.canRedo" (click)="redo(grid)">Redo</button>
            </ng-template>
        </igx-row-island>
    </igx-hierarchical-grid>
</app-hierarchical-grid-with-transactions>
...
<div class="buttons-row">
    <div class="buttons-wrapper">
        <button igxButton [disabled]="!undoEnabledParent" (click)="undo(hierarchicalGrid)">Undo Parent</button>
        <button igxButton [disabled]="!redoEnabledParent" (click)="redo(hierarchicalGrid)">Redo Parent</button>
    </div>
</div>
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
    public undo() {
        /* exit edit mode and commit changes */
        this.grid.endEdit(true);
        this.grid.transactions.undo();
    }

    public redo() {
        /* exit edit mode and commit changes */
        this.grid.endEdit(true);
        this.grid.transactions.redo()
    }

    public commit() {
        this.grid.transactions.commit(this.data);
        this.toggle.close();
    }
    ...
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
    public undo() {
        /* exit edit mode and commit changes */
        this.treeGrid.endEdit(true);
        this.treeGrid.transactions.undo();
    }

    public redo() {
        /* exit edit mode and commit changes */
        this.treeGrid.endEdit(true);
        this.treeGrid.transactions.redo();
    }

    public commit() {
        this.treeGrid.transactions.commit(this.data);
        this.dialog.close();
    }
    ...
}
```
}
@@if (igxName === 'IgxHierarchicalGrid') {
The following code demonstrates the usage of the [`transactions`]({environment:angularApiUrl}/classes/igxtransactionservice.html#) API - undo, redo, commit.

```typescript
...
export class HierarchicalGridBatchEditingSampleComponent {
    ...
    public undo(grid: IgxHierarchicalGridComponent) {
        /* exit edit mode and commit changes */
        grid.endEdit(true);
        grid.transactions.undo();
    }

    public redo(grid: IgxHierarchicalGridComponent) {
        /* exit edit mode and commit changes */
        grid.endEdit(true);
        grid.transactions.redo();
    }

    public commit() {
        this.hierarchicalGrid.transactions.commit(this.data);
        this.childGrid.hgridAPI.getChildGrids().forEach((grid) => {
            grid.transactions.commit(grid.data);
        });
        this.dialogChanges.close();
    }
}
```
}

> [!NOTE] 
> The transactions API won't handle end of edit and you'd need to do it by yourself. Otherwise, `@@igComponent` would stay in edit mode. One way to do that is by calling [`endEdit`]({environment:angularApiUrl}/classes/igxgridcomponent.html#endedit) in the respective method.

@@if (igxName === 'IgxTreeGrid') {
Deleting a parent node in `@@igComponent` has some peculiarities. If you are using a hierarchical data, the children will be deleted when deleting their parent. If you are using a flat data, you may set the desired behavior using the [`cascadeOnDelete`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#cascadeondelete) property of `@@igComponent`. This property indicates whether the child records should be deleted when their parent gets deleted (by default, it is set to `true`).
}

> [!NOTE]
> Disabling [`rowEditable`]({environment:angularApiUrl}/classes/@@igTypeDoc.html#roweditable) property will modify `@@igComponent` to create transactions on cell change and will not expose row editing overlay in the UI.

## API References

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

## Additional Resources

* [@@igComponent Overview](@@igMainTopic.md)
* [@@igComponent Editing](editing.md)
* [@@igComponent Row Editing](row-editing.md)
* [@@igComponent Row Adding](row-adding.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

* [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
* [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)