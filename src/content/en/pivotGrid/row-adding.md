---
title: Adding Rows in Angular Pivot Grid - Ignite UI for Angular
_description: Learn how to use and customize the built-in row adding functionality with Ignite UI for Angular. CRUD capabilities and Intuitive grid row adding. See examples!
_keywords: row adding, igniteui for angular, infragistics
_license: commercial
_canonicalLink: grid/row-adding
---



# Adding Rows in Angular Pivot Grid


The Pivot Grid provides a convenient way to perform data manipulations through inline row adding and a powerful API for Angular CRUD operations. Add an [Action Strip](../action-strip.md) component with editing actions enabled in the grid's template, hover a row and use the provided button or press <kbd>ALT</kbd> + <kbd>+</kbd> to spawn the row adding UI.



## Angular Pivot Grid Row Adding Example

The following sample demonstrates how to enable native row adding in the Pivot Grid. Changing a cell value and then clicking or navigating to another cell on the same row doesn't update the row value until confirmed by using the **Done** button, or discarded by using **Cancel** button.





## Row Adding Usage

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

Then define a Pivot Grid with bound data source and [`rowEditable`]({environment:angularApiUrl}/classes/igxpivotgridcomponent.html#rowEditable) set to true and an [Action Strip](../action-strip.md) component with editing actions enabled. The [`addRow`]({environment:angularApiUrl}/classes/igxgrideditingactionscomponent.html#addRow) input controls the visibility of the button that spawns the row adding UI.





> [!NOTE]
> Setting primary key is mandatory for row adding operations.
> [!NOTE]
> Every column excluding the primary key one is editable in the row adding UI by default. If you want to disable editing for a specific column, then you have to set the [`editable`]({environment:angularApiUrl}/classes/igxcolumncomponent.html#editable) column's input to `false`.


> [!NOTE]
> The IgxGridEditingActions input controlling the visibility of the add row button may use the action strip context (which is of type [`RowType`]({environment:angularApiUrl}/classes/rowtype.html)) to fine tune which records the button shows for.



The internal [`IgxBaseTransactionService`]({environment:angularApiUrl}/classes/igxbasetransactionservice.html) is automatically provided for Pivot Grid. It holds pending cell changes until the row state is submitted or cancelled.

## Start Row Adding Programmatically

Pivot Grid allows to programmatically spawn the add row UI by using two different public methods. One that accepts a row ID for specifying the row under which the UI should spawn and another that works by index. You can use these methods to spawn the UI anywhere within the current data view. Changing the page or specifying a row that is e.g. filtered out is not supported.

Using `beginAddRowById` requires you to specify the row to use as context for the operation by its rowID (PK). The method then functions as though the end-user clicked on the add row action strip button for the specified row, spawning the UI under it. You can also make the UI spawn as the very first row in the grid by passing `null` for the first parameter.



```typescript
this.grid.beginAddRowById('ALFKI');  // spawns the add row UI under the row with PK 'ALFKI'
this.grid.beginAddRowById(null);     // spawns the add row UI as the first record
```





The `beginAddRowByIndex` method works similarly but requires you to specify the index _at_ which the UI should spawn. Allowed values range between 0 and the size of the data view - 1.

```typescript
this.grid.beginAddRowByIndex(10);   // spawns the add row UI at index 10
this.grid.beginAddRowByIndex(0);    // spawns the add row UI as the first record
```




## Positioning

- The Default position row add UI is below the row that the end user clicked the add row button for.

- The Pivot Grid scrolls to fully display the add row UI automatically.

- The overlay for the add row UI maintains its position during scrolling.

## Behavior

The add row UI has the same behavior as the row editing one as they are designed to provide a consistent editing experience to end users. Please, refer to the [Pivot Grid Row Editing](row-editing.md) topic for more information.

After a new row is added through the row adding UI, its position and/or visibility is determined by the sorting, filtering and grouping state of the Pivot Grid. In a Pivot Grid that does not have any of these states applied, it appears as the last record. A snackbar is briefly displayed containing a button the end user may use to scroll the Pivot Grid to its position if it is not in view.

## Keyboard Navigation

- <kbd>ALT</kbd> + <kbd>+</kbd> - Enters edit mode for adding a row


- <kbd>ESC</kbd> exits row adding mode without submitting any changes

- <kbd>TAB</kbd> move focus from one editable cell in the row to the next and from the right-most editable cell to the CANCEL and DONE buttons. Navigation from DONE button goes to the left-most editable cell within the currently edited row.

## Feature Integration

- Any row adding operation will stop if the data view of the Pivot Grid gets modified. Any changes made by the end user are submitted. Operations that change the data view include but are not limited to sorting, grouping, filtering, paging, etc.

- Summaries are updated after the row add operation finishes. The same is valid for the other data view dependant features such as sorting, filtering, etc.


## Customizing Row Adding Overlay

### Customizing Text

Customizing the text of the row adding overlay is possible using the `igxRowAddTextDirective`.

```html
<ng-template igxRowAddText>
 Adding Row
</ng-template>
 ```

### Customizing Buttons

Customizing the buttons of the row editing overlay is possible using the `igxRowEditActionsDirective`.
If you want the buttons to be part of the keyboard navigation, then each on of them should have the `igxRowEditTabStopDirective`.

 ```html
 <ng-template igxRowEditActions let-endRowEdit>
 <button igxButton igxRowEditTabStop (click)="endRowEdit(false)">Cancel</button>
 <button igxButton igxRowEditTabStop (click)="endRowEdit(true)">Apply</button>
</ng-template>
 ```

> [!NOTE]
> Using `igxRowEditActions` directive will change edit actions for both editing and adding overlay buttons.

## Remote scenarios

In most remote data scenarios the Primary Key assignment happens on the create server request. In this case the added records on the client will not have the final primary key value until saved on the server's data base. In that case the recommended way to handle this update in the Pivot Grid is as follows:

- If the Pivot Grid does not use transactions.

    Once the create request is successfully completed and returns the added record data, you can replace that record's id in the local data record instance.

- If the Pivot Grid uses transactions.

    Once the create request or batch update request is successfully completed and returns the added record instances (with their db generated ids), the related ADD transactions should be cleared from the transaction log using the [clear]({environment:angularApiUrl}/interfaces/transactionservice.html#clear) API method. This is necessary because the local transaction will have a generated id field, which may differ than the one created in the data base, so they should be cleared. You can then add the record(s) passed in the response to the local data instance.

This will ensure that the remotely generated ids are always reflected in the local data, and subsequent update/delete operations target the correct record ids.

## Styling

The row adding UI comprises the buttons in the `IgxActionStrip` editing actions, the editing editors and overlay, as well as the snackbar which allows end users to scroll to the newly added row. To style these components you may refer to these comprehensive guides in their respective topics:

- [Pivot Grid Row Editing](row-editing.md#styling)
- [IgxSnackbar](../snackbar.md#styling)
- [IgxActionStrip](../action-strip.md#styling)

## API References

- [rowEditable]({environment:angularApiUrl}/classes/igxpivotgridcomponent.html#rowEditable)
- [onRowEditEnter]({environment:angularApiUrl}/classes/igxpivotgridcomponent.html#onRowEditEnter)
- [onRowEdit]({environment:angularApiUrl}/classes/igxpivotgridcomponent.html#onRowEdit)
- [rowEditDone]({environment:angularApiUrl}/classes/igxpivotgridcomponent.html#rowEditDone)
- [onRowEditCancel]({environment:angularApiUrl}/classes/igxpivotgridcomponent.html#onRowEditCancel)
- [endEdit]({environment:angularApiUrl}/classes/igxpivotgridcomponent.html#endEdit)
- [primaryKey]({environment:angularApiUrl}/classes/igxpivotgridcomponent.html#primaryKey)
- [IgxPivotGridComponent]({environment:angularApiUrl}/classes/igxpivotgridcomponent.html)
- [IgxActionStripComponent]({environment:angularApiUrl}/classes/igxactionstripcomponent.html)
- [IgxGridEditingActionsComponent]({environment:angularApiUrl}/classes/igxgrideditingactionscomponent.html)

## Additional Resources

<div class="divider--half"></div>

- [Pivot Grid Overview](pivot-grid.md)
- [Pivot Grid Editing](editing.md)
- [Pivot Grid Transactions](batch-editing.md)

<div class="divider--half"></div>
Our community is active and always welcoming to new ideas.

- [Ignite UI for Angular **Forums**](https://www.infragistics.com/community/forums/f/ignite-ui-for-angular)
- [Ignite UI for Angular **GitHub**](https://github.com/IgniteUI/igniteui-angular)
