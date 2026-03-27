---
title: Batch Editing and Transactions in Angular Tree Grid Grid - Infragistics
_description: Perform data manipulation without affecting the underlying data with Tree Grid Batch Editing and Angular CRUD, using Angular Data Grid. See demos & examples!
_keywords: angular crud, ignite ui for angular, infragistics
_license: commercial
---

# Angular Tree Grid Batch Editing and Transactions




The Batch Editing feature of the IgxTreeGrid is based on the [`HierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html). Follow the [`Transaction Service class hierarchy`](../transaction-classes.md) topic to see an overview of the `igxHierarchicalTransactionService` and details how it is implemented.



Below is a detailed example of how is Batch Editing enabled for the Tree Grid component.

## Angular Tree Grid Batch Editing and Transactions Example

The following sample demonstrates a scenario, where the treeGrid has [`batchEditing`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#batchEditing) enabled and has row editing enabled. The latter will ensure that transaction will be added after the entire row edit is confirmed.



<code-view style="height:600px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/tree-grid/treegrid-batchediting/" alt="Angular Tree Grid Batch Editing and Transactions Example">
</code-view>

<div class="divider--half"></div>



> [!NOTE]
> Transaction state consists of all the updated, added and deleted rows, and their last states.

## Usage

To get started import the `IgxTreeGridModule` in the **app.module.ts** file:

```typescript
// app.module.ts

...
import { IgxTreeGridModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxTreeGridModule],
    ...
})
export class AppModule {}
```

Then, all you need to do is enable `batchEditing` from your Tree Grid:

```html
<igx-tree-grid [data]="data" [batchEditing]="true">
  ...
</igx-tree-grid>
```

This will ensure a proper instance of `Transaction` service is provided for the igx-tree-grid. The proper `TransactionService` is provided through a `TransactionFactory`. You can learn more about this internal implementation in the [transactions topic](../transaction-classes.md#transaction-factory).

After batch editing is enabled, define a `IgxTreeGrid` with bound data source and [`rowEditable`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#rowEditable) set to true and bind:




```html
<igx-tree-grid #treeGrid [batchEditing]="true" [data]="data" primaryKey="employeeID" foreignKey="PID"
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






The following code demonstrates the usage of the [`HierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html) API - undo, redo, commit.

```typescript
export class TreeGridBatchEditingSampleComponent {
    @ViewChild('treeGrid', { read: IgxTreeGridComponent }) public treeGrid: IgxTreeGridComponent;

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
}
```




> [!NOTE]
> The transactions API won't handle end of edit and you'd need to do it by yourself. Otherwise, `Tree Grid` would stay in edit mode. One way to do that is by calling [`endEdit`]({environment:angularApiUrl}/classes/igxgridcomponent.html#endEdit) in the respective method.


Deleting a parent node in `Tree Grid` has some peculiarities. If you are using a hierarchical data, the children will be deleted when deleting their parent. If you are using a flat data, you may set the desired behavior using the [`cascadeOnDelete`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#cascadeOnDelete) property of `Tree Grid`. This property indicates whether the child records should be deleted when their parent gets deleted (by default, it is set to `true`).


> [!NOTE]
> Disabling [`rowEditable`]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#rowEditable) property will modify `Tree Grid` to create transactions on cell change and will not expose row editing overlay in the UI.



## API References



- [HierarchicalTransactionService]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html)
- [rowEditable]({environment:angularApiUrl}/classes/igxtreegridcomponent.html#rowEditable)
- [IgxTreeGridComponent]({environment:angularApiUrl}/classes/igxtreegridcomponent.html)
- [IgxGridComponent]({environment:angularApiUrl}/classes/igxgridcomponent.html)



## Additional Resources

- [Build CRUD operations with igxGrid](../general/how-to/how-to-perform-crud.md)
- [Tree Grid Overview](tree-grid.md)
- [Tree Grid Editing](editing.md)
- [Tree Grid Row Editing](row-editing.md)
- [Tree Grid Row Adding](row-adding.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
