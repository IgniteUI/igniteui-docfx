---
title: Batch Editing and Transactions in Angular Grid Grid - Infragistics
_description: Perform data manipulation without affecting the underlying data with Grid Batch Editing and Angular CRUD, using Angular Data Grid. See demos & examples!
_keywords: angular crud, ignite ui for angular, infragistics
_license: commercial
---

# Angular Grid Batch Editing and Transactions


The Batch Editing feature of the IgxGrid is based on the [`TransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html). Follow the [`Transaction Service class hierarchy`](../transaction-classes.md) topic to see an overview of the `igxTransactionService` and details how it is implemented.





Below is a detailed example of how is Batch Editing enabled for the Grid component.

## Angular Grid Batch Editing and Transactions Example

The following sample demonstrates a scenario, where the grid has [`batchEditing`]({environment:angularApiUrl}/classes/igxgridcomponent.html#batchEditing) enabled and has row editing enabled. The latter will ensure that transaction will be added after the entire row edit is confirmed.


<code-view style="height:650px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/grid-batch-editing/" alt="Angular Grid Batch Editing and Transactions Example">
</code-view>

<div class="divider--half"></div>




> [!NOTE]
> Transaction state consists of all the updated, added and deleted rows, and their last states.

## Usage

To get started import the `IgxGridModule` in the **app.module.ts** file:

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

Then, all you need to do is enable `batchEditing` from your Grid:

```html
<igx-grid [data]="data" [batchEditing]="true">
  ...
</igx-grid>
```

This will ensure a proper instance of `Transaction` service is provided for the igx-grid. The proper `TransactionService` is provided through a `TransactionFactory`. You can learn more about this internal implementation in the [transactions topic](../transaction-classes.md#transaction-factory).

After batch editing is enabled, define a `IgxGrid` with bound data source and [`rowEditable`]({environment:angularApiUrl}/classes/igxgridcomponent.html#rowEditable) set to true and bind:



```html
<igx-grid #grid [batchEditing]="true" [data]="data" [primaryKey]="'ProductID'" width="100%" height="500px"
    [rowEditable]="true">
    ...
</igx-grid>
...
<button igxButton [disabled]="!grid.transactions.canUndo" (click)="undo()">Undo</button>
<button igxButton [disabled]="!grid.transactions.canRedo" (click)="redo()">Redo</button>
<button igxButton [disabled]="grid.transactions.getAggregatedChanges(false).length < 1"
    (click)="openCommitDialog(dialogGrid)">Commit</button>
...

```






The following code demonstrates the usage of the [`transactions`]({environment:angularApiUrl}/classes/igxtransactionservice.html#) API - undo, redo, commit.

```typescript
export class GridBatchEditingSampleComponent {
    @ViewChild('grid', { read: IgxGridComponent }) public gridRowEditTransaction: IgxGridComponent;

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
}
```





> [!NOTE]
> The transactions API won't handle end of edit and you'd need to do it by yourself. Otherwise, `Grid` would stay in edit mode. One way to do that is by calling [`endEdit`]({environment:angularApiUrl}/classes/igxgridcomponent.html#endEdit) in the respective method.



> [!NOTE]
> Disabling [`rowEditable`]({environment:angularApiUrl}/classes/igxgridcomponent.html#rowEditable) property will modify `Grid` to create transactions on cell change and will not expose row editing overlay in the UI.



## Remote Paging with Batch Editing Demo

[Check out the full demo configuration](remote-data-operations.md#remote-paging-with-batch-editing)

<code-view style="height:620px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/grid/remote-paging-batch-editing/" >
</code-view>



## API References



- [transactions]({environment:angularApiUrl}/classes/igxgridcomponent.html#transactions)
- [igxTransactionService]({environment:angularApiUrl}/classes/igxtransactionservice.html)




## Additional Resources

- [Build CRUD operations with igxGrid](../general/how-to/how-to-perform-crud.md)
- [Grid Overview](grid.md)
- [Grid Editing](editing.md)
- [Grid Row Editing](row-editing.md)
- [Grid Row Adding](row-adding.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
