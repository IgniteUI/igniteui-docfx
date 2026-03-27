---
title: Batch Editing and Transactions in Angular Pivot Grid Grid - Infragistics
_description: Perform data manipulation without affecting the underlying data with Pivot Grid Batch Editing and Angular CRUD, using Angular Data Grid. See demos & examples!
_keywords: angular crud, ignite ui for angular, infragistics
_license: commercial
---

# Angular Pivot Grid Batch Editing and Transactions






Below is a detailed example of how is Batch Editing enabled for the Pivot Grid component.

## Angular Pivot Grid Batch Editing and Transactions Example

The following sample demonstrates a scenario, where the pivotGrid has [`batchEditing`]({environment:angularApiUrl}/classes/igxpivotgridcomponent.html#batchEditing) enabled and has row editing enabled. The latter will ensure that transaction will be added after the entire row edit is confirmed.





> [!NOTE]
> Transaction state consists of all the updated, added and deleted rows, and their last states.

## Usage

To get started import the `IgxPivotGridModule` in the **app.module.ts** file:

```typescript
// app.module.ts

...
import { IgxPivotGridModule } from 'igniteui-angular';

@NgModule({
    ...
    imports: [..., IgxPivotGridModule],
    ...
})
export class AppModule {}
```

Then, all you need to do is enable `batchEditing` from your Pivot Grid:

```html
<igx-pivot-grid [data]="data" [batchEditing]="true">
  ...
</igx-pivot-grid>
```

This will ensure a proper instance of `Transaction` service is provided for the igx-pivot-grid. The proper `TransactionService` is provided through a `TransactionFactory`. You can learn more about this internal implementation in the [transactions topic](../transaction-classes.md#transaction-factory).

After batch editing is enabled, define a `IgxPivotGrid` with bound data source and [`rowEditable`]({environment:angularApiUrl}/classes/igxpivotgridcomponent.html#rowEditable) set to true and bind:









> [!NOTE]
> The transactions API won't handle end of edit and you'd need to do it by yourself. Otherwise, `Pivot Grid` would stay in edit mode. One way to do that is by calling [`endEdit`]({environment:angularApiUrl}/classes/igxgridcomponent.html#endEdit) in the respective method.



> [!NOTE]
> Disabling [`rowEditable`]({environment:angularApiUrl}/classes/igxpivotgridcomponent.html#rowEditable) property will modify `Pivot Grid` to create transactions on cell change and will not expose row editing overlay in the UI.



## API References





## Additional Resources

- [Build CRUD operations with igxGrid](../general/how-to/how-to-perform-crud.md)
- [Pivot Grid Overview](pivot-grid.md)
- [Pivot Grid Editing](editing.md)
- [Pivot Grid Row Editing](row-editing.md)
- [Pivot Grid Row Adding](row-adding.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
