---
title: Batch Editing and Transactions in Angular Hierarchical Grid Grid - Infragistics
_description: Perform data manipulation without affecting the underlying data with Hierarchical Grid Batch Editing and Angular CRUD, using Angular Data Grid. See demos & examples!
_keywords: angular crud, ignite ui for angular, infragistics
_license: commercial
---

# Angular Hierarchical Grid Batch Editing and Transactions


The Batch Editing feature of the IgxHierarchicalGrid is based on the [`TransactionService`]({environment:angularApiUrl}/classes/igxtransactionservice.html). Follow the [`Transaction Service class hierarchy`](../transaction-classes.md) topic to see an overview of the `igxTransactionService` and details how it is implemented.





In order to use the [`HierarchicalTransactionService`]({environment:angularApiUrl}/classes/igxhierarchicaltransactionservice.html) with [`IgxHierarchicalGrid`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html), but have it accumulating separate transaction logs for each island, a service factory should be provided instead. One is exported and ready for use as [`IgxHierarchicalTransactionServiceFactory`]({environment:angularApiUrl}/index.html#igxhierarchicaltransactionservicefactory).


Below is a detailed example of how is Batch Editing enabled for the Hierarchical Grid component.

## Angular Hierarchical Grid Batch Editing and Transactions Example

The following sample demonstrates a scenario, where the hierarchicalGrid has [`batchEditing`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#batchEditing) enabled and has row editing enabled. The latter will ensure that transaction will be added after the entire row edit is confirmed.




<code-view style="height:680px"
           data-demos-base-url="{environment:demosBaseUrl}"
           iframe-src="{environment:demosBaseUrl}/hierarchical-grid/hierarchical-grid-batch-editing/" alt="Angular Hierarchical Grid Batch Editing and Transactions Example">
</code-view>

<div class="divider--half"></div>


> [!NOTE]
> Transaction state consists of all the updated, added and deleted rows, and their last states.

## Usage

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

Then, all you need to do is enable `batchEditing` from your Hierarchical Grid:

```html
<igx-hierarchical-grid [data]="data" [batchEditing]="true">
  ...
</igx-hierarchical-grid>
```

This will ensure a proper instance of `Transaction` service is provided for the igx-hierarchical-grid. The proper `TransactionService` is provided through a `TransactionFactory`. You can learn more about this internal implementation in the [transactions topic](../transaction-classes.md#transaction-factory).

After batch editing is enabled, define a `IgxHierarchicalGrid` with bound data source and [`rowEditable`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#rowEditable) set to true and bind:





```html
<igx-hierarchical-grid #hierarchicalGrid [batchEditing]="true" [data]="data" [primaryKey]="'Artist'"
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
...
<div class="buttons-row">
    <div class="buttons-wrapper">
        <button igxButton [disabled]="!undoEnabledParent" (click)="undo(hierarchicalGrid)">Undo Parent</button>
        <button igxButton [disabled]="!redoEnabledParent" (click)="redo(hierarchicalGrid)">Redo Parent</button>
    </div>
</div>
...

```






The following code demonstrates the usage of the [`transactions`]({environment:angularApiUrl}/classes/igxtransactionservice.html#) API - undo, redo, commit.

```typescript
...
export class HierarchicalGridBatchEditingSampleComponent {
    public undo(grid: any) {
        /* exit edit mode and commit changes */
        grid.endEdit(true);
        grid.transactions.undo();
    }

    public redo(grid: any) {
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



> [!NOTE]
> The transactions API won't handle end of edit and you'd need to do it by yourself. Otherwise, `Hierarchical Grid` would stay in edit mode. One way to do that is by calling [`endEdit`]({environment:angularApiUrl}/classes/igxgridcomponent.html#endEdit) in the respective method.



> [!NOTE]
> Disabling [`rowEditable`]({environment:angularApiUrl}/classes/igxhierarchicalgridcomponent.html#rowEditable) property will modify `Hierarchical Grid` to create transactions on cell change and will not expose row editing overlay in the UI.



## API References




- [igxHierarchicalTransactionServiceFactory]({environment:angularApiUrl}/index.html#igxhierarchicaltransactionservicefactory)


## Additional Resources

- [Build CRUD operations with igxGrid](../general/how-to/how-to-perform-crud.md)
- [Hierarchical Grid Overview](hierarchical-grid.md)
- [Hierarchical Grid Editing](editing.md)
- [Hierarchical Grid Row Editing](row-editing.md)
- [Hierarchical Grid Row Adding](row-adding.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
